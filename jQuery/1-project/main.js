var $favoriteIcon = $('.favorite-icon'); // 클래스 객체들이 유사배열로 반환
// console.log($favoriteIcon);

// $(this)를 이용해 클릭한 객체만 가져오기
// $favoriteIcon.click(function() {
//     if($(this).hasClass('on')) {
//         $(this).removeClass('on');
//     } else {
//         $(this).addClass('on');
//     }
// })

$favoriteIcon.click(function() {
    $(this).toggleClass('on');
})