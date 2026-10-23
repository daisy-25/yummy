// 돼지고기 짜글이 영상 레시피. 조회수는 2026-10-23 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-23' })

export default [
  {
    id: 'jjageuli-simbanggol',
    menuId: 'jjageuli',
    video: v('60MHzTDyfxY', '돼지고기 짜글이 제일 맛있게 만드는 황금레시피', '심방골주부', 1659447, 436),
    source: '설명란',
    servings: '돼지고기 300g 기준 (2인 저녁 + 도시락)',
    tools: ['냄비 (넓고 얕은 것)'],
    ingredients: [
      { id: 'pork-front', amount: '300g' }, { id: 'potato', amount: '1개' }, { id: 'onion', amount: '1/2개' },
      { id: 'green-onion', amount: '1뿌리' }, { id: 'cheongyang', amount: '1개' },
      { id: 'gochujang', amount: '1.5스푼' }, { id: 'chili-flakes', amount: '1스푼' }, { id: 'garlic-minced', amount: '1스푼' },
      { name: '생강청', amount: '1스푼 (없으면 맛술)' }, { id: 'soy', amount: '2스푼' }, { id: 'doenjang', amount: '1/2스푼' },
      { id: 'olive-oil', amount: '1스푼' }, { id: 'pepper', amount: '조금' },
    ],
    steps: [
      { phase: '준비', text: '돼지고기 300g을 한입 크기로 썰어요', check: true },
      { phase: '준비', text: '감자 1개 · 양파 1/2개를 썰고, 대파 1뿌리 · 청양고추 1개도 썰어요', check: true },
      { phase: '준비', text: '고추장 1.5 · 고춧가루 1 · 다진마늘 1 · 생강청 1 · 진간장 2 · 된장 1/2스푼 · 후추 조금을 섞어 양념을 만들어요', check: true },
      { phase: '조리', text: '냄비에 올리브유 1스푼을 두르고 돼지고기를 볶아요', check: true },
      { phase: '조리', text: '고기 겉이 익으면 양념을 넣고 같이 볶아요', check: true },
      { phase: '조리', text: '물 200ml와 감자 · 양파를 넣고 감자가 익을 때까지 자작하게 끓여요', check: true },
      { phase: '조리', text: '대파 · 청양고추를 넣고 한 번 더 끓이면 완성', check: true },
    ],
    tips: [
      '생강청이 없으면 맛술을 넣으래요 (설명란)',
      '짜글이는 국물이 자작해야 해요. 물은 처음엔 200ml만 넣고, 졸아들면 조금씩 더해요',
    ],
    warning: '재료와 양은 설명란에서 옮겼지만, 유튜브 자막을 받지 못해(요청 제한) 만드는 순서는 영상으로 확인하지 못했어요. 처음 만들 땐 영상을 보면서 순서를 맞춰 주세요',
  },
  { id: 'jjageuli-limjjang', menuId: 'jjageuli', video: v('sMFjET_qDLc', '저희 가게 대표 메뉴 짜글이 레시피를 공개합니다', '임성근 임짱TV', 2836396, 102) },
  { id: 'jjageuli-simbanggol2', menuId: 'jjageuli', video: v('rak_7elsQ7c', '돼지짜글이 만들기 칼칼하니 맛있게 만드는 황금레시피', '심방골주부', 2153261, 414) },
  { id: 'jjageuli-ttukttak', menuId: 'jjageuli', video: v('Oo1Llh4AjRc', '부대의 전설로 남은 짜글이 찌개 레시피', '1분요리 뚝딱이형', 1081231, 60) },
  { id: 'jjageuli-sungsikyung', menuId: 'jjageuli', video: v('yjsTAAnBZqs', '감자 목살 짜글이', '성시경 SUNG SI KYUNG', 829234, 378) },
] satisfies Recipe[]
