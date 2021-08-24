// 1. 버튼 클릭 시 메시지 나타내기
// 2. 알아서 클래스 삭제

// 기존 addEventListener 방법 연습
var btnShow = document.querySelector('button');
btnShow.addEventListener('click', snackBarFunc);


// html 태그에 onclick 속성값으로 함수호출
function snackBarFunc() {
    var snackBar = document.getElementById('snackbar');
    snackBar.classList.add('show');

    // 시간을 2.5초보다 긴 3.5초 전달
    setTimeout(function() {
        snackBar.classList.remove('show');
    }, 3500);
};
