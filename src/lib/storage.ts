// 내 기록 저장 (SPEC 7-4). 지금은 폰 브라우저에, 2차에 공유 저장소로 옮겨요.
import { useEffect, useState } from 'react'
import type { DayPlan, UserData, WeekPlan } from '../types.ts'
import { toKey } from './date.ts'

const KEY = 'dinner-plan'

export const emptyData = (): UserData => ({
  version: 1, weeks: {}, shopChecks: {}, extraItems: {}, stapleOut: [],
  hearts: {}, notes: {}, cooked: [], memorized: [],
})

export const emptyWeek = (monday: Date): WeekPlan => ({
  start: toKey(monday),
  days: Array.from({ length: 7 }, (): DayPlan => ({})),
})

function load(): UserData {
  try {
    const raw = localStorage.getItem(KEY)
    const saved = raw ? JSON.parse(raw) : null
    // 버전이 다르면 여기서 옛 기록을 새 형식으로 옮겨요 (지금은 1뿐)
    if (saved?.version === 1) return { ...emptyData(), ...saved }
  } catch {
    // 저장소를 못 쓰는 환경(사생활 보호 모드 등)이면 빈 기록으로 시작
  }
  return emptyData()
}

/** 기록을 바꾸는 함수. 이전 기록을 받아 새 기록을 돌려줘요 */
export type Update = (fn: (prev: UserData) => UserData) => void

/** 앱 전체에서 쓰는 내 기록. 바뀔 때마다 자동 저장 */
export function useUserData(): [UserData, Update] {
  const [data, setData] = useState(load)
  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(data))
    } catch {
      // 저장 실패해도 화면은 그대로 동작
    }
  }, [data])
  return [data, setData]
}
