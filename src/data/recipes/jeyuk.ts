// 제육볶음 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'jeyuk-biryong',
    menuId: 'jeyuk',
    video: v('j4uYLMKrHf4', '절대 양념 재우지 마세요! 함바집 물 없는 제육볶음', '요리왕비룡 셰프TV', 3271216, 525),
    source: '설명란',
    servings: '앞다리살 600g (2인 저녁 + 도시락)',
    tools: ['넓은 프라이팬'],
    ingredients: [
      { id: 'pork-front', amount: '600g (얇게 썬 것)' }, { id: 'onion', amount: '2개', check: true },
      { id: 'garlic-whole', amount: '10톨' },
      { id: 'oil', amount: '3큰술' }, { id: 'mirin', amount: '2큰술' }, { id: 'maesil', amount: '1큰술' },
      { id: 'pepper', amount: '1큰술' }, { id: 'sugar', amount: '1큰술' }, { id: 'soy', amount: '2큰술 (양조간장)' },
      { id: 'chili-flakes', amount: '4큰술 (굵은 것)' }, { id: 'gochujang', amount: '5큰술', check: true },
      { id: 'mulyeot', amount: '2큰술' }, { id: 'sesame-seed', amount: '조금' },
    ],
    steps: [
      { phase: '준비', text: '통마늘 10톨을 칼로 다져요 (사 온 다진마늘은 물이 생겨서 영상은 통마늘을 써요)' },
      { phase: '준비', text: '양파 2개를 1cm 간격으로 굵게 썰어요' },
      { phase: '준비', text: '앞다리살 600g은 물에 씻지 말고 키친타올로 핏물만 닦아요' },
      { phase: '조리', text: '팬에 식용유 3큰술을 두르고 약불로 달군 뒤 다진 마늘을 노릇하게 볶아요', startAt: 213 },
      { phase: '조리', text: '마늘이 노릇해지면 고기를 넣고 볶아요', startAt: 227 },
      { phase: '조리', text: '고기가 20%쯤 익으면 중불로 올리고 맛술 2 → 매실청 1 · 후추 1 · 설탕 1 → 양조간장 2큰술 순서로 넣어 볶아요', startAt: 278 },
      { phase: '조리', text: '고기가 반 넘게 익으면 양파를 넣고 굵은 고춧가루 4 · 고추장 5 · 물엿 2큰술을 넣어 중불로 3분 볶아요', startAt: 343, timer: 180, check: true },
      { phase: '조리', text: '양파가 아삭하게 살아 있을 때 불을 끄고 통깨를 뿌리면 완성' },
    ],
    tips: [
      '양념을 미리 재우지 않고, 간장 먼저 · 고추장 나중에 두 번 나눠 넣는 게 이 레시피의 핵심이에요',
      '밥반찬 기준 간이에요. 술안주로 먹을 땐 고추장을 1큰술 빼래요',
      '밀프랩으로 얼린다면 이 영상 방식대로 고기만 소분해 얼리고, 양념은 볶을 때 넣는 게 좋아요',
    ],
    warning: '설명란 재료에는 고추장 5큰술, 만드는 순서에는 6큰술로 적혀 있어요. 양파도 설명란은 2개, 영상 말로는 1개 반이에요. 처음엔 고추장 5큰술로 하고 간을 보세요. 후추 1큰술은 설명란 그대로인데 많다 싶으면 줄여도 돼요',
  },
  { id: 'jeyuk-paik', menuId: 'jeyuk', video: v('j7s9VRsrm9o', "대파 듬뿍! 삼겹살로 만든 '대파 제육볶음'", '백종원 PAIK JONG WON', 9578094, 603) },
  { id: 'jeyuk-thiscook', menuId: 'jeyuk', video: v('chnArCaEpqA', '이 영상을 본다면 앞으로 당신의 대표요리는 제육볶음', '이 남자의 cook', 9120418, 256) },
  { id: 'jeyuk-kbs', menuId: 'jeyuk', video: v('oe_WhcK2X4Q', '편스토랑 류수영의 초대박 제육 레시피', 'KBS 한국방송', 9049146, 584) },
  { id: 'jeyuk-biryong2', menuId: 'jeyuk', video: v('5dbvcGvOgvQ', '대박집 제육볶음 황금레시피로 밥 한 공기 뚝딱', '요리왕비룡 셰프TV', 3337344, 622) },
] satisfies Recipe[]
