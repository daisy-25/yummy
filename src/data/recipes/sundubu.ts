// 순두부찌개 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'sundubu-paik',
    menuId: 'sundubu',
    video: v('nj-DjQFEZb0', "실패율 0% '양념장 없는' 순두부찌개", '백종원 PAIK JONG WON', 5524685, 702),
    source: '설명란',
    servings: '2인분',
    tools: ['냄비 (또는 뚝배기)'],
    ingredients: [
      { id: 'soft-tofu', amount: '1팩' }, { id: 'pork-ground', amount: '2/5컵(60g)' }, { id: 'egg', amount: '2개' },
      { id: 'onion', amount: '약 1/6개(40g)' }, { id: 'green-onion', amount: '약 1/2컵(28g)' }, { id: 'cheongyang', amount: '2개' },
      { name: '쪽파', amount: '2큰술 (송송 썬 것)' }, { name: '물', amount: '2컵(360ml)' },
      { id: 'sesame-oil', amount: '3큰술' }, { id: 'chili-flakes', amount: '1큰술 (고운 것)' }, { id: 'soy', amount: '2큰술' },
      { id: 'sugar', amount: '1/3큰술 (황설탕)' }, { id: 'salt', amount: '약 1/2큰술', check: true }, { id: 'garlic-minced', amount: '1큰술' },
      { id: 'pepper', amount: '약간' },
    ],
    steps: [
      { phase: '준비', text: '양파 40g은 칼집을 넣어 잘게 썰고, 대파는 반으로 갈라 잘게, 쪽파와 청양고추 2개는 송송 썰어요' },
      { phase: '조리', text: '냄비에 참기름 3큰술을 두르고 대파, 양파, 다진 돼지고기 60g을 넣어 중불에서 볶아요' },
      { phase: '조리', text: '수분이 날아가고 기름이 나오면 불을 끄고 고운 고춧가루 1큰술을 넣어 섞어요' },
      { phase: '조리', text: '고추기름이 나오면 물 2컵(360ml)을 붓고 다시 불을 켜요' },
      { phase: '조리', text: '진간장 2큰술, 설탕 1/3큰술을 넣고 끓으면 소금으로 간을 맞춰요' },
      { phase: '조리', text: '순두부 1팩을 반 갈라 덩어리째 넣고 숟가락으로 조각내요' },
      { phase: '조리', text: '다시 끓어오르면 달걀 2개를 깨 넣고 불을 꺼요' },
      { phase: '조리', text: '청양고추, 쪽파를 올리고 다진마늘 1큰술, 후추를 뿌리면 완성' },
    ],
    tips: [
      '영상은 바지락 10개를 넣지만 우리 집은 빼고 다진 돼지고기로만 끓여요',
      '영상에선 1인분씩 뚝배기에 옮겨 담아 끓인 뒤 달걀을 넣어요',
    ],
    warning: '소금 1/2큰술은 바지락이 들어간 기준이에요. 바지락을 빼면 간이 달라질 수 있으니 조금씩 넣으며 맛을 봐요',
  },
  { id: 'sundubu-macaron', menuId: 'sundubu', video: v('iicQgrn5IDE', '순두부집에서 싫어하는 순두부찌개 (순두부 양념장 만들기)', 'Mrs macarons마카롱여사', 6995066, 211) },
  { id: 'sundubu-paik-oil', menuId: 'sundubu', video: v('GP8_7D5eM6A', "고추기름이 포인트! '순두부찌개'", '백종원 PAIK JONG WON', 4200908, 537) },
  { id: 'sundubu-thiscook', menuId: 'sundubu', video: v('TekDe_ygfBE', '고추참치 순두부찌개', '이 남자의 cook', 3865829, 213) },
  { id: 'sundubu-momstaste', menuId: 'sundubu', video: v('gHrayv9DmMQ', "맛집보다 맛있는 '순두부찌개' 집에서 끓이는 법", '엄마의손맛', 3486816, 401) },
] satisfies Recipe[]
