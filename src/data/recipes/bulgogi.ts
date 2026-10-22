// 소불고기 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'bulgogi-paik',
    menuId: 'bulgogi',
    video: v('nVzwOOJLt24', '초간단 재료로 명품 소불고기 만드는 황금 레시피', '백종원 PAIK JONG WON', 4889041, 699),
    source: '설명란',
    servings: '4인분 (소고기 500g, 2인 저녁 + 도시락 넉넉히)',
    tools: ['큰 볼', '프라이팬'],
    ingredients: [
      { id: 'beef-bulgogi', amount: '500g' }, { id: 'onion', amount: '3/5개 (150g)' }, { name: '표고버섯', amount: '2개 (40g)' },
      { id: 'green-onion', amount: '약 1대 (80g)' }, { name: '홍고추', amount: '1개 (없어도 돼요)' },
      { id: 'sugar', amount: '2와 1/2큰술 (황설탕)' }, { name: '물엿', amount: '1큰술' }, { id: 'garlic-minced', amount: '1큰술' },
      { id: 'soy', amount: '5큰술' }, { id: 'pepper', amount: '약간' }, { id: 'sesame-oil', amount: '3큰술' },
      { name: '통깨', amount: '약간' },
    ],
    steps: [
      { phase: '준비', text: '소고기 500g을 한입 크기로 잘라 볼에 넣고 잘 풀어요' },
      { phase: '준비', text: '황설탕 2와 1/2 · 물엿 1 · 다진마늘 1큰술을 넣고 버무려 10~20분 재워요', timer: 600 },
      { phase: '준비', text: '그동안 표고버섯 2개는 기둥을 떼고 0.3cm로 얇게, 대파·홍고추는 0.5cm로 어슷하게, 양파 3/5개는 0.5cm로 채 썰어요' },
      { phase: '준비', text: '재운 고기에 진간장 5큰술을 넣고 고기가 부서지지 않게 살살 섞은 뒤 썰어 둔 채소를 넣어요' },
      { phase: '준비', text: '후추 약간과 참기름 3큰술을 넣고 섞어요' },
      { phase: '조리', text: '팬을 센불에 달궈 불고기를 올리고, 고기를 풀어 가며 완전히 익을 때까지 볶아요', startAt: 470 },
      { phase: '조리', text: '접시에 담고 통깨를 뿌리면 완성' },
    ],
    tips: [
      '설탕을 간장보다 먼저 넣어야 단맛이 고기에 잘 배요',
      '다음 날 먹을 거면 대파만 넣어 냉장고에 두고, 나머지 채소는 굽는 날 넣어요',
      '표고 대신 새송이·느타리·팽이버섯도 돼요',
      '양파나 버섯을 빼면 간장을 줄여야 해요',
    ],
  },
  { id: 'bulgogi-biryong', menuId: 'bulgogi', video: v('opNq-LJaKok', '명절 소불고기, 식초 액젓에 재우세요!', '요리왕비룡 셰프TV', 2341356, 547) },
  { id: 'bulgogi-kimdaeseok', menuId: 'bulgogi', video: v('aAeqeo_A8bE', "소불고기 양념에 '이것'을 반드시 넣어주세요", '김대석 셰프TV', 2337737, 352) },
  { id: 'bulgogi-paik-global', menuId: 'bulgogi', video: v('p3IQTouKyH0', "글로벌 한식! '소불고기' | 백종원의 백종원 레시피", '백종원 PAIK JONG WON', 1983315, 391) },
  { id: 'bulgogi-sonmat', menuId: 'bulgogi', video: v('qpUivNnyWfA', '불고기 사 먹지 말고 집에서 드세요! 황금 양념비율', '엄마의손맛', 1818560, 492) },
] satisfies Recipe[]
