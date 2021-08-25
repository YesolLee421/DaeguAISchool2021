// var $profile = $('.profile');
// var $profilePopup = $('.profile-popup');

// $profile.on({
//     mouseenter: function() {
//         // $profilePopup.show()

//         // 태그의 직계 부모에 접근 parent()
//         // find() 찾기
//         // profile 객체가 여러 개일 때 $(this)
//         $(this).parent().find('.profile-popup').css('display', 'block');
//     },
//     mouseleave: function() {
//         // $profilePopup.hide()
//         $(this).parent().find('.profile-popup').css('display', 'none');
//     }
// })



// next(): 부모 경유 없이 바로 다음 형제 태그 선택 next().next()중복 가능
// prev() : 바로 이전 형제 태그 선택. 중복가능
// fadeIn(), fadeOut(): 부드럽게 나타나고 사라지기
var $profile = $('.profile');

$profile.on({
    mouseenter: function() {
        $(this).next().fadeIn();
    },
    mouseleave: function() {
        $(this).next().fadeOut();
    }
})