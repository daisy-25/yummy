// 양배추 참치덮밥 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'cabbage-tuna-don-mollang',
    menuId: 'cabbage-tuna-don',
    video: v('fdfkrvDHVC8', '규현님 양배추 참치덮밥', 'Mollang_J', 16741769, 31, true),
    source: '설명란',
    servings: '1그릇 (2인 저녁 + 도시락이면 3번)',
    tools: ['전자레인지 용기 (뚜껑 있는 것)'],
    ingredients: [
      { id: 'rice', amount: '반 공기' }, { id: 'cabbage', amount: '150g (손바닥 2장쯤)' }, { id: 'tuna-can', amount: '4스푼' },
      { id: 'egg', amount: '1개' },
      { id: 'oyster-sauce', amount: '1스푼' }, { id: 'tuna-sauce', amount: '1스푼' }, { id: 'chili-flakes', amount: '반 스푼' },
      { id: 'sesame-oil', amount: '2스푼' }, { name: '깨소금', amount: '1스푼' },
    ],
    steps: [
      { phase: '준비', text: '양배추 150g을 얇게 채 썰어요' },
      { phase: '준비', text: '굴소스 1 · 참치액 1 · 고춧가루 0.5스푼을 섞어 양념을 만들어요' },
      { phase: '조리', text: '용기에 밥 반 공기 → 양배추 → 참치 4스푼을 담고 달걀 1개를 깨 올려요' },
      { phase: '조리', text: '노른자를 젓가락으로 콕 찔러 터뜨려요 (전자레인지에서 터지지 않게)' },
      { phase: '조리', text: '뚜껑을 살짝 덮고 전자레인지에 5분 돌려요', timer: 300, check: true },
      { phase: '조리', text: '양념과 참기름 2 · 깨소금 1스푼을 넣고 비비면 완성' },
    ],
    tips: ['불을 안 써서 설거지가 용기 하나뿐이에요'],
    warning: '설명란에 전자레인지 시간이 없어요. 5분은 비슷한 전자레인지 레시피 기준이라 처음엔 중간에 한 번 확인해 주세요',
  },
  { id: 'cabbage-tuna-don-duri', menuId: 'cabbage-tuna-don', video: v('89FXsp6br_o', '양배추 참치 덮밥｜건강한 다이어트 요리', '두리식탁', 115553, 131) },
  { id: 'cabbage-tuna-don-cepp', menuId: 'cabbage-tuna-don', video: v('IRHzcU5zeYA', '냉장고 속 양배추 이렇게 드세요 :: 양배추 참치덮밥', '쿡잇파파 C.E.P.P', 16334, 189) },
  { id: 'cabbage-tuna-don-dietcook', menuId: 'cabbage-tuna-don', video: v('ZdzKZ1YTaM8', '규현 양배추참치덮밥 초간단 5분 레시피', '다잇쿡', 11359, 127) },
  { id: 'cabbage-tuna-don-kkuda', menuId: 'cabbage-tuna-don', video: v('l8BqIFmdO40', '양배추참치덮밥 전자레인지 버전', '꾸다', 8860, 33, true) },
] satisfies Recipe[]
