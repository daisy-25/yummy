// 소고기무국 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'beef-radish-soup-paik',
    menuId: 'beef-radish-soup',
    video: v('vG07DHeNH9c', '찬바람 불면 생각나는 최고의 국물 요리 (소고기뭇국)', '백종원 PAIK JONG WON', 6573893, 894),
    source: '설명란',
    servings: '물 1.5L 기준 (영상에서는 3인분쯤이라고 해요)',
    tools: ['냄비'],
    ingredients: [
      { id: 'radish', amount: '1과 1/2컵 (230g)' }, { id: 'beef-soup', amount: '1컵 (150g, 양지)' }, { id: 'onion', amount: '1/4개 (50g)' },
      { id: 'green-onion', amount: '1/3컵 (30g)' }, { id: 'sesame-oil', amount: '1큰술' }, { id: 'oil', amount: '1큰술' },
      { id: 'garlic-minced', amount: '1큰술' }, { id: 'soy-soup', amount: '2큰술' }, { id: 'fish-sauce', amount: '2큰술 (없으면 빼도 돼요)' },
      { id: 'salt', amount: '1/2큰술' }, { id: 'pepper', amount: '적당히' }, { name: '물', amount: '1.5L' },
    ],
    steps: [
      { phase: '준비', text: '무 230g을 3cm 크기로 납작하게 썰어요' },
      { phase: '준비', text: '소고기 150g은 키친타월로 핏기를 닦아요' },
      { phase: '준비', text: '대파 30g은 송송 또는 어슷하게, 양파 1/4개는 채 썰어요' },
      { phase: '조리', text: '냄비에 참기름 1 + 식용유 1큰술을 두르고 소고기를 볶아요', startAt: 308 },
      { phase: '조리', text: '고기 겉면이 익으면 무를 넣고 같이 볶아요', startAt: 339 },
      { phase: '조리', text: '물 1.5L, 다진마늘 1 · 국간장 2 · 멸치액젓 2큰술을 넣고 중불에서 20분 끓여요', startAt: 347, timer: 1200 },
      { phase: '조리', text: '소고기가 부드러워지면 양파를 넣고 더 끓여요', startAt: 779 },
      { phase: '조리', text: '소금 1/2큰술로 간을 맞추고 대파와 후추를 넣으면 완성' },
    ],
    tips: [
      '간은 처음 끓일 때부터 해야 무와 고기에 간이 배요',
      '끓이는 중간에 물을 보충하지 말고, 모자라면 마지막에 넣어요',
      '영상 뒷부분은 같은 국물로 끓이는 소고기버섯국이에요',
    ],
    warning: '팁 일부(간 시점, 물 보충)는 자동 자막에서 옮겼어요',
  },
  { id: 'beef-radish-soup-biryong', menuId: 'beef-radish-soup', video: v('ZMdYi7wG6JA', '절대 소고기 볶지 마세요. 물을 2번 넣으세요. 시원한 소고기무국', '요리왕비룡 셰프TV', 4870882, 651) },
  { id: 'beef-radish-soup-kimdaeseok', menuId: 'beef-radish-soup', video: v('016PppocDDk', '소고기무국 끓이기, 담백하고 시원한 맛', '김대석 셰프TV', 3227672, 497) },
  { id: 'beef-radish-soup-sonmat', menuId: 'beef-radish-soup', video: v('6kd3lqpP1J4', '깔끔하고 맛있는 소고기무국 끓이는 법', '엄마의손맛', 2773673, 340) },
  { id: 'beef-radish-soup-kimdaeseok-2', menuId: 'beef-radish-soup', video: v('U2k9O0I0048', '소고기무국 기가 막히게 끓이는 특급비법', '김대석 셰프TV', 2024400, 378) },
] satisfies Recipe[]
