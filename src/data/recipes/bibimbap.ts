// 비빔밥 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe, Video } from '../../types.ts'

const v = (youtubeId: string, title: string, channel: string, views: number, seconds: number, isShort = false): Video =>
  ({ youtubeId, title, channel, views, seconds, isShort, checkedAt: '2026-10-22' })

export default [
  {
    id: 'bibimbap-paik-microwave',
    menuId: 'bibimbap',
    video: v('Jq2SwKMw8vI', '5분 안에 만드는 초간단 비빔밥 (전자레인지)', '백종원 PAIK JONG WON', 605898, 366),
    source: '설명란',
    servings: '1인분 (2인이면 재료를 모두 두 배로)',
    tools: ['전자레인지 용기 (뚜껑 또는 랩)', '프라이팬'],
    ingredients: [
      { id: 'rice', amount: '1공기(200g)' }, { id: 'zucchini', amount: '약간(40g)' }, { id: 'bean-sprout', amount: '약 1/2컵(40g)' },
      { id: 'radish', amount: '약간(30g)' }, { id: 'carrot', amount: '약간(14g)' }, { name: '표고버섯', amount: '1개(12g)' },
      { id: 'egg', amount: '1개' }, { id: 'oil', amount: '적당량' },
      { id: 'gochujang', amount: '1큰술' }, { id: 'soy-soup', amount: '1큰술', check: true }, { id: 'sesame-oil', amount: '1큰술' },
      { name: '통깨', amount: '약간' }, { name: '김가루', amount: '약간' },
    ],
    steps: [
      { phase: '준비', text: '표고버섯 1개는 기둥을 떼고 0.2cm 두께로 얇게 채 썰어요' },
      { phase: '준비', text: '무 30g, 당근 14g도 0.2cm 두께로 최대한 얇게 채 썰어요 (두꺼우면 잘 안 익어요)' },
      { phase: '준비', text: '애호박 40g도 얇게 채 썰고, 썬 채소와 콩나물 40g을 한데 섞어요' },
      { phase: '준비', text: '전자레인지 용기에 밥 1공기를 넓게 담고 고추장 1큰술을 밥 위에 넓게 발라요' },
      { phase: '준비', text: '고추장 바른 밥 위에 섞어둔 채소를 올려요' },
      { phase: '조리', text: '뚜껑이나 랩을 씌워 전자레인지(1000W)에 3분 30초 돌려요', timer: 210 },
      { phase: '조리', text: '그동안 팬에 식용유를 둘러 달걀 1개를 튀기듯 부쳐요' },
      { phase: '조리', text: '비빔밥 위에 달걀프라이를 올리고 김가루, 통깨, 참기름 1큰술을 둘러 비비면 완성' },
    ],
    tips: [
      '채소를 일일이 볶거나 데치지 않아서 설거지가 거의 없어요',
      '시간은 1000W 기준이에요. 우리 집 전자레인지 출력을 한 번 확인해 주세요',
      '2인분은 한 그릇씩 따로 돌리면 고르게 익어요',
      '취향에 따라 양파를 더 넣어도 좋아요 (영상 팁)',
    ],
    warning: '설명란 재료에 국간장 1큰술이 있지만 만드는 법에는 언제 넣는지 안 나와요. 영상에서 한 번 확인해 주세요',
  },
  { id: 'bibimbap-jjikjjik', menuId: 'bibimbap', video: v('VT2EmFPyxT4', '돌솥비빔밥', '찍찍이', 1665802, 115) },
  { id: 'bibimbap-momstaste', menuId: 'bibimbap', video: v('KJAHpWjbB2k', '비빔밥 10배 맛있게 만드는법', '엄마의손맛', 410661, 482) },
  { id: 'bibimbap-macaron', menuId: 'bibimbap', video: v('5zvqXZIU_xY', '비빔밥 만들기 / 약고추장 만들기', 'Mrs macarons마카롱여사', 387815, 299) },
  { id: 'bibimbap-bae', menuId: 'bibimbap', video: v('lHAV46uVIZo', '비빔밥 이렇게 간단합니다. 야채 일일이 볶지 마세요!', '30년 집밥, 배여사', 360690, 196) },
] satisfies Recipe[]
