// 냉장고 털이 볶음밥 영상 레시피 (볶음밥 기본기 영상). 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'fridge-fried-rice-paik',
    menuId: 'fridge-fried-rice',
    video: v('kR77WlHRZrs', '불맛 가득한 달걀볶음밥', '백종원 PAIK JONG WON', 11948478, 537),
    source: '설명란',
    servings: '1공기 (메뉴는 2공기라 모두 두 배로)',
    tools: ['프라이팬', '국자'],
    ingredients: [
      { id: 'rice', amount: '1공기(200g)' }, { id: 'egg', amount: '2개' }, { id: 'green-onion', amount: '1/2컵(40g)' },
      { id: 'oil', amount: '4큰술' }, { id: 'soy', amount: '1/2큰술' },
      { name: '맛소금', amount: '1g' }, { name: 'MSG', amount: '1/4큰술 (선택)' },
    ],
    steps: [
      { phase: '준비', text: '대파 40g을 송송 썰어요 (남은 채소·고기가 있으면 잘게 썰어 둬요)' },
      { phase: '조리', text: '팬에 식용유 4큰술과 대파를 넣고 파기름을 내요. 파가 노릇해지면 한쪽으로 몰아요' },
      { phase: '조리', text: '빈 쪽에 달걀 2개를 넣어 스크램블해요' },
      { phase: '조리', text: '재료가 없는 쪽에 간장 1/2큰술을 넣어 눌어붙듯 끓인 뒤 달걀, 대파와 섞어요' },
      { phase: '조리', text: '맛소금 1g과 밥 1공기를 넣고, 불을 끈 채 국자로 섞어요' },
      { phase: '조리', text: '밥이 골고루 섞이면 센불에 올려 볶아요. 취향에 따라 MSG를 넣으면 완성' },
    ],
    tips: [
      '이번 주에 남은 채소·고기는 파기름을 낸 뒤 함께 볶다가 달걀을 넣어요',
      '간장을 팬에 살짝 눌려야 불맛이 나요',
      '밥을 넣을 때 불을 끄고 섞으면 타지 않고 고루 섞여요',
    ],
  },
  { id: 'fridge-fried-rice-harukki', menuId: 'fridge-fried-rice', video: v('qUDEyONQaCA', '계란볶음밥 만들기 :: 고슬고슬 황금볶음밥', '하루한끼 one meal a day', 100882860, 210) },
  { id: 'fridge-fried-rice-thiscook-egg', menuId: 'fridge-fried-rice', video: v('xjo20zE5ahM', '100번 만들어도 101번 맛있는 계란볶음밥', '이 남자의 cook', 2733063, 228) },
  { id: 'fridge-fried-rice-thiscook-pa', menuId: 'fridge-fried-rice', video: v('siVnsh_6f4M', '집에 계란과 대파만 있을 때, 세상 꼬소한 볶음밥', '이 남자의 cook', 2654556, 168) },
  { id: 'fridge-fried-rice-thiscook-tips', menuId: 'fridge-fried-rice', video: v('YFL5_RuSpgU', '요긴하게 써먹는 볶음밥 비법 4가지', '이 남자의 cook', 2038431, 299) },
] satisfies Recipe[]
