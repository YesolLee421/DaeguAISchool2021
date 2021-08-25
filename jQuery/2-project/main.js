var $select = $('.select');

// 자기 자신 끄기 안 됨

// 1. select 영역 전체에 on 클래스 제거
// 순서 중요, 
// $select.click (function() {
//     $select.removeClass('on');
//     $(this).addClass('on');
// })


// 2. jQuery 메서드 siblings(): 자기 자신 제외한 모든 형제들 반환
// 순서 상관 없고 한 줄로 정리 가능
$select.click(function() {
    if($(this).hasClass('on')) {
        $(this).removeClass('on');
    } else {
        $(this).addClass('on').siblings().removeClass('on');
    }
})