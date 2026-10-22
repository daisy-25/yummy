// 소불고기 브리또 (밀프랩) 영상. 조회수는 2026-10-22 확인. 대표 레시피는 4단계에서 정리.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  { id: 'bulgogi-burrito-elena', menuId: 'bulgogi-burrito', video: v('oxSGTdUz52Y', '냉동실에 쟁여두고 꺼내 먹는 든든한 소불고기 브리또', '엘레나멍', 104019, 142, true) },
  { id: 'bulgogi-burrito-ky', menuId: 'bulgogi-burrito', video: v('rsTX1G8ll9I', '한국식 불고기브리또', '케이와이키친', 63159, 418) },
  { id: 'bulgogi-burrito-jeonup', menuId: 'bulgogi-burrito', video: v('qlQKzU2_iOg', '[냉동 밀프렙 5탄] 불고기 치즈 부리또 만들기', '오늘도 전업', 12419, 235) },
  { id: 'bulgogi-burrito-10k', menuId: 'bulgogi-burrito', video: v('nai2AQi71HE', '불고기와 또띠아의 만남 불고기부리또', '만개의레시피', 10302, 123) },
] satisfies Recipe[]
