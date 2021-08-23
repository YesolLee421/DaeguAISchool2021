// 마우스 움직임을 따라 이미지가 움직이는 효과
var pageContainer = document.querySelector('.page-container');
var pageBack = document.querySelector('.page-back');

// 브라우저 안 너비
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

// console.log(windowWidth, windowHeight);

// 마우스 움직일 때 이벤트 추가
pageContainer.addEventListener('mousemove', function(e){
    
    // 마우스 좌표 가져오기: e 이벤트객체의 pageX, pageY 마우스 좌표값
    // console.log('pageX = ' + e.pageX);
    // console.log('pageY = ' + e.pageY);

    // 마우스 움직임값을 축소해서 반영하는 x, y 값 생성
    var moveX = ((windowWidth/2) - e.pageX) * 0.1;
    var moveY = ((windowHeight/2) - e.pageY) * 0.1;

    // console.log('moveX = ' + moveX);
    // console.log('moveX = ' + moveY);

    // page-back 움직이기
    // pageBack.style.marginLeft = `${moveX}px;`
    // pageBack.style.marginTop = `${moveY}px`;

    // margin보다 transform이 gpu를 사용해서 cpu, gpu 분산되서 성능개선
    pageBack.style.transform = `translate(${moveX}px, ${moveY}px)`;

});