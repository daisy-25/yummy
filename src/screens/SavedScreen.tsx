import { useRef, useState } from 'react'
import { Icon } from '../components/Icon.tsx'
import { Sheet } from '../components/Sheet.tsx'
import { menuOf, menuOfKey, recipeById, type MenuId } from '../data/index.ts'
import { downloadBackup, parseBackup, summarize } from '../lib/backup.ts'
import { shortDate } from '../lib/date.ts'
import type { UserData } from '../types.ts'
import type { ScreenProps } from './screen.ts'
import './SavedScreen.css'

/** 찜 탭 한 줄에 필요한 것 */
type Item = { key: string; menuId: MenuId; heartedAt?: string; note?: { date: string; text: string }; notes: number }

export function SavedScreen({ data, update, go }: ScreenProps) {
  const [pending, setPending] = useState<UserData | null>(null)
  const [error, setError] = useState<string>()
  const [done, setDone] = useState<string>()
  const file = useRef<HTMLInputElement>(null)

  // 하트 누른 것 + 메모만 남긴 것을 메뉴 단위로 모아요
  const byMenu = new Map<MenuId, Item>()
  for (const [key, date] of Object.entries(data.hearts)) {
    const menuId = menuOfKey(key)
    if (menuId) byMenu.set(menuId, { key, menuId, heartedAt: date, notes: 0 })
  }
  for (const [key, list] of Object.entries(data.notes)) {
    const menuId = menuOfKey(key)
    if (!menuId || !list.length) continue
    const item = byMenu.get(menuId) ?? { key, menuId, notes: 0 }
    item.note = list.at(-1)
    item.notes += list.length
    byMenu.set(menuId, item)
  }
  const items = [...byMenu.values()]
  const hearted = items.filter(i => i.heartedAt).sort((a, b) => b.heartedAt!.localeCompare(a.heartedAt!))
  const memoOnly = items.filter(i => !i.heartedAt)
  const cookedCount = (id: MenuId) => data.cooked.filter(c => c.menuId === id).length

  const onFile = async (f: File | undefined) => {
    setError(undefined)
    setDone(undefined)
    if (!f) return
    const result = parseBackup(await f.text())
    if (typeof result === 'string') setError(result)
    else setPending(result)
    if (file.current) file.current.value = ''
  }

  const Row = ({ item }: { item: Item }) => {
    const m = menuOf(item.menuId)
    const video = recipeById(item.key)?.video
    const n = cookedCount(item.menuId)
    return (
      <button className="s-row" onClick={() => go('recipe', item.menuId)}>
        <span className="s-top">
          <span className="nm">{m.name}</span>
          {item.heartedAt && <span className="heart-s"><Icon name="heart" size={16} /></span>}
        </span>
        <span className="tg">{[video?.channel, n ? `${n}번 해먹음` : '아직 안 해먹음', item.notes ? `메모 ${item.notes}` : ''].filter(Boolean).join(' · ')}</span>
        {item.note && <span className="memo-line">“{item.note.text}”<small>{shortDate(item.note.date)}</small></span>}
      </button>
    )
  }

  return (
    <div className="saved">
      <div className="pad saved-head">
        <h1 className="h1">또 해먹을<br />메뉴</h1>
        <p>{hearted.length ? `하트 ${hearted.length}개` : '레시피에서 하트를 누르면 여기 모여요'}</p>
      </div>

      {hearted.length === 0 && (
        <div className="pad">
          <button className="btn dark" onClick={() => go('recipe')}>레시피 보러 가기<Icon name="arrow" size={18} /></button>
        </div>
      )}

      {hearted.length > 0 && (
        <>
          <p className="grp">찜한 메뉴<i>최근 순</i></p>
          {hearted.map(i => <Row key={i.menuId} item={i} />)}
        </>
      )}

      {memoOnly.length > 0 && (
        <>
          <p className="grp">메모만 남긴 메뉴</p>
          {memoOnly.map(i => <Row key={i.menuId} item={i} />)}
        </>
      )}

      {/* 기록 백업 */}
      <section className="backup">
        <h2>기록 백업</h2>
        <p>식단 · 하트 · 메모는 이 폰 브라우저에만 저장돼요. 폰을 바꾸거나 인터넷 기록을 지우기 전에 파일로 저장해 두세요.</p>
        <p className="sum">{summarize(data)}</p>
        <div className="backup-acts">
          <button className="btn dark" onClick={() => { downloadBackup(data); setDone('파일로 저장했어요'); setError(undefined) }}>
            파일로 저장
          </button>
          <button className="btn ghost" onClick={() => file.current?.click()}>불러오기</button>
        </div>
        <input ref={file} type="file" accept=".json,application/json" hidden onChange={e => onFile(e.target.files?.[0])} />
        {error && <p className="msg err" role="alert">{error}</p>}
        {done && <p className="msg" role="status">{done}</p>}
      </section>

      {pending && (
        <Sheet title="이 기록으로 바꿀까요?" onClose={() => setPending(null)}>
          <p className="sheet-sub">불러올 파일: {summarize(pending)}</p>
          <p className="sheet-sub">지금 기록: {summarize(data)}</p>
          <p className="restore-warn">지금 이 폰에 있는 기록은 지워지고 파일 내용으로 바뀌어요.</p>
          <button className="btn dark wide" onClick={() => { update(() => pending); setPending(null); setDone('기록을 불러왔어요') }}>바꾸기</button>
          <button className="btn ghost wide" style={{ marginTop: 8 }} onClick={() => setPending(null)}>그만두기</button>
        </Sheet>
      )}
    </div>
  )
}
