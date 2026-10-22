import type { ReactNode } from 'react'

// 직접 그린 선 아이콘 모음. className="f"인 면은 선택 상태에서 노랑으로 채워짐
const paths = {
  calendar: <><rect className="f" x="3.5" y="5" width="17" height="15.5" rx="3" /><path d="M3.5 10h17M8 3v4M16 3v4" /></>,
  book: <path className="f" d="M4 5.5C4 4.7 4.7 4 5.5 4H11v16H5.5c-.8 0-1.5-.7-1.5-1.5zM20 5.5c0-.8-.7-1.5-1.5-1.5H13v16h5.5c.8 0 1.5-.7 1.5-1.5z" />,
  bag: <><path className="f" d="M5 8h14l-1.2 11.1a1.5 1.5 0 0 1-1.5 1.4H7.7a1.5 1.5 0 0 1-1.5-1.4z" /><path d="M9 8V6.5a3 3 0 0 1 6 0V8" /></>,
  heart: <path className="f" d="M12 20s-7.5-4.6-7.5-10A4.3 4.3 0 0 1 12 7.4 4.3 4.3 0 0 1 19.5 10c0 5.4-7.5 10-7.5 10z" />,
  history: <><path d="M3 12a9 9 0 1 0 3-6.7" /><path d="M3 4v4h4" /><path d="M12 8v4l3 2" /></>,
  clock: <><circle cx="12" cy="12" r="8.5" /><path d="M12 7.5V12l3 2" /></>,
  level: <path d="M5 19v-4M12 19V10M19 19V5" />,
  lunchbox: <><rect x="3.5" y="8" width="17" height="11" rx="2.5" /><path d="M3.5 12.5h17M8.5 8V6h7v2" /></>,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  list: <><path d="M9 6h11M9 12h11M9 18h11" /><path d="M4 6l1 1 1.5-1.5M4 12l1 1 1.5-1.5M4 18l1 1 1.5-1.5" /></>,
  shuffle: <><path d="M16 3h5v5" /><path d="M4 20 21 3" /><path d="M21 16v5h-5" /><path d="M15 15l6 6" /><path d="M4 4l5 5" /></>,
  refresh: <><path d="M19.5 10A8 8 0 0 0 5.6 6.6L4 8.5" /><path d="M4 4v4.5h4.5" /><path d="M4.5 14a8 8 0 0 0 13.9 3.4l1.6-1.9" /><path d="M20 20v-4.5h-4.5" /></>,
  lock: <><rect className="f" x="5" y="10.5" width="14" height="10" rx="2.5" /><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" /></>,
  more: <><circle cx="5.5" cy="12" r=".9" /><circle cx="12" cy="12" r=".9" /><circle cx="18.5" cy="12" r=".9" /></>,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  pencil: <><path d="M4 20h4L19 9l-4-4L4 16z" /><path d="M13.5 6.5l4 4" /></>,
  note: <><path d="M5 4.5h14v10l-5 5H5z" /><path d="M14 19.5v-5h5M8.5 9h7M8.5 12.5h4" /></>,
  trash: <><path d="M4.5 7h15M9.5 7V4.5h5V7M6.5 7l1 12.5h9l1-12.5" /></>,
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof paths

export function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg className="ic" viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
