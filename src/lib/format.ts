// 화면에 보여줄 글자 만들기 · 유튜브 주소

/** 3687439 → "369만" */
export function fmtViews(n: number): string {
  if (n >= 1e8) return `${Math.round(n / 1e7) / 10}억`
  if (n >= 1e4) return `${Math.round(n / 1e4)}만`
  return n.toLocaleString()
}

/** 679 → "11:19" */
export const fmtDuration = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

/** 유튜브 주소. 시작 위치(초)가 있으면 그 장면부터 */
export const youtubeUrl = (id: string, isShort: boolean, startAt?: number) =>
  isShort ? `https://www.youtube.com/shorts/${id}` : `https://www.youtube.com/watch?v=${id}${startAt ? `&t=${startAt}s` : ''}`

export const thumbUrl = (id: string) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`

export const youtubeSearchUrl = (q: string) => `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`
