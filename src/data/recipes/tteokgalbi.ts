// 떡갈비 (밀프랩) 영상 레시피. 조회수는 2026-10-23 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-23' })

export default [
  {
    id: 'tteokgalbi-thiscook',
    menuId: 'tteokgalbi',
    video: v('vyEI-LSiNBI', '세상 쉬운 떡갈비 9천원으로 온 가족 행복하게', '이 남자의 cook', 764524, 201),
    source: '설명란',
    servings: '다진 고기 450g → 90g짜리 5개 (10개 얼리려면 2배로)',
    tools: ['볼', '프라이팬', '키친타올'],
    ingredients: [
      { id: 'beef-ground', amount: '300g' }, { id: 'pork-ground', amount: '150g' },
      { id: 'green-onion', amount: '흰 부분 15cm (다져서 3스푼)' }, { id: 'cheongyang', amount: '1개' },
      { id: 'soy', amount: '3스푼 (양조간장)' }, { id: 'sugar', amount: '3스푼 (흑설탕)' }, { id: 'mirin', amount: '2스푼' },
      { id: 'mulyeot', amount: '1스푼' }, { id: 'garlic-minced', amount: '1스푼' }, { id: 'sesame-oil', amount: '2스푼' },
      { id: 'sesame-seed', amount: '1스푼' }, { id: 'pepper', amount: '1/3작은술' },
      { id: 'starch', amount: '1스푼 (찹쌀가루도 돼요)' }, { id: 'oil', amount: '조금' },
    ],
    steps: [
      { phase: '준비', text: '소고기 다짐육 300g, 돼지고기 다짐육 150g을 키친타올로 눌러 핏물을 닦아요 (소 2 : 돼지 1)' },
      { phase: '준비', text: '대파 흰 부분 15cm를 잘게 다지고, 청양고추 1개는 씨를 빼고 다져요' },
      { phase: '준비', text: '볼에 간장 3 · 흑설탕 3 · 맛술 2 · 물엿 1 · 참기름 2 · 통깨 1 · 다진마늘 1스푼, 후추 1/3작은술, 다진 대파 3스푼, 청양고추를 넣고 설탕이 녹게 잘 섞어요', startAt: 43 },
      { phase: '준비', text: '고기를 넣고 조물조물 섞어요. 너무 치대지 않는 게 식감에 좋아요', startAt: 110 },
      { phase: '준비', text: '전분 1스푼을 넣고 한 번 더 섞어요 (구울 때 부서지지 않게)', startAt: 121 },
      { phase: '준비', text: '90g씩 5개로 나눠 당구공 크기로 동글게 빚은 뒤 1cm 두께로 납작하게 눌러요', startAt: 131 },
      { phase: '조리', text: '달군 팬에 식용유를 살짝 두르고 약불로 줄여 떡갈비를 올려요', startAt: 150 },
      { phase: '조리', text: '타지 않게 약불에서 여러 번 뒤집어 가며 앞뒤로 짙은 갈색이 날 때까지 구우면 완성', startAt: 169 },
    ],
    tips: [
      '흑설탕이 함박스테이크와 다른 떡갈비 맛을 내는 중요한 재료래요',
      '청양고추는 잡내를 잡아줄 뿐 맵지 않대요',
      '영상에는 냉동 얘기가 없어요. 얼릴 땐 굽기 전, 모양을 잡은 상태로 얼리면 돼요 (백종원 영상 설명란에도 "남은 반죽은 모양을 잡아 냉동보관"이라고 적혀 있어요)',
    ],
  },
  { id: 'tteokgalbi-paik', menuId: 'tteokgalbi', video: v('wyCV_de0CDY', '두툼한 떡갈비 성공하는 TIP 대방출', '백종원 PAIK JONG WON', 1356077, 692) },
  { id: 'tteokgalbi-kimds', menuId: 'tteokgalbi', video: v('MRRbsQ6H3_s', '떡갈비는 이렇게 만들어야 인정 받습니다', '김대석 셰프TV', 991915, 411) },
  { id: 'tteokgalbi-cooky', menuId: 'tteokgalbi', video: v('FOkknHbxhsg', '육즙이 살아나게 떡갈비 굽는법, 쉽고 맛있는 떡갈비 소스', '쿠키키친CookyKitchen', 552520, 393) },
  { id: 'tteokgalbi-tooktak', menuId: 'tteokgalbi', video: v('FZPVw957Rj0', '육즙이 살아있는 떡갈비 만들기', '뚝딱Tooktak', 483841, 630) },
] satisfies Recipe[]
