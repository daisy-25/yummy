// 닭갈비 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'dakgalbi-haruhanki',
    menuId: 'dakgalbi',
    video: v('CKX23rD1wus', '닭갈비 먹고 볶음밥까지', '하루한끼 one meal a day', 1390061, 300),
    source: '설명란',
    servings: '닭다리살 500g 기준 (영상에 인분 표기는 없어요)',
    tools: ['넓은 프라이팬', '볼'],
    ingredients: [
      { id: 'chicken-thigh', amount: '500g' },
      { id: 'cabbage', amount: '적당히' }, { id: 'green-onion', amount: '적당히' }, { id: 'perilla', amount: '적당히' },
      { name: '고구마', amount: '적당히 (선택)' }, { name: '떡', amount: '적당히 (선택)' },
      { id: 'gochujang', amount: '2스푼' }, { id: 'chili-flakes', amount: '2스푼' }, { id: 'sugar', amount: '1스푼 (달달하게는 2스푼)' },
      { id: 'soy', amount: '2스푼' }, { id: 'sesame-oil', amount: '1스푼' }, { id: 'garlic-minced', amount: '1스푼' },
      { id: 'pepper', amount: '톡' }, { id: 'oil', amount: '조금' },
    ],
    steps: [
      { phase: '준비', text: '고추장 2 · 고춧가루 2 · 설탕 1 · 진간장 2 · 참기름 1 · 다진마늘 1스푼, 후추 톡을 섞어 양념을 만들어요' },
      { phase: '준비', text: '닭다리살 500g을 먹기 좋게 썰어 양념에 버무려요 (냉장고에서 재워둬도 돼요)' },
      { phase: '준비', text: '양배추, 대파, 고구마, 깻잎을 먹기 좋게 썰어요 (양은 적당히)' },
      { phase: '조리', text: '팬에 식용유를 두르고 양념한 닭을 약불에서 천천히 익혀요' },
      { phase: '조리', text: '고기가 거의 익으면 깻잎을 뺀 채소와 떡을 넣고 같이 볶아요' },
      { phase: '조리', text: '마지막에 깻잎을 넣고 숨이 죽으면 완성' },
    ],
    tips: [
      '양념이 고추장 2 : 고춧가루 2 : 간장 2 : 설탕 1 : 참기름 1 : 마늘 1이라 외우기 쉬워요',
      '영상에 채소 양이 없어요. 장보기 기준(양배추 1/4통, 대파 1대)만큼 넣으면 넉넉해요',
      '약불로 천천히 익혀야 양념이 타지 않아요',
    ],
  },
  { id: 'dakgalbi-wtable', menuId: 'dakgalbi', video: v('0Jf5HVVe4ko', '치즈가 듬뿍! 매콤한 치즈닭갈비', '우리의식탁 W TABLE', 1464177, 336) },
  { id: 'dakgalbi-maangchi', menuId: 'dakgalbi', video: v('JWccdweoVQg', '닭갈비 만드는 법', 'Maangchi', 1198465, 826) },
  { id: 'dakgalbi-thismancook', menuId: 'dakgalbi', video: v('YuSBnZi89MM', "'이것' 넣어서 음식점 맛 내기! 춘천 닭갈비 양념장 비법", '이 남자의 cook', 1122479, 268) },
  { id: 'dakgalbi-maangchi-2013', menuId: 'dakgalbi', video: v('ncv1NbfeqNw', '매콤한 닭고기 채소 볶음 (닭갈비)', 'Maangchi', 1046040, 532) },
] satisfies Recipe[]
