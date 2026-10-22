// 두부김치 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'dubu-kimchi-paik',
    menuId: 'dubu-kimchi',
    video: v('5eQ1rf642QI', '김치볶음 끝내주는 두부김치', '백종원 PAIK JONG WON', 2908229, 600),
    source: '설명란',
    servings: '두부 1모 분량',
    tools: ['프라이팬', '두부 데칠 냄비'],
    ingredients: [
      { id: 'tofu', amount: '1모(300g)' }, { id: 'kimchi', amount: '1컵(200g)' }, { id: 'pork-belly-thin', amount: '1컵(160g, 삼겹살)' },
      { id: 'onion', amount: '1/4개' }, { id: 'carrot', amount: '1/5컵(20g)' }, { id: 'cheongyang', amount: '1개' },
      { name: '홍고추', amount: '1개' }, { id: 'green-onion', amount: '1/4컵(20g)' }, { name: '물', amount: '반 컵(90ml)' },
      { id: 'sugar', amount: '1/2큰술 (황설탕)' }, { id: 'garlic-minced', amount: '1큰술' }, { id: 'chili-flakes', amount: '1.5큰술 (굵은 것)' },
      { id: 'soy', amount: '3큰술' }, { id: 'sesame-oil', amount: '2큰술 (+ 두부 데칠 때 조금)' }, { name: '깨소금', amount: '1/2큰술' },
    ],
    steps: [
      { phase: '준비', text: '양파 1/4개, 당근 20g을 썰고 청양고추 1개 · 홍고추 1개 · 대파 20g도 썰어요' },
      { phase: '조리', text: '팬에 삼겹살 160g을 한 장씩 펼치고 설탕 1/2큰술을 뿌려 노릇하게 구워요' },
      { phase: '조리', text: '고기가 구워지면 물 반 컵, 굵은 고춧가루 1.5큰술, 다진마늘 1큰술, 간장 3큰술을 넣어 끓여요' },
      { phase: '조리', text: '양념이 고루 섞이면 김치 200g을 넣어 볶아요' },
      { phase: '조리', text: '양파, 당근을 넣어 살짝 볶은 뒤 고추와 대파를 넣고 불을 꺼요' },
      { phase: '조리', text: '골고루 섞고 참기름 2큰술을 뿌려 섞어요' },
      { phase: '조리', text: '끓는 물에 참기름을 조금 넣고 두부 1모를 통째로 데쳐요' },
      { phase: '조리', text: '두부를 접시에 담아 먹기 좋게 썰고, 한쪽에 볶은 김치를 담아 깨소금을 뿌리면 완성' },
    ],
    tips: [
      '삼겹살에 설탕을 뿌려 구우면 고기가 달큰하게 캐러멜처럼 구워져요',
      '대패삼겹살을 쓰면 썰 필요 없이 바로 펼쳐 구울 수 있어요',
    ],
  },
  { id: 'dubu-kimchi-ttal', menuId: 'dubu-kimchi', video: v('dYatXniNTMo', '고기 없이 만드는 초간단 꿀맛 두부김치', '딸을 위한 레시피', 180425, 398) },
  { id: 'dubu-kimchi-tooktak', menuId: 'dubu-kimchi', video: v('PfXtxzMEuQM', '고기 없이 쉽게 만드는 두부김치', '뚝딱Tooktak', 109372, 383) },
  { id: 'dubu-kimchi-jinju', menuId: 'dubu-kimchi', video: v('SchlRI3QAxY', '백종원 두부김치 만들기', '진주키친 Jinju Kitchen', 104041, 147) },
  { id: 'dubu-kimchi-sosohwang', menuId: 'dubu-kimchi', video: v('1yesQsAVK0A', '두부와 김치 그리고 돼지고기, 간단하고 맛있는 두부김치', '소소황 Cook & Eat', 86569, 202) },
] satisfies Recipe[]
