// 카레라이스 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'curry-paik-moksal',
    menuId: 'curry',
    video: v('wDXCxlcr3hY', '목살스테이크카레 | 백종원의 백종원 레시피', '백종원 PAIK JONG WON', 2694999, 344),
    source: '설명란',
    servings: '목살 300g · 물 665ml 기준 (2인 저녁 + 도시락 1번쯤)',
    tools: ['깊은 프라이팬 또는 냄비'],
    ingredients: [
      { id: 'pork-neck', amount: '300g (150g 2덩이)' }, { id: 'salt', amount: '한 꼬집' }, { id: 'pepper', amount: '한 꼬집' },
      { id: 'potato', amount: '1개 (150g)' }, { id: 'carrot', amount: '1/4개 (70g)' }, { id: 'onion', amount: '1개 (200g)' },
      { name: '파프리카 (빨강·노랑·초록)', amount: '50g씩 (없어도 돼요)' },
      { id: 'oil', amount: '2큰술 (30ml)' }, { name: '물', amount: '665ml (3컵 반)' }, { id: 'curry', amount: '60g (영상은 고형카레)' },
    ],
    steps: [
      { phase: '준비', text: '목살 300g의 힘줄을 칼끝으로 끊고, 소금·후추를 한 꼬집씩 뿌려 손으로 톡톡 두드려요' },
      { phase: '준비', text: '감자 1개, 당근 1/4개, 파프리카는 한입 크기로 썰고 양파 1개는 채 썰어요' },
      { phase: '조리', text: '팬에 식용유 2큰술을 두르고 목살을 센불에서 진한 갈색이 될 때까지 구워요 (너무 익혔나 싶을 만큼)', startAt: 116 },
      { phase: '조리', text: '채 썬 양파를 넣고 중불로 줄여 숨이 푹 죽을 때까지 볶아요', startAt: 175 },
      { phase: '조리', text: '당근, 감자, 물 665ml를 넣고 끓어오르면 중불로 줄여 감자가 익을 때까지 끓여요', startAt: 205 },
      { phase: '조리', text: '고형카레 60g을 넣고 잘 저어 풀어요. 너무 뻑뻑하면 물을 조금 더 넣어요', startAt: 227 },
      { phase: '조리', text: '파프리카를 넣고 섞으면 완성. 목살은 썰어서 카레와 함께 밥에 올려요' },
    ],
    tips: [
      '목살이 없으면 앞다리살·뒷다리살도 돼요. 대신 얇은 것보다 두툼한 걸로 사요',
      '파프리카 대신 토마토를 같은 양만큼 넣어도 맛있대요',
      '영상은 고형카레를 썼지만 카레가루도 상관없다고 해요. 가루면 농도를 보며 나눠 넣어요',
      '도시락·냉동용이면 구운 목살을 한입 크기로 잘라 카레에 넣어도 돼요',
    ],
  },
  { id: 'curry-paik-dwitdari', menuId: 'curry', video: v('LTVxirHWvh8', "이 카레의 주인공은 '고기'입니다. 고기 듬뿍 뒷다리살 카레", '백종원 PAIK JONG WON', 4084081, 683) },
  { id: 'curry-paik-urijip', menuId: 'curry', video: v('u8s0XK5WXuw', '따라 하지 마세요! 저는 집에서 카레 이렇게 만들어 먹습니다', '백종원 PAIK JONG WON', 2269675, 862) },
  { id: 'curry-ttukttak', menuId: 'curry', video: v('djBNwRYV0Cc', '급식과 짬밥 때문에 편견이 생긴 음식 1위 (일본식 카레)', '1분요리 뚝딱이형', 2170974, 60) },
  { id: 'curry-juns', menuId: 'curry', video: v('l6uVBIaHcAA', '일본식 카레 만들기 | 이 재료 하나로 당신의 카레가 바뀝니다', 'Juns Bistro 준스 비스트로', 1629550, 340) },
] satisfies Recipe[]
