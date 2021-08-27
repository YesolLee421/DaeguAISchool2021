// intro.js : onboarding 기능 제작 도와주는 플러그인

// onboarding: 사용자가 서비스 이용하면서 자연스럽게 기능파악하도록 도와주는 튜토리얼 방식

// 라이브러리 적용방식
// 1. 소스코드 직접 다운
// 2. CDN 방식: 링크 주소에서 가져다가 쓰기

// html data-* 속성: 개발자가 임의로 추가할 수 있는 속성

// // data-* 속성값에 접근하기
// var btn = document.querySelector('.masthead .btn');

// // 모든 data-* 값들 DOMStringMap 이라는 유사배열에 저장됨
// console.log(btn.dataset);

// 기초기능
// 1. html data-intro: 커스텀 속성값 추가
// 2. js에서 introJs().start();하면 data-intro 속성있는 모든 태그 찾음
// html data-intro(필수), data-title(페이지제목), data-step(tnstj)

// 공식문서 방식 불가
// introJs('.btn').start();

// introJs().addHints();

// json으로 setOption: trigger 필요

// const btnHeading = document.querySelector('#portfolio .section-heading');

// btnHeading.addEventListener('click', function() {
//     console.log('hi');

// });

// element 선택하지 않으면 브라우저 중앙에 팝업 나타남
// position: tooltip 박스 나타나는 위치: right 등 박스 들어갈 자리 있어야 적용가능
// intro, title 안에 html 태그까지 작성 가능
// tooltip에 css 클래스 적용하기 tooltipClass: '클래스명 클래스명2'
// progressBar : showProgress: true -> 원래 있는데 display:none이었음
// 다음 버튼들 : showButtons: false (default true)
// 아래 점들 제어: showBullets: false (default true)
// right to left(rtl)
// 버튼 안 내용 제어 : nextLabel, prevLabel, doneLabel
// onboarding 끄기 제어: exitOnEsc, exitOnOverlayClick
// 끝내기 전 마지막 질문 onbeforeexit
introJs()
  .setOptions({
    tooltipClass: "customTooltip custom-1",
    showProgress: true,
    showButtons: true,
    showBullets: true,
    nextLabel: "다음",
    prevLabel: "이전",
    doneLabel: "완료",
    exitOnEsc: false,
    exitOnOverlayClick: false,
    steps: [
      {
        title: "step1",
        intro: "Hello World! 👋",
        // element: document.querySelector('#portfolio .section-heading'),
      },
      {
        title: "step2",
        element: document.querySelector("#portfolio .section-heading"),
        intro: '<img src="https://via.placeholder.com/40">',
        // position: 'top'
      },
      {
        title: "Farewell!",
        element: document.querySelector("#portfolio .section-subheading"),
        intro: "<h2>And this is our <em>final</em> step!</h2>",
        // position: 'top',
      },
    ],
  })
  .onbeforeexit(function () {
    return confirm("Are you sure?"); // 기본 javascript 메서드 confirm 사용
    // 별도 팝업창 만들어서 띄울 수도 있음
  })
  .onchange(function() { // 최초 팝업 등장, 팝업 사이 이동 등의 이벤트 감지
    console.log('이동 중...');
  })
  .oncomplete(function() { // 사용자가 완료 버튼 누르면 발동. 이미 과정 마쳤는지 여부 판단 가능할듯
    console.log('완료');
  })
  .start();
