// 요리 타이머: 단계의 "N분 타이머"를 누르면 화면 아래에 떠서 스크롤해도 따라다녀요
import { Icon } from '../../components/Icon.tsx'
import { fmtDuration } from '../../lib/format.ts'
import { fmtTimer, type Timer } from './useTimer.ts'

/** 단계 옆 버튼: 이 단계 타이머가 돌고 있으면 남은 시간을 보여줘요 */
export function TimerChip({ timer, step, seconds }: { timer: Timer; step: number; seconds: number }) {
  const mine = timer.t?.step === step
  return (
    <button className={`chip ${mine ? 'on' : ''}`} onClick={() => (mine ? timer.stop() : timer.start(step, seconds))}>
      <Icon name="timer" size={14} />
      {mine ? (timer.done ? '다 됐어요' : fmtDuration(Math.ceil(timer.left / 1000))) : `${fmtTimer(seconds)} 타이머`}
    </button>
  )
}

/** 화면 아래 타이머 바 */
export function TimerBar({ timer }: { timer: Timer }) {
  const { t, left, done } = timer
  if (!t) return null
  const running = !!t.endAt
  return (
    <div className={`timer-bar ${done ? 'done' : ''}`} role="timer" aria-live={done ? 'assertive' : 'off'}>
      <span className="tb-progress" style={{ width: `${(1 - left / t.total) * 100}%` }} />
      <div className="tb-info">
        <small>{t.step}단계 타이머{!running && !done ? ' · 멈춤' : ''}</small>
        <b>{done ? '다 됐어요!' : fmtDuration(Math.ceil(left / 1000))}</b>
      </div>
      {!done && (
        <>
          <button className="tb-btn" onClick={timer.addMinute}>+1분</button>
          <button className="tb-btn round" aria-label={running ? '일시정지' : '계속'} onClick={running ? timer.pause : timer.resume}>
            <Icon name={running ? 'pause' : 'play'} size={18} />
          </button>
        </>
      )}
      <button className="tb-btn round" aria-label={done ? '확인' : '타이머 끄기'} onClick={timer.stop}>
        <Icon name={done ? 'check' : 'close'} size={18} />
      </button>
    </div>
  )
}
