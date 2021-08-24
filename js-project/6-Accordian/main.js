// 클릭하면 펼쳐지거나 접히는 기능

var btns = document.querySelectorAll('button.accordian');
var panels = document.querySelectorAll('.panel');



btns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // 추가로 기존 것 꺼지게 만들기
        // var current = document.querySelectorAll('.accordian.active');
        // if(current.length>0 && current!==this) {
        //     current[0].classList.remove('active');
        //     current[0].nextElementSibling.style.maxHeight = null;
        // }

        this.classList.toggle('active');

        // 현재 선택된 태그 바로 다음 형제 태그
        var panel = this.nextElementSibling;

        // 현재 태그 높이값 확인 scrollHeight (스크롤바 없는 전체 높이값)
        // console.log(panel.scrollHeight);
        // console.log(panel.style.maxHeight==0); // 그리고 ===0은 false로 나옴
        
        // scrollHeight에 px 안 붙여서 안 됐었음
        panel.style.maxHeight = (panel.style.maxHeight) ? null : panel.scrollHeight + 'px';
    });
});


btns.forEach(function(btn) {
    // btn.addEventListener('click', showOnlyOne);
    btn.addEventListener('click', togglePanel);
});
// 기존 버튼 꺼지게 만들기 + toggle
function showOnlyOne (e) {
    var current = document.querySelectorAll('.accordian.active');
    // 현재 열린 탭 닫기 안되는 문제->현재 탭 remove한다음 toggle가면 켜져서 그럼
    if(current.length>0 && current[0]!==e.target) {
        current[0].classList.remove('active');
        current[0].nextElementSibling.style.maxHeight = null;
        console.log(current[0].classList);
    }
    togglePanel(e);
};
// toggle 기능
function togglePanel (e) {
    e.target.classList.toggle('active');
    var panel = e.target.nextElementSibling;
    panel.style.maxHeight = (panel.style.maxHeight) ? null : panel.scrollHeight + 'px';
};
