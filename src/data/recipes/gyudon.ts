// 소고기덮밥(규동) 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'gyudon-jung',
    menuId: 'gyudon',
    video: v('zXpznElExPI', '소고기는 맛있소 6편, 소고기 덮밥 규동', '정호영의 오늘도 요리', 376328, 380),
    source: '설명란',
    servings: '소고기 300g 기준 (영상에 인분 표기는 없어요)',
    tools: ['프라이팬 또는 얕은 냄비'],
    ingredients: [
      { id: 'beef-bulgogi', amount: '300g' }, { id: 'onion', amount: '1/2개' }, { id: 'rice', amount: '먹을 만큼' },
      { name: '물', amount: '200ml' }, { id: 'soy', amount: '3큰술 (45ml)' }, { id: 'sugar', amount: '3큰술 (45ml)' },
      { id: 'mirin', amount: '1큰술 (15ml)' }, { name: '청주', amount: '1큰술 (15ml)' },
    ],
    steps: [
      { phase: '준비', text: '양파 1/2개를 채 썰고, 소고기 300g은 먹기 좋게 잘라요' },
      { phase: '조리', text: '팬에 물 200ml, 간장 3 · 설탕 3 · 맛술 1 · 청주 1큰술을 넣고 끓여요', check: true },
      { phase: '조리', text: '양파를 넣고 숨이 죽을 때까지 끓여요', check: true },
      { phase: '조리', text: '소고기를 넣고 풀어 가며 익혀요', check: true },
      { phase: '조리', text: '밥 위에 고기와 양파를 국물과 함께 올리면 완성' },
    ],
    warning: '설명란에 순서가 없어서 일반적인 규동 순서로 적었어요. 영상으로 한 번 확인해 주세요',
  },
  { id: 'gyudon-justonecookbook', menuId: 'gyudon', video: v('gCQGDWlVN50', '요시노야 규동 만들기', 'Just One Cookbook', 767133, 166) },
  { id: 'gyudon-greed', menuId: 'gyudon', video: v('iiODQ3_smYU', '정말 맛있는 우삼겹 덮밥 규동 레시피', '맛있다 그리드', 574952, 99) },
  { id: 'gyudon-umi', menuId: 'gyudon', video: v('2yX69ZmltPc', '일본식 소고기덮밥 규동 만들기', "Umi's cooking 우미스쿠킹", 403760, 259) },
  { id: 'gyudon-matsangmu', menuId: 'gyudon', video: v('aMrsy0WDLJQ', '초간단 소고기 덮밥, 일본식 규동 레시피', '맛상무', 296655, 339) },
] satisfies Recipe[]
