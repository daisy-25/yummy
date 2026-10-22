# 해외 주간 식단 플래너 앱의 기능·화면 구조 조사 (2026-10 기준)

> 대상: 2인 가구 주간 저녁 식단 + 비용 포함 장보기 목록 + 레시피(유튜브 링크) 모바일 웹앱의 참고자료.
> 조사일: 2026-10-21. WebSearch/WebFetch 약 20회. 앱 내부 화면은 직접 볼 수 없어서 공식 사이트, App Store 설명, 리뷰 기사를 근거로 삼음. 화면 세부(버튼 위치, 드래그 동작 등)는 출처가 확인해 주는 범위까지만 적음.

## 0. 현황 요약 (서비스 종료·이름 변경 포함)

### Takeaway
**Mealime은 2026-10-21(오늘)로 서비스를 종료한다**고 공식 사이트와 App Store가 밝히고 있다. Yummly는 2024-12에 이미 종료됐고, Whisk는 Samsung Food로 운영 중이다. 지금 살아 있는 대표 앱은 Plan to Eat(수동 캘린더형), Eat This Much(자동 생성형), Samsung Food(레시피 저장+커뮤니티형), Prepear, Ollie(문자 기반 AI)다.

### Cited Findings
- Mealime 공식 사이트 문구: "Mealime will shut down on October 21, 2026." 페이지에 "See what's next" 링크가 있다 — [mealime.com](https://www.mealime.com/)
- Mealime App Store 최신 업데이트 노트: "Mealime is shutting down on October 21st, 2026." 작별 선물로 Pro를 전원 무료로 풀었고 기존 Pro 구독은 갱신되지 않는다. 이전 사용자를 위한 "Meals Hub" 레시피 세트를 언급한다. 평점 4.8(리뷰 약 5.4만 건), Pro는 월 $2.99 — [App Store: Mealime](https://apps.apple.com/us/app/mealime-meal-plans-recipes/id1079999103)
- 일반 웹 검색에서는 Mealime 종료 보도를 찾지 못했다. 근거는 1차 출처(공식 사이트, 스토어)뿐이다 — (검색 결과 없음)
- Yummly: Whirlpool이 2024-04에 팀 전원을 해고했고, 2024-12에 앱과 웹사이트를 닫았다(Plan to Eat 블로그 기준 12/20). 일괄 내보내기 기능은 사실상 없었다는 보고가 있다 — [Wikipedia](https://en.wikipedia.org/wiki/Yummly); [The Spoon](https://thespoon.tech/whirlpool-lays-off-entire-team-for-cooking-and-recipe-app-yummly); [Plan to Eat 블로그](https://www.plantoeat.com/blog/2024/12/yummly-is-closing-discover-the-best-meal-planning-alternative)
- Samsung Food: App Store 개발자명이 아직 "Whisk food"이고, 리뷰에서도 Whisk라고 부른다. Samsung Food 출시는 2023-08 — [App Store: Samsung Food](https://apps.apple.com/us/app/samsung-food-meal-planning/id1133637674); [TechCrunch](https://techcrunch.com/2023/08/30/samsung-launches-a-meal-planning-and-recipe-discovery-platform-called-samsung-food)
- Fortune 2026 순위: Prepear 종합 1위, Plan to Eat는 장보기 목록 부문, Mealime은 식이 제한 부문, eMeals는 가족 부문 — [Fortune](https://fortune.com/article/best-meal-planning-apps)

### Inferences
- 사용자에게 "Mealime 같은 앱"은 이제 쓸 수 없는 레퍼런스다. 그 패턴(취향 설정 → 주간 고르기 → 자동 장보기 목록)을 직접 만드는 쪽이 의미가 있다.
- Yummly와 Mealime 둘 다 데이터 내보내기 없이 문을 닫았다. 개인 앱은 데이터를 JSON 내보내기나 로컬에 갖고 있는 것 자체가 장점이 된다.

### Gaps
- Mealime "See what's next" 링크가 어디로 이어지는지(후속 서비스나 데이터 내보내기)는 확인하지 못함.

---

## 1. 주간 플랜 화면: 캘린더 vs 리스트, 끼니 슬롯, 드래그, 바꾸기·섞기, 고정(lock)

### Takeaway
방식은 크게 두 가지다. 하나는 **수동 캘린더형**(Plan to Eat, Prepear, Samsung Food)으로, 내 레시피를 날짜×끼니 칸에 놓고 옮긴다. 다른 하나는 **자동 생성형**(Eat This Much, Mealime, Ollie, Samsung Food+)으로, 조건을 넣으면 일주일 치가 채워지고 마음에 안 드는 것만 바꾼다. Mealime은 그 중간으로, 추천 목록에서 이번 주 메뉴를 "고르는" 방식이다.

### Cited Findings
- **Plan to Eat**: 레시피를 특정 날짜와 끼니(mealtime)에 배치하는 디지털 캘린더다. 레시피 이동, 인분 변경, 남은 음식(leftovers) 계획, **한 주 전체 메뉴 맞바꾸기(swap a whole week)**를 지원한다. 끼니에 메모와 단일 식재료를 달 수 있고, 인쇄해서 냉장고에 붙일 수 있다 — [Plan to Eat: Meal Planner](https://www.plantoeat.com/tour/meal-planner/)
- Plan to Eat: 기간을 자유롭게 정해 계획할 수 있고, 플랜을 저장해 재사용한다. 다른 일정이나 약속을 메모로 남길 수 있다. 메인 페이지 이미지 캡션에 drag-and-drop이 언급된다 — [plantoeat.com](https://www.plantoeat.com/)
- **Prepear**: "drop recipes into your week"로 레시피를 주간에 놓거나, 레시피 없이 **Quick-Add**로 메뉴 아이디어(텍스트)만 넣을 수 있다 — [App Store: Prepear](https://apps.apple.com/app/id1248495163)
- **Mealime**: 1단계는 "Pick your week's meals"로 이번 주 메뉴를 몇 분 안에 고르는 흐름이다. 레시피는 약 30분 내외이고, 단계별 조리 화면에는 손 안 대고 넘기는 hands-free 모드가 있다 — [mealime.com](https://www.mealime.com/)
- **Eat This Much**: 식단 유형(Anything/Keto/Mediterranean/Paleo/Vegan/Vegetarian), 하루 칼로리, 끼니 수를 넣고 "Generate my plan" 버튼을 누르면 플랜이 생성된다 — [eatthismuch.com](https://www.eatthismuch.com/)
- Eat This Much 가격 페이지: 무료는 **하루 단위** 생성만, Premium은 **한 주 단위 계획**, 요일별 개별 설정, 반복 음식 예약(무료도 가능)을 지원한다. "endless regeneration"(무한 재생성)이 언급되지만 어느 등급인지는 적혀 있지 않다 — [Eat This Much Pricing](https://www.eatthismuch.com/pricing/)
- **Ollie**: 앱이 아니라 문자(SMS)로 동작한다. 주간 메뉴 몇 개를 문자로 보내고 개인화된 Explore 페이지 링크를 준다. 그 페이지에서 **오른쪽 스와이프 = 메뉴에 추가, 왼쪽 = 패스**(틴더식)이고, 고른 메뉴는 menu 화면에 모인다 — [ollie.ai](https://ollie.ai/)
- Ollie는 iOS 전용이라는 2026-03 비교 기사가 있다 — [macaron.im](https://macaron.im/blog/best-meal-planning-apps). 반면 공식 사이트는 문자 기반이라 iOS와 Android 모두 된다고 한다 — [ollie.ai](https://ollie.ai/) (**출처끼리 충돌**. 공식 쪽이 더 최신으로 보임)
- **Samsung Food**: 컬렉션이나 검색 결과에서 레시피를 바로 플래너에 추가할 수 있다(최근 업데이트). 무료 플래너는 취향 기반 추천이 없어서 마음에 안 드는 메뉴를 하나하나 손으로 바꿔야 한다는 불만이 있다 — [App Store: Samsung Food](https://apps.apple.com/us/app/samsung-food-meal-planning/id1133637674)

### Inferences
- 2인 저녁 전용이라면 끼니 슬롯은 필요 없다. **요일 7행 × 저녁 1칸 세로 리스트**(모바일)가 가장 단순하다. Plan to Eat의 "칸에 레시피 놓기"에 Prepear의 "텍스트만 Quick-Add"(외식, 배달, 남은 음식 같은 메모)를 더하면 실제 생활과 맞는다.
- 자동 생성은 Eat This Much나 Mealime처럼 "전체 생성 → 마음에 안 드는 하루만 다시 뽑기(shuffle)" 흐름이 핵심이다. "고정(lock)"은 공식 문서에서 확인하지 못했지만, 섞기를 넣는다면 섞을 때 고정 칸은 남기는 기능이 자연스럽게 짝이 된다(추론).
- Ollie의 스와이프 고르기는 2인이 함께 메뉴를 고르는 재미 요소로 빌려 올 만하다.

### Gaps
- Eat This Much의 "lock(고정)" 기능과 단일 끼니 재생성 버튼 위치는 공식 페이지에서 확인하지 못함(App Store 페이지 404).
- Samsung Food 플래너의 드래그 지원 여부와 주/월 보기는 확인하지 못함.
- Mealime 주간 화면이 날짜별 배치인지, 단순 "이번 주 목록"인지 1차 출처로 확인하지 못함.

---

## 2. 가구 인원·인분, 싫어하는 재료·알레르기, 취향(예: 고기파)

### Takeaway
설정은 거의 표준화돼 있다. **식단 유형 + 알레르기 + 싫어하는 재료(dislikes) + 인분(2/4인)**. Mealime이 가장 정형화돼 있고(200개 이상 개인화 옵션), Plan to Eat은 레시피마다 인분을 바꾸는 방식이다. "고기파" 같은 긍정 취향을 받는 앱은 확인하지 못했다. 대부분 "빼기(제외)" 위주다.

### Cited Findings
- Mealime 샘플 플랜에 보이는 설정 항목: Plan type(Classic/Vegetarian 등), Allergies(갑각류, 글루텐 등), Dislikes(두부, 올리브 등 제외), Servings(2인 또는 4인). "200+ personalization options"라고 주장한다 — [mealime.com](https://www.mealime.com/)
- Mealime 지원 식단: classic, flexitarian, pescetarian, low carb, paleo, keto, vegetarian, vegan, gluten-free, dairy-free — [App Store: Mealime](https://apps.apple.com/us/app/mealime-meal-plans-recipes/id1079999103)
- Mealime 리뷰: 취향과 알레르기 옵션을 칭찬하는 한편, **파트너와 동기화(partner sync)**를 원한다 — [App Store: Mealime](https://apps.apple.com/us/app/mealime-meal-plans-recipes/id1079999103)
- Eat This Much: 퀵 필터로 특정 재료를 차단하는 기능이 있다(등급 미표기) — [Eat This Much Pricing](https://www.eatthismuch.com/pricing/)
- Plan to Eat: 플래너에서 레시피별 인분을 바꿀 수 있다. 한 계정을 가족 전체가 모든 기기에서 쓴다 — [Plan to Eat: Meal Planner](https://www.plantoeat.com/tour/meal-planner/); [plantoeat.com](https://www.plantoeat.com/)
- Samsung Food+: 인분, 재료 대체, 영양 같은 레시피 커스터마이즈가 유료 기능이다. 맞춤 플랜은 무료로 2회까지 쓸 수 있다 — [App Store: Samsung Food](https://apps.apple.com/us/app/samsung-food-meal-planning/id1133637674)
- Ollie: 정형화된 설정 대신 시간, 예산, 가족이 싫어하는 것, 알레르기를 대화로 설명하면 주간 플랜을 짜 준다. 가족이나 파트너를 단체 문자방에 넣을 수 있다 — [macaron.im](https://macaron.im/blog/best-meal-planning-apps); [ollie.ai](https://ollie.ai/)
- Cooklist: 인원 수, 식단 유형, 메뉴 순환 일수로 개인화된 기성 플랜을 준다 — [App Store: Cooklist](https://apps.apple.com/app/id1352600944) (리뷰 요약 기반)

### Inferences
- 2인 가구 전용이면 인분은 2로 고정하고, 레시피마다 "몇 인분 기준"만 저장해 비율을 계산하면 충분하다.
- "고기파"는 표준 앱에 없는 긍정 가중치다. 레시피에 태그(고기/생선/채식/면)를 달고 "주 N회 이상 고기" 같은 규칙으로 처리하는 편이 더 단순하고 투명하다(추론).
- 두 사람의 싫어하는 재료를 따로 갖고 합집합으로 제외하는 방식은 어느 앱에서도 확인되지 않았다. Mealime 리뷰의 파트너 동기화 요구가 이 빈자리를 보여 준다.

### Gaps
- 사람별(구성원별) 비선호를 지원하는 앱이 있는지 확인하지 못함.

---

## 3. 남은 음식 / 한 번 요리해 두 번 먹기 / 도시락

### Takeaway
남은 음식을 명시적으로 지원하는 곳은 **Eat This Much("Automatic leftovers", Premium)**와 **Plan to Eat("plan leftovers" + 냉동 보관 기록)**이다. 나머지 앱에서는 관련 기능을 확인하지 못했다.

### Cited Findings
- Eat This Much Premium 기능 목록에 "Automatic leftovers"가 있다 — [Eat This Much Pricing](https://www.eatthismuch.com/pricing/)
- 리뷰: Eat This Much는 남은 음식을 주간에 배치하고, 저녁을 남겨 다음 날 점심으로 쓰라고 알려 준다 — [macaron.im: Eat This Much review](https://macaron.im/blog/eat-this-much-review) (SEO성 블로그, 참고 수준)
- Plan to Eat: 플래너에서 남은 음식을 계획할 수 있고, **Freezer tracking**으로 대량 조리한 음식을 수량, 만든 날짜와 함께 기록한다 — [Plan to Eat: Meal Planner](https://www.plantoeat.com/tour/meal-planner/)
- Ollie와 Mealime 공식 페이지에는 남은 음식 언급이 없다 — [ollie.ai](https://ollie.ai/); [mealime.com](https://www.mealime.com/)

### Inferences
- 2인 가구에서는 4인분 레시피를 한 번 하고 "다음 날 저녁 = 남은 음식" 칸으로 두는 경우가 많다. 플랜 칸에 **"남은 음식 ← 월요일 OO"** 링크 칸을 두고, 그 칸은 장보기 목록에서 빼는 처리가 핵심 패턴이다(Eat This Much의 자동 leftovers와 같은 개념).

### Gaps
- Eat This Much가 남은 음식을 화면에 어떻게 표시하는지(아이콘, 라벨)는 확인하지 못함.

---

## 4. 플랜 → 장보기 목록 (중복 합치기, 코너별 그룹, 집에 있는 재료, 체크박스)

### Takeaway
모든 앱이 **플랜에서 장보기 목록을 자동 생성하고 카테고리(코너)별로 자동 정렬**한다. 차별점은 ① 코너 순서를 매장 동선에 맞게 바꾸기(Plan to Eat), ② 집에 있는 재료/식료품 저장고 제외(Plan to Eat "Already Own", Eat This Much 가상 팬트리, Cooklist), ③ 레시피 외 생필품 추가, ④ 공유다.

### Cited Findings
- Mealime: 주간 플랜에서 장보기 목록을 자동 생성하고 "auto-sorted into categories"로 분류한다 — [mealime.com](https://www.mealime.com/). 리뷰에 따르면 내 물품 추가와 **이미 있는 재료 체크**가 가능하다. 불만은 "플랜에 메뉴를 추가하면 장보기 목록이 초기화된다"는 것 — [App Store: Mealime](https://apps.apple.com/us/app/mealime-meal-plans-recipes/id1079999103)
- Plan to Eat: 플랜을 만들면 장보기 목록을 자동 생성한다. **매장별, 코너별로 정리**하고 매장/카테고리 선택을 기억한다. 카테고리를 직접 만들고 순서를 매장 배치에 맞게 옮길 수 있다. **Staples List**(상비품 목록)에서 자주 사는 물품을 한 번에 추가한다. 장보면서 탭해서 지운다. 플랜과 무관한 품목을 추가할 수 있고, 목록을 문자로 보낼 수 있다 — [Plan to Eat: Grocery List](https://www.plantoeat.com/tour/automated-grocery-list-maker/)
- Plan to Eat: 처음부터 "Already Own"(현재 Pantry)으로 이미 있는 품목을 표시해 장보기에서 빼는 기능이 있었고, 설정 톱니바퀴에서 팬트리 숨기기를 켤 수 있다 — [plantoeat.com 블로그(검색 스니펫)](https://www.plantoeat.com/?p=5566)
- Eat This Much: 가상 팬트리에 가진 음식을 넣으면 알고리즘이 그것을 먼저 쓴다. 주간 식단을 검토하면 장보기 목록이 자동 갱신되고 Instacart, AmazonFresh 배송과 연동된다 — [eatthismuch.com](https://www.eatthismuch.com/)
- Ollie: 고른 메뉴의 재료를 **합쳐서(combined) 코너별로 묶는다**. 문자로 Amazon, Instacart, Walmart 주문까지 한다 — [ollie.ai](https://ollie.ai/)
- Prepear: 장보기 목록이 플랜과 일치하고 재료가 카테고리별로 정렬된다 — [App Store: Prepear](https://apps.apple.com/app/id1248495163)
- Cooklist: 집에 있는 재료를 자동으로 빼고 코너별로 정리한다. 매장 포인트카드와 연동해 구매 내역을 디지털 팬트리에 자동으로 넣는다 — [App Store: Cooklist](https://apps.apple.com/app/id1352600944)
- Samsung Food: 장보기 목록 공유와 인쇄(v5.48.0). Food List(냉장고 재고)에서 쓴 것을 장보기 목록에 추가하라고 추천한다. 구매한 것을 Food List에 자동 반영하는 기능은 Food+ — [App Store: Samsung Food](https://apps.apple.com/us/app/samsung-food-meal-planning/id1133637674); [Samsung Newsroom IFA 2024](https://news.samsung.com/us/upgraded-samsung-food-raises-bar-for-food-experiences-ifa-2024/)

### Inferences
- 최소 구성은 이렇다: **재료명 기준 합치기(수량 합산) → 카테고리 그룹(채소/육류/유제품/양념/기타) → 체크박스 → "집에 있음" 토글(목록 하단으로 내리거나 숨김) → 수동 항목 추가.**
- Mealime의 "메뉴를 추가하면 목록이 초기화된다" 불만이 중요하다. 체크 상태와 수동 항목은 플랜이 바뀌어도 유지해야 한다.
- 2인이 같이 장보면 체크 상태를 공유하는 기능의 가치가 크다(Fenne, Groceries Together 같은 소형 앱도 이걸 핵심으로 내세운다 — [Fenne](https://snacksncode.itch.io/fenne); [Groceries Together](https://base44.com/apps/groceries-together-a599f9bb)).

### Gaps
- 단위가 다른 같은 재료(예: 양파 1개 + 양파 100g)를 어떻게 합치는지 설명한 1차 출처를 찾지 못함. Plan to Eat의 중복 합치기 상세도 공식 페이지에 없음.

---

## 5. 비용·예산 표시

### Takeaway
**비용 표시는 주요 앱 대부분에 없다.** 예외는 Eat This Much(예산 상한이 생성 조건으로 들어간다는 리뷰)와 Cooklist(장보기 품목을 매장 상품가와 매칭해 가격 비교, 유료)뿐이다. "장보기 목록에 비용 합계"는 대형 앱이 비워 둔 기능이다.

### Cited Findings
- Eat This Much: 예산 상한이 사후 필터가 아니라 생성기 조건으로 들어간다는 것이 차별점이라는 비교 기사가 있다 — [nutriscan.app 블로그](https://nutriscan.app/blog/posts/best-weekly-meal-plan-apps-2026-3e64f8a752) (2차·SEO성. 공식 가격 페이지에는 예산 기능 언급 없음 — [Eat This Much Pricing](https://www.eatthismuch.com/pricing/))
- Cooklist: 장보기 목록 품목을 여러 매장 상품과 매칭해 가격과 재고를 보여 준다. 가격 비교는 유료 플랜 — [App Store: Cooklist](https://apps.apple.com/app/id1352600944); [Dallas Innovates](https://dallasinnovates.com/?p=121658)
- Ollie 공식 사이트에는 예산 추적 기능이 없다(요금이 메시지 사용량 기반이라는 것만 있음). 다만 비교 기사는 "예산"을 입력 조건으로 말할 수 있다고 한다 — [ollie.ai](https://ollie.ai/); [macaron.im](https://macaron.im/blog/best-meal-planning-apps)
- Mealime은 "돈 절약, 음식물 쓰레기 감소"를 마케팅 문구로만 쓴다. 금액 표시 기능은 확인되지 않음 — [App Store: Mealime](https://apps.apple.com/us/app/mealime-meal-plans-recipes/id1079999103)

### Inferences
- 개인 앱에서는 **재료별 단가(직접 입력 또는 최근 구매가)와 사용량 비율**로 레시피 1회 비용과 주간 장보기 총액을 보여 주는 것이 차별 포인트다. 재료 단가를 "구매 단위 가격"과 "레시피 사용량"으로 나눠 저장하는 구조가 필요하다(추론).

### Gaps
- Eat This Much 예산 기능의 실제 UI(하루 예산 입력란 위치, 끼니별 비용 표시 여부)는 1차 출처로 확인하지 못함.

---

## 6. 지난 주 기록, 즐겨찾기, 평점

### Takeaway
**"플랜 저장 → 재사용"**이 표준 패턴이다(Plan to Eat 저장 메뉴, Eat This Much "즐겨찾는 주 저장/불러오기", Samsung Food+ 무제한 저장). 레시피는 컬렉션이나 쿡북으로 정리한다. 평점 기능은 확인되지 않았다.

### Cited Findings
- Plan to Eat: 지난 플랜이나 새 플랜을 메뉴로 저장해 재사용하고, **전체 계획 기록을 검색**할 수 있다 — [Plan to Eat: Meal Planner](https://www.plantoeat.com/tour/meal-planner/)
- Eat This Much Premium: "Save and load favorite weeks of plans", 식단표 PDF 생성 및 공유 — [Eat This Much Pricing](https://www.eatthismuch.com/pricing/)
- Samsung Food+: 저장 플랜 무제한(무료는 제한이 있는 것으로 읽힘). 레시피를 컬렉션으로 정리하고 메모와 사진을 남길 수 있다 — [App Store: Samsung Food](https://apps.apple.com/us/app/samsung-food-meal-planning/id1133637674)
- Prepear: 레시피를 Cookbooks로 분류하고, 과거에 요리한 것과 팔로우하는 사람을 바탕으로 추천한다 — [App Store: Prepear](https://apps.apple.com/app/id1248495163)

### Inferences
- 2인 앱에서는 "지난 주 그대로 복사"와 "자주 먹은 메뉴 Top N"(기록에서 자동 집계)만 있어도 즐겨찾기와 평점을 대신할 수 있다. 굳이 별점을 넣는다면 "또 먹고 싶다 / 별로" 2단계면 충분하다(추론).

### Gaps
- 레시피 별점/평가 UI를 가진 앱은 이번 조사에서 확인하지 못함.

---

## 7. 온보딩: 처음에 무엇을 묻나

### Takeaway
자동 생성형은 **식단 유형 → 알레르기 → 싫어하는 재료 → 인분**(Mealime), 또는 **식단 유형 → 칼로리 → 끼니 수**(Eat This Much)를 먼저 묻는다. 수동형(Plan to Eat)은 묻는 것 없이 레시피 수집(웹 클리퍼)부터 시작한다. Ollie는 가입 없이 문자로 시작한다.

### Cited Findings
- Mealime: 플랜 유형, 알레르기, 싫어하는 재료, 인분 순서의 설정이 샘플 플랜에 나타난다. 가입은 무료 — [mealime.com](https://www.mealime.com/)
- Eat This Much: 첫 화면에서 식단, 칼로리, 끼니 수를 넣고 바로 생성한다. 칼로리를 모르면 계산기 링크가 있다. 매크로 지정은 무료 계정 가입 후 — [eatthismuch.com](https://www.eatthismuch.com/)
- Plan to Eat: Recipe Clipper로 아무 사이트의 레시피를 한 번 클릭해 저장하는 것이 출발점이다. 14일 무료 체험(카드 불필요) — [plantoeat.com](https://www.plantoeat.com/)
- Ollie: 신용카드나 계정 없이 무료로 시작하고, 가족과 일 이야기를 더 할수록 나아진다고 한다 — [ollie.ai](https://ollie.ai/)

### Inferences
- 2인 개인 앱이라면 온보딩은 필요 없고 설정 1화면(싫어하는 재료, 고기 선호도, 주당 예산)이면 된다. Eat This Much처럼 "입력 즉시 결과 생성"이 첫인상을 만든다.

### Gaps
- 각 앱 온보딩 단계 수와 화면 순서를 스크린샷으로 확인하지 못함.

---

## 8. 무료 vs 유료, 사용자 칭찬·불만

### Takeaway
가격대는 대략 **연 $49~$120**다. 무료 핵심 기능(플래너+장보기)이 넓은 앱(Samsung Food, Prepear, Mealime)이 호평받는다. 공통 불만은 ① 플랜을 바꾸면 목록이 꼬이거나 초기화됨, ② 추천 없이 수동 교체가 번거로움, ③ 레시피 원문 사이트로 튕겨 나감(광고), ④ 파트너 동기화 부재, ⑤ 처방식으로 "끌려다니는" 느낌이다.

### Cited Findings
- 가격: Plan to Eat 월 $5.95 / 연 $49(14일 체험) — [plantoeat.com](https://www.plantoeat.com/). Eat This Much Premium 연간 결제 시 월 $5 — [Eat This Much Pricing](https://www.eatthismuch.com/pricing/). Samsung Food+ 월 $6.99 / 연 $59.99 — [App Store: Samsung Food](https://apps.apple.com/us/app/samsung-food-meal-planning/id1133637674). Prepear Gold는 7일 체험 후 연 $119.99(App Store). 블로그에는 월 $9.99 등 구 가격이 섞여 있다 — [App Store: Prepear](https://apps.apple.com/app/id1248495163); [Fortune](https://fortune.com/article/best-meal-planning-apps). Mealime Pro 월 $2.99(종료 전 무료 전환) — [App Store: Mealime](https://apps.apple.com/us/app/mealime-meal-plans-recipes/id1079999103). Cooklist Pro 연 $49.99~$59.99(출처마다 다름) — [App Store: Cooklist](https://apps.apple.com/app/id1352600944)
- Prepear Gold의 핵심 가치는 기성(ready-made) 플랜이다. 무료 사용자는 직접 짠다. "비슷한 앱의 두 배 가격인데 추가 가치가 안 보인다"는 댓글이 있다 — [babaganosh.org](https://www.babaganosh.org/?p=8125); [eazypeazymealz](https://www.eazypeazymealz.com/?p=34538)
- Mealime 칭찬: 원탭 장보기 목록, 다양성, 음식물 쓰레기와 장보기 비용 감소. 불만: 조리 단계가 많음, 슬로우쿠커 레시피 부족, 메뉴 추가 시 목록 초기화, 파트너 동기화 부재 — [App Store: Mealime](https://apps.apple.com/us/app/mealime-meal-plans-recipes/id1079999103)
- Samsung Food 칭찬: 아무 사이트 레시피 저장, 공유 장보기 목록, 무료에 숨은 함정 없음. 불만: 조리법을 보려면 원문 사이트로 나가야 함(광고, 팝업). 개발사는 의도적으로 원문에 링크한다고 답했다. 플래너에 추천이 없어 수동 교체가 번거로움 — [App Store: Samsung Food](https://apps.apple.com/us/app/samsung-food-meal-planning/id1133637674)
- Eat This Much 불만: 인터페이스가 빽빽하고 플랜이 처방적이다("herded"). 칭찬: 요일별로 다른 칼로리·매크로 목표를 세밀하게 설정 — [nutriscan.app](https://nutriscan.app/blog/posts/best-weekly-meal-plan-apps-2026-3e64f8a752); [macaron.im](https://macaron.im/blog/eat-this-much-review)
- Plan to Eat: AI 생성도, 식료품 배송 연동도 없는 수동형으로 평가된다 — [macaron.im](https://macaron.im/blog/best-meal-planning-apps)
- Cooklist: 서드파티 식료품 연동 안정성과 고객지원 응답에 대한 불만이 있다 — [alternativeto](https://alternativeto.net/software/cooklist/about) (검색 요약 기반)

### Inferences
- 레시피 화면에서 "원문으로 이동"은 불만 요소다. 사용자 앱이 유튜브 링크를 쓴다면 **재료와 단계는 앱 안에 두고, 영상은 보조 링크(또는 임베드)**로 두는 것이 Samsung Food 불만에 대한 답이다.
- 대형 앱의 유료 장벽(주간 계획, 자동 장보기 목록, 남은 음식, 저장 플랜)이 바로 사용자 앱의 기본 기능 세트다.

### Gaps
- Reddit(r/mealprep, r/EatCheapAndHealthy) 원문 스레드는 검색으로 직접 찾지 못했다. 사용자 목소리는 App Store 리뷰와 블로그에서 가져왔다.
- Fitia, Prospre, Meal Planner Pro, eMeals는 시간 제약으로 조사하지 못했다(Fortune이 eMeals를 가족 부문 최고로 언급한 것만 확인 — [Fortune](https://fortune.com/article/best-meal-planning-apps)).
- 비교 기사 다수(macaron.im, innerbuddies, nutriscan)는 SEO성 콘텐츠이고 다국어 복제본이라 사실상 단일 출처다. 가격은 앱스토어에서 확인할 것.
