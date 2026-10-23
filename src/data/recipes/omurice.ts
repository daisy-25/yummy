// 오므라이스 영상 레시피. 조회수는 2026-10-23 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-23' })

export default [
  {
    id: 'omurice-haruhanki',
    menuId: 'omurice',
    video: v('V9a7AL_6Od0', '쉬워서 깜짝 놀라는 오므라이스', '하루한끼 one meal a day', 8029897, 219),
    source: '설명란',
    servings: '2인분 (영상은 1인분 기준이라 2배로 적었어요)',
    tools: ['프라이팬 2개 (하나로 해도 돼요)', '볼'],
    ingredients: [
      { id: 'rice', amount: '2공기' }, { id: 'egg', amount: '4개' },
      { id: 'ham', amount: '조금 (영상은 스팸, 고기도 돼요)' },
      { id: 'onion', amount: '1/2개 (1인분에 1/4개)' }, { id: 'carrot', amount: '조금' }, { id: 'green-onion', amount: '조금' },
      { id: 'ketchup', amount: '4스푼 + 뿌릴 만큼' }, { id: 'soy', amount: '2스푼 (굴소스도 돼요)' },
      { id: 'salt', amount: '조금 (계란에)' }, { id: 'oil', amount: '조금' },
    ],
    steps: [
      { phase: '준비', text: '양파 1/2개, 당근 · 대파 조금, 햄을 모두 잘게 다져요 (감자 · 파프리카 등 있는 채소 아무거나 돼요)' },
      { phase: '준비', text: '계란 4개에 소금을 조금 넣고 잘 풀어요 (1인분에 2개씩 한 장)' },
      { phase: '조리', text: '팬에 식용유를 두르고 대파를 중약불에서 맛있는 냄새가 날 때까지 볶아요', startAt: 64 },
      { phase: '조리', text: '햄을 넣고 노릇하게 볶아요 (감자를 넣으면 햄보다 먼저)', startAt: 74 },
      { phase: '조리', text: '나머지 채소를 넣고 양파가 투명해질 때까지 볶아요', startAt: 81 },
      { phase: '조리', text: '케첩 4스푼, 진간장(또는 굴소스) 2스푼을 넣고 섞어요', startAt: 89 },
      { phase: '조리', text: '밥 2공기를 넣고 중불에서 잘 섞어 2분 볶은 뒤 불을 꺼요', startAt: 99, timer: 120 },
      { phase: '조리', text: '다른 팬을 키친타올로 기름만 살짝 바르고, 계란을 1인분씩 부어 약불에서 은근히 익혀요', startAt: 113 },
      { phase: '조리', text: '익은 계란부침을 볶음밥 위에 이불처럼 덮고, 케첩을 뿌려 먹으면 완성', startAt: 141 },
    ],
    tips: [
      '채소는 냉장고에 남은 거 아무거나 써도 돼요',
      '계란은 약불에서 천천히 익혀야 부드러워요',
    ],
  },
  { id: 'omurice-bored', menuId: 'omurice', video: v('KtoB71tQC0g', '회오리 오므라이스', 'BORED', 4579488, 334) },
  { id: 'omurice-ttukttak', menuId: 'omurice', video: v('GPy1OqZxHiE', '잼민이가 만들어도 이것보다는 이쁘게 만들겠다? (오므라이스)', '1분요리 뚝딱이형', 1275139, 60) },
  { id: 'omurice-simcook', menuId: 'omurice', video: v('Z1ewCfL5GRs', '오므라이스 만들기', '간단요리 심쿡 SIMCOOK', 996277, 224) },
  { id: 'omurice-yoritv', menuId: 'omurice', video: v('KJEM1JQjJvM', '화제의 일본식 오므라이스 만드는법', 'YoriTV', 881967, 149) },
] satisfies Recipe[]
