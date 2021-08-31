// greensock: animation에 특화된 javascript 플러그인
// gsap 기본구조: gsap.to(target-querySelector 스타일, 변화주고 싶은 속성값들 객체로 전달)
// from~to 의 to와 같은 역할
// left 적용되지 않는 이유: position이 static이라서

// gsap.to(".masthead-heading", {
//   duration: 1,
//   x: 100,
//   backgroundColor: 'blue',
//   borderRadius: '50%',
// });


// duration 속성이름 생략 가능
// 대신 x, y값 이용해 움직일 수 있음 = translate() 이용
// gsap.to('.masthead .btn', 5, {
//   x: 300,
//   rotation: 360,
//   scale: 0.7,
// })


// 제이쿼리와 같이 사용 가능
// trigger와 함께 사용 가능
// var $btn = $('.btn');
// $btn.click(function(e) {
//   e.preventDefault();
//   gsap.from($btn, 5, {
//     opacity: 0,
//     scale: 0,
//     y: -50,
//     delay: 1
//   })
// })
// from 시작점 만들기 -> 최초 디자인 상태로 변화함
// opacity: 0, scale: 0으로 fadeIn 효과 만들기
// 시작 딜레이 만들기: delay






// 시작과 끝 둘 다 지정하기: fromTo
// 인수로 들어갈 객체 2개: from, to
// gsap.fromTo('.masthead .btn', 5, 
//   {backgroundColor: 'purple'}, 
//   {backgroundColor: 'blue'}
// )


// easing(timing function): 애니메이션 동작 속도 조절
// ease-pack js파일 연동 필수
// var $faStack = $('#services .fa-stack');

// gsap.from($faStack, 1, {
//   x: -200,
//   ease: "back.out"
// });


// 연속적인 애니메이션 효과: 딜레이 이용하기
var $portfolioHeading = $('#portfolio .section-heading'),
    $portfolioSubHeading = $('#portfolio .section-subheading'),
    $portfolioImg = $('#portfolio img'),
    $portfolioTitle = $('#portfolio .portfolio-caption-heading'),
    $portfolioText = $('#portfolio .portfolio-caption-subheading');

// gsap에서는 opacity 대신 autoAlpha 사용
// 현재 딜레이는 브라우저 새로고침했을 때 전부 시작
// gsap.from($portfolioHeading, 0.3, {y: -15, autoAlpha: 0, delay: 0.2});
// gsap.from($portfolioSubHeading, 0.3, {y: -15, autoAlpha: 0, delay: 0.4});
// gsap.from($portfolioImg, 0.3, {y: -15, autoAlpha: 0, delay: 0.6});
// gsap.from($portfolioTitle, 0.3, {y: -15, autoAlpha: 0, delay: 0.8});
// gsap.from($portfolioText, 0.3, {y: -15, autoAlpha: 0, delay: 1});


// timelineLite()로 인한 딜레이는 이전 효과 완료 후 딜레이 시작
var tl = new TimelineLite();

// tl
//   .from($portfolioHeading, 0.3, {y: -15, autoAlpha: 0, delay: 0.2})
//   .from($portfolioSubHeading, 0.3, {y: -15, autoAlpha: 0, delay: 0.2})
//   .from($portfolioImg, 0.3, {y: -15, autoAlpha: 0, delay: 0.2})
//   .from($portfolioTitle, 0.3, {y: -15, autoAlpha: 0, delay: 0.2})
//   .from($portfolioText, 0.3, {y: -15, autoAlpha: 0, delay: 0.2});

// 선택 후 ctrl+D: 같은 단어 하나씩 추가로 선택
// 딜레이 없으면 이전효과 끝나고 바로 시작
// 이전효과 끝나기 전에 미리 시작하고 싶을 때: 이전효과 기준 시작점 인수 추가
// tl
//   .from($portfolioHeading, 2, {y: -15, autoAlpha: 0, })
//   .from($portfolioSubHeading, 0.3, {y: -15, autoAlpha: 0,}, '-=0.15')
//   .from($portfolioImg, 0.3, {y: -15, autoAlpha: 0, }, '-=0.15')
//   .from($portfolioTitle, 0.3, {y: -15, autoAlpha: 0, }, '-=0.15')
//   .from($portfolioText, 0.3, {y: -15, autoAlpha: 0, }, '-=0.15');


// 문자열: 이전효과 기준 시간 + 적용
// 숫자: 브라우저 새로고침 기준 절대시간
// tl
//   .from($portfolioHeading, 2, {y: -15, autoAlpha: 0, })
//   .from($portfolioSubHeading, 0.3, {y: -15, autoAlpha: 0,}, '+=1')
//   .from($portfolioImg, 0.3, {y: -15, autoAlpha: 0, }, 3)
//   .from($portfolioTitle, 0.3, {y: -15, autoAlpha: 0, })
//   .from($portfolioText, 0.3, {y: -15, autoAlpha: 0, });


// subheading 나오는 순간 나머지 등장
// add(문자열)로 시작 기준점 추가
// 안 적으면 첫 애니메이션이 기준이지만 따로 적어서 기준점 추가할 수 있는 듯
tl
  .from($portfolioHeading, 1, {y: -15, autoAlpha: 0, })
  .add('$portfolioSubHeading')
  .from($portfolioSubHeading, 0.3, {y: -15, autoAlpha: 0,})
  .from($portfolioImg, 0.3, {y: -15, autoAlpha: 0, }, '$portfolioSubHeading')
  .from($portfolioTitle, 0.3, {y: -15, autoAlpha: 0, }, '$portfolioSubHeading+=3')
  .from($portfolioText, 0.3, {y: -15, autoAlpha: 0, }, '$portfolioSubHeading');


// 라이브러리 등 사용할 때 라이센스 확인하기: GreenSock 상업적 목적 이용은 비용 필요


