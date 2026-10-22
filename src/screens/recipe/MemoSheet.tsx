import { useState } from 'react'
import { Icon } from '../../components/Icon.tsx'
import { Sheet } from '../../components/Sheet.tsx'
import { shortDate } from '../../lib/date.ts'

/** 내 메모: 쓰기 + 지난 메모 목록 (최근 것이 위) */
export function MemoSheet({ title, notes, onAdd, onDelete, onClose }: {
  title: string
  notes: { date: string; text: string }[]
  onAdd: (text: string) => void
  onDelete: (index: number) => void
  onClose: () => void
}) {
  const [text, setText] = useState('')
  const save = () => {
    if (!text.trim()) return
    onAdd(text.trim())
    setText('')
  }
  return (
    <Sheet title={title} onClose={onClose}>
      <textarea
        className="text-input memo-input"
        value={text}
        placeholder="예: 고춧가루 1큰술 줄이니까 딱 좋았음"
        onChange={e => setText(e.target.value)}
      />
      <button className="btn dark wide" disabled={!text.trim()} onClick={save}>저장</button>
      {notes.length > 0 && <div className="group">지난 메모</div>}
      {notes.map((n, i) => ({ n, i })).reverse().map(({ n, i }) => (
        <div key={i} className="memo-item">
          <div>
            <small>{shortDate(n.date)}</small>
            <p>{n.text}</p>
          </div>
          <button aria-label="메모 지우기" onClick={() => onDelete(i)}><Icon name="close" size={16} /></button>
        </div>
      ))}
    </Sheet>
  )
}
