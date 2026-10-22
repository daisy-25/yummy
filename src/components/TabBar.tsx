import { Icon, type IconName } from './Icon.tsx'
import './TabBar.css'

export type Tab = 'plan' | 'recipe' | 'shop' | 'saved'

const TABS: { id: Tab; label: string; icon: IconName }[] = [
  { id: 'plan', label: '식단', icon: 'calendar' },
  { id: 'recipe', label: '레시피', icon: 'book' },
  { id: 'shop', label: '장보기', icon: 'bag' },
  { id: 'saved', label: '찜', icon: 'heart' },
]

export function TabBar({ current, onChange }: { current: Tab; onChange: (tab: Tab) => void }) {
  return (
    <nav className="tabbar">
      {TABS.map(t => (
        <button key={t.id} className={t.id === current ? 'on' : ''} onClick={() => onChange(t.id)}>
          <Icon name={t.icon} size={24} />
          {t.label}
        </button>
      ))}
    </nav>
  )
}
