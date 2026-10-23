// 데리야끼 치킨덮밥 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'teriyaki-don-jung',
    menuId: 'teriyaki-don',
    video: v('rdoc9zmVtoc', '아이들이 환장하는 닭다리살 데리야끼 덮밥! 만능소스까지 공개', '정호영의 오늘도 요리', 452502, 483),
    source: '설명란',
    servings: '2인분 (닭다리살 2조각 · 달걀 2개)',
    tools: ['작은 냄비 (소스용)', '프라이팬'],
    ingredients: [
      { id: 'chicken-thigh', amount: '2조각' }, { id: 'egg', amount: '2개' }, { id: 'cabbage', amount: '한 주먹 (채 썰어서)' },
      { id: 'rice', amount: '2공기' }, { id: 'salt', amount: '한 꼬집씩' }, { id: 'pepper', amount: '한 꼬집 + 마무리 조금' },
      { id: 'butter', amount: '2조각 (달걀용 1 + 조림용 1)' }, { id: 'oil', amount: '조금' },
      { id: 'cheongju', amount: '3큰술' }, { id: 'mirin', amount: '3큰술' }, { id: 'soy', amount: '3큰술' }, { id: 'sugar', amount: '2큰술' },
    ],
    steps: [
      { phase: '준비', text: '닭다리살 2조각 앞뒤로 소금·후추를 한 꼬집씩 뿌려 밑간해요' },
      { phase: '준비', text: '양배추 한 주먹을 얇게 채 썰어요' },
      { phase: '조리', text: '냄비에 청주 3 · 맛술 3 · 간장 3 · 설탕 2큰술을 넣고 설탕이 녹을 때까지만 끓여요', startAt: 85 },
      { phase: '조리', text: '달걀 2개에 소금 한 꼬집, 버터 1조각을 넣어 풀고, 기름 살짝 두른 팬에서 부드럽게 스크램블해 덜어 둬요', startAt: 112 },
      { phase: '조리', text: '팬을 닦고 기름을 살짝 둘러 닭다리살을 껍질 쪽부터 노릇하게 구워요', startAt: 156 },
      { phase: '조리', text: '뒤집어서 살 쪽도 속까지 충분히 익혀요', startAt: 205 },
      { phase: '조리', text: '90% 정도 익으면 소스를 붓고 버터 1조각을 넣어 걸쭉해질 때까지 조려요', startAt: 255 },
      { phase: '조리', text: '밥 위에 양배추 → 스크램블 → 먹기 좋게 썬 닭다리살을 올리고 후추를 뿌리면 완성', startAt: 279 },
    ],
    tips: [
      '도시락까지 3인분이면 닭다리살 3조각, 달걀 3개, 소스 1.5배로 늘려요',
      '고기는 팬에서 다 익히고, 소스는 맛을 입히는 용도예요',
      '닭은 6등분보다 8등분이 먹기 편하대요',
    ],
  },
  { id: 'teriyaki-don-paik', menuId: 'teriyaki-don', video: v('du9q1BldDHU', '식당에서 파는 그 닭고기 덮밥', '백종원 PAIK JONG WON', 2308549, 500) },
  { id: 'teriyaki-don-spiceeats', menuId: 'teriyaki-don', video: v('jbRr01FqINo', '데리야끼 치킨 볶음', 'Spice Eats', 2218688, 198) },
  { id: 'teriyaki-don-kkuri', menuId: 'teriyaki-don', video: v('D0-5UD4TrY4', '무조건 맛있는 치킨 데리야끼 / 간단한 데리야끼 소스', '꾸리 Kkuri', 202385, 78) },
  { id: 'teriyaki-don-handycook', menuId: 'teriyaki-don', video: v('arHnit0GQ6U', '데리야끼 치킨덮밥', 'Handy cook', 127565, 235) },
] satisfies Recipe[]
