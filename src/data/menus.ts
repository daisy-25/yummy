// 메뉴 도감 (SPEC 7-2). 분량은 "2인 저녁 + 도시락" 기준, 양념은 큰술.
// 못 먹는 재료(가지, 조개류, 홍어, 미역줄기)가 들어간 메뉴는 넣지 않아요.
import type { Menu } from '../types.ts'

export const menus = {
  /* ───── 돼지 ───── */
  jeyuk: {
    name: '제육볶음', protein: '돼지', method: '볶음', level: '쉬움', minutes: 25, lunchbox: true,
    mainRecipe: 'jeyuk-biryong',
    sides: '양배추 쌈',
    keyRatio: '고추장 3 : 간장 2 : 고춧가루 1 : 설탕 1 : 다진마늘 1',
    freeze: { how: '양념해서', packs: '2인분씩 2팩', reheat: '반쯤 녹여서 팬에 볶기' },
    ingredients: [
      { id: 'pork-front', amount: '600g' }, { id: 'onion', amount: '1개' }, { id: 'green-onion', amount: '1대' },
      { id: 'cabbage', amount: '1/4통' },
      { id: 'gochujang', amount: '3큰술' }, { id: 'soy', amount: '2큰술' }, { id: 'chili-flakes', amount: '1큰술' },
      { id: 'sugar', amount: '1큰술' }, { id: 'garlic-minced', amount: '1큰술' }, { id: 'oil', amount: '조금' },
    ],
  },
  'pork-kimchi-jjigae': {
    name: '돼지고기 김치찌개', protein: '돼지', method: '국물', level: '쉬움', minutes: 25, lunchbox: false,
    mainRecipe: 'pork-kimchi-jjigae-paik',
    sides: '계란후라이',
    keyRatio: '김치 2컵 : 물 3컵, 고춧가루 1 · 다진마늘 0.5',
    ingredients: [
      { id: 'pork-front', amount: '200g' }, { id: 'kimchi', amount: '1/4포기' }, { id: 'tofu', amount: '1/2모' },
      { id: 'onion', amount: '1/2개' }, { id: 'green-onion', amount: '1/2대' }, { id: 'egg', amount: '2개' },
      { id: 'chili-flakes', amount: '1큰술' }, { id: 'garlic-minced', amount: '0.5큰술' },
    ],
  },
  'daepae-kongnamul': {
    name: '대패삼겹 콩나물불고기', protein: '돼지', method: '볶음', level: '쉬움', minutes: 20, lunchbox: true,
    mainRecipe: 'daepae-kongnamul-paik',
    sides: '김치',
    keyRatio: '고추장 2 : 고춧가루 2 : 간장 2 : 설탕 1 : 다진마늘 1',
    ingredients: [
      { id: 'pork-belly-thin', amount: '300g' }, { id: 'bean-sprout', amount: '1봉' }, { id: 'onion', amount: '1/2개' },
      { id: 'green-onion', amount: '1대' },
      { id: 'gochujang', amount: '2큰술' }, { id: 'chili-flakes', amount: '2큰술' }, { id: 'soy', amount: '2큰술' },
      { id: 'sugar', amount: '1큰술' }, { id: 'garlic-minced', amount: '1큰술' },
    ],
  },
  'daepae-cabbage-don': {
    name: '대패삼겹 양배추덮밥', protein: '돼지', method: '덮밥·면', level: '쉬움', minutes: 15, lunchbox: true,
    mainRecipe: 'daepae-cabbage-don-jachi',
    keyRatio: '간장 3 : 설탕 1 : 굴소스 1 : 다진마늘 1',
    ingredients: [
      { id: 'pork-belly-thin', amount: '300g' }, { id: 'cabbage', amount: '1/4통' }, { id: 'green-onion', amount: '1/2대' },
      { id: 'egg', amount: '2개', optional: true },
      { id: 'soy', amount: '3큰술' }, { id: 'sugar', amount: '1큰술' }, { id: 'oyster-sauce', amount: '1큰술' },
      { id: 'garlic-minced', amount: '1큰술' },
    ],
  },
  suyuk: {
    name: '돼지 수육', protein: '돼지', method: '조림·찜', level: '쉬움', minutes: 60, lunchbox: true,
    sides: '상추쌈 · 김치',
    keyRatio: '물에 된장 1 · 양파 · 대파 · 통마늘 넣고 40~50분',
    ingredients: [
      { id: 'pork-block', amount: '600g' }, { id: 'onion', amount: '1개' }, { id: 'green-onion', amount: '1대' },
      { id: 'garlic-whole', amount: '5알' }, { id: 'lettuce', amount: '1봉' }, { id: 'kimchi', amount: '조금' },
      { id: 'doenjang', amount: '1큰술' },
    ],
  },
  'moksal-gui': {
    name: '목살구이와 파절이', protein: '돼지', method: '구이', level: '쉬움', minutes: 20, lunchbox: false,
    sides: '상추쌈',
    keyRatio: '파절이: 고춧가루 1 : 간장 1 : 식초 1 : 설탕 0.5 : 참기름 0.5',
    ingredients: [
      { id: 'pork-neck', amount: '500g' }, { id: 'green-onion', amount: '1대' }, { id: 'lettuce', amount: '1봉' },
      { id: 'chili-flakes', amount: '1큰술' }, { id: 'soy', amount: '1큰술' }, { id: 'vinegar', amount: '1큰술' },
      { id: 'sugar', amount: '0.5큰술' }, { id: 'sesame-oil', amount: '0.5큰술' }, { id: 'salt', amount: '조금' },
    ],
  },
  'mapo-tofu': {
    name: '마파두부덮밥', protein: '돼지', method: '덮밥·면', level: '보통', minutes: 25, lunchbox: true,
    keyRatio: '고추장 1 : 고춧가루 1 : 굴소스 1 : 간장 1 : 설탕 0.5, 전분물로 걸쭉하게',
    freeze: { how: '완성해서', packs: '1인분씩 3팩', reheat: '전자레인지 3분' },
    ingredients: [
      { id: 'pork-ground', amount: '150g' }, { id: 'tofu', amount: '1모' }, { id: 'green-onion', amount: '1대' },
      { id: 'gochujang', amount: '1큰술' }, { id: 'chili-flakes', amount: '1큰술' }, { id: 'oyster-sauce', amount: '1큰술' },
      { id: 'soy', amount: '1큰술' }, { id: 'sugar', amount: '0.5큰술' }, { id: 'garlic-minced', amount: '1큰술' },
      { id: 'starch', amount: '1큰술' },
    ],
  },
  jjageuli: {
    name: '돼지고기 짜글이', protein: '돼지', method: '국물', level: '쉬움', minutes: 30, lunchbox: true,
    keyRatio: '고추장 2 : 고춧가루 2 : 간장 1 : 설탕 0.5 : 다진마늘 1',
    ingredients: [
      { id: 'pork-front', amount: '300g' }, { id: 'potato', amount: '1개' }, { id: 'onion', amount: '1개' },
      { id: 'zucchini', amount: '1/2개' }, { id: 'green-onion', amount: '1/2대' }, { id: 'cheongyang', amount: '1개', optional: true },
      { id: 'gochujang', amount: '2큰술' }, { id: 'chili-flakes', amount: '2큰술' }, { id: 'soy', amount: '1큰술' },
      { id: 'sugar', amount: '0.5큰술' }, { id: 'garlic-minced', amount: '1큰술' },
    ],
  },
  curry: {
    name: '카레라이스', protein: '돼지', method: '덮밥·면', level: '쉬움', minutes: 30, lunchbox: true,
    mainRecipe: 'curry-paik-moksal',
    sides: '김치',
    keyRatio: '물 600ml에 카레가루 1봉(100g)',
    freeze: { how: '완성해서', packs: '1인분씩 4팩', reheat: '전자레인지 3~4분, 중간에 한 번 저어요' },
    ingredients: [
      { id: 'pork-front', amount: '200g' }, { id: 'potato', amount: '2개' }, { id: 'carrot', amount: '1/2개' },
      { id: 'onion', amount: '1개' }, { id: 'curry', amount: '1봉' }, { id: 'oil', amount: '조금' },
    ],
  },

  /* ───── 닭 ───── */
  dakbokkeumtang: {
    name: '닭볶음탕', protein: '닭', method: '조림·찜', level: '보통', minutes: 40, lunchbox: true,
    keyRatio: '간장 6 : 고춧가루 4 : 설탕 4 : 고추장 3 : 맛술 3 : 굴소스 2',
    mainRecipe: 'dakbokkeumtang-jung',
    ingredients: [
      { id: 'whole-chicken', amount: '1마리' }, { id: 'potato', amount: '2개' }, { id: 'onion', amount: '1/2개' },
      { id: 'green-onion', amount: '1대' },
      { id: 'soy', amount: '6큰술' }, { id: 'chili-flakes', amount: '4큰술' }, { id: 'sugar', amount: '4큰술' },
      { id: 'gochujang', amount: '3큰술' }, { id: 'mirin', amount: '3큰술' }, { id: 'oyster-sauce', amount: '2큰술' },
      { id: 'garlic-minced', amount: '1큰술' }, { id: 'oil', amount: '넉넉히' }, { id: 'pepper', amount: '조금' },
    ],
  },
  jjimdak: {
    name: '찜닭', protein: '닭', method: '조림·찜', level: '보통', minutes: 40, lunchbox: true,
    mainRecipe: 'jjimdak-bapchanam',
    keyRatio: '간장 8 : 설탕 4 : 맛술 2 : 다진마늘 2',
    ingredients: [
      { id: 'whole-chicken', amount: '1마리' }, { id: 'potato', amount: '2개' }, { id: 'carrot', amount: '1/2개' },
      { id: 'onion', amount: '1개' }, { id: 'green-onion', amount: '1대' }, { id: 'dangmyeon', amount: '1줌' },
      { id: 'cheongyang', amount: '2개', optional: true },
      { id: 'soy', amount: '8큰술' }, { id: 'sugar', amount: '4큰술' }, { id: 'mirin', amount: '2큰술' },
      { id: 'garlic-minced', amount: '2큰술' },
    ],
  },
  dakgalbi: {
    name: '닭갈비', protein: '닭', method: '볶음', level: '보통', minutes: 30, lunchbox: true,
    mainRecipe: 'dakgalbi-haruhanki',
    keyRatio: '고추장 3 : 고춧가루 2 : 간장 2 : 설탕 1 : 다진마늘 1',
    freeze: { how: '양념해서', packs: '2인분씩 2팩', reheat: '반쯤 녹여서 채소와 함께 볶기' },
    ingredients: [
      { id: 'chicken-thigh', amount: '600g' }, { id: 'cabbage', amount: '1/4통' }, { id: 'onion', amount: '1/2개' },
      { id: 'green-onion', amount: '1대' }, { id: 'perilla', amount: '1묶음', optional: true },
      { id: 'gochujang', amount: '3큰술' }, { id: 'chili-flakes', amount: '2큰술' }, { id: 'soy', amount: '2큰술' },
      { id: 'sugar', amount: '1큰술' }, { id: 'garlic-minced', amount: '1큰술' },
    ],
  },
  'teriyaki-don': {
    name: '데리야끼 치킨덮밥', protein: '닭', method: '덮밥·면', level: '쉬움', minutes: 25, lunchbox: true,
    mainRecipe: 'teriyaki-don-jung',
    keyRatio: '간장 4 : 설탕 2 : 맛술 2 : 다진마늘 0.5',
    ingredients: [
      { id: 'chicken-thigh', amount: '400g' }, { id: 'onion', amount: '1/2개' }, { id: 'green-onion', amount: '1/2대' },
      { id: 'egg', amount: '2개', optional: true },
      { id: 'soy', amount: '4큰술' }, { id: 'sugar', amount: '2큰술' }, { id: 'mirin', amount: '2큰술' },
      { id: 'garlic-minced', amount: '0.5큰술' },
    ],
  },

  /* ───── 소 ───── */
  bulgogi: {
    name: '소불고기', protein: '소', method: '볶음', level: '쉬움', minutes: 25, lunchbox: true,
    mainRecipe: 'bulgogi-paik',
    keyRatio: '간장 5 : 설탕 2 : 다진마늘 1 : 참기름 1, 후추 조금',
    freeze: { how: '양념해서', packs: '2인분씩 2팩', reheat: '반쯤 녹여서 팬에 볶기' },
    ingredients: [
      { id: 'beef-bulgogi', amount: '500g' }, { id: 'onion', amount: '1개' }, { id: 'green-onion', amount: '1대' },
      { id: 'carrot', amount: '1/3개' }, { id: 'mushroom', amount: '1봉', optional: true },
      { id: 'soy', amount: '5큰술' }, { id: 'sugar', amount: '2큰술' }, { id: 'garlic-minced', amount: '1큰술' },
      { id: 'sesame-oil', amount: '1큰술' }, { id: 'pepper', amount: '조금' },
    ],
  },
  'beef-radish-soup': {
    name: '소고기무국', protein: '소', method: '국물', level: '쉬움', minutes: 30, lunchbox: false,
    mainRecipe: 'beef-radish-soup-paik',
    keyRatio: '참기름에 고기·무 볶고 물 1L, 국간장 2 · 다진마늘 0.5, 소금으로 간',
    freeze: { how: '완성해서', packs: '2인분씩 2팩', reheat: '냄비에 그대로 넣고 끓이기' },
    ingredients: [
      { id: 'beef-soup', amount: '200g' }, { id: 'radish', amount: '1/3개' }, { id: 'green-onion', amount: '1/2대' },
      { id: 'soy-soup', amount: '2큰술' }, { id: 'garlic-minced', amount: '0.5큰술' }, { id: 'sesame-oil', amount: '1큰술' },
      { id: 'salt', amount: '조금' },
    ],
  },
  gyudon: {
    name: '소고기덮밥(규동)', protein: '소', method: '덮밥·면', level: '쉬움', minutes: 20, lunchbox: true,
    mainRecipe: 'gyudon-jung',
    keyRatio: '물 100ml : 간장 4 : 설탕 2 : 맛술 2',
    ingredients: [
      { id: 'beef-bulgogi', amount: '300g' }, { id: 'onion', amount: '1개' }, { id: 'green-onion', amount: '1/2대' },
      { id: 'egg', amount: '2개', optional: true },
      { id: 'soy', amount: '4큰술' }, { id: 'sugar', amount: '2큰술' }, { id: 'mirin', amount: '2큰술' },
    ],
  },

  /* ───── 생선 ───── */
  'mackerel-gui': {
    name: '고등어구이', protein: '생선', method: '구이', level: '쉬움', minutes: 15, lunchbox: false,
    mainRecipe: 'mackerel-gui-yangjanggeum',
    sides: '계란말이',
    ingredients: [
      { id: 'mackerel', amount: '2마리' }, { id: 'egg', amount: '4개' }, { id: 'green-onion', amount: '1/4대' },
      { id: 'oil', amount: '조금' }, { id: 'salt', amount: '조금' },
    ],
  },
  'mackerel-jorim': {
    name: '고등어 김치조림', protein: '생선', method: '조림·찜', level: '보통', minutes: 35, lunchbox: false,
    mainRecipe: 'mackerel-jorim-paik',
    keyRatio: '고춧가루 2 : 간장 2 : 다진마늘 1 : 설탕 0.5, 물 1.5컵',
    ingredients: [
      { id: 'mackerel', amount: '1마리' }, { id: 'kimchi', amount: '1/4포기' }, { id: 'radish', amount: '1/4개', optional: true },
      { id: 'onion', amount: '1/2개' }, { id: 'green-onion', amount: '1/2대' },
      { id: 'chili-flakes', amount: '2큰술' }, { id: 'soy', amount: '2큰술' }, { id: 'garlic-minced', amount: '1큰술' },
      { id: 'sugar', amount: '0.5큰술' },
    ],
  },
  'cabbage-tuna-don': {
    name: '양배추 참치덮밥', protein: '생선', method: '덮밥·면', level: '쉬움', minutes: 10, lunchbox: true,
    keyRatio: '1그릇에 굴소스 1 : 참치액 1 : 고춧가루 0.5, 마지막에 참기름 2',
    memo: '불 없이 전자레인지로 1그릇씩 만들어요',
    mainRecipe: 'cabbage-tuna-don-mollang',
    ingredients: [
      { id: 'cabbage', amount: '1/4통' }, { id: 'tuna-can', amount: '2캔' }, { id: 'egg', amount: '3개' },
      { id: 'rice', amount: '1.5공기' },
      { id: 'oyster-sauce', amount: '3큰술' }, { id: 'tuna-sauce', amount: '3큰술' }, { id: 'chili-flakes', amount: '1.5큰술' },
      { id: 'sesame-oil', amount: '6큰술' },
    ],
  },

  /* ───── 두부·계란 ───── */
  'doenjang-jjigae': {
    name: '된장찌개', protein: '두부·계란', method: '국물', level: '보통', minutes: 25, lunchbox: false,
    mainRecipe: 'doenjang-jjigae-paik-beef',
    sides: '계란말이',
    keyRatio: '물 3컵에 된장 2, 고춧가루 0.5 · 다진마늘 0.5',
    memo: '바지락 대신 돼지고기로 (선택)',
    ingredients: [
      { id: 'tofu', amount: '1/2모' }, { id: 'zucchini', amount: '1/2개' }, { id: 'potato', amount: '1개' },
      { id: 'onion', amount: '1/2개' }, { id: 'green-onion', amount: '1/2대' }, { id: 'cheongyang', amount: '1개', optional: true },
      { id: 'pork-front', amount: '100g', optional: true }, { id: 'egg', amount: '4개' },
      { id: 'doenjang', amount: '2큰술' }, { id: 'chili-flakes', amount: '0.5큰술' }, { id: 'garlic-minced', amount: '0.5큰술' },
    ],
  },
  sundubu: {
    name: '순두부찌개', protein: '두부·계란', method: '국물', level: '쉬움', minutes: 20, lunchbox: false,
    mainRecipe: 'sundubu-paik',
    keyRatio: '기름 2에 고춧가루 2로 고추기름, 간장 1 · 다진마늘 1',
    memo: '바지락 대신 다진 돼지고기',
    ingredients: [
      { id: 'soft-tofu', amount: '1봉' }, { id: 'pork-ground', amount: '100g' }, { id: 'egg', amount: '1개' },
      { id: 'onion', amount: '1/2개' }, { id: 'green-onion', amount: '1/2대' },
      { id: 'chili-flakes', amount: '2큰술' }, { id: 'soy', amount: '1큰술' }, { id: 'garlic-minced', amount: '1큰술' },
      { id: 'oil', amount: '2큰술' },
    ],
  },
  'dubu-jorim': {
    name: '두부조림', protein: '두부·계란', method: '조림·찜', level: '쉬움', minutes: 20, lunchbox: true,
    mainRecipe: 'dubu-jorim-harukki',
    keyRatio: '간장 3 : 물 5 : 고춧가루 1 : 설탕 0.5 : 다진마늘 0.5',
    ingredients: [
      { id: 'tofu', amount: '1모' }, { id: 'green-onion', amount: '1/2대' },
      { id: 'soy', amount: '3큰술' }, { id: 'chili-flakes', amount: '1큰술' }, { id: 'sugar', amount: '0.5큰술' },
      { id: 'garlic-minced', amount: '0.5큰술' }, { id: 'sesame-oil', amount: '조금' }, { id: 'oil', amount: '조금' },
    ],
  },
  'dubu-kimchi': {
    name: '두부김치', protein: '두부·계란', method: '볶음', level: '쉬움', minutes: 20, lunchbox: false,
    mainRecipe: 'dubu-kimchi-paik',
    keyRatio: '김치 볶을 때 고춧가루 1 : 설탕 0.5 : 다진마늘 0.5, 마지막에 참기름',
    ingredients: [
      { id: 'tofu', amount: '1모' }, { id: 'kimchi', amount: '1/4포기' }, { id: 'pork-front', amount: '200g' },
      { id: 'onion', amount: '1/2개' }, { id: 'green-onion', amount: '1/2대' },
      { id: 'chili-flakes', amount: '1큰술' }, { id: 'sugar', amount: '0.5큰술' }, { id: 'garlic-minced', amount: '0.5큰술' },
      { id: 'sesame-oil', amount: '조금' },
    ],
  },

  /* ───── 채소 · 남은 재료 ───── */
  bibimbap: {
    name: '비빔밥', protein: '채소', method: '덮밥·면', level: '보통', minutes: 30, lunchbox: false,
    mainRecipe: 'bibimbap-paik-microwave',
    keyRatio: '비빔장: 고추장 3 : 참기름 1 : 설탕 0.5',
    ingredients: [
      { id: 'bean-sprout', amount: '1봉' }, { id: 'spinach', amount: '1단' }, { id: 'zucchini', amount: '1/2개' },
      { id: 'carrot', amount: '1/2개' }, { id: 'egg', amount: '2개' }, { id: 'pork-ground', amount: '100g', optional: true },
      { id: 'gochujang', amount: '3큰술' }, { id: 'sesame-oil', amount: '1큰술' }, { id: 'garlic-minced', amount: '0.5큰술' },
      { id: 'salt', amount: '조금' },
    ],
  },
  'fridge-fried-rice': {
    name: '냉장고 털이 볶음밥', protein: '남은 재료', method: '볶음', level: '쉬움', minutes: 15, lunchbox: true,
    mainRecipe: 'fridge-fried-rice-paik',
    sides: '김치',
    keyRatio: '밥 2공기에 간장 1 : 굴소스 0.5, 파기름 먼저',
    memo: '이번 주에 남은 채소·고기를 모두 넣어요',
    ingredients: [
      { id: 'egg', amount: '2개' }, { id: 'green-onion', amount: '1/2대' }, { id: 'rice', amount: '2공기' },
      { id: 'soy', amount: '1큰술' }, { id: 'oyster-sauce', amount: '0.5큰술' }, { id: 'oil', amount: '조금' },
    ],
  },

  /* ───── 가끔 특식 ───── */
  'tomato-pasta': {
    name: '베이컨 토마토 파스타', protein: '돼지', method: '양식', special: true, level: '쉬움', minutes: 25, lunchbox: true,
    mainRecipe: 'tomato-pasta-sosohwang',
    keyRatio: '면 200g에 소스 1/2병, 면수 반 컵',
    ingredients: [
      { id: 'pasta', amount: '200g' }, { id: 'tomato-sauce', amount: '1/2병' }, { id: 'bacon', amount: '100g' },
      { id: 'onion', amount: '1/2개' }, { id: 'garlic-minced', amount: '1큰술' }, { id: 'olive-oil', amount: '2큰술' },
      { id: 'salt', amount: '조금' },
    ],
  },
  'cream-pasta': {
    name: '치킨 크림 파스타', protein: '닭', method: '양식', special: true, level: '쉬움', minutes: 25, lunchbox: false,
    mainRecipe: 'cream-pasta-dday-chicken',
    keyRatio: '면 200g에 생크림 250ml, 소금 · 후추로 간',
    ingredients: [
      { id: 'pasta', amount: '200g' }, { id: 'chicken-thigh', amount: '200g' }, { id: 'heavy-cream', amount: '1팩' },
      { id: 'onion', amount: '1/2개' }, { id: 'mushroom', amount: '1봉', optional: true },
      { id: 'garlic-minced', amount: '1큰술' }, { id: 'oil', amount: '1큰술' }, { id: 'salt', amount: '조금' },
      { id: 'pepper', amount: '조금' },
    ],
  },
  'aglio-olio': {
    name: '알리오올리오', protein: '채소', method: '양식', special: true, level: '쉬움', minutes: 20, lunchbox: false,
    keyRatio: '면 200g에 올리브유 6 · 편마늘 10알, 면수로 농도',
    ingredients: [
      { id: 'pasta', amount: '200g' }, { id: 'garlic-whole', amount: '10알' }, { id: 'cheongyang', amount: '1개', optional: true },
      { id: 'bacon', amount: '50g', optional: true },
      { id: 'olive-oil', amount: '6큰술' }, { id: 'salt', amount: '조금' },
    ],
  },
  omurice: {
    name: '오므라이스', protein: '두부·계란', method: '양식', special: true, level: '보통', minutes: 25, lunchbox: false,
    keyRatio: '밥 2공기에 케첩 3, 계란 2개씩 한 장',
    ingredients: [
      { id: 'egg', amount: '4개' }, { id: 'ham', amount: '100g' }, { id: 'onion', amount: '1/2개' },
      { id: 'carrot', amount: '1/4개' }, { id: 'rice', amount: '2공기' },
      { id: 'ketchup', amount: '3큰술' }, { id: 'salt', amount: '조금' }, { id: 'oil', amount: '조금' },
    ],
  },

  /* ───── 밀프랩 전용 (저녁 추천에는 안 나와요) ───── */
  'spam-jumeokbap': {
    name: '스팸마요 주먹밥', protein: '돼지', method: '덮밥·면', prepOnly: true, level: '쉬움', minutes: 30, lunchbox: true,
    keyRatio: '밥 2공기에 스팸 150g, 간장 2 : 설탕 0.5 : 마요네즈 1.5',
    freeze: { how: '완성해서', packs: '8개쯤', reheat: '랩째로 전자레인지 1분 30초~2분' },
    ingredients: [
      { id: 'spam', amount: '1캔' }, { id: 'egg', amount: '2개' }, { id: 'laver', amount: '1봉' },
      { id: 'rice', amount: '4공기' },
      { id: 'soy', amount: '2큰술' }, { id: 'sugar', amount: '0.5큰술' }, { id: 'mayo', amount: '1.5큰술' },
      { id: 'sesame-oil', amount: '1큰술' },
    ],
  },
  'bulgogi-burrito': {
    name: '소불고기 브리또', protein: '소', method: '양식', prepOnly: true, level: '쉬움', minutes: 40, lunchbox: true,
    keyRatio: '불고기 양념: 간장 5 : 설탕 2 : 다진마늘 1 : 참기름 1',
    freeze: { how: '완성해서', packs: '6~8개', reheat: '전자레인지 2~3분, 팬에 한 번 더 구우면 바삭' },
    ingredients: [
      { id: 'beef-bulgogi', amount: '600g' }, { id: 'tortilla', amount: '1봉' }, { id: 'mozzarella', amount: '1봉' },
      { id: 'onion', amount: '1/2개' }, { id: 'green-onion', amount: '1/2대' }, { id: 'rice', amount: '2공기' },
      { id: 'soy', amount: '5큰술' }, { id: 'sugar', amount: '2큰술' }, { id: 'garlic-minced', amount: '1큰술' },
      { id: 'sesame-oil', amount: '1큰술' },
    ],
  },
  tteokgalbi: {
    name: '떡갈비', protein: '소', method: '구이', prepOnly: true, level: '보통', minutes: 40, lunchbox: true,
    keyRatio: '다진 고기 450g에 간장 3 : 설탕 3 : 맛술 2 : 다진마늘 1 : 참기름 2, 전분 1',
    freeze: { how: '양념해서', packs: '10개쯤 (모양 잡아 1개씩)', reheat: '녹이지 않고 약불에 뚜껑 덮어 굽기' },
    ingredients: [
      { id: 'beef-ground', amount: '300g' }, { id: 'pork-ground', amount: '150g' }, { id: 'green-onion', amount: '1/2대' },
      { id: 'soy', amount: '3큰술' }, { id: 'sugar', amount: '3큰술' }, { id: 'mirin', amount: '2큰술' },
      { id: 'garlic-minced', amount: '1큰술' }, { id: 'sesame-oil', amount: '2큰술' }, { id: 'starch', amount: '1큰술' },
      { id: 'pepper', amount: '조금' }, { id: 'oil', amount: '조금' },
    ],
  },
} satisfies Record<string, Menu>

export type MenuId = keyof typeof menus
