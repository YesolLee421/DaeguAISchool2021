// input 태그 이용해서 받은 입력값 화면에 출력. 값이 없으면 에러메세지 출력

var form = document.getElementById('form');
var input = document.getElementById('msg');

// var btn = document.getElementById('btn'); // form태그 있어서 따로 가져오지 않아도 됨

// css선택자와 동일한 방식으로 선택하기 querySelector()
var feedback = document.querySelector('.feedback');
var txt = document.getElementById('txt');


// form 태그 이벤트 첫번째 인자로 'submit' 주면 form 안에 submit 타입 있으면 작동함.
// submit 시 작동 완료와 동시에 바로 브라우저 새로고침됨
// 원래 태그가 가지고 있는 본연의 기능 제어하고 싶을 때 콜백함수 매개변수 추가해주기
form.addEventListener('submit', function(e) {
    // e = 이벤트함수. 이벤트함수의 내장메소드 가져다 쓴 것
    e.preventDefault();

    // console.log(e);
    // console.log('submit');

    var msg = input.value;
    

    // msg 내용에 따른 분기처리

    console.log(msg);
    if(msg) {
        txt.textContent = msg;
        // form 안 모든 input 태그 전부 초기화
        form.reset();
    } else {
        // 태그에 클래스 추가
        feedback.classList.add('show');

        // 1초 후 show 클래스 삭제
        setTimeout(function() {
            feedback.classList.remove('show');
        }, 1000);
    }
});

// setTimeout(callback(), mili-second); 1000ms = 1sec