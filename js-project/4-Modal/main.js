// 클릭 시 팝업창 나타나는 기능 modal: 레이어가 깔린 팝업창
var btnModal = document.querySelector('.btn-modal');
var modal = document.querySelector('.modal');
var btnClose = document.querySelector('.modal .btn-close');

btnModal.addEventListener('click', function() {
    modal.classList.add('active');
});

btnClose.addEventListener('click', function() {
    modal.classList.remove('active');
});

// 모달창 밖을 클릭해도 모달창 꺼지게 하기
modal.addEventListener('click', function(e) {
    var target = e.target; // modal 영역 안 클릭한 태그 반환
    var isLayer = target.classList.contains('modal-layer');

    if(isLayer) {
        modal.classList.remove('active');
    }
});