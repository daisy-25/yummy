import { useState } from 'react'
import { TabBar, type Tab } from './components/TabBar.tsx'
import type { MenuId } from './data/index.ts'
import { useUserData } from './lib/storage.ts'
import type { ScreenProps } from './screens/screen.ts'
import { PlanScreen } from './screens/PlanScreen.tsx'
import { RecipeScreen } from './screens/RecipeScreen.tsx'
import { ShopScreen } from './screens/ShopScreen.tsx'
import { SavedScreen } from './screens/SavedScreen.tsx'

const SCREENS: Record<Tab, (props: ScreenProps) => React.JSX.Element> = {
  plan: PlanScreen,
  recipe: RecipeScreen,
  shop: ShopScreen,
  saved: SavedScreen,
}

export default function App() {
  const [tab, setTab] = useState<Tab>('plan')
  const [menuId, setMenuId] = useState<MenuId>()
  const [data, update] = useUserData()
  const Screen = SCREENS[tab]

  const go = (next: Tab, id?: MenuId) => {
    setTab(next)
    setMenuId(id)
    window.scrollTo(0, 0)
  }

  return (
    <div className="app">
      <div className="scroll">
        <Screen data={data} update={update} go={go} menuId={menuId} />
      </div>
      <TabBar current={tab} onChange={t => go(t)} />
    </div>
  )
}
