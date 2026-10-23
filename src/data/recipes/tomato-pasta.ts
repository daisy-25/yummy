// 베이컨 토마토 파스타 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'tomato-pasta-sosohwang',
    menuId: 'tomato-pasta',
    video: v('4qYZuxc-8KY', '무조건 성공하는 쉬운 토마토 파스타', '소소황 Cook & Eat', 1423099, 140),
    source: '자막',
    servings: '2인분 (면 200g)',
    tools: ['프라이팬', '냄비'],
    ingredients: [
      { id: 'pasta', amount: '200g' }, { id: 'tomato-sauce', amount: '300g' }, { id: 'bacon', amount: '80g' },
      { id: 'onion', amount: '1/3개' }, { id: 'garlic-whole', amount: '10알' },
      { name: '칵테일새우', amount: '7마리 (없으면 빼도 돼요)' },
      { id: 'olive-oil', amount: '3~4큰술' }, { id: 'pepperoncino', amount: '3개' },
      { id: 'salt', amount: '면 삶을 때 1큰술' }, { id: 'pepper', amount: '조금' },
      { name: '파슬리 가루', amount: '조금' }, { id: 'parmesan', amount: '조금' },
    ],
    steps: [
      { phase: '준비', text: '면 삶을 물을 냄비에 먼저 올려두세요' },
      { phase: '준비', text: '마늘 10알은 편 썰고, 양파 1/3개는 얇게 채 썰고, 베이컨 80g은 먹기 좋게 썰어요' },
      { phase: '조리', text: '팬에 올리브유 3~4큰술과 편마늘을 넣고 중약불에서 볶아요', startAt: 29 },
      { phase: '조리', text: '마늘 향이 올라오면 베이컨을 넣고 같이 볶아요', startAt: 41 },
      { phase: '조리', text: '양파를 넣고 볶다가 페페론치노 3개를 잘게 부숴 넣어요 (매운 게 싫으면 줄이기)', startAt: 52 },
      { phase: '조리', text: '토마토 파스타소스 300g을 넣고 끓여요', startAt: 69 },
      { phase: '조리', text: '끓는 물에 소금 1큰술과 면 200g을 넣고 7분 삶아요', startAt: 84, timer: 420 },
      { phase: '조리', text: '면을 소스 팬으로 옮기고 면수 1국자를 넣어 센불에서 빠르게 섞어요', startAt: 94 },
      { phase: '조리', text: '새우를 넣고 면수 1국자를 더 넣어 익혀요', startAt: 109 },
      { phase: '조리', text: '파슬리 가루와 치즈를 뿌리면 완성', startAt: 122 },
    ],
    tips: [
      '분량은 설명란, 순서는 채널이 직접 단 자막에서 옮겼어요',
      '새우는 미리 넣으면 질겨져서 마지막에 넣어요. 없으면 베이컨만으로도 충분해요',
      '페페론치노가 없으면 청양고추로 대신해도 돼요',
      '도시락까지 싸려면 모든 재료를 1.5배로 늘려요',
    ],
  },
  { id: 'tomato-pasta-gabie', menuId: 'tomato-pasta', video: v('ZpwCa673qJM', '팬 하나로 끝나는 토마토 스파게티 (원 팬 파스타)', '국가비 GabieKook', 1371134, 642) },
  { id: 'tomato-pasta-kbs', menuId: 'tomato-pasta', video: v('yzbZ7KAKlLo', '어남선생의 초간단 토마토버터파스타', 'KBS Entertain', 655437, 595) },
  { id: 'tomato-pasta-kimds', menuId: 'tomato-pasta', video: v('_iKUeCkqi9I', '소고기 토마토 파스타, 이젠 집에서 만드세요', '김대석 셰프TV', 561727, 247) },
  { id: 'tomato-pasta-masuryeong', menuId: 'tomato-pasta', video: v('_m2wMYf_NiQ', '토마토 파스타가 맛이 없다고요? 그렇다면 이 영상을 보세요', '맛수령', 386150, 482) },
] satisfies Recipe[]
