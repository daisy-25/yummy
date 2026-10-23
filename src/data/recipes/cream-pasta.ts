// 치킨 크림 파스타 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'cream-pasta-dday-chicken',
    menuId: 'cream-pasta',
    video: v('ZfRBeX7bTDE', '(원팬) 치킨 크림 파스타 만들기', '매일맛나 delicious day', 2190152, 340),
    source: '설명란',
    servings: '2인분',
    tools: ['깊은 프라이팬 (팬 하나로 끝나요)'],
    ingredients: [
      { id: 'pasta', amount: '160g (페투치네, 스파게티면도 OK)' }, { id: 'chicken-breast', amount: '1덩이 (168g)' },
      { id: 'heavy-cream', amount: '150g' }, { id: 'milk', amount: '150g' },
      { id: 'onion', amount: '1/2개 (80g)' }, { id: 'button-mushroom', amount: '4개 (80g)' }, { id: 'garlic-whole', amount: '4알 (25g)' },
      { id: 'butter', amount: '20g' }, { id: 'oil', amount: '2스푼' }, { id: 'olive-oil', amount: '1스푼' },
      { id: 'flour', amount: '1스푼 (10g)' }, { id: 'salt', amount: '1티스푼 + 닭 밑간 0.5티스푼' },
      { id: 'pepper', amount: '조금' }, { name: '크러쉬드 레드페퍼', amount: '1티스푼' },
    ],
    steps: [
      { phase: '준비', text: '양송이 80g은 썰고, 마늘 25g과 양파 80g은 다져요' },
      { phase: '준비', text: '닭가슴살은 두께를 반으로 가른 뒤 약간 길쭉하게 썰어요' },
      { phase: '준비', text: '닭에 소금 0.5티스푼 · 크러쉬드 레드페퍼 1티스푼 · 밀가루 1스푼 · 후추 · 올리브오일 1스푼을 버무려 30분 재워요', timer: 1800 },
      { phase: '조리', text: '팬에 식용유를 두르고 닭을 볶다가 노릇해지면 잠시 덜어둬요', startAt: 95 },
      { phase: '조리', text: '같은 팬에 식용유와 버터 20g을 더 넣고 양파 · 마늘을 양파가 투명해질 때까지 볶아요', startAt: 121 },
      { phase: '조리', text: '닭을 다시 넣고 한 번 볶은 뒤 물 400ml를 부어요', startAt: 150 },
      { phase: '조리', text: '물이 끓으면 면 160g을 넣고 중불에서 5분 끓여요', startAt: 171, timer: 300 },
      { phase: '조리', text: '우유 150g · 생크림 150g · 소금 1티스푼 · 양송이를 넣고 면이 익을 때까지 3~4분 더 끓여요', startAt: 210, timer: 210 },
      { phase: '조리', text: '국물이 자작하게 남았을 때 불을 끄고 후추를 뿌려 섞으면 완성', startAt: 236 },
    ],
    tips: [
      '면을 따로 삶지 않고 팬 하나로 끝내요. 닭과 같이 끓여서 국물이 진해져요',
      '국물을 넉넉히 남기고 불을 꺼요. 묽어 보여도 그릇에 담으면 걸쭉해져요',
      '닭 양념에 넣은 밀가루가 잡내를 없애고 소스를 고소하게 해줘요',
      '영상의 스푼은 계량스푼이 아니라 밥숟가락이에요',
    ],
  },
  { id: 'cream-pasta-paik', menuId: 'cream-pasta', video: v('0bnFoRQebq0', "집에서 '크림 파스타'쯤이야", '백종원 PAIK JONG WON', 6661639, 710) },
  { id: 'cream-pasta-dday-alfredo', menuId: 'cream-pasta', video: v('tl0rweispgU', '레스토랑의 맛, 황금비율 크림파스타 만들기', '매일맛나 delicious day', 1966469, 312) },
  { id: 'cream-pasta-ddaracook', menuId: 'cream-pasta', video: v('JBkHgyyTBlM', '크림 파스타 만들기 : 생크림으로 더욱 고소하게', 'ddaracook 따라쿡', 1945402, 282) },
  { id: 'cream-pasta-omad', menuId: 'cream-pasta', video: v('V2VHNxwi3kI', '꼬소한 크림파스타', '하루한끼 one meal a day', 963104, 145) },
] satisfies Recipe[]
