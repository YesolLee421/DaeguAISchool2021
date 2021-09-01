// 실시간 급상승 데이터 삽입
var popularData = [
    '그릭요거트', '답례품', '동양', '추석용돈봉투', '핑거스트랩',
    '캔들', '떡','비건','도라지정과', '그릭요거트', 
    '답례품', '동양', '추석용돈봉투', '핑거스트랩', '캔들', 
    '떡','비건','도라지정과', '복숭아', '지갑'
];
// find()가 생각대로 안 됨->$List[i]에서 find하니 잘 안되는듯. 그래서 find먼저 하고 인덱스 선택함
function setPopularData(popularData) {
    var $popularList = $('.popular-body ul li a');

    for (i in popularData) {
        $popularList.find('.rank')[i].textContent = parseInt(i)+1;
        $popularList.find('.keyword')[i].textContent = `${popularData[i]}`;
    }
}


// 실시간 급상승 버튼 보이기
var $popularSlider = $('.popular-slider');
var $popularComponent = $('.popular-component');

var index = 0;
function changePopularSliderText () {
    if(index>= popularData.length) {
        index=0;
    }
    $popularSlider[0].textContent = `${index+1} ${popularData[index]}`
    index++;

    setTimeout(() => {
        changePopularSliderText();
    }, 3000);
}
changePopularSliderText ();

// 마우스 올리면 내용 보이게 하기
$popularSlider.on({
    mouseenter: function() {
        setPopularData(popularData);
        $popularComponent.show();
    }
});
$popularComponent.mouseleave(function(){
    $popularComponent.hide();
});


// 오늘의 작품 하트버튼 toggleClass()로 만들기
var $btnLike = $('.btn-like');

$btnLike.click(function() {
    $(this).toggleClass('checked');
});


// 배너 이미지 정보 개수만큼 carousel 만들고 정보 입력
function setBanner(number) {
    var bannerList = [];
    for (var i=1; i<=number; i++){
        bannerList.push(`../idus/img/banner/product${i}.jpg`);
    }
    var carousel = document.querySelector('#main-banner .owl-carousel');
    for (i in bannerList) {
        var item = document.createElement('div');
        item.classList.add('item');
        item.style.backgroundImage = `url(${bannerList[i]})`;
        carousel.appendChild(item);
    }
}
// 현재 이미지 3개 넣어둠
setBanner(3);

// owl2로 배너 이미지 바꾸기: item 5개
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items: 1,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true
})





