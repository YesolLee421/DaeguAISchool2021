// naver-game-esport 상단 네비 클릭 시 css 클래스 바꾸기



function activeButton (str_btnList, className) {
    var btnList = document.querySelectorAll(str_btnList);
    console.log(btnList);

    for(var i = 0; i < btnList.length; i++) {
        console.log(btnList[i]);
        
        btnList[i].addEventListener("click", function(e) {
            e.preventDefault();
    
            var current = document.querySelectorAll(str_btnList + '.' + className);
    
            console.log(current);
            current[0].className = current[0].className.replace(className, '');
            
            e.target.className += (' ' + className);
        });
    };
}

// esport-nav center 부분 버튼 효과
var str_btnList = '#esport-nav .center li a';
var className = 'on';

var navActive = [
    {
        str_btnList: '#esport-nav .center li a',
        className: 'on'
    },
    {
        str_btnList: '#ent-header .ent-header-center li a',
        className: 'on'
    }
];

navActive.forEach(function(element, index) {
    console.log('str_btnList: ' + element.str_btnList);
    activeButton(element.str_btnList, element.className);
});
