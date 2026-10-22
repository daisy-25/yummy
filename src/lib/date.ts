// 날짜 도우미. 날짜는 언제나 폰의 현지 시간 기준 "YYYY-MM-DD" 글자로 저장해요.

export const DOW = ['월', '화', '수', '목', '금', '토', '일'] as const

const pad = (n: number) => String(n).padStart(2, '0')

export const toKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`

export function parseKey(key: string): Date {
  const [y, m, d] = key.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export const addDays = (d: Date, n: number) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n)

/** 그 주의 월요일 */
export const mondayOf = (d: Date) => addDays(d, -((d.getDay() + 6) % 7))

/** 월요일 = 0 … 일요일 = 6 */
export const dowIndex = (d: Date) => (d.getDay() + 6) % 7

/** 국제 표준 주 이름 (예: 2026-W43). 내 기록에서 주를 찾는 열쇠예요 */
export function weekId(monday: Date): string {
  const thursday = addDays(monday, 3)
  const firstMonday = mondayOf(new Date(thursday.getFullYear(), 0, 4))
  const n = Math.round((monday.getTime() - firstMonday.getTime()) / (7 * 864e5)) + 1
  return `${thursday.getFullYear()}-W${pad(n)}`
}

/** "10월 넷째 주". 목요일이 속한 달 기준 */
export function weekLabel(monday: Date): string {
  const thursday = addDays(monday, 3)
  const nth = ['첫째', '둘째', '셋째', '넷째', '다섯째'][Math.ceil(thursday.getDate() / 7) - 1]
  return `${thursday.getMonth() + 1}월 ${nth} 주`
}

/** "19일 – 25일", 달이 넘어가면 "26일 – 11월 1일" */
export function weekRange(monday: Date): string {
  const sunday = addDays(monday, 6)
  const end = sunday.getMonth() === monday.getMonth() ? `${sunday.getDate()}일` : `${sunday.getMonth() + 1}월 ${sunday.getDate()}일`
  return `${monday.getDate()}일 – ${end}`
}
