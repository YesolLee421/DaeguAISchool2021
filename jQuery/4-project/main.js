var $closeText = $('.close-text');
var $openText = $('.open-text');
var $listTitleWrap = $('.list-title-wrap');
var $listArticleWrap = $('.list-article-wrap');

// 모두 접기
$closeText.click(function() {
    $closeText.hide();
    $openText.show();

    $listArticleWrap.addClass('hide');
})

// 모두 열기
$openText.click(function() {
    $openText.hide();
    $closeText.show();

    $listArticleWrap.removeClass('hide');
})

// // 클릭한 영역 본문만 열기 1
// $listTitleWrap.click(function() {
//     if($(this).parent().find('.list-article-wrap').hasClass('hide')) {
//         $(this).parent().find('.list-article-wrap').removeClass('hide');
//     } else {
//         $(this).parent().find('.list-article-wrap').addClass('hide');
//     }
//     // $(this).parent().find('.list-article-wrap').toggleClass('hide');
// })


// 클릭한 영역 본문만 열기 2
// slideToggle() : style에 display:none 추가하는 방식
$listTitleWrap.click(function() {
    $(this).next().toggleClass('hide');

    // 하나씩 닫아서 다 닫으면 버튼 종류 바뀌어야 함
    // 아티클 중 hide 클래스 있는 아티클 개수에 따라 조건문
    var hideLength = $('.list-article-wrap.hide').length;
    if(hideLength === 3) {
        $openText.show();
        $closeText.hide();
    }
    if(hideLength === 0) {
        $openText.hide();
        $closeText.show();
    }
})

// hide 클래스를 이용할지 hide()를 이용할지 결정. 현재 display:none



