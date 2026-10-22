import { useState } from 'react'
import { Icon } from '../components/Icon.tsx'
import type { IngredientId } from '../data/index.ts'
import { addDays, dowIndex, mondayOf, weekId, weekLabel, weekRange } from '../lib/date.ts'
import { buildList, shopMenus, type ShopLine } from '../lib/shopping.ts'
import { emptyWeek } from '../lib/storage.ts'
import { SECTIONS, type UserData } from '../types.ts'
import type { ScreenProps } from './screen.ts'
import './ShopScreen.css'

type Which = 'this' | 'next'

export function ShopScreen({ data, update, go }: ScreenProps) {
  const [today] = useState(() => new Date())
  const thisMonday = mondayOf(today)
  const nextMonday = addDays(thisMonday, 7)
  // 주말에 다음 주 식단이 있으면 다음 주 장보기부터 보여줘요
  const [which, setWhich] = useState<Which>(() =>
    dowIndex(today) >= 5 && data.weeks[weekId(nextMonday)]?.days.some(d => d.menuId) ? 'next' : 'this')
  const [showStaples, setShowStaples] = useState(false)
  const [draft, setDraft] = useState('')

  const monday = which === 'this' ? thisMonday : nextMonday
  const wid = weekId(monday)
  const week = data.weeks[wid] ?? emptyWeek(monday)
  const lines = buildList(week)
  const checks = new Set(data.shopChecks[wid] ?? [])
  const extras = data.extraItems[wid] ?? []
  const out = new Set(data.stapleOut)

  // 집에 늘 있는 재료는 떨어졌거나 이번 주에 산 것만 목록에, 나머지는 아래에 접어둬요
  const inList = (l: ShopLine) => !l.staple || out.has(l.id) || checks.has(l.id)
  const listed = lines.filter(inList)
  const staples = lines.filter(l => !inList(l))

  const total = listed.length + extras.length
  const done = listed.filter(l => checks.has(l.id)).length + extras.filter(e => e.done).length

  /* ── 기록 바꾸기 ── */
  const setChecks = (fn: (ids: IngredientId[]) => IngredientId[]) =>
    update(d => ({ ...d, shopChecks: { ...d.shopChecks, [wid]: fn(d.shopChecks[wid] ?? []) } }))
  const toggle = (id: IngredientId) => {
    const checked = checks.has(id)
    setChecks(ids => (checked ? ids.filter(x => x !== id) : [...ids, id]))
    // 떨어졌던 양념을 샀으면 다시 "집에 있음"으로
    if (!checked) update(d => ({ ...d, stapleOut: d.stapleOut.filter(x => x !== id) }))
  }
  const markOut = (id: IngredientId) => update(d => ({ ...d, stapleOut: [...d.stapleOut, id] }))
  const setExtras = (fn: (items: UserData['extraItems'][string]) => UserData['extraItems'][string]) =>
    update(d => ({ ...d, extraItems: { ...d.extraItems, [wid]: fn(d.extraItems[wid] ?? []) } }))
  const addExtra = () => {
    const name = draft.trim()
    if (!name) return
    setExtras(items => [...items, { name, done: false }])
    setDraft('')
  }

  const mealCount = shopMenus(week).length

  return (
    <div className="shop">
      <header className="shop-top">
        <div className="seg" role="tablist">
          {(['this', 'next'] as const).map(w => (
            <button key={w} role="tab" aria-selected={which === w} className={which === w ? 'on' : ''} onClick={() => setWhich(w)}>
              {w === 'this' ? '이번 주' : '다음 주'}
            </button>
          ))}
        </div>
        <p className="wk">{weekLabel(monday)} · {weekRange(monday)}</p>
      </header>

      {mealCount === 0 ? (
        <section className="shop-empty">
          <h1>아직 식단이<br />없어요</h1>
          <p>식단을 짜면 필요한 재료가 여기에 자동으로 모여요</p>
          <button className="btn dark" onClick={() => go('plan')}>식단 짜러 가기<Icon name="arrow" size={18} /></button>
        </section>
      ) : (
        <>
          <section className="shop-head">
            <h1>{total - done > 0 ? `${total - done}개 남았어요` : '다 샀어요'}</h1>
            <p>저녁 {week.days.filter(d => d.menuId).length}끼{week.preps?.length ? ` + 밀프랩 ${week.preps.length}개` : ''} · {total}개 중 {done}개 담음</p>
            <div className="bar"><span style={{ width: `${total ? (done / total) * 100 : 0}%` }} /></div>
          </section>

          {SECTIONS.map(section => {
            const items = listed.filter(l => l.section === section)
            if (!items.length) return null
            // 체크한 건 코너 맨 아래로
            const sorted = [...items.filter(l => !checks.has(l.id)), ...items.filter(l => checks.has(l.id))]
            return (
              <section key={section} className="corner">
                <h2>{section}</h2>
                {sorted.map(l => (
                  <button key={l.id} className={`item ${checks.has(l.id) ? 'done' : ''}`} onClick={() => toggle(l.id)} aria-pressed={checks.has(l.id)}>
                    <span className="box">{checks.has(l.id) && <Icon name="check" size={16} />}</span>
                    <span className="body">
                      <span className="nm">
                        {l.name}
                        {l.optional && <small>선택</small>}
                        {l.staple && out.has(l.id) && <small>떨어짐</small>}
                      </span>
                      <span className="from">{l.from.join(' · ')}</span>
                    </span>
                    <span className="amt">{l.amount}</span>
                  </button>
                ))}
              </section>
            )
          })}

          {/* 직접 추가 */}
          <section className="corner">
            <h2>직접 추가</h2>
            {extras.map((e, i) => (
              <div key={i} className={`item ${e.done ? 'done' : ''}`}>
                <button className="item-main" onClick={() => setExtras(items => items.map((x, j) => (j === i ? { ...x, done: !x.done } : x)))} aria-pressed={e.done}>
                  <span className="box">{e.done && <Icon name="check" size={16} />}</span>
                  <span className="nm">{e.name}</span>
                </button>
                <button className="del" aria-label={`${e.name} 지우기`} onClick={() => setExtras(items => items.filter((_, j) => j !== i))}>
                  <Icon name="close" size={16} />
                </button>
              </div>
            ))}
            <div className="add">
              <Icon name="plus" size={18} />
              <input
                value={draft}
                placeholder="휴지, 우유처럼 메뉴와 상관없는 것"
                onChange={e => setDraft(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addExtra()}
              />
              {draft.trim() && <button className="chip" onClick={addExtra}>추가</button>}
            </div>
          </section>

          {/* 집에 늘 있는 재료 */}
          {staples.length > 0 && (
            <section className="staples">
              <button className="staples-head" onClick={() => setShowStaples(s => !s)} aria-expanded={showStaples}>
                <span>집에 있는 재료 <b>{staples.length}</b></span>
                <span className="mute">{showStaples ? '접기' : '떨어진 게 있으면 펼쳐서 눌러요'}</span>
              </button>
              {showStaples && staples.map(l => (
                <div key={l.id} className="staple">
                  <span>{l.name} <small>{l.amount}</small></span>
                  <button className="chip" onClick={() => markOut(l.id)}>떨어졌어요</button>
                </div>
              ))}
            </section>
          )}
        </>
      )}
    </div>
  )
}
