// 메뉴 도감 (SPEC 7-2). 분량은 "2인 저녁 + 도시락" 기준, 양념은 큰술.
// 못 먹는 재료(가지, 조개류, 홍어, 미역줄기)가 들어간 메뉴는 넣지 않아요.
import type { Menu } from '../types.ts'

export const menus = {
  /* ───── 돼지 ───── */
  jeyuk: {
    name: '제육볶음', protein: '돼지', method: '볶음', level: '쉬움', minutes: 25, lunchbox: true,
    mainRecipe: 'jeyuk-biryong',
    sides: '양배추 쌈',
    keyRatio: '고추장 5 : 고춧가루 4 : 간장 2 : 맛술 2 : 물엿 2 : 설탕 1 : 매실청 1',
    freeze: { how: '양념해서', packs: '2인분씩 2팩', reheat: '반쯤 녹여서 팬에 볶기' },
    ingredients: [
      { id: 'pork-front', amount: '600g' }, { id: 'onion', amount: '2개' }, { id: 'garlic-whole', amount: '10톨' },
      { id: 'cabbage', amount: '1/4통' }, { id: 'gochujang', amount: '5큰술' }, { id: 'chili-flakes', amount: '4큰술' },
      { id: 'soy', amount: '2큰술' }, { id: 'mirin', amount: '2큰술' }, { id: 'mulyeot', amount: '2큰술' },
      { id: 'sugar', amount: '1큰술' }, { id: 'maesil', amount: '1큰술', optional: true }, { id: 'pepper', amount: '1큰술' },
      { id: 'oil', amount: '3큰술' }, { id: 'sesame-seed', amount: '조금' },
    ],
  },
  'pork-kimchi-jjigae': {
    name: '돼지고기 김치찌개', protein: '돼지', method: '국물', level: '쉬움', minutes: 25, lunchbox: false,
    mainRecipe: 'pork-kimchi-jjigae-paik',
    sides: '계란후라이',
    keyRatio: '김치 3컵 : 물 3컵, 고춧가루 1.5 · 국간장 1 · 새우젓 1 · 다진마늘 1',
    ingredients: [
      { id: 'pork-front', amount: '130g' }, { id: 'kimchi', amount: '1/4포기' }, { id: 'cheongyang', amount: '2개' },
      { id: 'green-onion', amount: '2/3대' }, { id: 'egg', amount: '2개' }, { id: 'chili-flakes', amount: '1.5큰술' },
      { id: 'soy-soup', amount: '1큰술' }, { id: 'saeujeot', amount: '1큰술' }, { id: 'garlic-minced', amount: '1큰술' },
    ],
  },
  'daepae-kongnamul': {
    name: '대패삼겹 콩나물불고기', protein: '돼지', method: '볶음', level: '쉬움', minutes: 20, lunchbox: true,
    mainRecipe: 'daepae-kongnamul-paik',
    sides: '김치',
    keyRatio: '간장 4 : 맛술 4 : 고추장 3 : 설탕 2 : 고춧가루 2 : 다진마늘 2',
    ingredients: [
      { id: 'pork-belly-thin', amount: '280g' }, { id: 'bean-sprout', amount: '1봉' }, { id: 'onion', amount: '1/2개' },
      { id: 'green-onion', amount: '1대' }, { id: 'cheongyang', amount: '1개' }, { id: 'perilla', amount: '4장', optional: true },
      { id: 'soy', amount: '4큰술' }, { id: 'mirin', amount: '4큰술' }, { id: 'gochujang', amount: '3큰술' },
      { id: 'sugar', amount: '2큰술' }, { id: 'chili-flakes', amount: '2큰술' }, { id: 'garlic-minced', amount: '2큰술' },
      { id: 'sesame-seed', amount: '조금' },
    ],
  },
  'daepae-cabbage-don': {
    name: '대패삼겹 양배추덮밥', protein: '돼지', method: '덮밥·면', level: '쉬움', minutes: 15, lunchbox: true,
    mainRecipe: 'daepae-cabbage-don-jachi',
    keyRatio: '굴소스 1 : 설탕 1 : 고춧가루 1 : 다진마늘 1 : 된장 0.5',
    ingredients: [
      { id: 'pork-belly-thin', amount: '250g' }, { id: 'cabbage', amount: '1/4통' }, { id: 'green-onion', amount: '1/2대' },
      { id: 'cheongyang', amount: '1개', optional: true }, { id: 'rice', amount: '2공기' }, { id: 'oyster-sauce', amount: '1큰술' },
      { id: 'sugar', amount: '1큰술' }, { id: 'chili-flakes', amount: '1큰술' }, { id: 'garlic-minced', amount: '1큰술' },
      { id: 'doenjang', amount: '0.5큰술' }, { id: 'sesame-seed', amount: '조금' },
    ],
  },
  suyuk: {
    name: '돼지 수육', protein: '돼지', method: '조림·찜', level: '쉬움', minutes: 60, lunchbox: true,
    mainRecipe: 'suyuk-firstson',
    sides: '상추쌈 · 김치',
    keyRatio: '물 2L에 소금 1 · 설탕 1 · 소주 반 컵 · 청양 2개, 끓는 물에 넣고 중약불 40분 + 뜸 10분',
    ingredients: [
      { id: 'pork-block', amount: '700g' }, { id: 'cheongyang', amount: '2개' }, { id: 'green-onion', amount: '1대', optional: true },
      { id: 'soju', amount: '반 컵' }, { id: 'lettuce', amount: '1봉' }, { id: 'kimchi', amount: '조금' },
      { id: 'salt', amount: '1큰술' }, { id: 'sugar', amount: '1큰술' },
    ],
  },
  'moksal-gui': {
    name: '목살구이와 파절이', protein: '돼지', method: '구이', level: '쉬움', minutes: 20, lunchbox: false,
    mainRecipe: 'moksal-gui-thiscook',
    sides: '상추쌈',
    keyRatio: '파채 소스: 설탕 2 : 식초 4 : 소금 1/2작은술 · 고기는 소금 밑간 20분',
    ingredients: [
      { id: 'pork-neck', amount: '480g' }, { id: 'green-onion', amount: '150g' }, { id: 'onion', amount: '1/2개' },
      { id: 'garlic-whole', amount: '10쪽' }, { id: 'lettuce', amount: '1봉' }, { id: 'butter', amount: '20g' },
      { id: 'steak-sauce', amount: '4큰술' }, { id: 'ketchup', amount: '2큰술' }, { id: 'oyster-sauce', amount: '1큰술' },
      { id: 'mirin', amount: '4큰술' }, { id: 'sugar', amount: '2큰술' }, { id: 'vinegar', amount: '4큰술' },
      { id: 'garlic-minced', amount: '1큰술' }, { id: 'salt', amount: '조금' }, { id: 'pepper', amount: '조금' },
      { id: 'oil', amount: '넉넉히' },
    ],
  },
  'mapo-tofu': {
    name: '마파두부덮밥', protein: '돼지', method: '덮밥·면', level: '보통', minutes: 25, lunchbox: true,
    mainRecipe: 'mapo-tofu-bapchanam',
    keyRatio: '간장 2 : 맛술 2 : 두반장 2 : 설탕 1 : 굴소스 1, 물 2컵, 전분물로 걸쭉하게',
    freeze: { how: '완성해서', packs: '1인분씩 3팩', reheat: '전자레인지 3분' },
    ingredients: [
      { id: 'tofu', amount: '1모' }, { id: 'pork-ground', amount: '200g' }, { id: 'onion', amount: '1/2개' },
      { id: 'green-onion', amount: '1대' }, { id: 'carrot', amount: '조금', optional: true }, { id: 'garlic-whole', amount: '3알' },
      { id: 'doubanjiang', amount: '2큰술' }, { id: 'soy', amount: '2큰술' }, { id: 'mirin', amount: '2큰술' },
      { id: 'sugar', amount: '1큰술' }, { id: 'oyster-sauce', amount: '1큰술' }, { id: 'starch', amount: '3큰술' },
      { id: 'sesame-oil', amount: '0.5큰술' }, { id: 'oil', amount: '5큰술' }, { id: 'pepper', amount: '조금' },
    ],
  },
  jjageuli: {
    name: '돼지고기 짜글이', protein: '돼지', method: '국물', level: '쉬움', minutes: 30, lunchbox: true,
    mainRecipe: 'jjageuli-simbanggol',
    keyRatio: '고추장 1.5 : 간장 2 : 고춧가루 1 : 다진마늘 1 : 된장 0.5, 물 200ml',
    ingredients: [
      { id: 'pork-front', amount: '300g' }, { id: 'potato', amount: '1개' }, { id: 'onion', amount: '1/2개' },
      { id: 'green-onion', amount: '1대' }, { id: 'cheongyang', amount: '1개', optional: true }, { id: 'gochujang', amount: '1.5큰술' },
      { id: 'soy', amount: '2큰술' }, { id: 'chili-flakes', amount: '1큰술' }, { id: 'garlic-minced', amount: '1큰술' },
      { id: 'doenjang', amount: '0.5큰술' }, { id: 'mirin', amount: '1큰술' }, { id: 'olive-oil', amount: '1큰술' },
      { id: 'pepper', amount: '조금' },
    ],
  },
  curry: {
    name: '카레라이스', protein: '돼지', method: '덮밥·면', level: '쉬움', minutes: 30, lunchbox: true,
    mainRecipe: 'curry-paik-moksal',
    sides: '김치',
    keyRatio: '물 665ml(3컵 반)에 카레 60g',
    freeze: { how: '완성해서', packs: '1인분씩 3팩', reheat: '전자레인지 3~4분, 중간에 한 번 저어요' },
    ingredients: [
      { id: 'pork-neck', amount: '300g' }, { id: 'potato', amount: '1개' }, { id: 'carrot', amount: '1/4개' },
      { id: 'onion', amount: '1개' }, { id: 'curry', amount: '60g' }, { id: 'oil', amount: '2큰술' },
      { id: 'salt', amount: '조금' }, { id: 'pepper', amount: '조금' },
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
    keyRatio: '간장 5 : 설탕 3~4 : 다진마늘 2 : 참기름 1 : 굴소스 1, 물 400ml',
    ingredients: [
      { id: 'whole-chicken', amount: '1마리' }, { id: 'potato', amount: '2개' }, { id: 'carrot', amount: '1/2개' },
      { id: 'onion', amount: '1개' }, { id: 'green-onion', amount: '1대' }, { id: 'dangmyeon', amount: '1줌' },
      { id: 'dried-chili', amount: '10개', optional: true }, { id: 'soy', amount: '5큰술' }, { id: 'sugar', amount: '3~4큰술' },
      { id: 'garlic-minced', amount: '2큰술' }, { id: 'sesame-oil', amount: '1큰술' }, { id: 'oyster-sauce', amount: '1큰술' },
      { id: 'pepper', amount: '조금' },
    ],
  },
  dakgalbi: {
    name: '닭갈비', protein: '닭', method: '볶음', level: '보통', minutes: 30, lunchbox: true,
    mainRecipe: 'dakgalbi-haruhanki',
    keyRatio: '고추장 2 : 고춧가루 2 : 간장 2 : 설탕 1 : 참기름 1 : 다진마늘 1',
    freeze: { how: '양념해서', packs: '2인분씩 2팩', reheat: '반쯤 녹여서 채소와 함께 볶기' },
    ingredients: [
      { id: 'chicken-thigh', amount: '500g' }, { id: 'cabbage', amount: '1/4통' }, { id: 'green-onion', amount: '1대' },
      { id: 'perilla', amount: '1묶음', optional: true }, { id: 'gochujang', amount: '2큰술' }, { id: 'chili-flakes', amount: '2큰술' },
      { id: 'soy', amount: '2큰술' }, { id: 'sugar', amount: '1큰술' }, { id: 'sesame-oil', amount: '1큰술' },
      { id: 'garlic-minced', amount: '1큰술' }, { id: 'pepper', amount: '조금' }, { id: 'oil', amount: '조금' },
    ],
  },
  'teriyaki-don': {
    name: '데리야끼 치킨덮밥', protein: '닭', method: '덮밥·면', level: '쉬움', minutes: 25, lunchbox: true,
    mainRecipe: 'teriyaki-don-jung',
    keyRatio: '청주 3 : 맛술 3 : 간장 3 : 설탕 2',
    ingredients: [
      { id: 'chicken-thigh', amount: '400g' }, { id: 'egg', amount: '2개' }, { id: 'cabbage', amount: '한 주먹' },
      { id: 'rice', amount: '2공기' }, { id: 'butter', amount: '2조각' }, { id: 'cheongju', amount: '3큰술' },
      { id: 'mirin', amount: '3큰술' }, { id: 'soy', amount: '3큰술' }, { id: 'sugar', amount: '2큰술' },
      { id: 'salt', amount: '조금' }, { id: 'pepper', amount: '조금' }, { id: 'oil', amount: '조금' },
    ],
  },

  /* ───── 소 ───── */
  bulgogi: {
    name: '소불고기', protein: '소', method: '볶음', level: '쉬움', minutes: 25, lunchbox: true,
    mainRecipe: 'bulgogi-paik',
    keyRatio: '간장 5 : 참기름 3 : 설탕 2.5 : 물엿 1 : 다진마늘 1, 후추 조금',
    freeze: { how: '양념해서', packs: '2인분씩 2팩', reheat: '반쯤 녹여서 팬에 볶기' },
    ingredients: [
      { id: 'beef-bulgogi', amount: '500g' }, { id: 'onion', amount: '1/2개' }, { id: 'green-onion', amount: '1대' },
      { id: 'shiitake', amount: '2개', optional: true }, { id: 'soy', amount: '5큰술' }, { id: 'sesame-oil', amount: '3큰술' },
      { id: 'sugar', amount: '2.5큰술' }, { id: 'mulyeot', amount: '1큰술' }, { id: 'garlic-minced', amount: '1큰술' },
      { id: 'pepper', amount: '조금' }, { id: 'sesame-seed', amount: '조금' },
    ],
  },
  'beef-radish-soup': {
    name: '소고기무국', protein: '소', method: '국물', level: '쉬움', minutes: 30, lunchbox: false,
    mainRecipe: 'beef-radish-soup-paik',
    keyRatio: '참기름 + 식용유에 고기 · 무 볶고 물 1.5L, 국간장 2 · 액젓 2 · 다진마늘 1, 소금으로 간',
    freeze: { how: '완성해서', packs: '2인분씩 2팩', reheat: '냄비에 그대로 넣고 끓이기' },
    ingredients: [
      { id: 'beef-soup', amount: '150g' }, { id: 'radish', amount: '1/4개' }, { id: 'onion', amount: '1/4개' },
      { id: 'green-onion', amount: '1/3대' }, { id: 'soy-soup', amount: '2큰술' }, { id: 'fish-sauce', amount: '2큰술', optional: true },
      { id: 'garlic-minced', amount: '1큰술' }, { id: 'sesame-oil', amount: '1큰술' }, { id: 'oil', amount: '1큰술' },
      { id: 'salt', amount: '0.5큰술' }, { id: 'pepper', amount: '조금' },
    ],
  },
  gyudon: {
    name: '소고기덮밥(규동)', protein: '소', method: '덮밥·면', level: '쉬움', minutes: 20, lunchbox: true,
    mainRecipe: 'gyudon-jung',
    keyRatio: '물 200ml : 간장 3 : 설탕 3 : 맛술 1 : 청주 1',
    ingredients: [
      { id: 'beef-bulgogi', amount: '300g' }, { id: 'onion', amount: '1/2개' }, { id: 'rice', amount: '2공기' },
      { id: 'egg', amount: '2개', optional: true }, { id: 'soy', amount: '3큰술' }, { id: 'sugar', amount: '3큰술' },
      { id: 'mirin', amount: '1큰술' }, { id: 'cheongju', amount: '1큰술' }, { id: 'oil', amount: '조금' },
    ],
  },

  /* ───── 생선 ───── */
  'mackerel-gui': {
    name: '고등어구이', protein: '생선', method: '구이', level: '쉬움', minutes: 15, lunchbox: false,
    keyRatio: '식용유 2 : 식초 2 섞어서 발라 가며 굽기',
    mainRecipe: 'mackerel-gui-yangjanggeum',
    sides: '계란말이',
    ingredients: [
      { id: 'mackerel', amount: '2마리' }, { id: 'egg', amount: '4개' }, { id: 'green-onion', amount: '1/4대' },
      { id: 'oil', amount: '2큰술' }, { id: 'vinegar', amount: '2큰술' }, { id: 'salt', amount: '조금' },
    ],
  },
  'mackerel-jorim': {
    name: '고등어 김치조림', protein: '생선', method: '조림·찜', level: '쉬움', minutes: 30, lunchbox: false,
    mainRecipe: 'mackerel-jorim-paik',
    keyRatio: '고춧가루 6 : 다진마늘 2 : 된장 2 : 간장 2 : 참기름 2 : 설탕 1, 물 2컵',
    ingredients: [
      { id: 'canned-mackerel', amount: '1캔' }, { id: 'kimchi', amount: '1/4포기' }, { id: 'onion', amount: '1/2개' },
      { id: 'cheongyang', amount: '3개' }, { id: 'green-onion', amount: '1/2대' }, { id: 'chili-flakes', amount: '6큰술' },
      { id: 'garlic-minced', amount: '2큰술' }, { id: 'doenjang', amount: '2큰술' }, { id: 'soy', amount: '2큰술' },
      { id: 'sesame-oil', amount: '2큰술' }, { id: 'sugar', amount: '1큰술' },
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
    keyRatio: '물 2컵에 된장 3, 고춧가루 1/3 · 다진마늘 1/2',
    memo: '바지락 대신 소고기 양지로 국물을 내요',
    ingredients: [
      { id: 'beef-soup', amount: '60g' }, { id: 'tofu', amount: '1/2모' }, { id: 'zucchini', amount: '1/4개' },
      { id: 'radish', amount: '50g' }, { id: 'onion', amount: '1/4개' }, { id: 'green-onion', amount: '1/3대' },
      { id: 'cheongyang', amount: '2개' }, { id: 'egg', amount: '4개' }, { id: 'doenjang', amount: '3큰술' },
      { id: 'chili-flakes', amount: '1/3큰술' }, { id: 'garlic-minced', amount: '1/2큰술' },
    ],
  },
  sundubu: {
    name: '순두부찌개', protein: '두부·계란', method: '국물', level: '쉬움', minutes: 20, lunchbox: false,
    mainRecipe: 'sundubu-paik',
    keyRatio: '참기름 3에 고춧가루 1로 고추기름, 간장 2 · 다진마늘 1, 물 2컵',
    memo: '바지락 대신 다진 돼지고기',
    ingredients: [
      { id: 'soft-tofu', amount: '1봉' }, { id: 'pork-ground', amount: '60g' }, { id: 'egg', amount: '2개' },
      { id: 'onion', amount: '1/4개' }, { id: 'green-onion', amount: '1/2대' }, { id: 'cheongyang', amount: '2개' },
      { id: 'sesame-oil', amount: '3큰술' }, { id: 'chili-flakes', amount: '1큰술' }, { id: 'soy', amount: '2큰술' },
      { id: 'garlic-minced', amount: '1큰술' }, { id: 'sugar', amount: '1/3큰술' }, { id: 'salt', amount: '0.5큰술' },
      { id: 'pepper', amount: '조금' },
    ],
  },
  'dubu-jorim': {
    name: '두부조림', protein: '두부·계란', method: '조림·찜', level: '쉬움', minutes: 20, lunchbox: true,
    mainRecipe: 'dubu-jorim-harukki',
    keyRatio: '물 6 : 간장 2 : 고춧가루 1 : 참기름 1 : 설탕 0.5 : 다진마늘 0.5',
    ingredients: [
      { id: 'tofu', amount: '1모' }, { id: 'onion', amount: '1/2개' }, { id: 'green-onion', amount: '1/4대' },
      { id: 'soy', amount: '2큰술' }, { id: 'chili-flakes', amount: '1큰술' }, { id: 'sesame-oil', amount: '1큰술' },
      { id: 'sugar', amount: '0.5큰술' }, { id: 'garlic-minced', amount: '0.5큰술' }, { id: 'oil', amount: '조금' },
      { id: 'sesame-seed', amount: '조금', optional: true },
    ],
  },
  'dubu-kimchi': {
    name: '두부김치', protein: '두부·계란', method: '볶음', level: '쉬움', minutes: 20, lunchbox: false,
    mainRecipe: 'dubu-kimchi-paik',
    keyRatio: '간장 3 : 참기름 2 : 고춧가루 1.5 : 다진마늘 1 : 설탕 0.5, 물 반 컵',
    ingredients: [
      { id: 'tofu', amount: '1모' }, { id: 'kimchi', amount: '1/8포기' }, { id: 'pork-belly-thin', amount: '160g' },
      { id: 'onion', amount: '1/4개' }, { id: 'carrot', amount: '1/5개' }, { id: 'cheongyang', amount: '1개' },
      { id: 'green-onion', amount: '1/4대' }, { id: 'soy', amount: '3큰술' }, { id: 'sesame-oil', amount: '2큰술' },
      { id: 'chili-flakes', amount: '1.5큰술' }, { id: 'garlic-minced', amount: '1큰술' }, { id: 'sugar', amount: '0.5큰술' },
      { id: 'sesame-seed', amount: '조금' },
    ],
  },

  /* ───── 채소 · 남은 재료 ───── */
  bibimbap: {
    name: '비빔밥', protein: '채소', method: '덮밥·면', level: '보통', minutes: 30, lunchbox: false,
    mainRecipe: 'bibimbap-paik-microwave',
    keyRatio: '1인분에 고추장 1 : 국간장 1 : 참기름 1',
    ingredients: [
      { id: 'rice', amount: '2공기' }, { id: 'zucchini', amount: '1/3개' }, { id: 'bean-sprout', amount: '1/2봉' },
      { id: 'radish', amount: '60g' }, { id: 'carrot', amount: '1/4개' }, { id: 'shiitake', amount: '2개' },
      { id: 'egg', amount: '2개' }, { id: 'laver', amount: '조금', optional: true }, { id: 'gochujang', amount: '2큰술' },
      { id: 'soy-soup', amount: '2큰술' }, { id: 'sesame-oil', amount: '2큰술' }, { id: 'oil', amount: '조금' },
      { id: 'sesame-seed', amount: '조금' },
    ],
  },
  'fridge-fried-rice': {
    name: '냉장고 털이 볶음밥', protein: '남은 재료', method: '볶음', level: '쉬움', minutes: 15, lunchbox: true,
    mainRecipe: 'fridge-fried-rice-paik',
    sides: '김치',
    keyRatio: '밥 1공기에 식용유 4 : 간장 0.5, 파기름 먼저',
    memo: '이번 주에 남은 채소·고기를 모두 넣어요',
    ingredients: [
      { id: 'rice', amount: '2공기' }, { id: 'egg', amount: '4개' }, { id: 'green-onion', amount: '1대' },
      { id: 'oil', amount: '8큰술' }, { id: 'soy', amount: '1큰술' }, { id: 'salt', amount: '조금' },
    ],
  },

  /* ───── 가끔 특식 ───── */
  'tomato-pasta': {
    name: '베이컨 토마토 파스타', protein: '돼지', method: '양식', special: true, level: '쉬움', minutes: 25, lunchbox: true,
    mainRecipe: 'tomato-pasta-sosohwang',
    keyRatio: '면 200g에 토마토소스 300g, 올리브유 4 · 페페론치노 3개',
    ingredients: [
      { id: 'pasta', amount: '200g' }, { id: 'tomato-sauce', amount: '300g' }, { id: 'bacon', amount: '80g' },
      { id: 'onion', amount: '1/3개' }, { id: 'garlic-whole', amount: '10알' }, { id: 'olive-oil', amount: '4큰술' },
      { id: 'pepperoncino', amount: '3개', optional: true }, { id: 'parmesan', amount: '조금', optional: true }, { id: 'salt', amount: '1큰술' },
      { id: 'pepper', amount: '조금' },
    ],
  },
  'cream-pasta': {
    name: '치킨 크림 파스타', protein: '닭', method: '양식', special: true, level: '쉬움', minutes: 25, lunchbox: false,
    mainRecipe: 'cream-pasta-dday-chicken',
    keyRatio: '생크림 150g : 우유 150g, 버터 20g + 밀가루 1스푼으로 농도',
    ingredients: [
      { id: 'pasta', amount: '160g' }, { id: 'chicken-breast', amount: '1덩이' }, { id: 'heavy-cream', amount: '150g' },
      { id: 'milk', amount: '150g' }, { id: 'onion', amount: '1/2개' }, { id: 'button-mushroom', amount: '4개' },
      { id: 'garlic-whole', amount: '4알' }, { id: 'butter', amount: '20g' }, { id: 'flour', amount: '1큰술' },
      { id: 'oil', amount: '2큰술' }, { id: 'olive-oil', amount: '1큰술' }, { id: 'salt', amount: '조금' },
      { id: 'pepper', amount: '조금' },
    ],
  },
  'aglio-olio': {
    name: '알리오올리오', protein: '채소', method: '양식', special: true, level: '쉬움', minutes: 20, lunchbox: false,
    mainRecipe: 'aglio-olio-paik',
    keyRatio: '면 200g에 올리브유 2/3컵 · 편마늘 8개 + 다진마늘 4, 면수 140ml',
    ingredients: [
      { id: 'pasta', amount: '200g' }, { id: 'garlic-whole', amount: '8개' }, { id: 'pepperoncino', amount: '10개', optional: true },
      { id: 'cheongyang', amount: '1개', optional: true }, { id: 'parmesan', amount: '조금', optional: true }, { id: 'garlic-minced', amount: '4큰술' },
      { id: 'olive-oil', amount: '10큰술' }, { id: 'salt', amount: '조금' },
    ],
  },
  omurice: {
    name: '오므라이스', protein: '두부·계란', method: '양식', special: true, level: '보통', minutes: 25, lunchbox: false,
    mainRecipe: 'omurice-haruhanki',
    keyRatio: '밥 1공기에 케첩 2 : 간장 1, 계란 2개씩 한 장',
    ingredients: [
      { id: 'rice', amount: '2공기' }, { id: 'egg', amount: '4개' }, { id: 'ham', amount: '조금' },
      { id: 'onion', amount: '1/2개' }, { id: 'carrot', amount: '조금' }, { id: 'green-onion', amount: '조금' },
      { id: 'ketchup', amount: '4큰술' }, { id: 'soy', amount: '2큰술' }, { id: 'salt', amount: '조금' },
      { id: 'oil', amount: '조금' },
    ],
  },

  /* ───── 밀프랩 전용 (저녁 추천에는 안 나와요) ───── */
  'spam-jumeokbap': {
    name: '스팸마요 주먹밥', protein: '돼지', method: '덮밥·면', prepOnly: true, level: '쉬움', minutes: 30, lunchbox: true,
    mainRecipe: 'spam-jumeokbap-eunju',
    keyRatio: '밥 300g에 스팸 100g · 계란 2개, 간장 2 : 설탕 0.5 : 마요 1 : 참기름 1',
    freeze: { how: '완성해서', packs: '8개쯤', reheat: '랩째로 전자레인지 1분 30초~2분' },
    ingredients: [
      { id: 'spam', amount: '1캔' }, { id: 'rice', amount: '3공기' }, { id: 'egg', amount: '4개' },
      { id: 'laver', amount: '2~4봉' }, { id: 'soy', amount: '4큰술' }, { id: 'sugar', amount: '1큰술' },
      { id: 'mayo', amount: '2큰술' }, { id: 'sesame-oil', amount: '2큰술' },
    ],
  },
  'bulgogi-burrito': {
    name: '소불고기 브리또', protein: '소', method: '양식', prepOnly: true, level: '쉬움', minutes: 40, lunchbox: true,
    mainRecipe: 'bulgogi-burrito-elena',
    keyRatio: '양념 불고기 600g 볶아서 → 또띠아에 밥 · 불고기 · 치즈 → 말아서 굽기',
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
    mainRecipe: 'tteokgalbi-thiscook',
    keyRatio: '다진 고기 450g에 간장 3 : 흑설탕 3 : 맛술 2 : 참기름 2 : 물엿 1 : 다진마늘 1, 전분 1',
    freeze: { how: '양념해서', packs: '5개 (90g씩), 2배로 하면 10개', reheat: '녹이지 않고 약불에 뚜껑 덮어 굽기' },
    ingredients: [
      { id: 'beef-ground', amount: '300g' }, { id: 'pork-ground', amount: '150g' }, { id: 'green-onion', amount: '1/2대' },
      { id: 'cheongyang', amount: '1개' }, { id: 'soy', amount: '3큰술' }, { id: 'sugar', amount: '3큰술' },
      { id: 'mirin', amount: '2큰술' }, { id: 'sesame-oil', amount: '2큰술' }, { id: 'mulyeot', amount: '1큰술' },
      { id: 'garlic-minced', amount: '1큰술' }, { id: 'starch', amount: '1큰술' }, { id: 'sesame-seed', amount: '1큰술', optional: true },
      { id: 'pepper', amount: '조금' }, { id: 'oil', amount: '조금' },
    ],
  },
} satisfies Record<string, Menu>

export type MenuId = keyof typeof menus
