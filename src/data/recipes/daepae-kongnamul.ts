// 대패삼겹 콩나물불고기 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'daepae-kongnamul-paik',
    menuId: 'daepae-kongnamul',
    video: v('iGhOobaQHso', '가성비 최고 콩나물불고기', '백종원 PAIK JONG WON', 4152824, 495),
    source: '설명란',
    servings: '영상은 4인분 기준 (대패 280g · 콩나물 300g). 2인 저녁 + 도시락 양과 비슷해요',
    tools: ['넓고 낮은 프라이팬'],
    ingredients: [
      { id: 'pork-belly-thin', amount: '280g' }, { id: 'bean-sprout', amount: '300g (1봉)' },
      { id: 'green-onion', amount: '1과 1/5대' }, { id: 'onion', amount: '3/5개' },
      { id: 'cheongyang', amount: '1개' }, { id: 'perilla', amount: '4장' },
      { id: 'soy', amount: '4큰술' }, { id: 'mirin', amount: '4큰술' }, { id: 'sugar', amount: '2와 1/3큰술 (황설탕)' },
      { id: 'chili-flakes', amount: '약 2큰술 (굵은 것)' }, { id: 'gochujang', amount: '2와 4/5큰술' },
      { id: 'garlic-minced', amount: '1과 4/5큰술' }, { name: '깨소금', amount: '적당히' },
    ],
    steps: [
      { phase: '준비', text: '콩나물 300g을 씻어 체에 밭쳐 물기를 빼요' },
      { phase: '준비', text: '간장 4 · 맛술 4 · 설탕 2와1/3 · 고춧가루 2 · 고추장 2와4/5 · 다진마늘 1과4/5큰술을 섞어 양념장을 만들어요' },
      { phase: '준비', text: '양파 3/5개는 0.5cm로 채 썰고, 대파 1과1/5대는 반 갈라 5cm 길이로 썰어요' },
      { phase: '준비', text: '청양고추 1개는 송송, 깻잎 4장은 반 잘라 1cm로 채 썬 뒤 뭉친 걸 풀어 둬요' },
      { phase: '조리', text: '넓은 팬에 콩나물을 깔고 그 위에 대패삼겹살 280g을 펼쳐 올려요', startAt: 154 },
      { phase: '조리', text: '고기 위에 대파 · 양파 · 청양고추 · 깻잎을 올려요', startAt: 167 },
      { phase: '조리', text: '양념장을 한 바퀴 돌려 붓고 깨소금을 뿌려요 (물은 안 넣어요)', startAt: 249 },
      { phase: '조리', text: '중불을 켜고 채소에서 물이 나오기 시작하면 골고루 뒤적이며 고기가 익을 때까지 볶아요', startAt: 275 },
    ],
    tips: [
      '영상에서는 집에선 양념 재료를 그냥 같은 양(1:1)씩 섞어도 된다고 해요',
      '다 먹고 남은 양념에 밥을 볶아 먹어도 맛있어요',
      '깻잎 · 청양고추는 없으면 빼도 돼요',
    ],
  },
  { id: 'daepae-kongnamul-diggle', menuId: 'daepae-kongnamul', video: v('2NW_jSUxL70', '집밥백선생3 백종원 콩나물불고기 요리법', '디글 :Diggle', 867230, 791) },
  { id: 'daepae-kongnamul-honeykki', menuId: 'daepae-kongnamul', video: v('ARgH7H4jcyM', '콩불 만들기 콩나물 불고기', '꿀키honeykki', 762882, 342) },
  { id: 'daepae-kongnamul-ttukttak', menuId: 'daepae-kongnamul', video: v('F6Y89t4A5H4', '콩나물불고기 체인점 레시피 공개', '1분요리 뚝딱이형', 632472, 60) },
  { id: 'daepae-kongnamul-sosohwang', menuId: 'daepae-kongnamul', video: v('EPlnBLQZwF4', "진짜 대박집보다 맛있는 '콩나물불고기' 역대급 레시피", '소소황 Cook & Eat', 555599, 186) },
] satisfies Recipe[]
