// 소고기덮밥(규동) 영상 레시피. 조회수는 2026-10-22 확인 (대표는 2026-10-23 자막으로 순서 확인).
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false, checkedAt = '2026-10-22'): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt })

export default [
  {
    id: 'gyudon-jung',
    menuId: 'gyudon',
    video: v('zXpznElExPI', '소고기는 맛있소 6편, 소고기 덮밥 규동', '정호영의 오늘도 요리', 376403, 380, false, '2026-10-23'),
    source: '설명란',
    servings: '소고기 300g 기준 (영상에 인분 표기는 없어요)',
    tools: ['프라이팬 또는 얕은 냄비'],
    ingredients: [
      { id: 'beef-bulgogi', amount: '300g (차돌박이 · 불고기감 · 목심처럼 얇은 고기)' }, { id: 'onion', amount: '1/2개' },
      { id: 'oil', amount: '조금' }, { id: 'rice', amount: '먹을 만큼' },
      { name: '물', amount: '200ml' }, { id: 'soy', amount: '3큰술 (45ml)' }, { id: 'sugar', amount: '3큰술 (45ml)' },
      { id: 'mirin', amount: '1큰술 (15ml)' }, { id: 'cheongju', amount: '1큰술 (15ml)' },
      { id: 'egg', amount: '노른자 1개 (선택)' },
    ],
    steps: [
      { phase: '준비', text: '양파 1/2개를 두툼하게 채 썰어요', },
      { phase: '준비', text: '물 200ml에 간장 3 · 설탕 3 · 맛술 1 · 청주 1큰술을 미리 섞어 양념물을 만들어요' },
      { phase: '조리', text: '팬에 식용유를 두르고 양파를 너무 세지 않은 불에서 흐물흐물해질 때까지 볶아요', startAt: 60 },
      { phase: '조리', text: '소고기 300g을 넣고 풀어 가며 볶아요', startAt: 118 },
      { phase: '조리', text: '섞어 둔 양념물을 붓고 고기가 익을 때까지 끓여요. 볶음과 조림 중간 정도 느낌이에요', startAt: 138 },
      { phase: '조리', text: '끓으면 불을 줄이고, 거품이 올라오면 숟가락으로 걷어내요', startAt: 185 },
      { phase: '조리', text: '밥 위에 고기와 양파를 올리고 국물은 너무 많지 않게 적당히 끼얹어요', startAt: 232 },
      { phase: '조리', text: '가운데 달걀 노른자를 올려 비벼 먹으면 더 맛있어요 (선택)', startAt: 259 },
    ],
    tips: [
      '양파를 먼저 볶아서 단맛을 내고 흐물흐물하게 익히는 게 포인트래요',
      '거품을 걷어내면 고기 잡내가 덜 나요',
    ],
  },
  { id: 'gyudon-justonecookbook', menuId: 'gyudon', video: v('gCQGDWlVN50', '요시노야 규동 만들기', 'Just One Cookbook', 767133, 166) },
  { id: 'gyudon-greed', menuId: 'gyudon', video: v('iiODQ3_smYU', '정말 맛있는 우삼겹 덮밥 규동 레시피', '맛있다 그리드', 574952, 99) },
  { id: 'gyudon-umi', menuId: 'gyudon', video: v('2yX69ZmltPc', '일본식 소고기덮밥 규동 만들기', "Umi's cooking 우미스쿠킹", 403760, 259) },
  { id: 'gyudon-matsangmu', menuId: 'gyudon', video: v('aMrsy0WDLJQ', '초간단 소고기 덮밥, 일본식 규동 레시피', '맛상무', 296655, 339) },
] satisfies Recipe[]
