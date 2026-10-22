import type { Tab } from '../components/TabBar.tsx'
import type { MenuId } from '../data/index.ts'
import type { Update } from '../lib/storage.ts'
import type { UserData } from '../types.ts'

/** 모든 탭 화면이 받는 것 */
export type ScreenProps = {
  data: UserData
  update: Update
  /** 다른 탭으로 이동. 레시피 탭이면 어떤 메뉴를 열지 같이 넘겨요 */
  go: (tab: Tab, menuId?: MenuId) => void
  /** 다른 탭에서 넘겨준 메뉴 */
  menuId?: MenuId
}
