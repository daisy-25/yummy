import { useState } from 'react'
import { Icon } from '../components/Icon.tsx'
import { menuOf, type MenuId } from '../data/index.ts'
import { addDays, DOW, dowIndex, mondayOf, toKey, weekId, weekLabel, weekRange } from '../lib/date.ts'
import { recommendWeek, rerollDay } from '../lib/recommend.ts'
import { emptyWeek } from '../lib/storage.ts'
import type { DayPlan, UserData, WeekPlan } from '../types.ts'
import { DaySheet, HistorySheet, IngredientSheet, MenuPicker, NoteSheet } from './plan/PlanSheets.tsx'
import type { ScreenProps } from './screen.ts'
import './PlanScreen.css'

type SheetKind = 'day' | 'pick' | 'note' | 'ingredients' | 'history'

export function PlanScreen({ data, update, go }: ScreenProps) {
  // 오늘 날짜는 화면을 처음 열 때 한 번만 읽어요 (다시 그릴 때마다 바뀌지 않게)
  const [today] = useState(() => new Date())
  const thisMonday = mondayOf(today)
  const [monday, setMonday] = useState(thisMonday)
  const isThisWeek = toKey(monday) === toKey(thisMonday)
  const todayIdx = isThisWeek ? dowIndex(today) : -1
  const [sel, setSel] = useState(Math.max(todayIdx, 0))
  const [sheet, setSheet] = useState<SheetKind | null>(null)
  const close = () => setSheet(null)

  const id = weekId(monday)
  const week = data.weeks[id] ?? emptyWeek(monday)
  const day = week.days[sel]
  const isEmptyWeek = week.days.every(d => !d.menuId && !d.note)

  /* ── 기록 바꾸기 ── */
  const setWeek = (fn: (w: WeekPlan, d: UserData) => DayPlan[]) =>
    update(d => {
      const w = d.weeks[id] ?? emptyWeek(monday)
      return { ...d, weeks: { ...d.weeks, [id]: { ...w, days: fn(w, d) } } }
    })
  const setDay = (i: number, fn: (day: DayPlan) => DayPlan) => setWeek(w => w.days.map((x, j) => (j === i ? fn(x) : x)))

  const dateKey = (i: number) => toKey(addDays(monday, i))
  const cookedOn = (i: number) => data.cooked.some(c => c.date === dateKey(i))
  /** 전날 넉넉히 만들었으면 이날 점심은 도시락 */
  const lunchFrom = (i: number): MenuId | undefined => (i > 0 && week.days[i - 1].cookExtra ? week.days[i - 1].menuId : undefined)

  const recommend = () => setWeek((w, d) => recommendWeek(d, w))
  const reroll = (i: number) => setWeek((w, d) => w.days.map((x, j) => (j === i ? rerollDay(d, w, i) : x)))
  const pickMenu = (menuId: MenuId) => setDay(sel, x => ({ menuId, locked: x.locked, cookExtra: x.cookExtra && menuOf(menuId).lunchbox ? true : undefined }))
  const toggleCooked = (i: number) => {
    const date = dateKey(i)
    const menuId = week.days[i].menuId
    if (!menuId) return
    update(d => ({
      ...d,
      cooked: d.cooked.some(c => c.date === date) ? d.cooked.filter(c => c.date !== date) : [...d.cooked, { date, menuId }],
    }))
  }
  const moveWeek = (mon: Date) => {
    setMonday(mon)
    setSel(toKey(mon) === toKey(thisMonday) ? dowIndex(today) : 0)
    close()
  }

  const whenLabel = sel === todayIdx ? '오늘' : `${DOW[sel]}요일`
  const frozen = !!day.locked || cookedOn(sel)
  const menus = week.days.map(d => (d.menuId ? menuOf(d.menuId) : undefined))

  return (
    <div className="plan">
      <header className="top">
        <div className="wk"><b>{weekLabel(monday)}</b>{weekRange(monday)}</div>
        <div className="top-r">
          {!isThisWeek && <button className="chip" onClick={() => moveWeek(thisMonday)}>이번 주로</button>}
          <button className="ib" aria-label="주 고르기" onClick={() => setSheet('history')}><Icon name="history" /></button>
        </div>
      </header>

      {/* 요일 줄 */}
      <div className="days">
        {week.days.map((_, i) => (
          <button key={i} className={`d ${i === sel ? 'on' : ''} ${i === todayIdx ? 'today' : ''} ${lunchFrom(i) ? 'has-box' : ''}`} onClick={() => setSel(i)}>
            <span className="w">{i === todayIdx ? '오늘' : DOW[i]}</span>
            <span className="n">{addDays(monday, i).getDate()}</span>
            <span className="box" />
          </button>
        ))}
      </div>

      {/* 주인공: 선택한 날 */}
      <section className="hero">
        {isEmptyWeek ? (
          <>
            <div className="when"><span>{isThisWeek ? '이번 주' : '이 주'} 저녁</span></div>
            <h1>아직 식단이<br />비어 있어요</h1>
            <p className="side">고기 · 국물 · 조리법이 겹치지 않게 7일을 채워드려요</p>
            <div className="acts">
              <button className="btn dark" onClick={recommend}><Icon name="shuffle" size={18} />추천받기</button>
              <button className="btn ghost" onClick={() => setSheet('pick')}>직접 고르기</button>
            </div>
          </>
        ) : (
          <>
            <div className="when">
              <span>{whenLabel} 저녁{day.locked && <Icon name="lock" size={14} />}</span>
              <button className="ib" aria-label="이날 더보기" onClick={() => setSheet('day')}><Icon name="more" /></button>
            </div>

            {day.menuId ? (() => {
              const m = menuOf(day.menuId)
              const side = day.cookExtra ? '넉넉히 만들어서 내일 점심까지' : m.sides ? `+ ${m.sides}` : m.method === '덮밥·면' ? '한 그릇 메뉴' : m.memo
              return (
                <>
                  <h1>{m.name}</h1>
                  {side && <p className="side">{side}</p>}
                  <div className="facts">
                    <span>{m.protein} · {m.method}</span>
                    <span><Icon name="clock" size={16} />{m.minutes}분</span>
                    <span><Icon name="level" size={16} />{m.level}</span>
                    {day.cookExtra && sel < 6 && <span><Icon name="lunchbox" size={16} />{DOW[sel + 1]} 점심 도시락</span>}
                    {cookedOn(sel) && <span><Icon name="check" size={16} />해먹음</span>}
                  </div>
                  <div className="acts">
                    <button className="btn dark" onClick={() => go('recipe', day.menuId)}>레시피 보기<Icon name="arrow" size={18} /></button>
                    <button className="btn ghost" onClick={() => setSheet('ingredients')}><Icon name="list" size={18} />재료</button>
                    <button className="btn ghost round" aria-label="다시 뽑기" disabled={frozen} onClick={() => reroll(sel)}><Icon name="refresh" size={18} /></button>
                  </div>
                </>
              )
            })() : (
              <>
                <h1 className="muted">{day.note ?? '비어 있어요'}</h1>
                <p className="side">{day.note ? '장보기에는 안 들어가요' : '이날만 뽑거나 직접 골라요'}</p>
                <div className="acts">
                  <button className="btn dark" disabled={frozen} onClick={() => reroll(sel)}><Icon name="refresh" size={18} />뽑기</button>
                  <button className="btn ghost" onClick={() => setSheet('pick')}>직접 고르기</button>
                </div>
              </>
            )}

            {lunchFrom(sel) && <p className="lunch"><Icon name="lunchbox" size={16} />점심은 어제 만든 {menuOf(lunchFrom(sel)!).name}</p>}
          </>
        )}
      </section>

      {/* 이번 주 목록 */}
      <div className="sec">
        <h2>{isThisWeek ? '이번 주 저녁' : weekLabel(monday) + ' 저녁'}</h2>
        {!isEmptyWeek && (
          <button className="act" onClick={recommend}><Icon name="shuffle" size={16} />다시 추천받기</button>
        )}
      </div>
      <div className="rows">
        {week.days.map((d, i) => {
          const m = menus[i]
          return (
            <div key={i} className={`row ${i === sel ? 'on' : ''} ${m ? '' : 'muted'}`}>
              <button className="row-main" onClick={() => setSel(i)}>
                <span className="dw"><b>{addDays(monday, i).getDate()}</b>{DOW[i]}</span>
                <span>
                  <span className="nm">{m?.name ?? d.note ?? '—'}</span>
                  {m && <span className="tg">{m.protein} · {m.method} · {m.minutes}분</span>}
                </span>
              </button>
              <span className="ri">
                {d.cookExtra && <Icon name="lunchbox" size={18} />}
                {cookedOn(i) && <Icon name="check" size={18} />}
              </span>
              <button
                className={`lock ${d.locked ? 'on' : ''}`}
                aria-label={d.locked ? '고정 풀기' : '고정'}
                aria-pressed={!!d.locked}
                disabled={!m && !d.note}
                onClick={() => setDay(i, x => ({ ...x, locked: !x.locked || undefined }))}
              >
                <Icon name="lock" size={18} />
              </button>
            </div>
          )
        })}
      </div>
      {!isEmptyWeek && (
        <div className="sum">
          <span>고기 <b>{menus.filter(m => m && ['돼지', '닭', '소'].includes(m.protein)).length}번</b></span>
          <span>국물 <b>{menus.filter(m => m?.method === '국물').length}번</b></span>
          <span>도시락 <b>{week.days.filter(d => d.cookExtra && d.menuId).length}번</b></span>
        </div>
      )}
      <p className="hint">자물쇠를 누른 날은 다시 추천받아도 그대로예요</p>

      {/* 아래에서 올라오는 판들 */}
      {sheet === 'day' && (
        <DaySheet
          title={`${addDays(monday, sel).getMonth() + 1}월 ${addDays(monday, sel).getDate()}일 ${DOW[sel]}요일`}
          day={day}
          cooked={cookedOn(sel)}
          onClose={close}
          onReroll={() => { reroll(sel); close() }}
          onPick={() => setSheet('pick')}
          onNote={() => setSheet('note')}
          onToggleExtra={() => setDay(sel, x => ({ ...x, cookExtra: !x.cookExtra || undefined }))}
          onToggleCooked={() => toggleCooked(sel)}
          onToggleLock={() => setDay(sel, x => ({ ...x, locked: !x.locked || undefined }))}
          onClear={() => { setDay(sel, () => ({})); close() }}
        />
      )}
      {sheet === 'pick' && (
        <MenuPicker
          title={`${DOW[sel]}요일 메뉴 고르기`}
          current={day.menuId}
          week={week.days.map(d => d.menuId)}
          onPick={menuId => { pickMenu(menuId); close() }}
          onClose={close}
        />
      )}
      {sheet === 'note' && (
        <NoteSheet
          initial={day.note ?? ''}
          onSave={note => { setDay(sel, x => ({ note, locked: x.locked })); close() }}
          onClose={close}
        />
      )}
      {sheet === 'ingredients' && day.menuId && (
        <IngredientSheet menuId={day.menuId} onClose={close} onShop={() => go('shop')} />
      )}
      {sheet === 'history' && (
        <HistorySheet weeks={data.weeks} current={toKey(monday)} thisWeek={toKey(thisMonday)} nextWeek={toKey(addDays(thisMonday, 7))} onSelect={moveWeek} onClose={close} />
      )}
    </div>
  )
}
