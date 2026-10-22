// 닭볶음탕 영상 레시피. 조회수는 2026-10-22 확인.
import type { Recipe } from '../../types.ts'

export default [
  {
    id: 'dakbokkeumtang-jung',
    menuId: 'dakbokkeumtang',
    video: {
      youtubeId: 'pNtwZuhYQeg',
      title: '15분 만에 만드는 닭볶음탕 황금 레시피',
      channel: '정호영의 오늘도 요리',
      views: 3687439, seconds: 679, isShort: false, checkedAt: '2026-10-22',
    },
    servings: '2인 저녁 + 도시락',
    tools: ['깊은 프라이팬 또는 냄비'],
    ingredients: [
      { id: 'whole-chicken', amount: '1마리(1.5kg)' }, { id: 'potato', amount: '2개' }, { id: 'onion', amount: '1/2개' },
      { id: 'green-onion', amount: '1대' }, { id: 'garlic-minced', amount: '1큰술' }, { id: 'oil', amount: '넉넉히' },
      { id: 'soy', amount: '6큰술' }, { id: 'sugar', amount: '4큰술' }, { id: 'mirin', amount: '3큰술' },
      { id: 'chili-flakes', amount: '4큰술' }, { id: 'oyster-sauce', amount: '2큰술' }, { id: 'gochujang', amount: '3큰술' },
      { id: 'pepper', amount: '조금' },
    ],
    steps: [
      { phase: '준비', text: '닭 1마리를 찬물에 씻어 핏물만 빼요 (끓는 물에 데치지 않아요)' },
      { phase: '준비', text: '감자 2개는 큼직하게, 양파 1/2개는 굵게, 대파 1대는 어슷하게 썰어요' },
      { phase: '조리', text: '팬에 식용유를 넉넉히 두르고 닭, 다진마늘 1큰술, 간장 6큰술을 넣고 색이 밸 때까지 볶아요' },
      { phase: '조리', text: '물 300ml와 설탕 4 · 맛술 3 · 고춧가루 4 · 굴소스 2 · 고추장 3큰술을 넣고 끓여요' },
      { phase: '조리', text: '감자와 양파를 넣고 감자가 익을 때까지 끓여요' },
      { phase: '조리', text: '대파와 후추를 넣고 중약불로 5분 더 끓이면 완성', timer: 300 },
    ],
    tips: ['데치지 않아서 15분 만에 끝나요. 초보에게 가장 추천'],
  },
  {
    id: 'dakbokkeumtang-paik',
    menuId: 'dakbokkeumtang',
    video: {
      youtubeId: 'eeiqjyYgPew',
      title: '한국은 치킨만 유명한 게 아닙니다! 한국 닭요리GOAT! 닭볶음탕',
      channel: '백종원 PAIK JONG WON',
      views: 9513289, seconds: 1124, isShort: false, checkedAt: '2026-10-22',
    },
    ingredients: [
      { id: 'whole-chicken', amount: '1마리(10호)' }, { name: '물', amount: '3컵' }, { id: 'potato', amount: '2개' },
      { id: 'onion', amount: '1개' }, { id: 'carrot', amount: '1/3개' }, { id: 'green-onion', amount: '2대' },
      { name: '새송이 · 표고버섯', amount: '2개씩' }, { id: 'cheongyang', amount: '3개' }, { name: '홍고추', amount: '2개' },
      { id: 'soy', amount: '4/5컵' }, { id: 'sugar', amount: '3큰술 (황설탕)' }, { id: 'chili-flakes', amount: '1/2컵 + 고운 것 1큰술' },
      { id: 'garlic-minced', amount: '1큰술' }, { id: 'pepper', amount: '조금' },
    ],
    steps: [
      { phase: '준비', text: '닭을 씻어 끓는 물에 살짝 데친 뒤 찬물에 헹궈요' },
      { phase: '조리', text: '냄비에 닭, 물 3컵, 감자, 양파, 설탕 3큰술을 넣고 뚜껑을 연 채 센불로 끓여요' },
      { phase: '조리', text: '감자가 반쯤 익으면 당근과 버섯을 넣어요' },
      { phase: '조리', text: '15분 뒤 고춧가루를 넣고, 이어서 간장 4/5컵 · 다진마늘 · 후추를 넣고 끓여요', timer: 900 },
      { phase: '조리', text: '대파와 고추를 넣고 숨만 죽으면 완성' },
    ],
  },
  {
    id: 'dakbokkeumtang-ttukttak',
    menuId: 'dakbokkeumtang',
    video: {
      youtubeId: 'Ax8ff8w5LUw',
      title: '하루 200마리씩 파는 강서구 배달 1등 닭볶음탕 전문점 레시피',
      channel: '1분요리 뚝딱이형',
      views: 3615639, seconds: 60, isShort: true, checkedAt: '2026-10-22',
    },
    source: '자동 자막',
    ingredients: [
      { id: 'whole-chicken', amount: '1마리' }, { id: 'potato', amount: '2개 (1개는 갈아서)' }, { id: 'carrot', amount: '조금' },
      { id: 'onion', amount: '1개' }, { id: 'green-onion', amount: '2대' }, { id: 'cheongyang', amount: '조금' },
      { name: '우유', amount: '닭이 잠길 만큼', check: true },
      { id: 'soy', amount: '1/2컵' }, { id: 'sugar', amount: '3큰술', check: true }, { id: 'chili-flakes', amount: '3큰술' },
      { id: 'gochujang', amount: '1큰술' }, { id: 'doenjang', amount: '0.5큰술' }, { id: 'garlic-minced', amount: '2큰술' },
      { name: '소고기다시다', amount: '0.5큰술' },
    ],
    steps: [
      { phase: '준비', text: '닭에 소금 2 · 설탕 2 · 후추를 넣고 우유에 2시간 재워요', check: true },
      { phase: '조리', text: '식용유 2 + 고춧가루 3 + 다진마늘 1 + 대파로 약불에 고추기름을 내요' },
      { phase: '조리', text: '닭을 넣고 겉면이 익을 때까지 볶아요' },
      { phase: '조리', text: '간장 1/2컵, 설탕 3을 넣고 약불로 2분', timer: 120 },
      { phase: '조리', text: '물 2컵, 감자, 당근, 고추장 1, 된장 0.5를 넣고 중불로 20분', timer: 1200 },
      { phase: '조리', text: '양파, 다시다를 넣고 감자 1개를 갈아 넣어 걸쭉하게' },
      { phase: '조리', text: '불을 끄고 다진마늘 1, 청양고추를 넣으면 완성' },
    ],
    warning: '자동 자막 기준이라 "우유", "설탕 3"은 영상으로 한 번 확인해 주세요',
  },
  {
    id: 'dakbokkeumtang-paik-malbok',
    menuId: 'dakbokkeumtang',
    video: {
      youtubeId: '-EwR5eshbPE',
      title: "'말복'에는 얼큰한 '닭볶음탕'으로 원기회복하세요! | 백종원의 백종원 레시피",
      channel: '백종원 PAIK JONG WON',
      views: 3373147, seconds: 466, isShort: false, checkedAt: '2026-10-22',
    },
  },
  {
    id: 'dakbokkeumtang-simbanggol',
    menuId: 'dakbokkeumtang',
    video: {
      youtubeId: '1AYtWZ2Ut1g',
      title: '닭볶음탕 황금레시피 2020년 버전 리뉴얼',
      channel: '심방골주부',
      views: 2653406, seconds: 462, isShort: false, checkedAt: '2026-10-22',
    },
  },
] satisfies Recipe[]
