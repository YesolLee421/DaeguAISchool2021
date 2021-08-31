// bootstrap framework: 웹사이트에서 자주 사용되는 레이아웃, 디자인을 미리 만들어 놓은 모음집

// container 클래스: container{ max-width: 1140px} 로 설정됨
// container-fluid: fluid: width: 100%로 설정됨

// row가 container의 기본 양옆 마진 상쇄

// 1. grid system: 전체 영역을 12등분한 것을 기준으로 크기 설정
// 브라우저 크기 바뀌면 알아서 정렬 바뀜
// 반응형 웹을 위해 breakpoint 추가 가능

// row justify-content-md-center : 중앙정렬
// col-md-auto 내부 콘텐츠 길이에 따라 길이 변동

// row 에 개수 입력하면 아래 col에 길이 필요 없음
// <div class="row row-cols-2">

// img class="img-thumbnail" 기본 디자인 제공


// table 태그
// thead 에 별도 적용하던거 없어지고 tr로 사용하게 바뀐듯


// component
// 1. card: 별도 width값 없음 -> row & col 사용해서 영역 만들기
// 2. carousel
// sr-only -> visually-hidden: 코드엔 있어도 화면에 안 나오는 부분
// 최신 버전 기준으로 해보니 예시 코드들 자잘한 변화가 많음
// button의 target 속성값으로 사용된 id값 동일하게 맞추기


// script 제어
// var myCarousel = document.querySelector('#carouselExampleSlidesOnly')
// var carousel = new bootstrap.Carousel(myCarousel, {
//   interval: 1000,
//   wrap: false
// })


// 3. forms
// form-control 클래스로 input태그 디자인 적용
// row 클래스 같이 쓰면 왼쪽 정렬됨, form-inline 등


// 4. modal
// trigger 버튼에 클래스로 data-bs-toggle="modal", data-bs-target="#exampleModal"->연동
// modal 창 안 x버튼: data-bs-dismiss="modal"
// javascript로 modal 제어: 클릭하는 버튼 말고 modal창 자체에 이벤트 붙이기
// eventType
var myModalEl = document.getElementById('exampleModal')
myModalEl.addEventListener('hidden.bs.modal', function (event) {
  console.log('hidden');
});
myModalEl.addEventListener('shown.bs.modal', function (event) {
    console.log('shown');
});

// 예상과 달리 jQuery가 cdn에 포함이 안 되어 있었는지 적용 안 됨 
// var $myModalEl = $('.myModal');
// $myModalEl.on('shown.bs.modal', function() {
//     console.log('shown');
// })

// bootstrap 등장 후 웹사이트 레이아웃 다 비슷해졌다는 문제

