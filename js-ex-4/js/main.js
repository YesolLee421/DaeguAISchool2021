// 버튼 누르면 이미지 바뀌는 효과

// 이미지 파일경로, title, description 들어가는 배열
var arr = [
    {
        img: 'img/img-1.jpg',
        name: "nature 1",
        txt: 'nature description 1'
    },
    {
        img: 'img/img-2.jpg',
        name: "nature 2",
        txt: 'nature description 2'
    },
    {
        img: 'img/img-3.jpg',
        name: "nature 3",
        txt: 'nature description 3'
    },
    {
        img: 'img/img-4.jpg',
        name: "nature 4",
        txt: 'nature description 4'
    },
    {
        img: 'img/img-5.jpg',
        name: "nature 5",
        txt: 'nature description 5'
    },
    {
        img: 'img/img-6.jpg',
        name: "nature 6",
        txt: 'nature description 6'
    }
]

var i = 0;




// btn 클래스를 가진 모든 객체 가져오기 -> 배열로 html 태그 가져옴
document.querySelectorAll('.btn').forEach (function(element, index){
    element.addEventListener('click', function(e){
        // a태그 링크 속성 '#'에 의해 항상 페이지 상단으로 이동됨
        e.preventDefault();

        // 해당 버튼이 prev인지 next인지 알아내기
        // 1. e.target 내가 클릭한 영역 가져오기
        // console.log(e.target);

        // 2. classList, contain으로 특정 클래스를 포함하고 있는지 따지기
        if(e.target.classList.contains('btn-prev')) {
            if(i === 0) {
                i = arr.length;
            }
            i--;
        }
        if(e.target.classList.contains('btn-next')) {
            if(i === arr.length - 1) {
                i = -1;
            }
            i++;
        }
        document.getElementById('img').src = arr[i].img;
        document.getElementById('name').textContent = arr[i].name;
        document.getElementById('txt').textContent = arr[i].txt;
    });
});


// pythontutor