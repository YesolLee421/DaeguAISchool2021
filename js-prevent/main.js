// a태그 본연의 기능(링크, 위치로 이동) 삭제하기
// 콜백함수 매개변수로 e(이벤트 객체) 전달 -> e에서 메서드 사용
var btn = document.querySelector('#btn');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('hello world');
});
// 어제 했던 메뉴 버튼 a태그에는 추후 링크로 이동 기능 필요할듯