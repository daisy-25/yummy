// 돼지 수육 영상 레시피. 조회수는 2026-10-23 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-23' })

export default [
  {
    id: 'suyuk-firstson',
    menuId: 'suyuk',
    video: v('FwhAlr6Axw0', '수육만 수백번 삶았습니다! 수육 맛있게 삶는법', '첫째아들', 4101791, 473),
    source: '설명란',
    servings: '삼겹살 700g (2인 저녁 + 도시락)',
    tools: ['큰 냄비 (물 2L가 들어가는 것)'],
    ingredients: [
      { id: 'pork-block', amount: '700g (삼겹살)' }, { id: 'cheongyang', amount: '2개' },
      { id: 'green-onion', amount: '1대 (넣어도 되고 안 넣어도 돼요)' },
      { id: 'salt', amount: '1숟가락' }, { id: 'sugar', amount: '1숟가락 (까만 수육을 원하면 흑설탕)' },
      { id: 'soju', amount: '반 컵' },
    ],
    steps: [
      { phase: '준비', text: '고기 겉면을 찬물로 한 번 씻어요 (냉동 고기면 완전히 녹인 뒤 끓는 물로 겉만 한 번 데쳐요)' },
      { phase: '준비', text: '청양고추 2개는 양쪽 끝에 칼집을 내요' },
      { phase: '준비', text: '냄비에 물 2L · 소금 1숟가락 · 설탕 1숟가락 · 소주 반 컵 · 청양고추 2개를 넣어요. 대파 1대가 있으면 같이 넣어요', startAt: 223 },
      { phase: '조리', text: '센 불로 물을 팔팔 끓여요', startAt: 309 },
      { phase: '조리', text: '물이 팔팔 끓으면 고기를 넣고, 다시 끓어오를 때까지 센 불을 유지해요', startAt: 318 },
      { phase: '조리', text: '다시 끓으면 중약불로 낮춰요. 끓는 듯 마는 듯 약하게, 뚜껑은 연 채로 40분 삶아요', startAt: 331, timer: 2400 },
      { phase: '조리', text: '고기가 둥둥 뜨면 다 익은 거예요. 불을 끄고 뚜껑을 덮어 10분 뜸 들여요', startAt: 390, timer: 600 },
      { phase: '조리', text: '꺼내서 얇고 넓게 썰면 완성', startAt: 418 },
    ],
    tips: [
      '뒷다리살은 퍽퍽해져요. 삼겹살이나 목살, 앞다리살이면 지방이 낀 부분으로 사세요',
      '센 불로 계속 끓이면 고기가 퍽퍽해져요. 다시 끓은 뒤엔 꼭 약하게 삶아요',
      '된장 · 커피 · 양파는 안 넣어도 충분히 맛있대요. 있으면 취향껏 넣어도 돼요',
      '도시락용 남은 고기는 통에 담고 삶은 물을 고기가 잠기게 부어 빨리 식힌 뒤 냉장 보관해요. 먹을 땐 찜기에 5~10분 쪄요',
    ],
  },
  { id: 'suyuk-gogi', menuId: 'suyuk', video: v('Huu2G13J0_E', '평생 써먹는 수육 먹는 법', '고기남자', 8215347, 744) },
  { id: 'suyuk-manna', menuId: 'suyuk', video: v('uER0frrFpf8', '와인으로 만드는 누린내 없는 수육 삶는 법', '함께해요 맛나요리', 6531276, 631) },
  { id: 'suyuk-kimdaeseok', menuId: 'suyuk', video: v('4RSJy2wCwXs', '이런 수육 보셨나요 너무너무 맛있어서 깜짝 놀랍니다', '김대석 셰프TV', 3639029, 292) },
  { id: 'suyuk-biryong', menuId: 'suyuk', video: v('VVCAZrz0e38', '대박집 수육 맛있게 삶는 법', '요리왕비룡 셰프TV', 3177290, 495) },
] satisfies Recipe[]
