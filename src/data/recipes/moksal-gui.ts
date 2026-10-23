// 목살구이와 파절이 영상 레시피. 조회수는 2026-10-23 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-23' })

export default [
  {
    id: 'moksal-gui-thiscook',
    menuId: 'moksal-gui',
    video: v('yZywLY9JbSU', '목살 스테이크, 5천 원으로 소고기만큼 맛있게', '이 남자의 cook', 2350578, 255),
    source: '설명란',
    servings: '목살 1덩어리(240g)가 1인분. 2인이면 고기만 2덩어리',
    tools: ['프라이팬', '볼', '키친타올'],
    ingredients: [
      { id: 'pork-neck', amount: '480g (2.5cm 두께로 2덩어리)' },
      { id: 'salt', amount: '고기 밑간 조금 + 파채 소스 1/2작은술' },
      { id: 'green-onion', amount: '파채 150g' }, { id: 'sugar', amount: '2스푼' }, { id: 'vinegar', amount: '4스푼' },
      { id: 'onion', amount: '1/2개' },
      { name: '스테이크 소스 (또는 돈가스 소스)', amount: '4스푼', check: true },
      { id: 'ketchup', amount: '2스푼' }, { id: 'oyster-sauce', amount: '1스푼' }, { id: 'garlic-minced', amount: '1스푼' },
      { id: 'mirin', amount: '4스푼' }, { id: 'pepper', amount: '1/2작은술' },
      { id: 'butter', amount: '20g (소스 10g + 고기 10g)' },
      { id: 'oil', amount: '넉넉히' }, { id: 'garlic-whole', amount: '10쪽' },
    ],
    steps: [
      { phase: '준비', text: '목살은 2.5cm(손가락 한 마디) 두께로 준비해서 앞뒤에 1cm 간격으로 칼집을 내요' },
      { phase: '준비', text: '고기 앞뒤에 소금을 골고루 뿌리고 20분 재워요', timer: 1200 },
      { phase: '준비', text: '파채 150g을 찬물에 10분 담가 아린 맛을 빼요', timer: 600 },
      { phase: '준비', text: '파채 소스: 설탕 2스푼 · 소금 1/2작은술 · 식초 4스푼을 설탕이 녹을 때까지 저어요' },
      { phase: '준비', text: '양파 1/2개를 채 썰고, 스테이크 소스 4 · 케첩 2 · 굴소스 1 · 다진마늘 1 · 맛술 4스푼 · 후추 1/2작은술 · 물 1/2컵(100ml)을 섞어 소스를 만들어요', check: true },
      { phase: '조리', text: '팬에 버터 한 조각(10g)을 녹이고 양파를 볶아요', startAt: 140 },
      { phase: '조리', text: '양파가 투명해지면 만든 소스를 붓고 원하는 농도까지 졸인 뒤 불을 꺼요', startAt: 151 },
      { phase: '준비', text: '재워 둔 고기 겉면의 핏물을 키친타올로 닦아요', startAt: 164 },
      { phase: '조리', text: '팬에 식용유를 넉넉히 두르고 중불로 달군 뒤, 고기 2덩어리를 한 번에 앞뒤로 뒤집어 가며 짙은 갈색이 될 때까지 구워요', startAt: 171 },
      { phase: '조리', text: '거의 익으면 키친타올로 기름을 닦고, 버터 10g과 통마늘 10쪽을 넣어 자주 뒤집으며 3분 더 구워요', startAt: 192, timer: 180 },
      { phase: '조리', text: '바로 썰지 말고 접시에 담아 5분 쉬게 둬요', startAt: 227, timer: 300 },
      { phase: '조리', text: '파채는 물기를 꼭 짜서 파채 소스에 버무려 고기 옆에 올리고, 고기에 소스를 뿌리면 완성', startAt: 234 },
    ],
    tips: [
      '정육점에서 목살을 2.5cm 두께로 두툼하게 썰어 달라고 하세요',
      '파채는 미리 버무리면 숨이 금방 죽어요. 고기를 담은 다음 마지막에 버무려요',
      '영상의 파채 소스는 고춧가루 없이 새콤달콤한 맛이에요',
      '소스가 마음에 안 들게 나오면 쌈장이나 참기름장에 상추쌈으로 먹어도 된대요',
      '영상은 딸기(또는 방울토마토)를 곁들였는데 없어도 돼요',
    ],
    warning: '설명란은 고기 1인분(240g) 기준이고, 파채 · 소스 양이 몇 인분인지는 따로 안 적혀 있어요. 2인이면 처음엔 그대로 만들고 모자라면 더 만들어 주세요. 스테이크 소스 양은 설명란에 없어서 자동 자막(4스푼)에서 옮겼어요',
  },
  { id: 'moksal-gui-kimdaeseok', menuId: 'moksal-gui', video: v('iHX63xMbAlM', '파절이 양념소스 고깃집 파무침 비법', '김대석 셰프TV', 1254353, 577) },
  { id: 'moksal-gui-jachwi', menuId: 'moksal-gui', video: v('3jt_vdD60tk', '이때까지 먹은 목살구이와는 비교가 안 되는 맛 (매콤목살구이)', '자취요리신 simple cooking', 782912, 108) },
  { id: 'moksal-gui-kimdaeseok2', menuId: 'moksal-gui', video: v('7W_Fj4h3DXs', '유명 고깃집 국물파절이 비밀소스', '김대석 셰프TV', 432306, 337) },
  { id: 'moksal-gui-cepp', menuId: 'moksal-gui', video: v('FbEqf8nSNMU', '고기 선생님의 고깃집 파채무침', '쿡잇파파 C.E.P.P', 383522, 111) },
] satisfies Recipe[]
