// 스팸마요 주먹밥 (밀프랩) 영상 레시피. 조회수는 2026-10-23 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-23' })

export default [
  {
    id: 'spam-jumeokbap-eunju',
    menuId: 'spam-jumeokbap',
    video: v('9cGWDBYaL2o', '스팸마요주먹밥 300만뷰 레시피', '은주리리', 3736238, 189),
    source: '설명란',
    servings: '밥 600g (영상은 밥 300g 기준이라 2배로 적었어요)',
    tools: ['프라이팬', '볼', '위생장갑'],
    ingredients: [
      { id: 'spam', amount: '200g (1캔)' }, { id: 'rice', amount: '600g (약 3공기)' }, { id: 'egg', amount: '4개' },
      { id: 'soy', amount: '4스푼' }, { id: 'sugar', amount: '1스푼' },
      { id: 'mayo', amount: '2스푼' }, { id: 'laver', amount: '2~4봉' }, { id: 'sesame-oil', amount: '2스푼' },
    ],
    steps: [
      { phase: '준비', text: '스팸 1캔을 작게 깍둑 썰고, 계란 4개는 풀어 둬요', check: true },
      { phase: '준비', text: '조미김 2~4봉을 잘게 부숴요', check: true },
      { phase: '조리', text: '팬에 계란을 부어 스크램블로 익혀 덜어 둬요', check: true },
      { phase: '조리', text: '같은 팬에 스팸을 노릇하게 볶다가 간장 4 · 설탕 1스푼을 넣고 졸여요', check: true },
      { phase: '조리', text: '볼에 밥 600g, 스팸, 계란, 김, 마요네즈 2 · 참기름 2스푼을 넣고 고루 섞어요', check: true },
      { phase: '조리', text: '한 입 크기로 꼭꼭 뭉치면 완성', check: true },
    ],
    tips: [
      '얼릴 땐 하나씩 랩으로 싸서 얼리고, 먹을 땐 랩째로 전자레인지에 데워요 (영상에는 냉동 얘기가 없어요)',
    ],
    warning: '설명란에 재료 분량만 있고 순서가 없어요. 유튜브가 자막을 막아서(429) 순서를 확인하지 못해 흔한 스팸마요 주먹밥 순서로 적었어요. 영상으로 한 번 확인해 주세요',
  },
  { id: 'spam-jumeokbap-cookingharu', menuId: 'spam-jumeokbap', video: v('AtZOCk3mHE4', '포근포근 계란 안에 폭~ 계란 스팸 주먹밥', '쿠킹하루 Cooking Haru', 2406519, 301) },
  { id: 'spam-jumeokbap-huttak', menuId: 'spam-jumeokbap', video: v('wOjNFzc9r6A', '일주일 집밥 걱정 끝! 퇴근 후 꺼내먹기만 하세요', '후딱 레시피', 2295478, 189) },
  { id: 'spam-jumeokbap-sosohwang', menuId: 'spam-jumeokbap', video: v('uAm6L_6g7pY', '팔아도 되는 역대급 스팸주먹밥', '소소황 Cook & Eat', 1482710, 162) },
  { id: 'spam-jumeokbap-maeng', menuId: 'spam-jumeokbap', video: v('jLjGxC0KT9g', '삼각김밥 대량으로 만들어서 냉동보관하면 진짜 편해요', '맹식당', 100679, 315) },
] satisfies Recipe[]
