# 레시피 보기·요리 중 UX 패턴(초보 요리자용) + 식단 앱 이탈 이유

대상: 라면 정도만 끓일 줄 아는 초보 한 명이 한국 유튜브 레시피를 따라 하며 쓸 작은 개인용 모바일 웹앱(단일 파일 / PWA). 조사일 2026-10-21.

## 1. 레시피 화면 구조 (정보 순서, 재료 체크, 인분 조절, 단위)

### Takeaway
사람들은 레시피를 고를 때 재료와 단계부터 본다. 가장 큰 불만은 "재료 목록과 단계 사이를 오가야 한다"는 것이다. 그래서 상단에 짧은 요약(시간·난이도·인분)을 두고, 재료는 체크리스트로 만들고, **각 단계 안에 해당 재료의 분량을 다시 적어 주는 것**이 가장 근거가 많은 패턴이다.

### Cited Findings
- 미국·캐나다 성인 대상 설문(n=354, 2026): 레시피 페이지에서 48.6%는 곧바로 재료로 스크롤하고, 24.3%는 "jump to recipe"를 누르며, 본문을 대부분 읽는 사람은 11.3%뿐이다. — [Allspice Labs, What Home Cooks Really Want](https://www.allspicelabs.com/studies/home-cooks/)
- 같은 설문: 레시피를 판단하는 기준은 재료(88.4%)와 단계(66.1%)다. 81.5%는 페이지 상단 개요가 유용하다고 답했다(7점 척도 평균 5.42). — [Allspice Labs](https://www.allspicelabs.com/studies/home-cooks/)
- 같은 설문: 70.6%가 "보면서 요리하기 불편해서" 레시피 사이트를 자주 또는 가끔 피한다. 원인은 재료·단계 찾기 어려움 24.1%, 광고·팝업 19.8%, 스크롤과 잡다한 내용 15.8%, 시간·익은 정도 판단 불확실 11.2%, 보던 위치 잃어버림 9.6%, 계량 혼란 6.4% 순이다. 80.5%는 요리하는 동안 레시피를 페이지 밖에서 다시 만들어 쓴다(스크린샷 56.7%, 영상판 23.9%, 메모 22.6%). — [Allspice Labs](https://www.allspicelabs.com/studies/home-cooks/)
  - 주의: 스폰서인 Allspice는 레시피 페이지용 도구를 파는 회사이고, 응답자에게 이 사실을 알리지 않았다. 기능 선호 문항은 실제 행동이 아니라 "쓰겠다"는 의향이다. — [같은 페이지 방법론](https://www.allspicelabs.com/studies/home-cooks/)
- NYT Cooking iOS 디자인 비평: 재료/단계 전환 토글이 답답하다는 지적. 단계를 읽을 때 재료 분량이 같이 나오지 않기 때문이다. — [Pratt IXD, Design Critique: NYT Cooking iOS app](https://ixd.prattsi.org/2023/02/design-critique-nyt-cooking-ios-app)
- 흔한 레이아웃은 "재료 목록 위, 조리법 아래"인데, 바로 그 지점에서 단절이 생긴다는 비판. 초기 레시피 사이트가 이 문제를 풀지 않았고 이후 사이트들이 그 구조를 그대로 복사했다는 주장. — [Modus Create, The user experience on recipe sites is broken](https://moduscreate.com/blog/the-user-experience-on-recipe-sites-is-broken)
- 2008년 사용성 칼럼(User Centric, NielsenIQ 재게시): 요리 중 단계와 재료 목록을 계속 오가야 한다는 문제를 이미 지적했다. Nielsen Norman Group이 아니다. — [NielsenIQ, 3 Ways to Improve the Usability of Recipes](https://nielseniq.com/global/en/insights/commentary/2008/3-ways-to-improve-the-usability-of-recipes/)
- 노르웨이 레시피 사이트 Bakdel은 재료 분량을 단계 본문 안에 넣어 오가는 스크롤을 없앴다. — [Sanity, Bakdel project](https://sanity.io/projects/bakdel)
- enplace 사례 연구: 경쟁 앱(NYT Cooking 등)은 이미 단계 안에 재료 분량을 보여 준다. 디자이너는 그 반대 방향의 조회, 즉 재료를 누르면 그 재료가 쓰이는 모든 단계를 보여 주는 기능이 비어 있다고 봤다. — [Contra, enplace by Creede Fitch](https://contra.com/p/Bm6FFUUl-enplace)
- Stashcook의 Cook Mode는 각 단계 위에 그 단계의 재료를 보여 준다. — [Stashcook Help, Cook mode](https://help.stashcook.com/en/articles/12132049-cook-mode)
- Paprika 3: 재료를 하나씩 지우면서 진행할 수 있고 현재 단계를 강조한다. — [App Store, Paprika Recipe Manager 3](https://apps.apple.com/id/app/id1303222868)
- Kitchen Stories: 난이도·필요 도구·조리 시간이 함께 나와 초보가 고르기 쉽다는 리뷰. 단위 변환기와 장보기 목록이 있다. — [WGBH, best recipe apps for cooking beginners (2018)](https://www.wgbh.org/lifestyle/food/2018-12-14/the-best-recipe-apps-for-cooking-beginners)
- 2018년 Google은 Chrome 검색 결과 안에서 레시피 재료 체크리스트를 실험했다(자동으로 나타나지는 않았다). — [BGR](https://bgr.com/?p=3567337)

### Inferences
- 추천 순서: 제목 → 한 줄 요약 칩(총 시간 · 난이도 · 인분 · 필요 도구 수) → [요리 시작] 버튼 → 도구 목록 → 재료 체크리스트(인분 ± 조절) → 준비 단계 → 조리 단계(분량을 본문에 다시 적기) → 내 메모. 블로그식 서론은 넣지 않는다.
- 혼자 먹는 초보라면 인분 조절은 "1인분 / 2인분" 토글로 충분하다. 한국 유튜브 레시피의 계량은 숟가락·종이컵 단위가 많아서 g/ml 변환보다는 "밥숟가락 1 = 약 15ml" 같은 참고 표기가 더 실용적이다. 소수점 결과(예: 1.5 → "1과 1/2")는 반올림해서 보여 준다.

### Gaps
- Nielsen Norman Group와 Baymard에서 레시피 화면만 다룬 글은 찾지 못했다(검색 결과 없음).
- NYT Cooking이 공식으로 "Cook Mode"를 냈는지는 이번 조사로 확인하지 못했다. enplace 글은 출시됐다고 하지만, NYT 도움말 페이지에는 나오지 않는다. — [NYT Help Center, Cooking Recipe Features](https://thenewyorktimeshelpcenter.helpjuice.com/360011047512-New-York-Times-Cooking/19686556670868-Cooking-Recipe-Features)
- Paprika와 Crouton의 인분 조절·단위 변환이 구체적으로 어떻게 동작하는지는 1차 출처로 확인하지 못했다.

## 2. 쿡 모드 (화면 켜두기, 큰 글씨 단일 단계, 스와이프, 인라인 타이머, 음성)

### Takeaway
주요 앱의 쿡 모드에는 공통으로 네 가지가 있다. 화면 꺼짐 방지, 큰 글씨, 현재 단계 강조나 한 단계씩 보기, 그리고 단계 본문의 시간 표기를 누르면 시작되는 타이머다. 음성 제어는 SideChef 정도만 내세우는 부가 기능이다. 사용자가 원한다고 가장 많이 답한 기능은 단계별 가이드 모드다.

### Cited Findings
- 단계별 가이드 모드가 있다면 요리하면서 쓰겠다는 응답이 80.8%, 그 사이트에서 요리를 더 하겠다는 응답이 73.2%다(의향 질문이고 스폰서 편향 주의). — [Allspice Labs](https://www.allspicelabs.com/studies/home-cooks/)
- Paprika 3: 요리하는 동안 화면이 꺼지지 않게 할 수 있다. 조리법 본문에서 조리 시간을 자동으로 감지하고, 그 시간을 누르면 타이머가 시작된다. 재료 지우기와 현재 단계 강조도 된다. — [App Store, Paprika 3](https://apps.apple.com/id/app/id1303222868)
- Mela: 쿡 모드에서 단계를 큰 글씨로 보여 줘 멀리서도 읽힌다. 여러 레시피를 동시에 쿡 모드에 올려 놓고 오갈 수 있다. 다른 앱으로 나가지 않고 앱 안에서 타이머를 만들고 관리하며, iOS 16.1 이상에서는 Live Activities를 지원한다. — [App Store, Mela](https://apps.apple.com/app/id1548466041)
- GH Kitchen(Good Housekeeping) 앱의 Cooking Mode는 레시피를 큰 단계로 다시 짜고, 재료와 조리법 사이를 간단하게 오가게 했다. 사용 중에는 화면이 잠기지 않게 했고, 한 손 사용을 위해 글자 크기와 대비를 조정했다. — [Fueled, GH Kitchen case study](https://fueled.com/?p=38017)
- okcook(브라우저 확장)은 전체 화면 단계별 보기를 제공하고, 재료는 한 번 탭하면 볼 수 있다. — [Firefox Add-ons, okcook](https://addons.mozilla.org/vi/firefox/addon/okcook/)
- SideChef는 핸즈프리 음성 명령, 단계별 사진, how-to 영상, 내장 타이머를 내세운다. 창업자는 "단계마다 사진이나 영상이 붙는" 형식을 핵심으로 설명한다. — [SideChef About](https://www.sidechef.com/about-us/); [Forward Fooding interview](https://forwardfooding.com/?p=1323)
- SideChef와 Samsung Food는 조리 시간·온도를 연결된 가전으로 보내는 기능이 있다(Home Connect, Bespoke 오븐 등). 1인 웹앱과는 관계없다. — [Home Connect, SideChef](https://www.home-connect.com/us/en/partners/food-recipes/sidechef); [Samsung Newsroom, Samsung Food launch (2023)](https://news.samsung.com/global/samsung-announces-global-launch-of-samsung-food-an-ai-powered-personalized-food-and-recipe-service)
- EatingWell 등 레시피 사이트들도 "Cook Mode" 토글로 화면 꺼짐을 막는다. — [AOL/EatingWell, new feature keeps your screen on](https://www.aol.com/just-launched-recipe-feature-cooking-173950403.html)
- Tasty 휴리스틱 평가: 초보에게 단계별 모드가 좋다는 평가. 반면 검색어에 오타가 있으면 결과도 제안도 없이 끝나 오류 회복이 약하다. — [UX Planet, Tasty evaluation](https://uxplanet.org/improving-the-user-experience-of-an-almost-5-star-rated-app-caed98258b5f)
- 쿡어롱 기능 가이드(벤더 글, 신뢰도 낮음)는 iOS에서 백그라운드 타이머가 문제 지점이라고 짚는다. — [RapidDevelopers](https://www.rapidevelopers.com/app-features/interactive-recipe-cook-along)

### Inferences
- 웹앱용 최소 구성: 전체 화면에 한 단계씩, 글자 24px 이상, 좌우 스와이프와 화면 좌우 절반 탭으로 이동(젖은 손은 탭이 더 쉽다), 상단에 "3/8" 진행 표시, 하단에 이 단계 재료 칩을 두고, 본문의 "3분"·"5분" 같은 표현을 정규식으로 찾아 버튼으로 만든다.
- 웹 타이머는 탭이 백그라운드로 가면 setInterval이 느려지거나 멈출 수 있다. 그래서 남은 시간은 "종료 시각 = Date.now() + ms"로 저장해 두고 화면이 다시 보일 때 계산해야 한다(MDN 확인 필요, 아래 Gaps). 알림음은 Web Audio로 내고 진동은 navigator.vibrate로 하는데, iOS는 vibrate를 지원하지 않는 것으로 알려져 있다(미확인).
- 음성 제어(Web Speech API)는 한국어 인식률, 권한, iOS 지원이 불안정할 가능성이 높아 1인 앱에서는 우선순위가 낮다. 대신 큰 터치 영역을 둔다.

### Gaps
- Crouton의 쿡 모드 세부 기능(음성, 타이머)은 1차 출처를 찾지 못했다.
- 백그라운드 탭에서 웹 타이머가 어떻게 쓰로틀링되는지와 iOS 웹 알림 지원 범위는 이번에 직접 확인하지 않았다.

## 3. 영상 연동 (단계별 유튜브 타임스탬프, 임베드, 영상 대 텍스트)

### Takeaway
유튜브 IFrame 임베드는 `start`/`end` 파라미터와 IFrame API(`enablejsapi=1`, `seekTo`)로 단계마다 구간을 지정할 수 있다. 영상과 텍스트는 서로 대신하는 것이 아니라 함께 쓰인다. 사람들은 영상을 따라 하기 어려워 텍스트나 스크린샷으로 옮기고, 텍스트만으로 판단이 안 될 때는 영상을 찾는다.

### Cited Findings
- YouTube 임베드 파라미터: `start`는 시작 초(키프레임 때문에 최대 약 2초 앞에서 시작될 수 있음), `end`는 영상 처음부터 센 종료 초, `playsinline=1`이면 iOS에서 전체 화면 대신 인라인으로 재생된다. `rel=0`은 관련 영상을 끄지 못하고 같은 채널 영상으로만 제한한다(2018-09-25 이후). `enablejsapi=1`이면 IFrame API로 제어할 수 있다. 플레이어는 최소 200×200px이고 16:9는 480×270 이상을 권장한다. API를 쓸 때는 `origin`을 지정해야 한다. — [Google, YouTube Embedded Players Parameters](https://developers.google.com/youtube/player_parameters)
- 레시피를 페이지 밖에서 다시 만드는 사람 중 23.9%는 "영상판"을 대안으로 쓴다. YouTube는 레시피를 찾는 경로로 47.2%가 쓴다(Google 87.6%, SNS 51.1%). — [Allspice Labs](https://www.allspicelabs.com/studies/home-cooks/)
- 요리 보조 앱 사례 연구는 핵심 문제로 레시피 찾기, 분량 조절, **영상 레시피 일시정지**를 꼽았다. — [Scribd, Bitbybite case study](https://www.scribd.com/document/500412473/Bitbybite-App)
- Kitchen Stories는 첫 단계 전에 기술 영상(크림 휘핑, 초콜릿 다지기)을 보여 주고, 단계 안의 전구 아이콘으로 팁을 주는데 팁이 영상인 경우도 있다. "양파 써는 법부터 오믈렛까지" 가르친다. — [Stuff.tv review](https://stuff.tv/?p=103614); [App Store, Kitchen Stories](https://apple.co/2IGh7Er)
- NYT Cooking은 단계별 가이드를 자체 YouTube 채널 영상으로 안내한다. — [NYT Help Center](https://thenewyorktimeshelpcenter.helpjuice.com/360011047512-New-York-Times-Cooking/19686556670868-Cooking-Recipe-Features)

### Inferences
- 사용자가 직접 할 일: 유튜브 링크를 붙여 넣고, 단계마다 "mm:ss"를 입력한다(유튜브 공유의 "현재 시간에서 시작" 기능으로 얻을 수 있다). 앱은 단계 화면에 "▶ 이 부분 보기"를 두고, 누르면 `start=초&end=다음단계초&playsinline=1` 임베드를 열거나 이미 열린 플레이어를 `seekTo`로 이동시킨다.
- 초보에게는 "영상 한 번 끝까지 본다 → 텍스트 단계로 요리한다 → 막히는 단계에서만 그 구간 재생"이 맞는 흐름이다. 영상을 계속 틀어 놓고 일시정지를 반복하는 것이 바로 위 사례 연구가 짚은 고통이다.
- 영상 설명란이나 고정 댓글의 레시피 텍스트를 붙여 넣으면 줄 단위로 나눠 단계로 만드는 기능이 입력 노력을 크게 줄여 준다.

### Gaps
- 단계별 영상과 텍스트가 초보의 성공률에 미치는 영향을 비교한 정량 연구는 찾지 못했다.

## 4. 초보 보조 기능 (용어 사전, 기술 영상, 도구 목록, 손질 먼저, 대체 재료)

### Takeaway
초보용 앱(Kitchen Stories, SideChef)의 공통점은 필요 도구와 난이도를 먼저 알려 주고, 기술 영상이나 팁을 단계 옆에 붙이는 것이다. 한국어 레시피 용어(한소끔 등)는 사전을 짧게 만들어 단계 본문의 해당 단어를 누르면 뜨게 하는 것이 자연스럽다.

### Cited Findings
- Kitchen Stories: 난이도, 필요 도구(utensils), 조리 시간을 보여 줘 초보가 고르기 쉽다. 가이드 모드에서는 단계별 사진과 설명이 나오고, 전구 아이콘 팁이 있다. — [WGBH](https://www.wgbh.org/lifestyle/food/2018-12-14/the-best-recipe-apps-for-cooking-beginners); [Stuff.tv](https://stuff.tv/?p=103614)
- "한소끔"은 거품을 내며 한 번 끓어오르는 모양을 뜻하며, "한소금"은 틀린 표기다. 예: "국수를 한소끔 끓인 후 찬물을 붓는다". — [한국교육신문/EBS 우리말 칼럼](https://hangyo.com/news/article.html?no=17301)
- 사용자 불만 중 "시간·익은 정도 판단 불확실"이 11.2%다. — [Allspice Labs](https://www.allspicelabs.com/studies/home-cooks/)
- enplace는 재료가 섞이고 나뉘고 따로 놓이는 흐름(손질 단위)을 중심으로 설계했다. — [Contra, enplace](https://contra.com/p/Bm6FFUUl-enplace)

### Inferences
- 단계를 [준비](썰기·계량·물 끓이기)와 [조리](불 위)로 나눠 준비를 먼저 끝내게 하면, 불 앞에서 허둥대는 상황을 줄일 수 있다.
- 용어 사전에 넣을 후보: 센불·중불·약불(불꽃이 냄비 바닥에 닿는 정도로 설명), 한소끔, 자작하게, 숨이 죽다, 데치다, 볶다·굽다, 간 보기, 밥숟가락·티스푼·종이컵 계량, 다진 마늘 1큰술의 양. 정의마다 "이렇게 보이면 된다"는 눈으로 확인할 신호를 함께 적는다. 익은 정도 불확실 문제가 여기서 풀린다.
- 대체 재료는 데이터베이스를 쓰기보다 레시피별 메모 칸("없으면: 대파→양파")으로 충분하다.

### Gaps
- 센불·중불·약불의 신뢰할 만한 정의 출처는 이번 검색에서 찾지 못했다.
- 대체 재료 제안 기능을 가진 앱(Samsung Food 등)의 동작은 확인하지 못했다.

## 5. 즐겨찾기·컬렉션·평점·개인 메모

### Takeaway
저장과 정리는 사용자가 원하는 상위 기능이다. "만들어 봄" 기록과 메모는 다음 요리를 더 잘하게 만드는 피드백 루프 역할을 한다.

### Cited Findings
- 여러 사이트의 레시피를 한곳에 저장·정리하는 도구가 있다면 쓰겠다는 응답이 69.8%다. — [Allspice Labs](https://www.allspicelabs.com/studies/home-cooks/)
- 레시피를 페이지 밖으로 옮겨 쓰는 사람 중 22.6%는 메모를 쓴다. — [Allspice Labs](https://www.allspicelabs.com/studies/home-cooks/)
- NYT Cooking은 레시피를 "Cooked"로 표시하는 기능을 제공한다. — [NYT Help Center](https://thenewyorktimeshelpcenter.helpjuice.com/360011047512-New-York-Times-Cooking/19686556670868-Cooking-Recipe-Features)

### Inferences
- 최소 데이터 모델: recipe { title, youtubeUrl, steps[{text, t}], ingredients[], tools[], tags[], fav, cookedLog[{date, rating(3단계: 또/보통/별로), note}] }. 쿡 모드의 마지막 화면에서 바로 "다음엔?" 메모를 받으면 기록이 쌓인다. 다음에 레시피를 열면 그 메모를 상단에 띄운다.

### Gaps
- 레시피 앱 안에서 메모를 남기는 비율 같은 행동 데이터는 찾지 못했다.

## 6. 식단·레시피 앱 이탈 이유와 유지 요인

### Takeaway
건강·라이프스타일 앱은 설치 직후 이탈이 가장 가파르고, 중앙값 기준 70%가 100일 안에 그만둔다. 이유는 "쓰기 어려움", 입력에 드는 시간, 다양성 부족, 동기 감소, 지루함이다. 식단 앱 업계 글들이 반복해서 꼽는 요인은 긴 온보딩, 바꾸기 어려운 주간 계획, 같은 레시피 반복, 장보기 목록 정리 부담, 기본 기능에 걸린 유료 장벽이다(대부분 벤더 블로그라 근거는 약하다).

### Cited Findings
- 스코핑 리뷰(18개 연구, 약 52만 명): 설치 직후 이탈이 가장 가파르고 이후 완만해지며, 중앙값 70%가 100일 안에 사용을 중단한다. 이유 22개를 6개 범주로 묶었다. 가장 많이 보고된 이유는 "헷갈리거나 어려움(디자인·사용성)"(4개 연구)이고, 그다음은 목표 달성(3), 동기 감소(3), 다양성 부족(2), 입력 시간(2), 지루함(2), 계정 생성 강요(1), 짜증 나는 알림(1), 숨은 비용(1) 순이다. 식단 앱 이탈률은 86%(단일 연구)이고, 업계 데이터로는 피트니스·영양 앱의 69%가 90일 안에 이탈한다. 연구마다 "이탈" 정의가 달라 수치는 대략적인 값이다. — [JMIR 2024 / PMC11694054](https://pmc.ncbi.nlm.nih.gov/articles/PMC11694054/)
- 영양 앱 설문에서 중단 이유 1위는 시간 투자가 크다는 것(14/38, 37%)이었다. — [PMC10337335](https://pmc.ncbi.nlm.nih.gov/articles/PMC10337335)
- 음식 일지 앱(MyFitnessPal 등)의 소셜 기능은 기대한 참여 루프를 만들지 못했다. 친구가 너무 적게 기록하거나 너무 잘해도 그만두게 된다. — [JMIR 검색 결과 요약 / Big Think 기사(403으로 원문 미확인)](https://bigthink.com/ideafeed/why-so-many-people-quit-food-logging-apps-in-the-first-week)
- 벤더 블로그(Spiceful, 근거 인용 없음): 실패 요인으로 상세한 선호 입력과 모든 끼니를 미리 계획하게 하는 무거운 설정("주방 도우미가 아니라 업무 프로젝트 같다"), 중복되는 장보기 목록, 일정이 바뀌면 깨지는 계획을 든다. 잘 되는 요인으로는 빠른 설정, 어떤 출처든(블로그·SNS·스크린샷) 레시피를 추가할 수 있는 것, 합산되는 장보기 목록, 불이익 없이 끼니를 옮기거나 건너뛰는 것, 기기 간 동기화를 든다. — [Spiceful blog](https://www.getspiceful.com/blog/why-most-meal-planning-apps-fail-busy-home-cooks)
- 검색 요약 수준의 블로그들: 같은 저장 레시피 3개만 보여서 열었다가 닫는 반복, 3주 차쯤 장보기 목록을 건너뛰기 시작하는 점진적 이탈, Reddit 사용자들이 기본 계획·동기화·장보기 기능의 유료 장벽에 불만을 가진다는 점을 언급한다. — [MealThinker](https://mealthinker.com/blog/meal-planning-feels-like-chore); [A Better Meal](https://abettermeal.com/best-meal-planning-app-2026-what-actually-makes-a-plan-stick/); [OrganizEat, Reddit roundup](https://home.organizeat.com/blog/meal-planner-app-reddit/)
- Plan to Eat는 요일에 레시피를 배치하는 캘린더 방식이 "그냥 레시피 목록을 원하는 사람에게는 단점"이라고 스스로 인정한다. Mealime 유료는 월 $6 / 연 $50이다. — [Plan to Eat](https://www.plantoeat.com/?p=37293); [Tools and Toys, Mealime](https://toolsandtoys.net/mealime-meal-planning-app/)
- Fortune 2026 추천 1위 Prepear: 전체 라이브러리가 Gold 유료에 묶여 있고 초보에게는 복잡할 수 있다. — [Fortune, best meal planning apps](https://fortune.com/article/best-meal-planning-apps)

### Inferences
- 1인 개인 앱에 그대로 적용할 원칙: 계정과 온보딩을 없앤다(열자마자 레시피 추가). 주간 계획은 강제하지 않고 "이번 주 해볼 것" 목록 정도로 둔다. 추가할 때 입력 칸은 최소로 하고(유튜브 URL + 제목만 필수), 나머지는 나중에 채우게 한다. 알림은 넣지 않는다. 다양성 부족 문제는 사용자가 직접 넣는 레시피라서 상관없지만, "아직 안 해본 것"과 "또 하고 싶은 것"을 보여 주면 지루함을 줄일 수 있다.
- 목표 달성 이탈은 오히려 좋은 신호다(요리를 익혀서 앱이 필요 없어짐). 그러니 해본 요리 수, 익힌 기술 같은 성장 표시가 동기 유지에 도움이 될 수 있다(추정).

### Gaps
- r/Cooking과 r/mealprep의 실제 이탈 스레드는 검색에서 직접 찾지 못했다. Reddit 관련 주장은 2차 블로그 요약뿐이다.
- 레시피·식단 앱만 대상으로 한 독립 설문의 이탈 통계는 없다.

## 7. 단일 파일 웹앱 / PWA 기술 패턴

### Takeaway
Screen Wake Lock API는 2025년 3월 이후 Baseline(모든 주요 브라우저)이다. HTTPS가 필요하고, 탭이 숨겨지면 자동으로 해제되므로 `visibilitychange`에서 다시 요청해야 한다. iOS 홈 화면 PWA에서 동작하지 않던 버그는 iOS 18.4에서 고쳐졌다.

### Cited Findings
- Wake Lock: Baseline 2025(2025년 3월부터 최신 기기와 브라우저 전반). 보안 컨텍스트(HTTPS)에서만 동작한다. 문서가 숨겨지거나 비활성화되면, 또는 시스템 사정(배터리 부족 등)으로 자동 해제된다. 그래서 `visibilitychange`에서 재요청하는 패턴이 필요하다. 요청은 `navigator.wakeLock.request("screen")`이고 try/catch로 감싼다(절전 모드에서 거부될 수 있음). `release` 이벤트로 UI를 갱신하고, 작업이 끝나면 즉시 해제한다. 정책 지시어는 `screen-wake-lock`(기본 self)이다. — [MDN, Screen Wake Lock API](https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API)
- iOS 홈 화면 웹앱에서 Wake Lock이 동작하지 않던 WebKit 버그 254545(iOS 16.4 보고)는 RESOLVED FIXED이고, iOS 18.4에서 수정됐다. 이전 개인 블로그 글은 "PWA 모드에서 고장"이라고 적었는데, 18.4 이전 글로 보인다. — [WebKit Bug 254545](https://bugs.webkit.org/show_bug.cgi?id=254545); [Progressier, Screen Wake Lock](https://progressier.com/pwa-capabilities/screen-wake-lock); 상충: [Sleepy Safari note](https://untested.sonnet.io/notes/sleepy-safari)
- 레시피 사이트들의 "Cook Mode" 토글도 같은 Wake Lock 방식을 쓴다. — [DEV, Staying alive: the Screen Wake Lock API](https://dev.to/madsstoumann/staying-alive-the-screen-wake-lock-api-31fh); [Recipe Kit, Cook Mode](https://help.getrecipekit.com/article/786-cook-mode)
- YouTube 임베드는 HTTPS 페이지에서 iframe으로 쓴다. IFrame API를 쓸 때는 `origin` 파라미터가 필요하다. — [Google, YouTube player parameters](https://developers.google.com/youtube/player_parameters)

### Inferences
- 구현 메모:
  - 저장: 레시피가 수십 개 수준이면 localStorage에 JSON 하나로 충분하다(용량 약 5MB 내외로 알려져 있음, 미확인). 기기를 바꾸거나 캐시가 지워지면 데이터를 잃으므로 JSON 내보내기/가져오기 버튼을 반드시 둔다. iOS Safari는 오래 쓰지 않은 사이트의 저장소를 지울 수 있는 것으로 알려져 있는데(미확인), 홈 화면에 추가하면 완화된다는 얘기가 있다. 이 점도 백업 버튼이 필요한 이유다.
  - 오프라인과 홈 화면: manifest.json과 간단한 service worker(앱 셸 캐시)를 둔다. 단일 HTML 파일만 쓰면 manifest와 SW는 별도 파일이 필요하다. 유튜브 영상은 오프라인에서 재생되지 않으므로 텍스트 단계가 기본이어야 한다.
  - Wake Lock: 쿡 모드에 들어갈 때 요청하고 나올 때 해제한다. `visibilitychange`에서 재요청한다. 지원하지 않으면 "화면 자동 잠금을 꺼 주세요" 안내를 띄운다.
  - Web Share API(`navigator.share`): 레시피 텍스트나 링크를 가족에게 보낼 때 쓴다. 지원 여부를 확인하고, 없으면 클립보드 복사로 대신한다.

### Gaps
- Web Share API, localStorage 용량, iOS 저장소 삭제 정책, manifest/설치 동작은 이번 조사에서 MDN이나 WebKit 1차 문서로 직접 확인하지 않았다(위 내용은 일반 지식 기반 추정이니 구현 전에 확인할 것).
