// 스크롤 내리면 nav의 배경색 및 글자색 바뀌는 효과
var fixedNav = document.querySelector('nav');

// 스크롤 제어: 전부 같은 효과
// 1. window.addEventListener('scroll')
// 2. window.onScroll = function () { ... }
// 3. document.addEventListener('scroll')

// window.addEventListener('scroll', function() {
//     // 스크롤 좌표 감지 property 사용
//     // 각 값들은 scroll값 가져오는 속성
//     // 속성마다 브라우저 호환성 다르기 때문에 여러 개 사용(cross-browsing)
//     var top = window.scrollY // explorer 제외 모든 브라우저
//     || window.pageYOffset  // explorer 9 이상 가능
//     || document.documentElement.scrollTop // explorer 8 이하 가능, chrome 불가
//     || document.body.scrollTop; // 크롬, 사파리, 오페라, 엣지 사용 가능

//     // 스크롤 위치 내려가면 nav class 추가해줌
//     // if(top > 50) {
//     //     fixedNav.classList.add('active');
//     // } else {
//     //     fixedNav.classList.remove('active');
//     // }
//     (top > 50) 
//         ? fixedNav.classList.add('active')
//         : fixedNav.classList.remove('active');
// });




// 스크롤 내려가는 상태/ 올라가는 상태에 따라 배경색 바꾸기
// var oldVal = 0; //기준점
// window.addEventListener('scroll', function () {
//     var newVal = window.scrollY
//     || window.pageYOffset
//     || document.documentElement.scrollTop 
//     || document.body.scrollTop; 

//     // console.log(`old=${oldVal}, new=${newVal}`);

//     if(oldVal - newVal < 0) {
//         fixedNav.classList.add('active');
//     } 
//     if(oldVal - newVal > 0) {
//         fixedNav.classList.remove('active');
//     }
//     oldVal = newVal;
// });



// scroll 움직임 상태를 브라우저에서 받음 (권장하진 않음)
// window.addEventListener('wheel', mouseWheelEvt);
// // 파이어폭스용 이벤트인수 사용
// window.addEventListener('DOMMouseScroll', mouseWheelEvt);

// function mouseWheelEvt(e) {
//     // 브라우저마다 wheelDelta값이 있을수도 있고 없을수도 있어서 삼항연산자 사용
//     // 파이어폭스 지원하지 않음
//     var index = e.wheelDelta ? e.wheelDelta : -e.detail;
//     // console.log(index); // 내려갈 땐 -120, 올라갈 땐 120

//     (index < 0)
//         ? fixedNav.classList.add('active')
//         : fixedNav.classList.remove('active');
// };



// 사용자가 접속한 브라우저 알아내기 navigator.userAgent에 문자열로 저장
// console.log(navigator.userAgent.indexOf('Firefox')); // 글자가 존재하면 위치값, 없으면 -1
var isFirefox = (navigator.userAgent.indexOf('Firefox')===-1) ? false : true;
var wheelEvt = isFirefox ? 'DOMMouseScroll': 'wheel';

window.addEventListener(wheelEvt, mouseWheelEvt);
function mouseWheelEvt(e) {
    var index = e.wheelDelta ? e.wheelDelta : -e.detail;

    (index < 0)
        ? fixedNav.classList.add('active')
        : fixedNav.classList.remove('active');
};

