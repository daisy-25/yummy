// 대패삼겹 양배추덮밥 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'daepae-cabbage-don-jachi',
    menuId: 'daepae-cabbage-don',
    video: v('0dI5URtcX0A', '제육볶음보다 100배 더 맛있는 삼겹양배추덮밥', '자취요리신 simple cooking', 342020, 81),
    source: '설명란',
    servings: '대패 250g · 양배추 250g 기준 (설명란에 몇 인분인지는 없어요)',
    tools: ['프라이팬'],
    ingredients: [
      { id: 'rice', amount: '먹을 만큼' },
      { id: 'pork-belly-thin', amount: '250g' }, { id: 'cabbage', amount: '250g' }, { id: 'green-onion', amount: '적당히' },
      { id: 'cheongyang', amount: '적당히 (선택)' },
      { id: 'garlic-minced', amount: '1스푼' }, { id: 'chili-flakes', amount: '1스푼' }, { id: 'doenjang', amount: '1/2스푼' },
      { id: 'oyster-sauce', amount: '1스푼' }, { id: 'sugar', amount: '1스푼' }, { id: 'sesame-seed', amount: '조금' },
    ],
    steps: [
      { phase: '준비', text: '양배추 250g을 한입 크기로 썰고, 대파는 송송 썰어요' },
      { phase: '조리', text: '팬에 대패삼겹살 250g, 대파, 다진마늘 1스푼을 넣고 볶아요' },
      { phase: '조리', text: '고기가 다 익으면 고춧가루 1스푼을 넣고 볶아 고추기름을 내요' },
      { phase: '조리', text: '양배추, 된장 1/2 · 굴소스 1 · 설탕 1스푼을 넣고 양배추 숨이 죽을 때까지 볶아요' },
      { phase: '조리', text: '청양고추와 통깨를 뿌리고 밥 위에 올리면 완성' },
    ],
    tips: [
      '대패삼겹살에서 기름이 나와서 식용유 없이 바로 볶아요',
      '팬 하나로 끝나서 설거지가 적어요',
    ],
  },
  { id: 'daepae-cabbage-don-sansugol', menuId: 'daepae-cabbage-don', video: v('2aszTDFuueA', '삼겹살 양배추볶음, 이제 그냥 구워 먹지 마세요', '산수골목장 SANSUGOL', 2854691, 139) },
  { id: 'daepae-cabbage-don-leeyeonbok', menuId: 'daepae-cabbage-don', video: v('HvUdN6yjRvI', '5분 만에 즐기는 양배추 돼지고기 볶음', '이연복의 복주머니', 939810, 352) },
  { id: 'daepae-cabbage-don-sosohwang', menuId: 'daepae-cabbage-don', video: v('tvH48Fb79NM', '삼겹살 양배추볶음', '소소황 Cook & Eat', 66088, 137) },
  { id: 'daepae-cabbage-don-ramble', menuId: 'daepae-cabbage-don', video: v('HugkMKRhEOQ', '대패삼겹살 양배추볶음 만드는 법', '램블부부 Ramble Couple', 13496, 85) },
] satisfies Recipe[]
