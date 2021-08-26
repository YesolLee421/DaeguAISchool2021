$(function () {
  // owlCarousel 메소드에 여러 옵션 object로 넣기

  // 각 사용 방법 docs 참고하기
//   $(".owl-carousel").owlCarousel({
    // // basic
    // loop: true, // 마지막 <-> 1번 이동
    // margin: 10, // 단위 생략
    // nav: false, // 박스 아래 화살표 등장
    // items: 5,
    // responsive: { // 화면 사이즈에 따라 나타나는 개수 지정. 기본값 3
    //     0: { //
    //         items: 1,
    //         nav: true,
    //     },
    //     600: {
    //         items: 3,
    //         nav:false,
    //     },
    //     1000: {
    //         items: 5,
    //         loop: false,
    //         nav:true,
    //     }
    // }
    // // center without loop
    // center: true,
    // items:2,
    // loop: false,
    // nav: true,
    // margin: 10,
    // resposive: {
    //     600: {
    //         items:4
    //     }
    // }
    // // autoWidth 크기가 다른 이미지 슬라이드
    // autoWidth: true,
    // loop: true,
    // margin: 10,
    // items:4,
    // nav: true,
    // // right to left: 오른쪽부터 역순 정렬
    // rtl: true,
    // // animate
    // animateOut: 'fadeOut',
    // items:1,
    // 더 다양한 css animation 효과
    // animate.css 파일 활용하기
    // animateOut: 'slideOutDown',
    // animateIn: 'flipInX',
    // items:1,
    // margin:30,
    // stagePadding:30, // 좌우 패딩
    // smartSpeed:450
    // // autoplay
    // items: 4,
    // margin: 30,
    // loop: true,
    // autoplay: true,
    // autoplayTimeout: 1000,
    // autoplayHoverPause: true, // 마우스 올리면 정지
//   });
  // // autoplay 버튼으로 제어하기
  // $('.play').on('click',function(){
  //     $('.owl-carousel').trigger('play.owl.autoplay',[1000])
  // })
  // $('.stop').on('click',function(){
  //     $('.owl-carousel').trigger('stop.owl.autoplay')
  // })

  // mouseWheel: 추가 js 파일 필요
  var $owl = $(".owl-carousel");

  $owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 10,
  });

  $owl.on("mousewheel", ".owl-stage", function (e) {
    e.preventDefault();
    if (e.deltaY > 0) {
      $owl.trigger("next.owl");
    } else {
      $owl.trigger("prev.owl");
    }
  });




  
});
