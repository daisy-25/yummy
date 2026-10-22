// 된장찌개 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'doenjang-jjigae-paik-beef',
    menuId: 'doenjang-jjigae',
    video: v('3-xgRrEX-sQ', '할머니가 그리운 맛, 소고기된장찌개', '백종원 PAIK JONG WON', 2838535, 785),
    source: '설명란',
    servings: '2인분',
    tools: ['냄비'],
    ingredients: [
      { id: 'beef-soup', amount: '60g (양지)' }, { id: 'tofu', amount: '약 1/2모(80g)' }, { id: 'zucchini', amount: '약 1/2컵(30g)' },
      { id: 'radish', amount: '약 1/2컵(50g)' }, { id: 'onion', amount: '약 1/2컵(40g)' }, { id: 'green-onion', amount: '약 1/3대(30g)' },
      { id: 'cheongyang', amount: '2개' }, { name: '홍고추', amount: '1개' },
      { name: '물', amount: '2컵(380ml)' }, { id: 'doenjang', amount: '3큰술(60g)' },
      { id: 'chili-flakes', amount: '1/3큰술 (굵은 것)' }, { id: 'garlic-minced', amount: '1/2큰술' },
    ],
    steps: [
      { phase: '준비', text: '무 50g은 사방 2cm, 두께 0.5cm로 썰어요' },
      { phase: '준비', text: '애호박 30g은 3등분해 0.5cm 두께로 썰고, 양파 40g은 적당한 크기로, 두부 80g은 주사위 모양으로 썰어요' },
      { phase: '준비', text: '청양고추 2개 · 홍고추 1개는 1cm 두께로 어슷하게, 대파는 1cm 두께로 송송 썰어요' },
      { phase: '조리', text: '냄비에 소고기 60g을 넣고 볶아요 (냄비가 얇으면 불을 줄여요)' },
      { phase: '조리', text: '고기가 익으면 물 2컵(380ml)을 붓고 무와 된장 3큰술을 넣어 약불로 10분 끓여요', timer: 600 },
      { phase: '조리', text: '채소와 두부, 다진마늘 1/2큰술, 굵은 고춧가루 1/3큰술을 넣고 5분 더 끓이면 완성', timer: 300 },
    ],
    tips: [
      '바지락 없이 소고기로 국물을 내서 우리 집에 딱 맞아요',
      '한 번 끓여 식혔다가 다시 끓이면 더 깊은 맛이 나요 (영상 팁)',
      'MSG는 취향껏 넣어요',
    ],
  },
  { id: 'doenjang-jjigae-paik', menuId: 'doenjang-jjigae', video: v('ffuakdFmuh4', "된장찌개 맛이 안 난다면? '이것'만 기억하세요", '백종원 PAIK JONG WON', 8495003, 838) },
  { id: 'doenjang-jjigae-thiscook', menuId: 'doenjang-jjigae', video: v('Rcf_VUkoF88', '육수와 조미료 없이도 된장찌개 맛있게 끓이는 방법', '이 남자의 cook', 3998040, 219) },
  { id: 'doenjang-jjigae-ttukttak', menuId: 'doenjang-jjigae', video: v('J4vEoFVcguw', '청담동 유명 고깃집 된장찌개 1분 초간단 레시피', '1분요리 뚝딱이형', 3691214, 60) },
  { id: 'doenjang-jjigae-ttal', menuId: 'doenjang-jjigae', video: v('-E6aQuF64bs', '된장찌개가 맛있어지는 비밀', '딸을 위한 레시피', 2762269, 673) },
] satisfies Recipe[]
