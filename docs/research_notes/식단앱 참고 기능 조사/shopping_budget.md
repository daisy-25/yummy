# 장보기 목록 & 식비 예산 기능 조사 (2인 가구, 주 5만원 저녁 예산 웹앱 참고용)

조사일: 2026-10-21. 출처는 대부분 공식 도움말, 앱스토어 소개, 리뷰 기사. Reddit 스레드는 검색에서 직접 확보하지 못함(아래 Gaps 참고).

## 1. 장보기 목록 UX (매장 구역별 묶기, 자동 정렬, 체크한 항목 처리, 수량 합치기, 공유)

### Takeaway
주요 앱은 공통적으로 (1) 넣은 항목을 카테고리/코너별로 자동 분류하고, (2) 코너 순서를 사용자가 매장 동선에 맞게 바꿀 수 있게 하며, (3) 체크한 항목은 줄을 긋거나 맨 아래로 내리고 "체크한 항목 한 번에 지우기"를 제공하고, (4) 여러 레시피의 재료를 하나의 목록으로 합치고, (5) 두 사람 이상이 실시간으로 같은 목록을 공유하게 한다. 이 다섯 가지가 사실상 표준 기능이다.

### Cited Findings
- AnyList: 넣은 항목은 카테고리별로 자동 분류되고, 사용자가 직접 묶음을 만들 수도 있다. 카테고리 순서를 매장 통로 순서에 맞게 바꿀 수 있고, "category sets"로 한 목록에 매장별 카테고리 세트를 여러 개 두고 전환할 수 있다. — [AnyList Help: category sets](https://help.anylist.com/articles/category-sets/); [Macworld review](https://www.macworld.com/article/227699/anylist-review-grocery-app-crosses-off-nearly-everything-on-our-shopping-list.html)
- AnyList: 탭하면 줄이 그어지고, 다시 탭하면 되살아난다("다음 장보기 때 다시 쓰기"). 장보기를 마치면 줄 그은 항목을 한 번에 지운다. — [Macworld review](https://www.macworld.com/article/227699/anylist-review-grocery-app-crosses-off-nearly-everything-on-our-shopping-list.html)
- AnyList는 다른 계정 사용자와 진짜로 공유되기 때문에 공유 장보기 목록 앱으로 최고라는 평을 받았다(같은 계정으로 여러 기기에 로그인하는 방식은 진정한 공유로 치지 않음). — [The Sweet Setup](https://thesweetsetup.com/?p=3818)
- Paprika 3: 레시피를 장보기 목록에 넣으면 재료를 자동으로 합치고 코너별로 정렬한다. 코너를 직접 추가하고 순서를 바꿀 수 있다. 자체 동기화 서비스로 가족·룸메이트와 계정을 공유한다. — [App Store: Paprika 3](https://apps.apple.com/app/id1303222628); 2014년 리뷰에는 "코너를 편집할 수 없다"고 되어 있어 이후 추가된 기능으로 보임 — [TidBITS 2014](https://tidbits.com/2014/03/14/funbits-paprika-recipe-manager-for-iphone-ipad-and-mac/)
- OurGroceries: 카테고리나 코너별로 정리할 수 있고, 지역에 맞춘 카테고리 추천이 기본으로 들어 있다. 여러 기기 간 실시간 동기화, 웹 브라우저 버전, 레시피 재료를 원탭으로 목록에 추가하는 기능이 있다. 무료이고 광고 제거는 유료. — [App Store KR: OurGroceries](https://apps.apple.com/KR/app/id325851015); [PCWorld](https://www.pcworld.com/article/486636/ourgroceries.html); [AlternativeTo](https://alternativeto.net/software/ourgroceries/about)
- Bring!: 가족·룸메이트와 공유하고 변경이 생기면 알림이 오며, 중복 구매를 막는 것을 핵심 가치로 내세운다. 자동 정렬, 아이콘이 붙은 자동완성 검색, 타일 보기와 리스트 보기, 매장별 목록을 여러 개 만들 수 있다. — [App Store: Bring!](https://apps.apple.com/app/bring-shopping-list-recipes/id580669177); [TapSmart review](https://www.tapsmart.com/apps/review-bring-shopping-lists-made-easy/?amp=1)
- Google Keep: 설정의 "List behavior"에서 "Move checked items to the bottom"(체크한 항목을 맨 아래로)을 켤 수 있고, 새 항목을 위에 넣을지 아래에 넣을지도 고를 수 있다. 신규 사용자는 기본으로 켜져 있다는 블로그 보고가 있다. — [Google Keep Help](https://support.google.com/keep/answer/6358550); [jefftk.com 2020](https://www.jefftk.com/p/keep-move-checked-items-to-bottom)
- $5 Meal Plan: 매주 금요일 이메일로 식단을 보낸다(레시피마다 4인분). 그 주 모든 레시피 재료를 합친 장보기 목록을 카테고리별로 정렬해 준다. — [developgoodhabits review](https://developgoodhabits.com/?p=8218)
- Mealime: 식단 선호를 한 번 설정하면 매장 코너별 장보기 목록을 만들어 주고, 무료 등급에서도 장보기 목록 기능을 모두 쓸 수 있다(Pro는 월 2.99달러). 블로그 1곳의 주장임. — [macaron.im blog](https://macaron.im/blog/meal-plan-with-grocery-list)
- Samsung Food: 주간 식단이 스마트 장보기 목록으로 바뀌고, 가족 공유 목록과 연동 소매점 배송을 지원한다. — [macaron.im blog](https://macaron.im/blog/meal-plan-with-grocery-list); [toolworthy](https://www.toolworthy.ai/tool/samsung-food)
- SwiftLists 사용자 리뷰: 카테고리별 정렬과 "아직 안 담은 것" 기준 정렬을 둘 다 고를 수 있어 좋다고 했다. "체크한 항목 모두 삭제"는 프리미엄 기능이다. — [App Store: SwiftLists](https://apps.apple.com/us/app/swiftlists-tasks-shop-todo/id1448600277)

### Inferences
- 2인 가구 소형 웹앱에서 우선순위: ① 체크하면 줄 긋고 맨 아래로 내리기(되돌리기 가능) ② 카테고리 고정 순서(채소, 정육·수산, 두부·계란·유제품, 가공·소스, 기타) ③ "체크한 항목 정리" 버튼 ④ 여러 메뉴에서 같은 재료가 나오면 한 줄로 합치고 "(메뉴A, 메뉴B)"처럼 출처 표시. 카테고리 세트나 매장별 목록 같은 기능은 이 규모에서는 과하다.
- 실시간 공유는 서버가 필요하다. 2인용이면 URL 공유 + 단순 백엔드(예: Firebase/Supabase 실시간 문서 1개)로 충분하고, 서버가 없다면 "목록 텍스트 복사해서 카톡으로 보내기"로 대체할 수 있다.

### Gaps
- 스와이프 동작(밀어서 삭제, 밀어서 수량 변경)에 대한 앱별 공식 문서는 찾지 못했다.
- 단위가 다를 때(예: "양파 1개" + "양파 200g") 어떻게 합치는지에 대한 공식 문서가 없다. 앱마다 다르고 대체로 완벽하게 합치지 못한다는 것이 일반적인 인식이지만 출처를 확보하지 못했다.

## 2. 집에 있는 재료(팬트리 / 냉장고 / 이미 있음) 처리

### Takeaway
방식은 크게 두 가지다. (a) Paprika처럼 팬트리 목록에 있는 재료를 장보기 목록에서 자동으로 체크하거나 빼는 방식, (b) Prepear처럼 늘 집에 있는 기본 재료(소금, 후추, 밀가루)를 목록에 아예 올리지 않는 방식. 수량까지 정확히 추적하는 앱은 드물고, 이 점이 약점으로 자주 지적된다.

### Cited Findings
- Paprika: 레시피나 식단을 장보기 목록에 넣을 때 팬트리에 있는 재료는 자동으로 체크해 둔다. — [TidBITS 2014](https://tidbits.com/2014/03/14/funbits-paprika-recipe-manager-for-iphone-ipad-and-mac/)
- Paprika 현재 앱스토어 설명: 팬트리에 사용자 재료를 추가하고 수량, 구입일, 유통기한을 추적할 수 있다. 2014년 리뷰는 "개발사가 정한 품목만 되고 수량 추적은 안 된다"고 했으므로 이후 개선된 것으로 보인다. — [App Store: Paprika 3](https://apps.apple.com/app/id1303222628); [TidBITS](https://tidbits.com/2014/03/14/funbits-paprika-recipe-manager-for-iphone-ipad-and-mac/)
- Prepear: 팬트리는 늘 집에 있는 물품(물, 소금, 후추, 계피, 밀가루 등)으로 장보기 목록이 어수선해지지 않게 하는 장치다. 팬트리 품목을 목록에서 뺄 때 아직 있는지 확인하라고 묻고, 팬트리와 목록 사이에서 항목을 옮길 수 있다. — [Prepear Help](https://help.prepear.com/hc/en-us/articles/360031261271-How-to-Use-Your-Pantry-With-Your-Grocery-List)
- Samsung Food: 냉장고나 팬트리 사진을 찍으면 재료가 목록(Food List)에 추가되고, 장보기 목록으로 산 물건이 Food List에 반영된다. 다만 정확한 재고 수량 관리는 없다는 리뷰가 있다. 유료 Food+(약 월 6.99달러)에는 팬트리 자동 제안이 들어 있다. — [toolworthy](https://www.toolworthy.ai/tool/samsung-food); [macaron.im](https://macaron.im/blog/meal-plan-with-grocery-list)
- Mealime는 어느 등급에도 팬트리 추적이 없다(블로그 1곳 주장, 미검증). — [macaron.im](https://macaron.im/blog/meal-plan-with-grocery-list)
- 국내 '원더 프리지': 소비기한 임박 알림, 장보기 목록을 한 번에 냉장고 목록으로 옮기기, 가족 실시간 동기화. '냉장고 도우미', '유통기한 알리미', '해피냉장고'는 유통기한 관리 중심이고 장보기 연동은 확인되지 않는다. — [App Store: 원더 프리지](https://apps.apple.com/kr/app/%EC%9B%90%EB%8D%94-%ED%94%84%EB%A6%AC%EC%A7%80-%EB%83%89%EC%9E%A5%EA%B3%A0-%EC%8B%9D%ED%92%88-%EA%B4%80%EB%A6%AC-%EC%86%8C%EB%B9%84%EA%B8%B0%ED%95%9C-%EC%95%8C%EB%A6%BC/id6740434362); [App Store: 냉장고 도우미](https://apps.apple.com/kr/app/%EB%83%89%EC%9E%A5%EA%B3%A0-%EB%8F%84%EC%9A%B0%EB%AF%B8-%EC%8A%A4%EB%A7%88%ED%8A%B8-%EC%8B%9D%EC%9E%AC%EB%A3%8C-%EC%9C%A0%ED%86%B5%EA%B8%B0%ED%95%9C-%EA%B4%80%EB%A6%AC/id6744269332)

### Inferences
- 정확한 수량을 추적하는 방식은 입력 부담이 커서 2인 가구 앱에는 맞지 않는다. 대신 "집에 늘 있음" 토글(쌀, 김치, 간장, 고추장, 된장, 참기름, 마늘 등)을 두고, 켜진 재료는 장보기 목록에서 기본으로 숨기거나 회색 "집에 있음" 구역에 접어 두는 Prepear 방식이 적합하다. 떨어졌을 때만 끄면 다시 목록에 나온다.
- 기본 재료는 주간 예산에서 빼거나 "기본 재료 보충" 별도 줄로 처리하는 편이 예산 계산을 단순하게 만든다(3절의 Budget Bytes 영수증 비교와 같은 논리).

### Gaps
- 기본 재료를 "조금 남음/없음" 3단계로 관리하는 앱 사례는 찾지 못했다.

## 3. 비용: 품목별·레시피별·1인분 가격, 주간 합계 대 예산, 가격 출처, 가격 이력

### Takeaway
식단·장보기 앱의 가격 기능은 대부분 사용자가 직접 입력하는 방식이다(AnyList Complete). 입력한 가격으로 목록 하단에 누계를 보여주고 매장별로 가격을 비교하게 한다. 레시피 원가와 1인분 원가는 Budget Bytes처럼 "실제로 쓴 분량만큼"을 계산하고, 실제 영수증 금액과는 따로 본다. 국내 가계부형 장보기 앱(리스트 계산기 등)은 목록별 예산 한도와 실시간 합계를 제공한다.

### Cited Findings
- AnyList: 장보는 중이나 전단을 보면서 가격을 입력하면 목록 하단의 누계가 갱신되어 예산을 지키는 데 도움이 된다. 매장별 가격을 따로 저장해 비교할 수 있다. 가격 입력은 유료 AnyList Complete 기능이다. — [AnyList Help: item prices](https://help.anylist.com/articles/anylist-feature-overview-item-prices/)
- Budget Bytes: 레시피마다 원가와 1인분 가격을 계산한다. 재료의 총 가격을 그 재료가 내는 분량 수로 나누는 방식이라, 카옌페퍼 한 꼬집도 2센트로 잡는다. 실제로 쓴 부피만큼만 원가에 넣고, 기본 재료 보충 비용이 포함된 실제 영수증과는 따로 비교한다. 1인분 가격을 센트 단위까지 표시한다. — [The Spectator](https://thespectator.com/?p=50105); [Budget Bytes post](https://budgetbytes.com/mini-garden-turkey-loaf-meal/comment-page-2)
- 예산형 식단 서비스와 기사들은 레시피별 1인분 가격과 하루·주간 합계를 함께 보여준다. 예: 10News 주간 식단은 치킨 저녁 1인분 1.90달러, 하루 합계 4.42달러. Wooden Skillet은 장보기 총액 약 70달러를 1인분 약 2.77달러로 환산하고, 지역(중서부) 가격 기준이라는 단서를 붙인다. — [10News](https://www.10news.com/news/weekly-meal-plans-5-a-day-for-5-days); [Wooden Skillet](https://thewoodenskillet.substack.com/p/budget-friendly-meal-plan)
- CTV의 하루 5달러 식단 실험: 6인분 로스트치킨 저녁이 1인분 2.91달러였고, 남은 닭고기는 다른 요리에 쓴다. 남는 재료 활용을 원가 계산에 반영한 사례. — [CTV News](https://bc.ctvnews.ca/can-you-get-by-on-a-5-a-day-meal-plan-1.4253200)
- 국내 '리스트 계산기 - 장보기&예산관리': 품목과 가격을 입력하면 총액을 실시간으로 계산하고, 목록별 예산 한도를 정할 수 있다. — [App Store KR](https://apps.apple.com/kr/app/id6756876308)
- '쇼핑 식료품 목록': 가격과 수량을 입력하면 총 쇼핑 비용을 계산하고 연락처와 목록을 공유한다. — [App Store KR](https://apps.apple.com/kr/app/%EC%87%BC%ED%95%91-%EC%8B%9D%EB%A3%8C%ED%92%88-%EB%AA%A9%EB%A1%9D/id1014974796)
- Shoppylist: 한 앱스토어 페이지에는 가격 입력만 되고 합계는 보여주지 않는다고 되어 있어, 버전에 따라 다를 수 있다. — [App Store KR: Shoppylist](https://apps.apple.com/kr/app/shoppylist-%EC%8B%9D%EB%A3%8C%ED%92%88-%EB%AA%A9%EB%A1%9D/id602418681)
- Samsung Food: 연동 소매점(4개 지역, 23곳)으로 배송 주문을 할 수 있다. 가격을 소매점 연동으로 가져오는 구조로 보이지만, 가격 표시 방식은 확인하지 못했다. — [macaron.im](https://macaron.im/blog/meal-plan-with-grocery-list)

### Inferences
- 사용자 앱에 필요한 계산식: `남은 돈 = 50,000 − Σ(체크한 항목의 실제 가격)`. 여기에 `예상 잔액 = 50,000 − Σ(모든 항목의 예상 가격)`을 함께 보여주면 장보기 전에 예산 초과 여부를 미리 알 수 있다. AnyList의 누계에 국내 리스트 계산기의 목록별 한도를 더한 형태다.
- 체크할 때 가격을 바로 입력(또는 예상가 그대로 확정)하게 하면 별도의 "가계부 입력" 단계가 없어진다. 마지막에 입력한 가격을 다음 주 예상가 기본값으로 쓰는 것만으로도 간단한 가격 이력 역할을 한다.
- 1인분 원가는 Budget Bytes처럼 "쓴 만큼" 계산해 메뉴 선택에 참고로 쓰고, 예산 차감은 실제 지출(구매 단위 전체 가격, 예: 양배추 한 통)로 해야 실제 돈과 맞는다. 두 숫자를 섞으면 혼란스럽다.

### Gaps
- AnyList의 누계가 체크한 항목만 더하는지 전체를 더하는지, 수량을 곱하는지, 가격 이력 그래프가 있는지는 개요 페이지에 없다(하위 문서 "Enter item prices"는 확인하지 못함).
- 이마트몰·쿠팡 장바구니 UX(합계 고정 바, 무료배송까지 남은 금액 등)는 이번 조사에서 1차 출처를 확보하지 못했다.
- 편한가계부의 식비 카테고리와 예산 기능은 이번 조사에서 확인하지 못했다.

## 4. 남는 재료 재활용 (재료를 공유하는 메뉴로 낭비와 비용 줄이기)

### Takeaway
일반 장보기 앱에는 이 기능이 거의 없다. 식단 계획 가이드들이 "교차 활용(cross-utilization)"이라는 이름으로 수동 전략을 권한다. 앱으로 가장 가까운 것은 가진 재료로 레시피를 찾는 SuperCook 정도다.

### Cited Findings
- 툴레인대 가이드는 교차 활용을 "한 재료를 두 개 이상의 레시피에 쓰는 것"으로 정의한다. 양배추를 피시타코 슬로에 쓰고 남은 양배추를 에그롤 볼에 쓰는 예를 들며, 음식물 쓰레기와 식비를 최소화한다고 설명한다. — [Tulane Goldring Center: Cross Utilization](https://goldringcenter.tulane.edu/wp-content/uploads/sites/10/2024/08/Cross-Utilization-2.pdf)
- 채소 하나를 정해 여러 끼니에 어떻게 쓸지 계획하라. 남은 것은 냉동하거나 점심으로 먹는다. — [Cystic Fibrosis Trust](https://www.cysticfibrosis.org.uk/how-to-meal-plan-to-save-money-and-waste)
- 먼저 써야 할 재료를 확인하고 그것으로 메뉴를 정하라(NRDC). 써야 할 재료를 중심으로 식단을 짜면 음식물 쓰레기를 없앨 수 있다. — [NRDC/Save the Food tips](https://www.cabq.gov/sustainability/documents/savethefood_tipsformealplanning_6x11-1.pdf/view); [Dollar Stretcher](https://thedollarstretcher.com/frugal-living/food/meal-planning-around-leftovers/)
- SuperCook은 가진 재료를 입력하면 그 재료가 들어간 레시피 링크를 준다(현재 기능은 미검증). — [Tasting Table](https://www.tastingtable.com/2210637/eco-friendly-meal-planning-food-waste-use-it-up/)

### Inferences
- 작은 앱에서 구현하기 쉬운 형태: 메뉴마다 재료의 "구매 단위"(양배추 1통, 두부 1모, 대파 1단)와 "사용량"(1/2통)을 적어 두고, 이번 주 메뉴에서 같은 재료의 사용량 합계가 구매 단위보다 작으면 "양배추 1/2 남음, 이걸 쓰는 메뉴: ○○"처럼 추천을 띄운다. 한국 가정식에서 흔한 대상은 양배추, 대파, 두부, 애호박, 무, 돼지고기 앞다리살이다.
- 이렇게 하면 예산 차감은 구매 단위 1회로 처리되고, 두 번째 메뉴의 추가 비용은 0원으로 표시되어 "재료를 공유하는 메뉴를 고르면 싸다"는 것이 바로 보인다.

### Gaps
- 재료 공유를 자동으로 최적화해 주는 상용 식단 앱의 공식 사례는 찾지 못했다.

## 5. 장보기 목록 기능에 대한 흔한 불만

### Takeaway
반복되는 불만은 다섯 가지다. 자동 분류가 내 매장 동선과 안 맞음, 동기화 중 항목이 사라짐, 무료였던 기능이 구독으로 바뀜, 핵심 편의 기능(가격, 체크 항목 일괄 삭제)이 유료로 잠겨 있음, 팬트리에 수량이 없음.

### Cited Findings
- Bring!: 일부 사용자가 목록에서 항목이 이유 없이 사라진다고 보고했다. 최근 사용순이 아니라 자주 쓰는 순으로 정렬해 달라는 요청이 있다. — [AlternativeTo: Bring!](https://alternativeto.net/software/bring-shopping-list/about); [fileplanet](https://bring.fileplanet.com/apk)
- Bring!: TapSmart 업데이트 리뷰는 월 구독료(약 2달러) 외에는 바뀐 것이 별로 없고 인터페이스가 낡았다며 별 하나를 깎았다. — [TapSmart](https://www.tapsmart.com/apps/review-bring-shopping-lists-made-easy/?amp=1)
- 매장 순서에 맞춘 수동 정렬이 중요하다는 리뷰어 의견. 자동 분류만으로는 부족하다. — [The Sweet Setup](https://thesweetsetup.com/?p=3818)
- Paprika(구버전): 코너를 편집할 수 없어 실제 매장과 맞지 않았다는 불만이 있었다. — [TidBITS 2014](https://tidbits.com/2014/03/14/funbits-paprika-recipe-manager-for-iphone-ipad-and-mac/)
- 유료 장벽: AnyList 가격 입력은 Complete 전용이고, SwiftLists의 "체크한 항목 모두 삭제"는 프리미엄 전용이다. — [AnyList Help](https://help.anylist.com/articles/anylist-feature-overview-item-prices/); [App Store: SwiftLists](https://apps.apple.com/us/app/swiftlists-tasks-shop-todo/id1448600277)
- Samsung Food 팬트리에는 수량 관리가 없다. — [macaron.im](https://macaron.im/blog/meal-plan-with-grocery-list)

### Inferences
- 개인 앱에서 피해야 할 것: 동기화 충돌로 항목이 사라지는 문제(로컬 우선 저장 + 마지막 수정 우선, 삭제 대신 "숨김"), 고정된 카테고리 순서(드래그로 순서 변경 허용).

### Gaps
- Reddit(r/mealprepsunday, r/Frugal 등)의 직접 스레드는 검색에서 확보하지 못해, 사용자 불만은 리뷰·스토어 요약에 기반한다.

## 6. 한국 공공 가격 데이터 (KAMIS, 참가격, 한국소비자원): 장보기 가격 추정용

### Takeaway
신선 농축수산물 소매가는 KAMIS(aT 농산물유통정보) Open API가 가장 적합하다. 매일 갱신되고, 소비자 구매 단위(배추 1포기, 사과 10개)로 제공되며, 소매가만 따로 받는 API도 있다. 가공식품과 생필품(라면, 두부, 우유 등)은 한국소비자원 참가격 데이터가 공공데이터포털 Open API로 나오지만 갱신 주기가 월간이다. 둘 다 무료이고 인증키를 신청해야 한다.

### Cited Findings
- KAMIS는 공휴일을 제외하고 매일 소매·도매 가격을 공개한다. 소매는 91개 품목 135개 품종이고, 가격은 배추 1포기, 사과 10개처럼 소비자가 실제로 사는 단위로 조사·집계된다. — [농식품부 자료(mafra.go.kr)](https://www.mafra.go.kr/bbs/home/793/582677/download.do); [data.go.kr KAMIS 기반 데이터](https://www.data.go.kr/data/1043837/linkedData.do)
- KAMIS 기반 공공데이터: 19개 도시 54개 시장의 도·소매가, 1996년부터의 일별 데이터. 필드는 조사일, 품목·품종 코드와 이름, 평균가, 등급, 당일 최저가와 최고가. — [data.go.kr](https://www.data.go.kr/data/1043837/linkedData.do)
- KAMIS Open API 목록(17종): 부류별 일별 도·소매가, 품목별 일별 도·소매가, 월별·연별 가격, 친환경 가격, 상품별 최근 가격과 추이, 지역별 가격, 품목·등급 코드표(15번), 품목별 일별 도매가(16번)와 일별 소매가(17번)(기간 지정, 최대 1년). KAMIS 사이트의 "사용신청"에서 키를 받거나 공공데이터포털(data.go.kr)을 통해 승인 대기 없이 쓸 수 있다. 문의 061-930-9971. — [KAMIS Open API 목록](https://www.kamis.or.kr/customer/reference/openapi_list.do)
- 참가격(한국소비자원): 전국 주요 유통업체의 생필품 가격을 정기 조사한다. 공공데이터포털의 '생필품 가격 정보' Open API는 상품명, 조사일, 판매가격, 판매업소, 제조사, 할인(세일) 여부를 제공한다. 상품 조회 시 업체 ID나 상품 ID 중 하나가 필수다. — [data.go.kr 15158701](https://www.data.go.kr/catalog/15158701/openapi.json); [tilnote 참가격 소개](https://tilnote.io/pages/6a79f5b30416719db2c152cf)
- 참가격 관련 파일데이터는 월간 갱신이다. 공공데이터활용지원센터가 파일데이터를 REST 기반 JSON/XML Open API로 자동 변환해 제공하고, 회원가입과 활용신청이 필요하다(파일은 로그인 없이 내려받을 수 있음). — [data.go.kr 15083256](https://www.data.go.kr/data/15083256/fileData.do)
- 참가격은 2015년 시작 당시 12개 품목, 120개 제품, 265개 판매점을 조사했다. 현재 범위는 확인하지 못했다. — [경향신문 2015](https://www.khan.co.kr/article/201505111000251)
- 별도 API인 농림수산식품교육문화정보원 '종합유통센터 센터별 경락가격조회'는 경매 도매가(XML, 무료, 공공누리 1유형, 개발 단계 자동승인)라 소매 장보기 추정에는 맞지 않는다. — [data.go.kr 15109054](https://www.data.go.kr/data/15109054/openapi.do)

### Inferences
- 개인 웹앱 활용안: 메뉴 재료의 "예상가" 기본값을 KAMIS 소매가(17번 품목별 일별 소매가 또는 6번 최근 가격)로 채우고, 실제 장보기에서 입력한 가격으로 덮어쓰는 구조. 공공 API는 대부분 브라우저에서 직접 호출할 때 CORS나 키 노출 문제가 있으므로 서버리스 함수 하나를 두거나, 주 1회 수동으로 JSON을 받아 정적 파일로 두는 편이 현실적이다(검증 필요).
- 2인 가구의 메뉴 재료는 20~40개 정도로 고정적이라, API 연동보다 "지난번 산 가격 기억" 방식이 실용성 대비 구현 비용이 훨씬 낮다. KAMIS는 처음 가격 입력용이나 시세 급등 경고("배추 지난주 대비 +30%") 같은 부가 기능으로 쓰는 것이 적합하다.

### Gaps
- KAMIS Open API의 정확한 요청 파라미터(p_cert_key, p_cert_id, action 이름 등)와 JSON 지원 여부, 호출 한도는 공식 페이지에서 확인하지 못했다. 각 API 상세 명세나 data.go.kr 페이지에서 확인해야 한다.
- 참가격 Open API의 현재 조사 품목 수와 CORS 허용 여부는 확인하지 못했다.
