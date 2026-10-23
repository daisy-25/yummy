// 찜닭 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'jjimdak-bapchanam',
    menuId: 'jjimdak',
    video: v('N47QEZQcTBg', '아내가 배달 시킨 거 아니냐고 의심하는 맛집 찜닭 레시피', '밥상차려주는남자', 2241300, 449),
    source: '설명란',
    servings: '2~3인분 (닭 1마리 1kg 기준)',
    tools: ['냄비 (데치기용)', '깊은 냄비 또는 웍'],
    ingredients: [
      { id: 'whole-chicken', amount: '1마리 (1kg)' }, { id: 'potato', amount: '2개' }, { id: 'carrot', amount: '1/2개' },
      { id: 'onion', amount: '1개' }, { id: 'green-onion', amount: '1대' }, { id: 'dangmyeon', amount: '넓적당면 한 줌' },
      { id: 'dried-chili', amount: '10개 (매운 정도에 맞게)' },
      { id: 'garlic-minced', amount: '2스푼' }, { name: '다진 생강', amount: '1스푼 (없어도 돼요)' },
      { id: 'soy', amount: '5스푼' }, { id: 'sugar', amount: '3~4스푼' }, { id: 'sesame-oil', amount: '1스푼' },
      { name: '노추 (노두유)', amount: '1스푼 (없으면 춘장)' }, { id: 'oyster-sauce', amount: '1스푼' },
      { name: '농축 치킨스톡', amount: '1/2스푼 (없어도 돼요)' }, { id: 'pepper', amount: '넉넉히' },
      { name: '물', amount: '400ml' }, { name: '소주 (데칠 때)', amount: '조금 (없어도 돼요)' },
    ],
    steps: [
      { phase: '준비', text: '닭 1마리(1kg)를 찬물에 깨끗이 씻어요' },
      { phase: '준비', text: '감자 2개, 당근 1/2개는 큼직하게 썰고 양파 1개, 대파 1대도 큼직하게 썰어요' },
      { phase: '조리', text: '물을 끓여 닭을 넣고(소주 조금) 겉이 하얗게 될 때까지 1~2분 데친 뒤 건져서 씻어요', startAt: 27, timer: 120 },
      { phase: '조리', text: '냄비에 닭, 참기름 1 · 진간장 5 · 설탕 3 · 다진마늘 2 · 다진생강 1스푼과 건고추를 넣고 볶아 간장으로 코팅해요', startAt: 79 },
      { phase: '조리', text: '감자, 당근, 불리지 않은 넓적당면 한 줌, 물 400ml를 넣고 뚜껑을 덮어 중불로 15분 끓여요', startAt: 133, timer: 900 },
      { phase: '조리', text: '노추 1 · 굴소스 1 · 치킨스톡 0.5스푼, 후추 넉넉히, 양파와 대파를 넣고 센불로 5분 졸여요', startAt: 223, timer: 300 },
      { phase: '조리', text: '맛을 보고 단맛이 부족하면 설탕을 더해요 (영상은 1스푼 더 넣었어요)' },
    ],
    tips: [
      '넓적당면은 불리지 않고 감자와 처음부터 넣어도 안 퍼져요',
      '노추는 색과 윤기를 내는 까만 간장이에요. 없으면 춘장으로 대신하고, 둘 다 없으면 색만 연해져요',
      '영상은 2~3인분 기준이에요',
    ],
    warning: '분량은 설명란, 순서와 시간은 자동 자막에서 옮겼어요. 끓이는 시간(15분 + 5분)은 영상으로 한 번 확인해 주세요',
  },
  { id: 'jjimdak-paik', menuId: 'jjimdak', video: v('kfGi3rTct8c', '1인분 배달 힘들 때, 집에서 뚝딱 만들어 먹는 인생 찜닭', '백종원 PAIK JONG WON', 4668246, 661) },
  { id: 'jjimdak-ttukttak', menuId: 'jjimdak', video: v('0cvI3iAk8Z0', '오백만 원짜리 마약찜닭 레시피', '1분요리 뚝딱이형', 3163738, 59) },
  { id: 'jjimdak-yunireon', menuId: 'jjimdak', video: v('Qka2ZbRthkA', '안동찜닭 집에서 해먹으면 1/3값! 간장찜닭 만드는 법', '[윤이련]50년 요리비결', 2425493, 338) },
  { id: 'jjimdak-thismancook', menuId: 'jjimdak', video: v('blIAgtr1jWw', '식당보다 맛있는 찜닭 만드는 비법 레시피', '이 남자의 cook', 1985653, 277) },
] satisfies Recipe[]
