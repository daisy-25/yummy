// 마파두부덮밥 영상 레시피. 조회수는 2026-10-23 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-23' })

export default [
  {
    id: 'mapo-tofu-bapchanam',
    menuId: 'mapo-tofu',
    video: v('9cZdjyZjXT8', '누구나 좋아하는 마파두부 덮밥 만들기', '밥상차려주는남자', 608985, 574),
    source: '설명란',
    servings: '2~3인분 (2인 저녁 + 도시락)',
    tools: ['넓은 프라이팬', '키친타월'],
    ingredients: [
      { id: 'tofu', amount: '1모' }, { id: 'pork-ground', amount: '200g' },
      { id: 'onion', amount: '1/2개' }, { id: 'green-onion', amount: '1대 (흰 부분 위주)' }, { id: 'carrot', amount: '조금' },
      { id: 'garlic-whole', amount: '3알 (다진마늘도 돼요)' }, { name: '쪽파', amount: '조금 (없어도 돼요)' },
      { id: 'oil', amount: '두부 굽기 3스푼 + 볶기 2큰술', check: true },
      { id: 'soy', amount: '2큰술' }, { id: 'mirin', amount: '2큰술' }, { id: 'sugar', amount: '1큰술' },
      { id: 'oyster-sauce', amount: '1큰술' }, { id: 'doubanjiang', amount: '2큰술' }, { id: 'pepper', amount: '조금' },
      { id: 'starch', amount: '두부에 1~2스푼 + 전분물에 1~2스푼', check: true },
      { id: 'sesame-oil', amount: '0.5큰술' }, { name: '고추기름', amount: '0.5큰술 (있으면)' },
    ],
    steps: [
      { phase: '준비', text: '두부 1모를 손톱만 한 작은 주사위 모양으로 썰어 키친타월에 올려 물기를 빼요' },
      { phase: '준비', text: '양파 1/2개 · 대파 1대(흰 부분 위주) · 당근 조금을 잘게 썰고, 마늘 3알은 편으로 썰어요. 쪽파는 송송 썰어 고명으로 둬요' },
      { phase: '준비', text: '물기 뺀 두부에 전분 1~2스푼을 부서지지 않게 살살 묻혀요' },
      { phase: '조리', text: '팬에 식용유 3스푼을 두르고 두부를 노릇하게 구워 꺼내 둬요. 자꾸 건드리면 부서지니 그냥 두세요', startAt: 147 },
      { phase: '조리', text: '남은 기름에 식용유 2스푼을 더 두르고 약불에서 마늘 · 대파를 볶아 향을 내요', startAt: 225 },
      { phase: '조리', text: '노릇하게 색이 나면 다진 돼지고기 200g을 넣고 바싹 볶아요', startAt: 257 },
      { phase: '조리', text: '양파 · 당근을 넣고 한 번 더 볶아요', startAt: 284 },
      { phase: '조리', text: '진간장 2 · 맛술 2 · 설탕 1 · 굴소스 1 · 두반장 2큰술을 넣고 볶아요', startAt: 293 },
      { phase: '조리', text: '물 2컵 정도를 붓고 끓이면서 간을 봐요', startAt: 345, check: true },
      { phase: '조리', text: '전분 1~2스푼에 물 4~5스푼을 섞어 전분물을 만들고, 소스가 끓으면 조금씩 넣으며 걸쭉하게 맞춰요', startAt: 377, check: true },
      { phase: '조리', text: '구운 두부를 넣고 잘 섞어 한 번 확 끓여요', startAt: 411 },
      { phase: '조리', text: '불을 끄고 참기름 0.5큰술(고추기름 있으면 0.5큰술도)을 두르고 쪽파를 올리면 완성', startAt: 427 },
    ],
    tips: [
      '두반장이 없으면 고추장이랑 고춧가루를 조금씩 넣으래요',
      '두부 굽기가 귀찮으면 끓는 물에 잠깐 데쳐서 써도 돼요. 그냥 넣으면 많이 부서져요',
      '생강이 있으면 마늘 · 대파 볶을 때 같이 넣어요. 치킨스톡이나 소고기 다시다는 넣어도 되고 안 넣어도 돼요',
      '전분물은 한꺼번에 붓지 말고 조금씩 넣으며 덮밥 농도로 맞춰요',
    ],
    warning: '물(2컵)과 전분 양은 설명란에 없어서 자동 자막에서 옮겼어요. 농도는 보면서 맞춰 주세요',
  },
  { id: 'mapo-tofu-paik', menuId: 'mapo-tofu', video: v('BqxpjY7TJ8g', '정말 쉽게 만드는 마파두부', '백종원 PAIK JONG WON', 3116781, 452) },
  { id: 'mapo-tofu-momstaste', menuId: 'mapo-tofu', video: v('qlr4GU7AqxY', '평생 써먹는 마파두부 만드는 법', '엄마의손맛', 1609750, 371) },
  { id: 'mapo-tofu-yeonbok', menuId: 'mapo-tofu', video: v('I0UXgqBoIEQ', '아주 간단한 3분 마파두부', '이연복의 복주머니', 929792, 269) },
  { id: 'mapo-tofu-ej', menuId: 'mapo-tofu', video: v('Auw5xWjHHEM', '마파두부 만들기 이연복 셰프 레시피', '이제이레시피EJ recipe', 530247, 295) },
] satisfies Recipe[]
