// 하나의 이미지 영역에 서로 다른 이미지 교차되면서 페이드인-아웃 슬라이드

var firstSlide = document.querySelector('.item:first-child');

function slide() {
    // 현재 보이는 슬라이드 선택
    var currentSlide = document.querySelector('.item.show');

    if(currentSlide) { // 없으면 null -> false
        // 현재 보이는 슬라이드 제거
        currentSlide.classList.remove('show');
        // 다음 슬라이드 있는지 검사
        var nextSlide = currentSlide.nextElementSibling;

        // 다음 슬라이드 있으면 다음으로, 아니면 처음으로
        if(nextSlide) {
            nextSlide.classList.add('show');
        } else {
            firstSlide.classList.add('show');
        }
    } else {
        firstSlide.classList.add('show');
    }
}

// slide();
let doSlide = setInterval(slide, 1000); // 일정 시간 간격을 두고 함수를 실행. 주기적 무한 실행
setTimeout(function() {
    clearInterval(doSlide);
    document.querySelector('.item.show').textContent = 'end';
    console.log('end');
}, 5000);

// // 2초 간격으로 메시지를 보여줌
// let timerId = setInterval(() => alert('째깍'), 2000);
// // 5초 후에 정지
// setTimeout(() => { clearInterval(timerId); alert('정지'); }, 5000);


// setTimeout(slide, 2000); // 일정 시간이 지난 후에 함수를 한 번 실행. 반복하려면 내부에서 자신호출 필요


// 일정 시간마다 자동으로 반복되도록 트리거 설정
// setInterval(slide, 2000);