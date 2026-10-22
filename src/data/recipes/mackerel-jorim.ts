// 고등어 김치조림 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'mackerel-jorim-paik',
    menuId: 'mackerel-jorim',
    video: v('j9NXZh0gX3w', '고등어 통조림으로 쉽게 만드는 김치찜', '백종원 PAIK JONG WON', 1440722, 450),
    source: '설명란',
    servings: '고등어 통조림 1캔 분량 (2인)',
    tools: ['냄비', '양념 섞을 볼'],
    ingredients: [
      { name: '고등어 통조림', amount: '1캔(400g)' }, { id: 'kimchi', amount: '1/4포기(400g, 신김치)' },
      { id: 'onion', amount: '1/2개' }, { id: 'cheongyang', amount: '3개' }, { id: 'green-onion', amount: '2/3컵(50g)' },
      { name: '물', amount: '2컵(400ml)' },
      { id: 'chili-flakes', amount: '굵은 것 4큰술 + 고운 것 2큰술' }, { id: 'garlic-minced', amount: '2큰술' },
      { id: 'doenjang', amount: '2큰술' }, { id: 'sugar', amount: '1큰술 (황설탕)' }, { name: '다진 생강', amount: '1/3큰술' },
      { id: 'soy', amount: '2큰술' }, { id: 'sesame-oil', amount: '2큰술' },
    ],
    steps: [
      { phase: '준비', text: '양파 1/2개는 0.5cm 두께로 채 썰고, 대파는 반으로 갈라 송송, 청양고추 3개도 송송 썰어요' },
      { phase: '준비', text: '볼에 다진 생강 1/3 · 다진마늘 2 · 된장 2 · 설탕 1 · 참기름 2 · 고운 고춧가루 2 · 굵은 고춧가루 4 · 간장 2큰술과 통조림 국물을 넣고 섞어 양념장을 만들어요' },
      { phase: '준비', text: '김치 1/4포기는 꽁다리를 잘라내고 냄비 바닥에 깔아요' },
      { phase: '준비', text: '김치 위에 고등어를 살 쪽이 바닥으로 가게 올리고, 굵은 가시는 빼요' },
      { phase: '준비', text: '그 위에 대파, 청양고추, 양파를 올려요' },
      { phase: '조리', text: '물 2컵(400ml)과 양념장을 붓고 끓여요' },
      { phase: '조리', text: '끓어오르면 중불로 줄여 10분 정도 더 끓이면 완성', timer: 600 },
    ],
    tips: [
      '통조림 고등어라 생선 손질도, 비린내 걱정도 없어요. 처음 만들 때 가장 쉬워요',
      '통조림 국물은 버리지 말고 양념장에 넣어요',
      '장보기 목록은 지금 손질 고등어 기준이에요. 이 레시피로 하려면 고등어 통조림을 사요',
    ],
  },
  { id: 'mackerel-jorim-sumi', menuId: 'mackerel-jorim', video: v('PkSUZf6javM', '김수미의 묵은지 고등어조림 (수미네반찬)', 'Olive', 1260544, 443) },
  { id: 'mackerel-jorim-yoon', menuId: 'mackerel-jorim', video: v('_vbbyJ_CM7o', '식당요리 30년 비법 고등어조림(고등어김치찜)', "윤여사's 다이야레시피", 1166220, 291) },
  { id: 'mackerel-jorim-ttal', menuId: 'mackerel-jorim', video: v('v6DE5-0HEvg', '고등어김치조림 고수의 노하우', '딸을 위한 레시피', 938294, 281) },
  { id: 'mackerel-jorim-yangjanggeum', menuId: 'mackerel-jorim', video: v('2qhM8DM9I3I', '신김치로 만드는 묵은지 고등어김치찜', '양장금주부', 759246, 250) },
] satisfies Recipe[]
