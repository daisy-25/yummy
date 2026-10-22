import { useState } from 'react'
import { Icon } from '../components/Icon.tsx'
import { MENU_GROUPS, menuIds, menuOf, recipesOf, recordKey, type MenuId } from '../data/index.ts'
import { DOW, mondayOf, weekId } from '../lib/date.ts'
import { scrollToTop } from '../lib/dom.ts'
import { PrepList } from './recipe/PrepList.tsx'
import { RecipeDetail } from './recipe/RecipeDetail.tsx'
import type { ScreenProps } from './screen.ts'
import './RecipeScreen.css'

type Mode = 'dinner' | 'prep'

export function RecipeScreen(props: ScreenProps) {
  const { data, menuId } = props
  // 식단 탭에서 "레시피 보기"로 왔으면 그 메뉴를 바로 열어요
  const [open, setOpen] = useState<MenuId | undefined>(menuId)
  const [mode, setMode] = useState<Mode>(menuId && menuOf(menuId).prepOnly ? 'prep' : 'dinner')
  const [query, setQuery] = useState('')
  const [today] = useState(() => new Date())

  const openMenu = (id: MenuId | undefined) => {
    setOpen(id)
    scrollToTop()
  }

  if (open) return <RecipeDetail {...props} menuId={open} onBack={() => openMenu(undefined)} />

  const week = data.weeks[weekId(mondayOf(today))]
  const dinner = menuIds.filter(id => !menuOf(id).prepOnly)
  const q = query.replace(/\s/g, '')
  const found = q ? dinner.filter(id => menuOf(id).name.replace(/\s/g, '').includes(q)) : []

  /** 목록 한 줄 */
  const Row = ({ id, day }: { id: MenuId; day?: number }) => {
    const m = menuOf(id)
    const videos = recipesOf(id).length
    const notes = data.notes[recordKey(id)]?.length ?? 0
    const tags = day !== undefined
      ? [videos ? `영상 ${videos}개` : '영상 준비 중', `${m.minutes}분`, notes ? `메모 ${notes}` : ''].filter(Boolean)
      : [m.method, `${m.minutes}분`, m.level]
    return (
      <button className="r-row" onClick={() => openMenu(id)}>
        {day !== undefined && <span className="dw"><b>{DOW[day]}</b></span>}
        <span className="bd">
          <span className="nm">
            {m.name}
            {data.hearts[recordKey(id)] && <span className="heart-s"><Icon name="heart" size={15} /></span>}
          </span>
          <span className="tg">{tags.join(' · ')}</span>
        </span>
        {data.memorized.includes(id) && <span className="badge">안 보고 해요</span>}
      </button>
    )
  }

  return (
    <div className="recipe">
      <div className="r-top">
        <div className="seg" role="tablist">
          <button role="tab" aria-selected={mode === 'dinner'} className={mode === 'dinner' ? 'on' : ''} onClick={() => setMode('dinner')}>저녁 메뉴</button>
          <button role="tab" aria-selected={mode === 'prep'} className={mode === 'prep' ? 'on' : ''} onClick={() => setMode('prep')}>냉동 밀프랩</button>
        </div>
      </div>

      {mode === 'prep' ? (
        <PrepList {...props} onOpen={openMenu} />
      ) : (
        <>
          <label className="search">
            <Icon name="search" />
            <input value={query} placeholder="메뉴 찾기" onChange={e => setQuery(e.target.value)} />
            {query && <button aria-label="지우기" onClick={() => setQuery('')}><Icon name="close" size={16} /></button>}
          </label>

          {q ? (
            <>
              <p className="grp">찾은 메뉴<i>{found.length}개</i></p>
              {found.map(id => <Row key={id} id={id} />)}
              {!found.length && <p className="r-empty">"{query}" 메뉴가 도감에 없어요</p>}
            </>
          ) : (
            <>
              {week?.days.some(d => d.menuId) && (
                <>
                  <p className="grp">이번 주</p>
                  {week.days.map((d, i) => d.menuId && <Row key={i} id={d.menuId} day={i} />)}
                </>
              )}
              <p className="grp">전체 메뉴<i>{dinner.length}개</i></p>
              {MENU_GROUPS.map(g => (
                <div key={g.label}>
                  <p className="sub-grp">{g.label}</p>
                  {dinner.filter(id => g.match(menuOf(id))).map(id => <Row key={id} id={id} />)}
                </div>
              ))}
            </>
          )}
        </>
      )}
    </div>
  )
}
