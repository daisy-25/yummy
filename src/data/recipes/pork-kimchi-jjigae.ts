// 돼지고기 김치찌개 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'pork-kimchi-jjigae-paik',
    menuId: 'pork-kimchi-jjigae',
    video: v('qWbHSOplcvY', '해외여행 가면 생각나는 한국 음식 TOP 1 김치찌개', '백종원 PAIK JONG WON', 14664946, 606),
    source: '설명란',
    servings: '2인 (설명란에 몇 인분인지는 없어요)',
    tools: ['냄비'],
    ingredients: [
      { id: 'pork-front', amount: '1컵 (130g)' }, { id: 'kimchi', amount: '3컵 (390g, 신김치)' }, { name: '물', amount: '3컵 (540ml)' },
      { id: 'cheongyang', amount: '2개' }, { id: 'green-onion', amount: '2/3대' },
      { id: 'garlic-minced', amount: '1큰술' }, { id: 'chili-flakes', amount: '굵은 것 1큰술 + 고운 것 1/2큰술' },
      { id: 'soy-soup', amount: '1큰술' }, { name: '새우젓', amount: '1큰술' },
    ],
    steps: [
      { phase: '준비', text: '돼지고기 130g을 1.5cm 두께로 먹기 좋게 썰어요' },
      { phase: '준비', text: '대파 2/3대는 0.5cm로 송송, 청양고추 2개는 0.5cm로 어슷 썰어요' },
      { phase: '조리', text: '냄비에 돼지고기, 물 3컵, 새우젓 1큰술을 넣고 센불로 끓여요 (고기는 볶지 않아요)', startAt: 112 },
      { phase: '조리', text: '끓어오르면 중약불로 줄여 고기가 무를 때까지 최소 10분 끓여요', startAt: 261, timer: 600 },
      { phase: '조리', text: '졸아든 만큼 물을 다시 채우고 신김치 3컵, 국간장 1, 굵은 고춧가루 1, 고운 고춧가루 0.5, 다진마늘 1큰술을 넣어요', startAt: 335 },
      { phase: '조리', text: '팔팔 끓으면 대파와 청양고추를 넣고, 먹기 직전에 고춧가루를 살짝 뿌리면 완성', startAt: 396 },
    ],
    tips: [
      '고기를 물에 먼저 오래 끓여 기름을 우려내는 방식이에요. 10분은 최소이고 20~30분 끓이면 더 맛있대요',
      '새우젓이 없으면 액젓을 조금 넣어도 된대요',
      '두부·양파를 넣고 싶으면 대파 넣을 때 같이 넣어요 (영상에서 취향껏 넣으라고 해요)',
    ],
  },
  { id: 'pork-kimchi-jjigae-paik2', menuId: 'pork-kimchi-jjigae', video: v('DnQ09ZZCjCs', '초간단 김치찌개', '백종원 PAIK JONG WON', 12228629, 407) },
  { id: 'pork-kimchi-jjigae-chip', menuId: 'pork-kimchi-jjigae', video: v('OL6KOzuz7gg', '밥이랑 끝장나게 어울리는 김치찌개 레시피', '칩chip', 4739257, 387) },
  { id: 'pork-kimchi-jjigae-simbang', menuId: 'pork-kimchi-jjigae', video: v('PH_-nGRatgo', '돼지고기 김치찌개 이대로만 끓여보세요', '심방골주부', 4417710, 426) },
  { id: 'pork-kimchi-jjigae-kbs', menuId: 'pork-kimchi-jjigae', video: v('qRa49obXGQE', '어남선생 레시피 평생 김치찌개', 'KBS Entertain', 3277104, 748) },
] satisfies Recipe[]
