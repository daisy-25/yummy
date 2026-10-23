// 소불고기 브리또 (밀프랩) 영상 레시피. 조회수는 2026-10-23 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-23' })

export default [
  {
    id: 'bulgogi-burrito-elena',
    menuId: 'bulgogi-burrito',
    video: v('oxSGTdUz52Y', '냉동실에 쟁여두고 꺼내 먹는 든든한 소불고기 브리또', '엘레나멍', 104067, 142),
    source: '설명란',
    servings: '양념 소불고기 600g 기준 (설명란에 개수 표기는 없어요)',
    tools: ['프라이팬', '랩 또는 종이호일'],
    ingredients: [
      { id: 'beef-bulgogi', amount: '600g (양념된 것)' }, { id: 'tortilla', amount: '여러 장', check: true },
      { id: 'rice', amount: '적당히', check: true }, { id: 'onion', amount: '약간' }, { id: 'green-onion', amount: '약간' },
      { id: 'mozzarella', amount: '적당히', check: true },
      { name: '스리라차 소스 (어른용) 또는 케첩 (아이용)', amount: '조금' },
    ],
    steps: [
      { phase: '준비', text: '양파 · 대파를 약간씩 썰어요', check: true },
      { phase: '조리', text: '팬에 양념 소불고기 600g과 양파 · 대파를 넣고 국물이 거의 없게 볶아요', check: true },
      { phase: '조리', text: '또띠아에 밥 → 불고기 → 모차렐라 치즈를 올리고 스리라차(또는 케첩)를 뿌려요', check: true },
      { phase: '조리', text: '양옆을 접고 돌돌 말아요', check: true },
      { phase: '조리', text: '팬에 이음새 쪽부터 올려 앞뒤로 노릇하게 구워요', check: true },
      { phase: '조리', text: '식으면 하나씩 랩으로 싸서 냉동실에 넣어요', check: true },
    ],
    tips: [
      '양념 불고기는 사 와도 되고, 불고기 메뉴의 대표 레시피대로 재워도 돼요',
      '먹을 땐 전자레인지 2~3분, 팬에 한 번 더 구우면 바삭해요',
    ],
    warning: '설명란에 재료 이름만 있고 분량 · 순서가 없어요. 유튜브가 자막을 막아서(429) 순서를 확인하지 못해 흔한 브리또 순서로 적었어요. 영상으로 한 번 확인해 주세요',
  },
  { id: 'bulgogi-burrito-ttukttak', menuId: 'bulgogi-burrito', video: v('hRB3fuLXTJs', '제발 외국인한테 억지로 김치 먹이지 말고 한식은 이런 식으로 (불고기 치즈 부리또)', '1분요리 뚝딱이형', 317356, 60) },
  { id: 'bulgogi-burrito-ky', menuId: 'bulgogi-burrito', video: v('rsTX1G8ll9I', '한국식 불고기브리또', '케이와이키친', 63160, 418) },
  { id: 'bulgogi-burrito-jeonup', menuId: 'bulgogi-burrito', video: v('qlQKzU2_iOg', '[냉동 밀프렙 5탄] 불고기 치즈 부리또 만들기', '오늘도 전업', 12464, 235) },
  { id: 'bulgogi-burrito-10k', menuId: 'bulgogi-burrito', video: v('nai2AQi71HE', '불고기와 또띠아의 만남 불고기부리또', '만개의레시피', 10303, 122) },
] satisfies Recipe[]
