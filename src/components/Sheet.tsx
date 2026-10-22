import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import './Sheet.css'

/** 아래에서 올라오는 판. 바깥을 누르거나 Esc를 누르면 닫혀요 */
export function Sheet({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  // 화면 스크롤과 상관없이 앱 틀 위에 뜨도록 .app 바로 아래에 그려요 (portal)
  const host = document.querySelector('.app') ?? document.body
  return createPortal(
    <>
      <div className="sheet-bg" onClick={onClose} />
      <div className="sheet" role="dialog" aria-label={title}>
        <div className="grip" />
        <h3>{title}</h3>
        {children}
      </div>
    </>,
    host,
  )
}

/** 판 안의 한 줄 선택지 */
export function SheetRow({ icon, label, sub, right, onClick, disabled }: {
  icon?: ReactNode
  label: string
  sub?: string
  right?: ReactNode
  onClick?: () => void
  disabled?: boolean
}) {
  return (
    <button className="sheet-row" onClick={onClick} disabled={disabled}>
      {icon && <span className="si">{icon}</span>}
      <span className="sl">
        {label}
        {sub && <small>{sub}</small>}
      </span>
      {right && <span className="sr">{right}</span>}
    </button>
  )
}

/** 켜고 끄는 스위치 (모양만. 누르는 건 줄 전체) */
export const Switch = ({ on }: { on: boolean }) => <span className={`switch ${on ? 'on' : ''}`} aria-checked={on} role="switch" />
