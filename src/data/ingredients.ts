// 재료 사전 (SPEC 7-1). 메뉴·레시피는 여기 있는 이름표(id)로만 재료를 가리켜요.
import type { Ingredient } from '../types.ts'

export const ingredients = {
  /* 정육 */
  'pork-front': { name: '돼지 앞다리살', section: '정육', buyUnit: '600g' },
  'pork-belly-thin': { name: '대패삼겹살', section: '정육', buyUnit: '600g' },
  'pork-neck': { name: '돼지 목살', section: '정육', buyUnit: '500g' },
  'pork-ground': { name: '다진 돼지고기', section: '정육', buyUnit: '300g' },
  'pork-block': { name: '수육용 돼지고기', section: '정육', buyUnit: '600g' },
  'whole-chicken': { name: '닭볶음탕용 닭', section: '정육', buyUnit: '1마리' },
  'chicken-thigh': { name: '닭다리살', section: '정육', buyUnit: '500g' },
  'chicken-breast': { name: '닭가슴살', section: '정육', buyUnit: '1팩' },
  'beef-bulgogi': { name: '불고기용 소고기', section: '정육', buyUnit: '300g' },
  'beef-soup': { name: '국거리 소고기', section: '정육', buyUnit: '300g' },
  'beef-ground': { name: '다진 소고기', section: '정육', buyUnit: '300g' },

  /* 수산 */
  mackerel: { name: '손질 고등어', section: '수산', buyUnit: '1팩(2마리)' },

  /* 채소 */
  onion: { name: '양파', section: '채소', buyUnit: '1망' },
  'green-onion': { name: '대파', section: '채소', buyUnit: '1단' },
  potato: { name: '감자', section: '채소', buyUnit: '1봉' },
  carrot: { name: '당근', section: '채소', buyUnit: '1개' },
  cabbage: { name: '양배추', section: '채소', buyUnit: '1/2통' },
  'bean-sprout': { name: '콩나물', section: '채소', buyUnit: '1봉' },
  zucchini: { name: '애호박', section: '채소', buyUnit: '1개' },
  radish: { name: '무', section: '채소', buyUnit: '1개' },
  cheongyang: { name: '청양고추', section: '채소', buyUnit: '1봉' },
  mushroom: { name: '새송이버섯', section: '채소', buyUnit: '1봉' },
  'garlic-whole': { name: '통마늘', section: '채소', buyUnit: '1봉' },
  spinach: { name: '시금치', section: '채소', buyUnit: '1단' },
  lettuce: { name: '상추', section: '채소', buyUnit: '1봉' },
  perilla: { name: '깻잎', section: '채소', buyUnit: '1묶음' },
  shiitake: { name: '표고버섯', section: '채소', buyUnit: '1팩' },
  'button-mushroom': { name: '양송이버섯', section: '채소', buyUnit: '1팩' },

  /* 두부·계란 */
  tofu: { name: '두부', section: '두부·계란', buyUnit: '1모' },
  'soft-tofu': { name: '순두부', section: '두부·계란', buyUnit: '1봉' },
  egg: { name: '계란', section: '두부·계란', buyUnit: '10구' },

  /* 가공·기타 */
  kimchi: { name: '김치', section: '가공·기타', buyUnit: '1봉', staple: true },
  'tuna-can': { name: '참치캔', section: '가공·기타', buyUnit: '1캔' },
  bacon: { name: '베이컨', section: '가공·기타', buyUnit: '1팩' },
  ham: { name: '햄', section: '가공·기타', buyUnit: '1개' },
  pasta: { name: '스파게티면', section: '가공·기타', buyUnit: '1봉(500g)' },
  'tomato-sauce': { name: '토마토 파스타소스', section: '가공·기타', buyUnit: '1병' },
  'heavy-cream': { name: '생크림', section: '가공·기타', buyUnit: '1팩(250ml)' },
  curry: { name: '카레가루', section: '가공·기타', buyUnit: '1봉(100g)' },
  dangmyeon: { name: '당면', section: '가공·기타', buyUnit: '1봉' },
  spam: { name: '스팸', section: '가공·기타', buyUnit: '1캔(200g)' },
  laver: { name: '조미김', section: '가공·기타', buyUnit: '1봉(소포장 묶음)' },
  tortilla: { name: '또띠아', section: '가공·기타', buyUnit: '1봉(10장)' },
  mozzarella: { name: '모차렐라 치즈', section: '가공·기타', buyUnit: '1봉' },
  butter: { name: '버터', section: '가공·기타', buyUnit: '1개' },
  milk: { name: '우유', section: '가공·기타', buyUnit: '1팩' },
  'canned-mackerel': { name: '고등어 통조림', section: '가공·기타', buyUnit: '1캔(400g)' },
  parmesan: { name: '파마산 치즈가루', section: '가공·기타', buyUnit: '1통' },
  soju: { name: '소주', section: '가공·기타', buyUnit: '1병' },

  /* 양념·소스 (대부분 집에 늘 있음) */
  soy: { name: '진간장', section: '양념·소스', buyUnit: '1병', staple: true },
  'soy-soup': { name: '국간장', section: '양념·소스', buyUnit: '1병', staple: true },
  gochujang: { name: '고추장', section: '양념·소스', buyUnit: '1통', staple: true },
  'chili-flakes': { name: '고춧가루', section: '양념·소스', buyUnit: '1봉', staple: true },
  doenjang: { name: '된장', section: '양념·소스', buyUnit: '1통', staple: true },
  sugar: { name: '설탕', section: '양념·소스', buyUnit: '1봉', staple: true },
  salt: { name: '소금', section: '양념·소스', buyUnit: '1봉', staple: true },
  pepper: { name: '후추', section: '양념·소스', buyUnit: '1통', staple: true },
  'garlic-minced': { name: '다진마늘', section: '양념·소스', buyUnit: '1통', staple: true },
  'sesame-oil': { name: '참기름', section: '양념·소스', buyUnit: '1병', staple: true },
  oil: { name: '식용유', section: '양념·소스', buyUnit: '1병', staple: true },
  mirin: { name: '맛술', section: '양념·소스', buyUnit: '1병', staple: true },
  'oyster-sauce': { name: '굴소스', section: '양념·소스', buyUnit: '1병', staple: true },
  vinegar: { name: '식초', section: '양념·소스', buyUnit: '1병', staple: true },
  ketchup: { name: '케첩', section: '양념·소스', buyUnit: '1통', staple: true },
  'olive-oil': { name: '올리브유', section: '양념·소스', buyUnit: '1병', staple: true },
  mayo: { name: '마요네즈', section: '양념·소스', buyUnit: '1통', staple: true },
  'tuna-sauce': { name: '참치액', section: '양념·소스', buyUnit: '1병' },
  'sesame-seed': { name: '통깨', section: '양념·소스', buyUnit: '1봉', staple: true },
  mulyeot: { name: '물엿', section: '양념·소스', buyUnit: '1병', staple: true },
  flour: { name: '밀가루', section: '양념·소스', buyUnit: '1봉', staple: true },
  cheongju: { name: '청주', section: '양념·소스', buyUnit: '1병' },
  maesil: { name: '매실청', section: '양념·소스', buyUnit: '1병' },
  'fish-sauce': { name: '멸치액젓', section: '양념·소스', buyUnit: '1병' },
  saeujeot: { name: '새우젓', section: '양념·소스', buyUnit: '1통' },
  pepperoncino: { name: '페페론치노', section: '양념·소스', buyUnit: '1봉' },
  'dried-chili': { name: '베트남 건고추', section: '양념·소스', buyUnit: '1봉' },
  doubanjiang: { name: '두반장', section: '양념·소스', buyUnit: '1병' },
  'steak-sauce': { name: '스테이크 소스', section: '양념·소스', buyUnit: '1병' },
  starch: { name: '감자전분', section: '양념·소스', buyUnit: '1봉' },

  /* 곡류 */
  rice: { name: '쌀', section: '곡류', buyUnit: '4kg', staple: true },
} satisfies Record<string, Ingredient>

export type IngredientId = keyof typeof ingredients
