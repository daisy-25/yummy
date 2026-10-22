// 장보기 목록 만들기 (SPEC 3-3). 목록은 저장하지 않고 언제나 "식단 + 메뉴 재료 + 재료 사전"으로 새로 계산해요.
import { ingredientOf, menuOf, type IngredientId, type MenuId } from '../data/index.ts'
import { SECTIONS, type Section, type WeekPlan } from '../types.ts'

/** 장보기 한 줄 (같은 재료는 한 줄로 합쳐요) */
export type ShopLine = {
  id: IngredientId
  name: string
  section: Section
  /** 합친 양 (예: 양파 2½개) */
  amount: string
  /** 쓰는 메뉴 이름들 */
  from: string[]
  /** 모든 메뉴에서 "없어도 됨"인 재료 */
  optional: boolean
  /** 집에 늘 있는 재료 */
  staple: boolean
}

/** 이번 주 장보기에 들어가는 메뉴: 요일 메뉴 + 이번 주 밀프랩 */
export const shopMenus = (week: WeekPlan): MenuId[] => [
  ...week.days.flatMap(d => (d.menuId ? [d.menuId] : [])),
  ...(week.preps ?? []),
]

export function buildList(week: WeekPlan): ShopLine[] {
  const map = new Map<IngredientId, { amounts: string[]; from: string[]; optional: boolean }>()
  for (const menuId of shopMenus(week)) {
    const menu = menuOf(menuId)
    for (const item of menu.ingredients) {
      const line = map.get(item.id) ?? { amounts: [], from: [], optional: true }
      line.amounts.push(item.amount)
      if (!line.from.includes(menu.name)) line.from.push(menu.name)
      if (!item.optional) line.optional = false
      map.set(item.id, line)
    }
  }
  const lines = [...map].map(([id, l]): ShopLine => {
    const ing = ingredientOf(id)
    return { id, name: ing.name, section: ing.section, amount: sumAmounts(l.amounts), from: l.from, optional: l.optional, staple: !!ing.staple }
  })
  return lines.sort((a, b) => SECTIONS.indexOf(a.section) - SECTIONS.indexOf(b.section))
}

/* ───── 양 합치기: "1/2개" + "1개" → "1½개". 단위가 다르면 "300g + 1팩" ───── */

function parseAmount(text: string): { n: number; unit: string } | null {
  const m = text.trim().match(/^(\d+\/\d+|\d+(?:\.\d+)?)\s*(.*)$/)
  if (!m) return null
  const [num, unit] = [m[1], m[2].trim()]
  const n = num.includes('/') ? Number(num.split('/')[0]) / Number(num.split('/')[1]) : Number(num)
  return { n, unit }
}

const FRACTIONS: [number, string][] = [[0.25, '¼'], [1 / 3, '⅓'], [0.5, '½'], [2 / 3, '⅔'], [0.75, '¾']]

function formatNumber(n: number): string {
  const whole = Math.floor(n + 1e-9)
  const rest = n - whole
  if (rest < 0.01) return String(whole)
  const frac = FRACTIONS.find(([v]) => Math.abs(v - rest) < 0.02)
  if (frac) return `${whole || ''}${frac[1]}`
  return String(Math.round(n * 10) / 10)
}

export function sumAmounts(amounts: string[]): string {
  const totals = new Map<string, number>()
  const words: string[] = []
  for (const a of amounts) {
    const p = parseAmount(a)
    if (p) totals.set(p.unit, (totals.get(p.unit) ?? 0) + p.n)
    else if (!words.includes(a)) words.push(a)
  }
  // 숫자로 된 양이 있으면 "조금", "넉넉히"는 생략
  if (totals.size) return [...totals].map(([unit, n]) => formatNumber(n) + unit).join(' + ')
  return words.join(' · ')
}
