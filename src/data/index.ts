// 앱 데이터를 한곳에서 꺼내 쓰는 입구.
import type { Ingredient, Menu, Recipe } from '../types.ts'
import { ingredients, type IngredientId } from './ingredients.ts'
import { menus, type MenuId } from './menus.ts'

export { ingredients, menus }
export { prepVideos } from './prepVideos.ts'
export type { IngredientId } from './ingredients.ts'
export type { MenuId }

// 도감을 "모양(Menu, Ingredient)" 기준으로 꺼내는 도우미. 칸이 선택(?)인 것도 편하게 읽혀요
export const menuIds = Object.keys(menus) as MenuId[]
export const menuOf = (id: MenuId): Menu => menus[id]
export const ingredientOf = (id: IngredientId): Ingredient => ingredients[id]

// recipes/ 폴더의 파일을 자동으로 모아요. 새 메뉴 파일을 넣기만 하면 목록에 따로 적을 필요가 없어요.
const files = import.meta.glob<{ default: Recipe[] }>('./recipes/*.ts', { eager: true })
export const recipes: Recipe[] = Object.values(files).flatMap(f => f.default)

export const recipesOf = (menuId: MenuId) => recipes.filter(r => r.menuId === menuId)
export const recipeById = (id: string) => recipes.find(r => r.id === id)

/** 타입 검사로 못 잡는 연결 문제를 찾아요. 문제 목록을 돌려줘요 (없으면 빈 배열) */
export function checkData(): string[] {
  const problems: string[] = []
  const seen = new Set<string>()
  for (const r of recipes) {
    if (seen.has(r.id)) problems.push(`레시피 id 중복: ${r.id}`)
    seen.add(r.id)
  }
  for (const [id, menu] of Object.entries(menus) as [MenuId, (typeof menus)[MenuId]][]) {
    const list = recipesOf(id)
    if (list.length > 5) problems.push(`${menu.name}: 영상이 5개를 넘어요 (${list.length}개)`)
    if ('mainRecipe' in menu && menu.mainRecipe) {
      const main = recipeById(menu.mainRecipe)
      if (!main) problems.push(`${menu.name}: 대표 레시피 ${menu.mainRecipe}가 없어요`)
      else if (main.menuId !== id) problems.push(`${menu.name}: 대표 레시피가 다른 메뉴(${main.menuId}) 거예요`)
      else if (!main.steps?.length) problems.push(`${menu.name}: 대표 레시피에 단계가 없어요`)
    }
    const m: Menu = menu
    if (m.prepOnly && !m.freeze) problems.push(`${m.name}: 밀프랩 전용인데 얼리는 법(freeze)이 없어요`)
  }
  return problems
}

if (import.meta.env.DEV) {
  const problems = checkData()
  if (problems.length) console.warn('[데이터 점검]\n' + problems.join('\n'))
}
