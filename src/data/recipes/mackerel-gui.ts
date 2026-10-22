// 고등어구이 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'mackerel-gui-yangjanggeum',
    menuId: 'mackerel-gui',
    video: v('O4VAqEGGYdk', '환기 필요 없는 생선구이, 집에 있는 이것 한 스푼이면 끝! (고등어구이)', '양장금주부', 2724280, 231),
    source: '설명란',
    servings: '자반고등어 1손(2마리)',
    tools: ['프라이팬', '종이호일'],
    ingredients: [
      { id: 'mackerel', amount: '1손(2마리, 자반고등어)' },
      { id: 'oil', amount: '2큰술' }, { id: 'vinegar', amount: '2큰술' },
    ],
    steps: [
      { phase: '준비', text: '식용유 2큰술과 식초 2큰술을 섞어 생선구이 양념을 만들어요', check: true },
      { phase: '조리', text: '팬에 종이호일을 깔고 자반고등어 2마리를 올려요', check: true },
      { phase: '조리', text: '양념을 고등어에 발라 가며 앞뒤로 노릇하게 구우면 완성', check: true },
    ],
    tips: [
      '종이호일을 깔면 기름이 덜 튀고 팬 설거지가 쉬워요',
      '자반고등어는 이미 간이 되어 있어서 소금을 따로 안 뿌려요',
    ],
    warning: '설명란에는 재료와 양만 있고 만드는 순서가 없어요. 자막을 못 읽어서 순서는 영상 제목과 재료로 정리했으니, 처음엔 영상을 보며 확인해 주세요',
  },
  { id: 'mackerel-gui-yoon', menuId: 'mackerel-gui', video: v('a3XPXqaxXhQ', '고등어, 가자미 생선 굽는 팁 여러 가지', '[윤이련]50년 요리비결', 3660620, 446) },
  { id: 'mackerel-gui-todaytable', menuId: 'mackerel-gui', video: v('4xAqyz7bo88', '생선구이의 핵심은 이것! 창문 닫고 구워도 생선냄새 없어요', '오늘식탁', 3501508, 570) },
  { id: 'mackerel-gui-thiscook', menuId: 'mackerel-gui', video: v('5VLV3VpDLxQ', '고등어 비린맛 없이 굽는 법', '이 남자의 cook', 3350809, 274) },
  { id: 'mackerel-gui-jubunara', menuId: 'mackerel-gui', video: v('r7n9SyXuGlY', '고등어를 전자렌지에 넣어보세요', '주부나라', 2746002, 649) },
] satisfies Recipe[]
