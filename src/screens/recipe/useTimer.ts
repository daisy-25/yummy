// 요리 타이머의 동작 (화면은 TimerBar.tsx)
import { useEffect, useRef, useState } from 'react'

type State = {
  step: number
  /** 전체 시간(ms) — +1분 하면 늘어나요 */
  total: number
  /** 돌아가는 중이면 끝나는 시각, 멈췄으면 null */
  endAt: number | null
  /** 멈춘 순간 남은 시간(ms) */
  pausedLeft: number
}

/** 90 → "1분 30초" */
export const fmtTimer = (sec: number) => (sec % 60 ? `${Math.floor(sec / 60)}분 ${sec % 60}초` : `${sec / 60}분`)

export function useTimer() {
  const [t, setT] = useState<State | null>(null)
  const [now, setNow] = useState(() => Date.now())
  const audio = useRef<AudioContext | null>(null)

  // 돌아가는 동안만 0.25초마다 시계를 다시 읽어요 (끝나는 시각 기준이라 화면이 꺼졌다 켜져도 정확)
  useEffect(() => {
    if (!t?.endAt) return
    const id = setInterval(() => setNow(Date.now()), 250)
    return () => clearInterval(id)
  }, [t?.endAt])

  const left = t ? (t.endAt ? Math.max(0, t.endAt - now) : t.pausedLeft) : 0
  const done = !!t && left === 0

  useEffect(() => {
    if (!done) return
    navigator.vibrate?.([400, 200, 400, 200, 400])
    beep(audio.current)
  }, [done])

  return {
    t, left, done,
    start(step: number, seconds: number) {
      // 소리는 사용자가 누른 순간에만 켤 수 있어서 여기서 준비해요
      audio.current ??= new AudioContext()
      void audio.current.resume()
      const at = Date.now()
      setNow(at)
      setT({ step, total: seconds * 1000, endAt: at + seconds * 1000, pausedLeft: 0 })
    },
    pause: () => setT(s => (s?.endAt ? { ...s, endAt: null, pausedLeft: Math.max(0, s.endAt - Date.now()) } : s)),
    resume: () => {
      const at = Date.now()
      setNow(at)
      setT(s => (s && !s.endAt ? { ...s, endAt: at + s.pausedLeft } : s))
    },
    addMinute: () => {
      const at = Date.now()
      setNow(at)
      setT(s => s && (s.endAt
        ? { ...s, total: s.total + 60000, endAt: Math.max(s.endAt, at) + 60000 }
        : { ...s, total: s.total + 60000, pausedLeft: s.pausedLeft + 60000 }))
    },
    stop: () => setT(null),
  }
}

export type Timer = ReturnType<typeof useTimer>

/** 삐 삐 삐 */
function beep(ctx: AudioContext | null) {
  if (!ctx) return
  for (let i = 0; i < 3; i++) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.frequency.value = 880
    gain.gain.value = 0.25
    osc.connect(gain).connect(ctx.destination)
    const at = ctx.currentTime + i * 0.35
    osc.start(at)
    osc.stop(at + 0.2)
  }
}
