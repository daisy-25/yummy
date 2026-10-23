// 두부조림 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'dubu-jorim-harukki',
    menuId: 'dubu-jorim',
    video: v('4-T3G_b4QKo', '밥도둑 매콤두부조림', '하루한끼 one meal a day', 2983128, 238),
    source: '설명란',
    servings: '두부 1모 분량 (2인 저녁 + 도시락)',
    tools: ['프라이팬', '키친타월'],
    ingredients: [
      { id: 'tofu', amount: '1모(300g)' }, { id: 'onion', amount: '1/2개' }, { id: 'green-onion', amount: '조금' },
      { id: 'oil', amount: '조금' },
      { name: '물', amount: '6큰술', check: true }, { id: 'soy', amount: '2큰술', check: true }, { id: 'chili-flakes', amount: '1큰술', check: true },
      { id: 'sesame-oil', amount: '1큰술', check: true }, { id: 'sugar', amount: '0.5큰술', check: true }, { id: 'garlic-minced', amount: '0.5큰술', check: true },
      { id: 'sesame-seed', amount: '조금 (선택)' },
    ],
    steps: [
      { phase: '준비', text: '두부 1모(300g)는 키친타월로 물기를 닦고 도톰하게 썰어요' },
      { phase: '준비', text: '양파 1/2개와 대파는 잘게 썰어요' },
      { phase: '준비', text: '물 6 · 진간장 2 · 고춧가루 1 · 참기름 1 · 설탕 0.5 · 다진마늘 0.5를 섞어 양념을 만들어요' },
      { phase: '조리', text: '팬에 식용유를 두르고 중불에서 두부를 앞뒤로 노릇하게 구워요' },
      { phase: '조리', text: '두부가 노릇해지면 썰어둔 양파와 대파를 흩뿌리고 양념을 끼얹어요' },
      { phase: '조리', text: '약불로 줄여 양념이 졸아들 때까지 기다려요' },
      { phase: '조리', text: '불을 끄고 통깨와 대파 흰 부분을 올리면 완성' },
    ],
    tips: [
      '두부 물기를 꼭 닦아야 구울 때 기름이 덜 튀고 잘 안 부서져요',
      '식어도 맛있어서 다음 날 도시락 반찬으로 좋아요',
    ],
    warning: '설명란에 "물6 + 진간장2 …"처럼 비율만 있고 단위가 없어요. 큰술로 적었으니 처음엔 영상에서 양을 한 번 확인해 주세요',
  },
  { id: 'dubu-jorim-maangchi', menuId: 'dubu-jorim', video: v('ob2CYmTx9PM', '두부조림 (Spicy braised tofu)', 'Maangchi', 5576184, 474) },
  { id: 'dubu-jorim-paik', menuId: 'dubu-jorim', video: v('Eino3yP-Wk0', '얼큰하고 매콤하게~ 밥도둑 두부조림', '백종원 PAIK JONG WON', 5490822, 519) },
  { id: 'dubu-jorim-sosohwang', menuId: 'dubu-jorim', video: v('GKPoSTwxAMk', '쫀득쫀득 짭쪼름한 두부간장조림', '소소황 Cook & Eat', 3253640, 187) },
  { id: 'dubu-jorim-eonam', menuId: 'dubu-jorim', video: v('As8bN8Yr8oQ', '어남선생 두부조림 (신상출시 편스토랑)', 'KBS Entertain', 3177798, 557) },
] satisfies Recipe[]
