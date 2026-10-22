// 식단 탭에서 아래로부터 올라오는 판들
import { useState } from 'react'
import { Icon } from '../../components/Icon.tsx'
import { Sheet, SheetRow, Switch } from '../../components/Sheet.tsx'
import { ingredientOf, MENU_GROUPS, menuIds, menuOf, type MenuId } from '../../data/index.ts'
import { DOW, parseKey, weekLabel, weekRange } from '../../lib/date.ts'
import type { DayPlan, WeekPlan } from '../../types.ts'

/** 하루 더보기: 다시 뽑기, 직접 고르기, 메모, 도시락, 해먹었어요, 고정 */
export function DaySheet(p: {
  title: string
  day: DayPlan
  cooked: boolean
  onClose: () => void
  onReroll: () => void
  onPick: () => void
  onNote: () => void
  onToggleExtra: () => void
  onToggleCooked: () => void
  onToggleLock: () => void
  onClear: () => void
}) {
  const hasMenu = !!p.day.menuId
  const lunchboxOk = hasMenu && menuOf(p.day.menuId!).lunchbox
  return (
    <Sheet title={p.title} onClose={p.onClose}>
      <SheetRow icon={<Icon name="refresh" />} label="다른 메뉴로 다시 뽑기" disabled={!!p.day.locked || p.cooked} onClick={p.onReroll} />
      <SheetRow icon={<Icon name="book" />} label="도감에서 직접 고르기" onClick={p.onPick} />
      <SheetRow icon={<Icon name="note" />} label="글 메모 쓰기" sub="외식, 배달, 건너뜀처럼. 장보기에는 안 들어가요" onClick={p.onNote} />
      {hasMenu && (
        <>
          <SheetRow
            icon={<Icon name="lunchbox" />}
            label="넉넉히 만들기"
            sub={lunchboxOk ? '다음 날 점심 도시락으로' : '도시락으로는 별로인 메뉴예요'}
            right={<Switch on={!!p.day.cookExtra} />}
            onClick={p.onToggleExtra}
          />
          <SheetRow icon={<Icon name="check" />} label="해먹었어요" sub="2주 동안은 추천에서 빠져요" right={<Switch on={p.cooked} />} onClick={p.onToggleCooked} />
        </>
      )}
      <SheetRow icon={<Icon name="lock" />} label="고정" sub="다시 추천받아도 안 바뀌어요" right={<Switch on={!!p.day.locked} />} onClick={p.onToggleLock} />
      <SheetRow icon={<Icon name="trash" />} label="비우기" onClick={p.onClear} />
    </Sheet>
  )
}

/** 메뉴 도감에서 고르기 */
export function MenuPicker({ title, current, week, onPick, onClose }: {
  title: string
  current?: MenuId
  /** 이번 주 요일별 메뉴 → "수요일에 있음" 표시 */
  week: (MenuId | undefined)[]
  onPick: (id: MenuId) => void
  onClose: () => void
}) {
  const dinner = menuIds.filter(id => !menuOf(id).prepOnly)
  return (
    <Sheet title={title} onClose={onClose}>
      {MENU_GROUPS.map(g => {
        const ids = dinner.filter(id => g.match(menuOf(id)))
        return (
          <div key={g.label}>
            <div className="group">{g.label}</div>
            {ids.map(id => {
              const m = menuOf(id)
              const at = week.indexOf(id)
              return (
                <SheetRow
                  key={id}
                  label={m.name}
                  sub={`${m.method} · ${m.minutes}분 · ${m.level}`}
                  right={id === current ? <Icon name="check" /> : at >= 0 ? `${DOW[at]}요일` : undefined}
                  onClick={() => onPick(id)}
                />
              )
            })}
          </div>
        )
      })}
    </Sheet>
  )
}

const QUICK_NOTES = ['외식', '배달', '약속', '건너뜀']

/** 글 메모 */
export function NoteSheet({ initial, onSave, onClose }: { initial: string; onSave: (note: string) => void; onClose: () => void }) {
  const [text, setText] = useState(initial)
  return (
    <Sheet title="글 메모" onClose={onClose}>
      <div className="chips">
        {QUICK_NOTES.map(n => <button key={n} className="chip" onClick={() => onSave(n)}>{n}</button>)}
      </div>
      <input
        className="text-input"
        value={text}
        placeholder="직접 쓰기"
        onChange={e => setText(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && text.trim() && onSave(text.trim())}
      />
      <button className="btn dark wide" disabled={!text.trim()} onClick={() => onSave(text.trim())}>저장</button>
    </Sheet>
  )
}

/** 메뉴 재료 한눈에 */
export function IngredientSheet({ menuId, onClose, onShop }: { menuId: MenuId; onClose: () => void; onShop: () => void }) {
  const m = menuOf(menuId)
  const buy = m.ingredients.filter(x => !ingredientOf(x.id).staple)
  const staples = m.ingredients.filter(x => ingredientOf(x.id).staple)
  return (
    <Sheet title={`${m.name} 재료`} onClose={onClose}>
      <p className="sheet-sub">2인 저녁{m.lunchbox ? ' + 도시락' : ''} 기준</p>
      {buy.map(x => (
        <div key={x.id} className="ing-row">
          <span>{ingredientOf(x.id).name}{x.optional && <small>선택</small>}</span>
          <span>{x.amount}</span>
        </div>
      ))}
      {staples.length > 0 && (
        <p className="ing-staple">
          <b>집에 있을 양념</b>
          {staples.map(x => `${ingredientOf(x.id).name} ${x.amount}`).join(' · ')}
        </p>
      )}
      <button className="btn ghost wide" onClick={onShop}><Icon name="bag" size={18} />장보기 목록 보기</button>
    </Sheet>
  )
}

/** 지난 식단 */
export function HistorySheet({ weeks, current, thisWeek, nextWeek, onSelect, onClose }: {
  weeks: Record<string, WeekPlan>
  current: string
  thisWeek: string
  /** 미리 짜볼 수 있게 다음 주도 맨 위에 */
  nextWeek: string
  onSelect: (monday: Date) => void
  onClose: () => void
}) {
  const filled = Object.values(weeks).filter(w => w.days.some(d => d.menuId || d.note))
  const starts = [...new Set([nextWeek, thisWeek, ...filled.map(w => w.start)])].sort().reverse()
  return (
    <Sheet title="주 고르기" onClose={onClose}>
      {starts.map(start => {
        const w = filled.find(x => x.start === start)
        const names = w?.days.map(d => (d.menuId ? menuOf(d.menuId).name : d.note)).filter(Boolean) ?? []
        const mon = parseKey(start)
        return (
          <SheetRow
            key={start}
            label={`${start === thisWeek ? '이번 주' : start === nextWeek ? '다음 주' : weekLabel(mon)} · ${weekRange(mon)}`}
            sub={names.length ? names.slice(0, 4).join(' · ') + (names.length > 4 ? ' …' : '') : '비어 있어요'}
            right={start === current ? '보는 중' : undefined}
            onClick={() => onSelect(mon)}
          />
        )
      })}
    </Sheet>
  )
}
