// 스팸마요 주먹밥 (밀프랩) 영상. 조회수는 2026-10-22 확인. 대표 레시피는 4단계에서 정리.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  { id: 'spam-jumeokbap-eunju', menuId: 'spam-jumeokbap', video: v('9cGWDBYaL2o', '스팸마요주먹밥 300만뷰 레시피', '은주리리', 3734218, 189) },
  { id: 'spam-jumeokbap-huttak', menuId: 'spam-jumeokbap', video: v('wOjNFzc9r6A', '일주일 집밥 걱정 끝! 퇴근 후 꺼내먹기만 하세요', '후딱 레시피', 2294444, 189) },
  { id: 'spam-jumeokbap-sosohwang', menuId: 'spam-jumeokbap', video: v('uAm6L_6g7pY', '팔아도 되는 역대급 스팸주먹밥', '소소황 Cook & Eat', 1480215, 162) },
  { id: 'spam-jumeokbap-maeng', menuId: 'spam-jumeokbap', video: v('jLjGxC0KT9g', '삼각김밥 대량으로 만들어서 냉동보관하면 진짜 편해요', '맹식당', 100549, 315) },
] satisfies Recipe[]
