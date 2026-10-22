import { menuOf } from '../data/index.ts'
import type { ScreenProps } from './screen.ts'

export function RecipeScreen({ menuId }: ScreenProps) {
  return (
    <section className="placeholder">
      <h1>{menuId ? menuOf(menuId).name : '레시피'}</h1>
      <p>4단계에서 만들 화면이에요.</p>
    </section>
  )
}
