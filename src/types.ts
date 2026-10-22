// 데이터 구조 (SPEC 7장). 데이터 파일이 이 모양과 다르면 저장하는 순간 빨간 줄이 떠요.
import type { IngredientId } from './data/ingredients.ts'
import type { MenuId } from './data/menus.ts'

/* ───────── 앱 데이터: Claude가 파일로 관리 ───────── */

/** 장보기 코너. 이 순서대로 장보기 목록에 나와요 */
export const SECTIONS = ['정육', '수산', '채소', '두부·계란', '가공·기타', '양념·소스', '곡류'] as const
export type Section = (typeof SECTIONS)[number]

/** 재료 사전의 한 칸 */
export type Ingredient = {
  name: string
  section: Section
  /** 사는 단위 (예: 1통, 1모, 1단) */
  buyUnit: string
  /** 집에 늘 있는 재료 → 장보기에서 회색으로 접힘 */
  staple?: boolean
}

export type Protein = '돼지' | '닭' | '소' | '생선' | '두부·계란' | '채소' | '남은 재료'
export type Method = '국물' | '볶음' | '구이' | '조림·찜' | '덮밥·면' | '양식'
export type Level = '쉬움' | '보통' | '어려움'

/** 메뉴에 필요한 재료 한 줄 */
export type MenuItem = {
  id: IngredientId
  amount: string
  /** 없어도 되는 재료 (장보기에서 "선택"으로 표시) */
  optional?: boolean
}

/** 냉동 밀프랩 정보. 이게 있으면 레시피 탭 > 밀프랩에 나와요 */
export type Freeze = {
  /** 양념해서 = 날고기를 양념에 재워 얼림 (먹을 때 익힘) · 완성해서 = 다 만들어서 소분 */
  how: '양념해서' | '완성해서'
  /** 한 번 만들면 몇 팩 (예: 4팩, 1팩 = 1인분) */
  packs: string
  /** 먹는 법 (예: 전자레인지 3분) */
  reheat: string
}

/** 메뉴 도감의 한 칸 (id는 menus.ts의 이름표) */
export type Menu = {
  name: string
  protein: Protein
  method: Method
  /** 가끔 특식 (양식 등). 추천은 주 1번 이하 */
  special?: boolean
  level: Level
  minutes: number
  /** 다음 날 도시락으로 괜찮은지 */
  lunchbox: boolean
  /** 장보기용 재료. 장보기 목록은 언제나 이걸로 만들어요 */
  ingredients: MenuItem[]
  /** 곁들임 추천 */
  sides?: string
  /** "안 보고 해요"일 때 보여줄 황금 비율 한 줄 */
  keyRatio?: string
  /** 대표 레시피 id */
  mainRecipe?: string
  /** 메모 (예: 바지락 대신 돼지고기) */
  memo?: string
  /** 얼려두기 좋은 메뉴 → 밀프랩 목록에 나옴 */
  freeze?: Freeze
  /** 밀프랩 전용. 저녁 추천에는 안 나와요 */
  prepOnly?: boolean
}

/** 유튜브 영상 정보 */
export type Video = {
  youtubeId: string
  title: string
  channel: string
  views: number
  seconds: number
  isShort: boolean
  /** 조회수 확인한 날 (YYYY-MM-DD) */
  checkedAt: string
}

/** 레시피 재료 한 줄: 재료 사전에 있으면 id, 없으면(우유, 다시다 같은 것) 이름으로 */
export type RecipeItem =
  | { id: IngredientId; amount: string; check?: boolean }
  | { name: string; amount: string; check?: boolean }

export type Step = {
  phase: '준비' | '조리'
  /** 분량이 들어간 문장 */
  text: string
  /** 영상 시작 위치(초) → "이 부분 보기" */
  startAt?: number
  /** 타이머 시간(초) */
  timer?: number
  /** 자동 자막이라 영상으로 확인이 필요한 단계 */
  check?: boolean
}

/** 영상 레시피. 대표가 아닌 영상은 video만 있어도 돼요 */
export type Recipe = {
  id: string
  menuId: MenuId
  video: Video
  /** 어디서 옮겼나 */
  source?: '설명란' | '자막' | '자동 자막'
  servings?: string
  tools?: string[]
  ingredients?: RecipeItem[]
  steps?: Step[]
  tips?: string[]
  /** 확인이 필요한 부분 안내 */
  warning?: string
}

/* ───────── 내 기록: 폰에 저장 (2차에 공유 저장소로) ───────── */

/** 하루 식단: 메뉴 또는 글 메모 */
export type DayPlan = {
  menuId?: MenuId
  /** "외식", "건너뜀" 같은 글. 장보기에 영향 없음 */
  note?: string
  /** 다시 뽑아도 안 바뀜 */
  locked?: boolean
  /** 넉넉히 만들기 → 다음 날 점심 도시락 */
  cookExtra?: boolean
}

/** 한 주 식단. 키는 "2026-W43" 같은 주 이름 */
export type WeekPlan = {
  /** 월요일 날짜 (YYYY-MM-DD) */
  start: string
  /** 월~일 7칸 */
  days: DayPlan[]
  /** 이번 주에 만들 밀프랩 → 재료가 장보기에 들어감 */
  preps?: MenuId[]
}

export type UserData = {
  /** 기록 형식 버전. 형식이 바뀌면 올리고 옛 기록을 옮겨요 */
  version: 1
  weeks: Record<string, WeekPlan>
  /** 주별 장보기 체크 (재료 id 기준) */
  shopChecks: Record<string, IngredientId[]>
  /** 주별 직접 추가한 장보기 항목 */
  extraItems: Record<string, { name: string; done: boolean }[]>
  /** 집에 늘 있는 재료 중 떨어진 것 */
  stapleOut: IngredientId[]
  /** 하트 누른 레시피 id → 누른 날짜 */
  hearts: Record<string, string>
  /** 레시피 id → 메모 목록 */
  notes: Record<string, { date: string; text: string }[]>
  /** 해먹은 기록 */
  cooked: { date: string; menuId: MenuId; recipeId?: string }[]
  /** "안 보고 해요"를 켠 메뉴 */
  memorized: MenuId[]
}
