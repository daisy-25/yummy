// 기록 내보내기 / 불러오기 (SPEC 3-5). 폰에만 있는 기록을 파일 하나로 저장 · 복원해요.
import type { UserData } from '../types.ts'
import { toKey } from './date.ts'
import { emptyData } from './storage.ts'

/** 기록을 .json 파일로 내려받아요 */
export function downloadBackup(data: UserData) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `저녁식단-기록-${toKey(new Date())}.json`
  a.click()
  URL.revokeObjectURL(url)
}

/** 파일 내용을 읽어 기록으로 바꿔요. 형식이 이상하면 이유를 글로 돌려줘요 */
export function parseBackup(text: string): UserData | string {
  let raw: unknown
  try {
    raw = JSON.parse(text)
  } catch {
    return '기록 파일이 아니에요 (읽을 수 없는 파일)'
  }
  if (!raw || typeof raw !== 'object' || !('version' in raw)) return '이 앱에서 내보낸 기록 파일이 아니에요'
  if (raw.version !== 1) return `지원하지 않는 기록 형식이에요 (버전 ${String(raw.version)})`
  if (!('weeks' in raw) || typeof raw.weeks !== 'object') return '기록 파일이 망가졌어요 (식단이 없어요)'
  // 빠진 칸은 빈 값으로 채워요
  return { ...emptyData(), ...(raw as Partial<UserData>), version: 1 }
}

/** 기록 요약: "식단 3주 · 하트 4개 · 메모 2개" */
export function summarize(d: UserData): string {
  const weeks = Object.values(d.weeks).filter(w => w.days.some(x => x.menuId || x.note)).length
  const notes = Object.values(d.notes).reduce((n, list) => n + list.length, 0)
  return `식단 ${weeks}주 · 하트 ${Object.keys(d.hearts).length}개 · 메모 ${notes}개 · 해먹은 기록 ${d.cooked.length}번`
}
