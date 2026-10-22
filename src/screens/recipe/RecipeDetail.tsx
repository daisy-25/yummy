// 레시피 한 개: 대표 레시피 · 다른 영상 · 내 메모 · 하트 · 안 보고 해요
import { useState } from 'react'
import { Icon } from '../../components/Icon.tsx'
import { ingredientOf, menuOf, recipeById, recipesOf, recordKey, type MenuId } from '../../data/index.ts'
import { shortDate, toKey } from '../../lib/date.ts'
import { fmtDuration, fmtViews, thumbUrl, youtubeSearchUrl, youtubeUrl } from '../../lib/format.ts'
import type { Recipe, Step } from '../../types.ts'
import type { ScreenProps } from '../screen.ts'
import { MemoSheet } from './MemoSheet.tsx'
import { TimerBar, TimerChip } from './TimerBar.tsx'
import { useTimer, type Timer } from './useTimer.ts'

/** 체크리스트용으로 맞춘 재료 한 줄 */
type Line = { name: string; amount: string; staple: boolean; optional?: boolean; check?: boolean }

export function RecipeDetail({ data, update, menuId, onBack }: ScreenProps & { menuId: MenuId; onBack: () => void }) {
  const m = menuOf(menuId)
  const main = m.mainRecipe ? recipeById(m.mainRecipe) : undefined
  const others = recipesOf(menuId).filter(r => r.id !== main?.id).sort((a, b) => b.video.views - a.video.views)
  const key = recordKey(menuId)
  const hearted = !!data.hearts[key]
  const notes = data.notes[key] ?? []
  const latest = notes.at(-1)
  const memorized = data.memorized.includes(menuId)

  const [expanded, setExpanded] = useState(false)
  const [checked, setChecked] = useState<Set<number>>(new Set())
  const [memoOpen, setMemoOpen] = useState(false)
  const timer = useTimer()

  /* ── 기록 바꾸기 ── */
  const toggleHeart = () => update(d => {
    const hearts = { ...d.hearts }
    if (hearts[key]) delete hearts[key]
    else hearts[key] = toKey(new Date())
    return { ...d, hearts }
  })
  const toggleMemorized = () => {
    update(d => ({ ...d, memorized: memorized ? d.memorized.filter(x => x !== menuId) : [...d.memorized, menuId] }))
    setExpanded(false)
  }
  const setNotes = (fn: (list: typeof notes) => typeof notes) => update(d => ({ ...d, notes: { ...d.notes, [key]: fn(d.notes[key] ?? []) } }))

  // 재료: 대표 레시피에 적힌 게 있으면 그걸, 없으면 메뉴 도감의 장보기용 재료
  const lines: Line[] = main?.ingredients
    ? main.ingredients.map(x => ('id' in x
      ? { name: ingredientOf(x.id).name, amount: x.amount, staple: !!ingredientOf(x.id).staple, check: x.check }
      : { name: x.name, amount: x.amount, staple: false, check: x.check }))
    : m.ingredients.map(x => ({ name: ingredientOf(x.id).name, amount: x.amount, staple: !!ingredientOf(x.id).staple, optional: x.optional }))
  const buy = lines.filter(l => !l.staple)
  const seasoning = lines.filter(l => l.staple)
  const toggleCheck = (i: number) => setChecked(s => {
    const next = new Set(s)
    if (next.has(i)) next.delete(i)
    else next.add(i)
    return next
  })

  const folded = memorized && !expanded

  return (
    <div className="recipe detail">
      <div className="d-bar">
        <button className="ib" aria-label="뒤로" onClick={onBack}><Icon name="back" size={22} /></button>
        <button className={`ib ${hearted ? 'on' : ''}`} aria-label={hearted ? '찜 풀기' : '찜하기'} aria-pressed={hearted} onClick={toggleHeart}>
          <Icon name="heart" size={22} />
        </button>
      </div>

      <div className="pad">
        <h1 className="h1">{m.name}</h1>
        <div className="meta">
          <span>{main?.servings ?? `2인 저녁${m.lunchbox ? ' + 도시락' : ''}`}</span>
          <span><Icon name="clock" size={15} />{m.minutes}분</span>
          <span><Icon name="level" size={15} />{m.level}</span>
          {m.lunchbox && <span><Icon name="lunchbox" size={15} />도시락 OK</span>}
        </div>
      </div>

      {/* 내 메모: 맨 위에 */}
      {!folded && (
        <button className="memo" onClick={() => setMemoOpen(true)}>
          <span className="lb"><span>{latest ? `내 메모 · ${shortDate(latest.date)}` : '내 메모'}</span><span>{latest ? `${notes.length}개 · 쓰기` : '+ 쓰기'}</span></span>
          <span className="tx">{latest?.text ?? '내 입맛에 맞게 바꾼 점을 적어두면 다음에 여기 먼저 보여요'}</span>
        </button>
      )}

      <button className="toggle" onClick={toggleMemorized} aria-pressed={memorized}>
        <span><b>안 보고 해요</b><small>{memorized ? '재료와 비율만 보여줘요' : '익숙해지면 켜요. 재료와 비율만 남아요'}</small></span>
        <span className={`switch ${memorized ? 'on' : ''}`} />
      </button>

      {folded ? (
        <>
          <dl className="fold">
            <dt>필요한 재료</dt>
            <dd>
              {m.ingredients.filter(x => !ingredientOf(x.id).staple).map(x => `${ingredientOf(x.id).name} ${x.amount}${x.optional ? '(선택)' : ''}`).join(' · ')}
              <span className="st">집에 있는 것: {m.ingredients.filter(x => ingredientOf(x.id).staple).map(x => ingredientOf(x.id).name).join(', ')}</span>
            </dd>
            {m.keyRatio && <><dt>황금 비율</dt><dd className="ratio">{m.keyRatio}</dd></>}
            <dt>내 메모</dt>
            <dd>{latest?.text ?? <span className="st">아직 없어요</span>}</dd>
          </dl>
          <button className="btn ghost wide-pad" onClick={() => setExpanded(true)}><Icon name="down" size={18} />전체 레시피 펼치기</button>
        </>
      ) : (
        <>
          {main ? (
            <a className="video" href={youtubeUrl(main.video.youtubeId, main.video.isShort)} target="_blank" rel="noreferrer">
              <span className="thumb" style={{ backgroundImage: `url(${thumbUrl(main.video.youtubeId)})` }} />
              <span>
                <span className="t">{main.video.title}</span>
                <span className="s">{main.video.channel} · 조회수 {fmtViews(main.video.views)} · {fmtDuration(main.video.seconds)}{main.video.isShort ? ' · 쇼츠' : ''}</span>
              </span>
            </a>
          ) : (
            <p className="notice">
              {others.length ? '아직 글로 정리한 레시피가 없어요. 아래 영상을 보고 따라 해요' : '아직 모아둔 영상이 없어요'}
              {!others.length && <a href={youtubeSearchUrl(`${m.name} 레시피`)} target="_blank" rel="noreferrer">유튜브에서 찾기</a>}
            </p>
          )}

          {main?.warning && <p className="warn"><Icon name="alert" size={16} />{main.warning}</p>}

          {main?.tools && (
            <>
              <p className="grp">필요한 도구</p>
              <div className="tools">{main.tools.map(t => <span key={t} className="chip">{t}</span>)}</div>
            </>
          )}

          <p className="grp">재료<i>누르면 체크</i></p>
          {buy.map((l, i) => (
            <button key={i} className={`ing ${checked.has(i) ? 'done' : ''}`} onClick={() => toggleCheck(i)} aria-pressed={checked.has(i)}>
              <span className="box">{checked.has(i) && <Icon name="check" size={14} />}</span>
              <span className="n">{l.name}{l.optional && <small>선택</small>}{l.check && <small>영상에서 확인</small>}</span>
              <span className="a">{l.amount}</span>
            </button>
          ))}
          {seasoning.length > 0 && (
            <button className={`ing seasoning ${checked.has(-1) ? 'done' : ''}`} onClick={() => toggleCheck(-1)} aria-pressed={checked.has(-1)}>
              <span className="box">{checked.has(-1) && <Icon name="check" size={14} />}</span>
              <span className="n">{seasoning.map(l => `${l.name} ${l.amount}`).join(' · ')}</span>
            </button>
          )}
          {m.keyRatio && !main && <p className="tip"><Icon name="bulb" size={16} />황금 비율 · {m.keyRatio}</p>}

          {main?.steps && <Steps recipe={main} steps={main.steps} timer={timer} />}
          {main?.tips?.map(t => <p key={t} className="tip"><Icon name="bulb" size={16} />{t}</p>)}

          {others.length > 0 && (
            <>
              <p className="grp">{main ? '다른 영상' : '영상'}<i>조회수 순</i></p>
              {others.map(r => (
                <a key={r.id} className="video-row" href={youtubeUrl(r.video.youtubeId, r.video.isShort)} target="_blank" rel="noreferrer">
                  <span className="bd">
                    <span className="c">{r.video.channel}{r.video.isShort && <span className="badge">쇼츠</span>}</span>
                    <span className="s">조회수 {fmtViews(r.video.views)} · {fmtDuration(r.video.seconds)} · {r.video.title}</span>
                  </span>
                  <Icon name="external" size={18} />
                </a>
              ))}
            </>
          )}
        </>
      )}

      <TimerBar timer={timer} />
      {timer.t && <div className="timer-space" />}

      {memoOpen && (
        <MemoSheet
          title={`${m.name} 메모`}
          notes={notes}
          onAdd={text => setNotes(list => [...list, { date: toKey(new Date()), text }])}
          onDelete={i => setNotes(list => list.filter((_, j) => j !== i))}
          onClose={() => setMemoOpen(false)}
        />
      )}
    </div>
  )
}

/** 단계: [준비]는 빈 원, [조리]는 검은 원 */
function Steps({ recipe, steps, timer }: { recipe: Recipe; steps: Step[]; timer: Timer }) {
  const groups = (['준비', '조리'] as const).map(phase => ({ phase, items: steps.map((s, i) => ({ s, no: i + 1 })).filter(x => x.s.phase === phase) }))
  return (
    <>
      {groups.map(g => g.items.length > 0 && (
        <div key={g.phase}>
          <p className="grp">{g.phase}<i>{g.phase === '준비' ? '불 켜기 전에' : '불 위에서'}</i></p>
          {g.items.map(({ s, no }) => (
            <div key={no} className={`step ${s.phase === '조리' ? 'cook' : ''}`}>
              <span className="no">{no}</span>
              <div>
                <p>{s.text}{s.check && <small className="chk">영상에서 확인</small>}</p>
                {(s.timer || (s.startAt !== undefined && !recipe.video.isShort)) && (
                  <div className="acts">
                    {s.timer && <TimerChip timer={timer} step={no} seconds={s.timer} />}
                    {s.startAt !== undefined && !recipe.video.isShort && (
                      <a className="chip" href={youtubeUrl(recipe.video.youtubeId, false, s.startAt)} target="_blank" rel="noreferrer">
                        <Icon name="play" size={14} />이 부분 보기
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  )
}
