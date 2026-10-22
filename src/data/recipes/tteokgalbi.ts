// 떡갈비 (밀프랩) 영상. 조회수는 2026-10-22 확인. 대표 레시피는 4단계에서 정리.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  { id: 'tteokgalbi-paik', menuId: 'tteokgalbi', video: v('wyCV_de0CDY', '두툼한 떡갈비 성공하는 TIP 대방출', '백종원 PAIK JONG WON', 1355917, 692) },
  { id: 'tteokgalbi-kimds', menuId: 'tteokgalbi', video: v('MRRbsQ6H3_s', '떡갈비는 이렇게 만들어야 인정 받습니다', '김대석 셰프TV', 990908, 412) },
  { id: 'tteokgalbi-thiscook', menuId: 'tteokgalbi', video: v('vyEI-LSiNBI', '세상 쉬운 떡갈비 9천원으로 온 가족 행복하게', '이 남자의 cook', 764042, 201) },
  { id: 'tteokgalbi-sosohwang', menuId: 'tteokgalbi', video: v('2aWsYMYndqc', '집에서 인생 떡갈비 만드는 법', '소소황 Cook & Eat', 159258, 195) },
  { id: 'tteokgalbi-lunchbox', menuId: 'tteokgalbi', video: v('fF1eFwCsh-Y', '대용량 소고기로 떡갈비 20개 한번에 만들기', '아들새끼 도시락', 136417, 275) },
] satisfies Recipe[]
