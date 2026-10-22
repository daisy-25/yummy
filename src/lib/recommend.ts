// 추천 규칙 (SPEC 4장). AI가 아니라 규칙 + 점수 + 약간의 운으로 뽑아요.
import { ingredientOf, menuIds, menuOf, recipeById, type IngredientId, type MenuId } from '../data/index.ts'
import type { DayPlan, Menu, UserData, WeekPlan } from '../types.ts'
import { addDays, parseKey, toKey } from './date.ts'

/** 주재료 돌리기용 묶음 */
type Bucket = '돼지' | '닭' | '소·생선' | '두부·채소' | '남은 재료'

const bucketOf = (m: Menu): Bucket =>
  m.protein === '소' || m.protein === '생선' ? '소·생선'
    : m.protein === '두부·계란' || m.protein === '채소' ? '두부·채소'
      : m.protein

/** 한 주에 최대 몇 번 */
const CAP: Record<Bucket, number> = { 돼지: 3, 닭: 2, '소·생선': 1, '두부·채소': 1, '남은 재료': 1 }
/** 이만큼은 나오게 점수를 더 줘요 */
const MIN: Record<Bucket, number> = { 돼지: 2, 닭: 1, '소·생선': 1, '두부·채소': 1, '남은 재료': 0 }

export const SUNDAY_DEFAULT: MenuId = 'fridge-fried-rice'
const EVERYWHERE = new Set<IngredientId>(['onion', 'green-onion', 'egg'])
/** 한 주에 도시락이 생기는 날 수 */
const LUNCHBOX_TARGET = 3

type Plan = (MenuId | undefined)[]

/** 추천에 필요한 기록을 미리 정리해 둔 것 */
type Context = {
  recent: Set<MenuId>
  hearted: Set<MenuId>
  lastCooked: Map<MenuId, string>
  longAgo: string
}

const dateOf = (week: WeekPlan, i: number) => toKey(addDays(parseKey(week.start), i))

function makeContext(data: UserData, weekStart: string): Context {
  const start = parseKey(weekStart)
  const from = toKey(addDays(start, -14))

  // 최근 14일 동안 해먹었거나 식단에 있던 메뉴
  const recent = new Set<MenuId>()
  for (const c of data.cooked) if (c.date >= from && c.date < weekStart) recent.add(c.menuId)
  for (const w of Object.values(data.weeks)) {
    w.days.forEach((d, i) => {
      const date = dateOf(w, i)
      if (d.menuId && date >= from && date < weekStart) recent.add(d.menuId)
    })
  }
  recent.delete(SUNDAY_DEFAULT)

  const hearted = new Set<MenuId>()
  for (const recipeId of Object.keys(data.hearts)) {
    const r = recipeById(recipeId)
    if (r) hearted.add(r.menuId)
  }

  const lastCooked = new Map<MenuId, string>()
  for (const c of data.cooked) {
    const prev = lastCooked.get(c.menuId)
    if (!prev || c.date > prev) lastCooked.set(c.menuId, c.date)
  }

  return { recent, hearted, lastCooked, longAgo: toKey(addDays(start, -30)) }
}

const countBucket = (ids: MenuId[], b: Bucket) => ids.filter(id => bucketOf(menuOf(id)) === b).length

function score(id: MenuId, others: MenuId[], ctx: Context): number {
  const m = menuOf(id)
  // 이번 주 다른 메뉴와 겹치는 재료 (양배추 반 통, 대파 반 단을 다 쓰게)
  const used = new Set(others.flatMap(o => menuOf(o).ingredients.map(x => x.id)))
  // 양파 · 대파 · 계란은 거의 모든 메뉴에 들어가서 겹쳐도 점수를 안 줘요
  const overlap = m.ingredients.filter(x => !ingredientOf(x.id).staple && !EVERYWHERE.has(x.id) && used.has(x.id)).length

  let s = Math.min(overlap, 2) * 0.75 + Math.random() * 2.5
  if (ctx.hearted.has(id)) s += 2
  if (m.lunchbox) s += 0.5
  const last = ctx.lastCooked.get(id)
  if (!last || last < ctx.longAgo) s += 0.5
  if (countBucket(others, bucketOf(m)) < MIN[bucketOf(m)]) s += 1.5
  return s
}

/**
 * i번째 날에 넣을 메뉴를 골라요.
 * 후보가 없으면 규칙을 하나씩 풀어요: 주재료 횟수 → 조리법 연속 → 최근 14일 → 같은 주 중복
 */
function pickFor(i: number, plan: Plan, ctx: Context, exclude?: MenuId): MenuId | undefined {
  const others = plan.filter((m, j): m is MenuId => j !== i && m !== undefined)

  for (let relax = 0; relax <= 4; relax++) {
    const candidates = menuIds.filter(id => {
      const m = menuOf(id)
      if (m.prepOnly || id === exclude) return false
      if (relax < 4 && others.includes(id)) return false
      if (relax < 3 && ctx.recent.has(id)) return false
      if (relax < 2) {
        for (const j of [i - 1, i + 1]) {
          const near = plan[j]
          if (near && menuOf(near).method === m.method) return false
        }
      }
      if (relax < 1) {
        if (countBucket(others, bucketOf(m)) >= CAP[bucketOf(m)]) return false
        if (m.special && others.some(o => menuOf(o).special)) return false
      }
      return true
    })
    if (candidates.length) {
      return candidates
        .map(id => ({ id, s: score(id, others, ctx) }))
        .reduce((a, b) => (b.s > a.s ? b : a)).id
    }
  }
  return undefined
}

/** 고정 · 글 메모 · 해먹은 날은 추천이 건드리지 않아요 */
const isKept = (data: UserData, week: WeekPlan, i: number) => {
  const d = week.days[i]
  return !!(d.locked || d.note || data.cooked.some(c => c.date === dateOf(week, i)))
}

/** 추천받기: 지키는 날을 빼고 7일을 채워요 */
export function recommendWeek(data: UserData, week: WeekPlan): DayPlan[] {
  const ctx = makeContext(data, week.start)
  const kept = week.days.map((_, i) => isKept(data, week, i))
  const plan: Plan = week.days.map((d, i) => (kept[i] ? d.menuId : undefined))

  if (!kept[6]) plan[6] = SUNDAY_DEFAULT
  for (let i = 0; i < 6; i++) if (!kept[i]) plan[i] = pickFor(i, plan, ctx)

  // 도시락: 월~목에 만든 걸 다음 날 점심으로 (주 3번 정도)
  let boxes = week.days.filter((d, i) => kept[i] && d.cookExtra).length
  return week.days.map((d, i) => {
    if (kept[i]) return d
    const id = plan[i]
    const extra = i <= 3 && id !== undefined && menuOf(id).lunchbox && boxes < LUNCHBOX_TARGET
    if (extra) boxes++
    return extra ? { menuId: id, cookExtra: true } : { menuId: id }
  })
}

/** 다시 뽑기: 그날만 규칙을 지키는 다른 메뉴로 */
export function rerollDay(data: UserData, week: WeekPlan, i: number): DayPlan {
  const ctx = makeContext(data, week.start)
  const day = week.days[i]
  const plan: Plan = week.days.map(d => d.menuId)
  const id = pickFor(i, plan, ctx, day.menuId)
  if (!id) return day
  return { menuId: id, cookExtra: day.cookExtra && menuOf(id).lunchbox ? true : undefined }
}
