// 알리오올리오 영상 레시피. 조회수는 2026-10-23 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-23' })

export default [
  {
    id: 'aglio-olio-paik',
    menuId: 'aglio-olio',
    video: v('ohihzV6Z85k', '이탈리아 정통 말고 한국 스타일! K-알리오올리오', '백종원 PAIK JONG WON', 4400581, 791),
    source: '설명란',
    servings: '2인 (영상은 1인분 기준이라 2배로 적었어요)',
    tools: ['냄비', '프라이팬', '체'],
    ingredients: [
      { id: 'pasta', amount: '200g' }, { id: 'salt', amount: '2/3큰술 (면 삶기, 8g) + 마무리 조금' },
      { id: 'olive-oil', amount: '2/3컵 (110g)' }, { id: 'garlic-minced', amount: '4큰술 (80g)' },
      { id: 'garlic-whole', amount: '8개' }, { name: '페퍼론치노', amount: '10개 (청양고추로 바꿔도 돼요)' },
      { name: '쪽파', amount: '조금' }, { id: 'parmesan', amount: '조금' },
    ],
    steps: [
      { phase: '준비', text: '통마늘 8개는 0.2cm 두께로 편 썰고, 쪽파는 0.3cm로 송송 썰어요' },
      { phase: '조리', text: '냄비에 물 2L · 소금 2/3큰술을 넣고 센 불로 끓여요' },
      { phase: '조리', text: '물이 끓으면 스파게티면 200g을 펼쳐 넣고 7~8분 삶아 체에 건져요. 면수는 버리지 말고 140ml쯤 남겨 둬요', timer: 450 },
      { phase: '조리', text: '프라이팬에 올리브유 2/3컵과 편마늘을 넣고 중약불에 올려 볶아요' },
      { phase: '조리', text: '기름이 지글지글하면 페퍼론치노 10개를 반으로 부숴 넣어요' },
      { phase: '조리', text: '편마늘이 노릇해지기 시작하면 다진마늘 4큰술을 넣고 같이 볶아요' },
      { phase: '조리', text: '다진마늘이 노릇하게 색이 나면, 체에 받친 면을 면수에 가볍게 헹궈 물기를 털고 팬에 넣어요' },
      { phase: '조리', text: '젓가락으로 마늘과 면을 가볍게 섞고, 면수 140ml를 넣어 센 불로 볶아요' },
      { phase: '조리', text: '면수와 기름이 고루 섞이고 면에 간이 배면 불을 끄고, 싱거우면 소금을 조금 넣어요' },
      { phase: '조리', text: '접시에 담아 쪽파와 파마산 치즈가루를 뿌리면 완성' },
    ],
    tips: [
      '영상은 1인분(면 100g) 기준이에요. 2인분이라 물 · 소금 · 기름 · 마늘 · 면수를 모두 2배로 적었어요',
      '편마늘과 다진마늘을 같이 써서 마늘 맛이 진한 한국식이에요. 마늘은 타기 쉬우니 중약불을 지켜요',
      '소고기 다시다나 치킨파우더를 조금 넣어도 된대요',
      '메뉴에 있는 베이컨은 이 영상엔 없어요. 넣고 싶으면 하루한끼 영상처럼 마늘 볶을 때 같이 볶아요',
    ],
    warning: '유튜브 자막을 받지 못해(요청 제한) 영상 위치(이 부분 보기)는 넣지 못했어요. 순서와 양은 설명란 그대로예요',
  },
  { id: 'aglio-olio-sample', menuId: 'aglio-olio', video: v('rqKA8lzBHc8', '원팬 파스타 알리오올리오! 생마늘 필요 없는 초간단 레시피', '삼플식당', 4100549, 172) },
  { id: 'aglio-olio-paik2', menuId: 'aglio-olio', video: v('2AdgkR4oGQc', "기본에 충실하면 돼유~ 백종원의 '알리오 올리오'", 'Olive', 3391858, 428) },
  { id: 'aglio-olio-haruhanki', menuId: 'aglio-olio', video: v('FhYXFtFern4', '알리오올리오 맛있네', '하루한끼 one meal a day', 3211614, 192) },
  { id: 'aglio-olio-fabri', menuId: 'aglio-olio', video: v('uhJpo8si6-4', '이탈리아 셰프가 보여주는 정통 알리오올리오', '이태리 파브리 Italy Fabri', 3119811, 730) },
] satisfies Recipe[]
