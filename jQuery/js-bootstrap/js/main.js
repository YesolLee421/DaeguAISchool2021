// jQuery 사용 방법 정석: 아래 구조 안에 작성
$(function () { 
    console.log('hi im jQuery');

    // jQuery 선택자 지정방법: querySelector와 동일한 방식
    // $('.masthead').css('border', 'solid 10px yellow');
    // $('.masthead-heading').css('color', 'blue');

    // console.log($('#masthead-id'));

    // jQuery로 할당한 값을 자바스크립트 변수에 담을때 변수명 앞에 $사용해줌
    // var $masthead = $('#masthead-id');


    // 가상선택자로 접근
    // odd(홀수)지만 0에서 시작(0, 2, 4번째), even(1,3,5)
    // $('li.nav-item:even').css('background-color', 'blue');
    // $('li.nav-item:odd').css('background-color', 'green');

    // :eq(i) i번째 요소에 접근
    // $('.nav-item:eq(0)').css('background-color', 'pink');

    // 부모 자식 관계로 접근
    // $('header .masthead-id').css('color', 'red');

    // 선택자 못 찾으면 비어있는 값 반환 (에러 없음)

    // jQuery 사용 시 주의점: html에 라이브러리 연동->해당 라이브러리 사용하는 기능 연동




    // jQuery Events
    // 이벤트 일어나는 객체를 this로 사용 가능
    // $('header #masthead-id').mouseenter(function() { // 한번 마우스 올리면 그 후 지속
    //     // $('header #masthead-id').css('background-color','black');
    //     $(this).css('background-color','black'); // 모든 jquery 메소드는 $로 사용할 수 있기 때문
    // })
    // $('header #masthead-id').mouseleave(function() { // 한번 마우스 올린 것 벗어나면 그 후 지속
    //     $(this).css('background-color','transparent');
    // })

    // $('header #masthead-id').click(function() { // 한번 마우스 올리면 그 후 지속
    //     $(this).css('background-color','pink');
    //     // console.log(this);
    // })

    // 하나의 영역에 여러 개의 이벤트 -> on({})으로 결합
    // fadeTo(속도, opacity, callback())
    // $('header #masthead-id').on({
    //     mouseenter: function() {
    //         $(this).fadeTo('fast', 1);
    //     },
    //     mouseleave: function() {
    //         $(this).fadeTo('fast', 0.5);
    //     }
    // })


    // display:none 처리하는 메서드 hide()
    // $('#masthead-id').click(function() {
    //     $('.masthead-heading').hide();
    // })

    // // display:none 제거 -> show()
    // $('#masthead-id').click(function() {
    //     $('.masthead-heading').show();
    // })

    // hide() + show() -> toggle()
    // $('#masthead-id').click(function() {
    //     $('.masthead-heading').toggle();
    // })

    // display:none 속성값 유무 기준: slideDown(), slideToggle()
    // $('#masthead-id').click(function() {
    //     $('.masthead-heading').slideToggle();
    // })

    // fadeIn, fadeOut
    // $('header .btn-one').click(function () {
    //     $('.masthead-heading').fadeOut();
    // })

    // $('header .btn-two').click(function () {
    //     $('.masthead-heading').fadeIn();
    // })


    // 클래스 제어
    // html head - style로 css 클래스 미리 만들어 둠
    // 1. addClass('클래스명')
    // $('header .btn-one').click(function() {
    //     $('#masthead-id').addClass('blue');
    //     $('.masthead-heading').addClass('important');
    // })

    // // 2. removeClass
    // $('header .btn-two').click(function() {
    //     $('#masthead-id').removeClass('blue');
    //     $('.masthead-heading').removeClass('important');
    // })


    // 토글 기능 만들기
    // var $id = $('#masthead-id');

    // $('.btn-one').click(function () {
    //     // // hasClass 클래스 있는지 boolean으로 반환
    //     // if($id.hasClass('blue')) {
    //     //     $id.removeClass('blue');
    //     // } else {
    //     //     $id.addClass('blue');
    //     // }
    //     $id.toggleClass('blue');
    // })

});