// 레시피 탭 > 냉동 밀프랩
import { useEffect, useState } from 'react'
import { Icon } from '../../components/Icon.tsx'
import { menuIds, menuOf, prepVideos, type MenuId } from '../../data/index.ts'
import { weekId, weekLabel } from '../../lib/date.ts'
import { fmtDuration, fmtViews, youtubeUrl } from '../../lib/format.ts'
import { shoppingMonday } from '../../lib/shopping.ts'
import { emptyWeek } from '../../lib/storage.ts'
import type { ScreenProps } from '../screen.ts'

export function PrepList({ data, update, go, onOpen }: ScreenProps & { onOpen: (id: MenuId) => void }) {
  const [today] = useState(() => new Date())
  const [toast, setToast] = useState<string>()

  // 담는 주는 장보기 탭이 먼저 보여주는 주와 같아요
  const monday = shoppingMonday(data, today)
  const wid = weekId(monday)
  const added = data.weeks[wid]?.preps ?? []

  const toggle = (id: MenuId) => {
    const has = added.includes(id)
    update(d => {
      const w = d.weeks[wid] ?? emptyWeek(monday)
      const preps = w.preps ?? []
      return { ...d, weeks: { ...d.weeks, [wid]: { ...w, preps: has ? preps.filter(x => x !== id) : [...preps, id] } } }
    })
    setToast(has ? `${menuOf(id).name} · 장보기에서 뺐어요` : `${menuOf(id).name} · 재료를 장보기에 담았어요`)
  }

  // 알림은 3초 뒤 사라져요
  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(undefined), 3000)
    return () => clearTimeout(t)
  }, [toast])

  const preps = menuIds.filter(id => menuOf(id).freeze)
  const only = preps.filter(id => menuOf(id).prepOnly)
  const fromDinner = preps.filter(id => !menuOf(id).prepOnly)

  const Row = ({ id }: { id: MenuId }) => {
    const m = menuOf(id)
    const on = added.includes(id)
    return (
      <div className="prep">
        <button className="prep-main" onClick={() => onOpen(id)}>
          <span className="nm">{m.name}</span>
          <span className="how"><b>{m.freeze!.how}</b> {m.freeze!.packs} · {m.freeze!.reheat}</span>
        </button>
        <button className={`chip ${on ? 'on' : ''}`} aria-pressed={on} onClick={() => toggle(id)}>
          <Icon name={on ? 'check' : 'plus'} size={14} />
          {on ? '담았어요' : '장보기에 담기'}
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="pad prep-head">
        <h1 className="h1">얼려두고<br />꺼내 먹기</h1>
        <p>주말에 한 번 만들어 두면 바쁜 날 저녁이나 도시락이 돼요. 냉동은 한 달 안에 먹어요.</p>
      </div>

      {added.length > 0 && (
        <button className="prep-added" onClick={() => go('shop')}>
          <span>{weekLabel(monday)} 장보기에 <b>밀프랩 {added.length}개</b> 담겨 있어요</span>
          <Icon name="arrow" size={18} />
        </button>
      )}

      <p className="grp">밀프랩 전용</p>
      {only.map(id => <Row key={id} id={id} />)}

      <p className="grp">저녁 메뉴 중 얼려도 되는 것</p>
      {fromDinner.map(id => <Row key={id} id={id} />)}

      <p className="grp">한 번에 여러 개 만드는 영상</p>
      {prepVideos.map(v => (
        <a key={v.youtubeId} className="video-row" href={youtubeUrl(v.youtubeId, v.isShort)} target="_blank" rel="noreferrer">
          <span className="bd">
            <span className="c">{v.channel}</span>
            <span className="s">조회수 {fmtViews(v.views)} · {fmtDuration(v.seconds)} · {v.title}</span>
          </span>
          <Icon name="external" size={18} />
        </a>
      ))}

      {toast && (
        <div className="toast" role="status">
          <span>{toast}</span>
          {toast.includes('담았어요') && <button onClick={() => go('shop')}>장보기 보기</button>}
        </div>
      )}
    </>
  )
}
