// DOM 문서 객체 모델(The Document Object Model)
// document, element, attribute


// 자바스크립트 Selector: html 접근방법

// var header = document.getElementsByTagName("header"); 
// var serviceSection = document.getElementById('services'); 
// var container = document.getElementsByClassName("container");

// getElements~ collection이라는 유사배열 형태로 반환함. 배열 일부 메서드만 활용 가능
// console.log(header); // 태그명 -> 배열
// console.log(serviceSection); // id -> 하나의 객체
// console.log(container[2]); // 클래스명 -> 배열


// var serviceContainer = document.getElementById('services').getElementsByClassName('container');
// console.log(serviceContainer[0]);



// querySelector: css 선택자와 동일한 방식. 가장 먼저 나오는 태그, 클래스 객체 하나만 반환
// 속도는 이전 방식이 조금 더 빠르지만 편의성 좋음

// var header = document.querySelector('header');
// var services = document.querySelector('#services');
// var container = document.querySelector('.container');

// // console.log(header);
// // console.log(services);
// // console.log(container);

// var serviceContainer = document.querySelector('#services .container');
// console.log(serviceContainer);

// querySelectorAll : 해당되는 태그, 클래스 객체 전부 collection으로 반환



// querySelectorAll: NodeList() 유사배열 형태로 해당되는 객체 전부 반환
// var containers = document.querySelectorAll('.container');
// // console.log(containers);

// // 일괄 디자인 적용 가능
// for (var i = 0; i < containers.length; i++) {
//     // console.log(containers[i]);
//     containers[i].style.backgroundColor = 'blue';
// }




// 정보, 내부 content 선택, 변경과 관련된 property
// var header = document.querySelector('.masthead');
// // console.log(header.innerHTML); // header 안 내용물을 문자열 형태로 반환
// // console.log(header.outerHTML); // 자기 자신 포함한 내용물 문자열 형태 반환

// // console.log(typeof header.innerHTML); // string
// // console.log(typeof header.outerHTML); // string

// // 새로운 태그 삽입, 수정 등 전부 가능함
// header.innerHTML = "<h1>Hello World</h1>";



// textContent 태그의 글자에 접근 및 수정 가능: html에 작성된 텍스트 그대로 가져옴
// var heading = document.querySelector('.masthead-heading');
// // console.log(heading.textContent);

// // heading.textContent = "Hello";

// // heading.textContent = "<em>Hello</em> World"; // 태그도 글자로 인식
// heading.innerHTML = "<em>Hello</em> World"; // html 태그 기능 인식



// innerText 글자 정보 접근: css 속성 적용된 상태로 가져옴
// var heading = document.querySelector('.masthead-heading');
// // console.log(heading.innerText);
// // heading.innerText = "<em>Hi there</em>";

// console.log(heading.innerText); // IT'S NICE TO MEET YOU
// console.log(heading.textContent); // It's Nice To Meet You



// 태그 생성 후 html 문서에 삽입하기
// 1. 태그 생성 createElement()
// var h3Test = document.createElement('h3');
// h3Test.textContent = 'Hello world';

// console.log(h3Test);

// 2. html 문서에 삽입하기 부모.appendChild(자식): 부모 태그 안 마지막에 삽입됨
// var masthead = document.querySelector('.masthead');
// masthead.appendChild(h3Test);


// 3. 삽입 위치 변경
// var mastheadContainer = document.querySelector('.masthead .container');
// mastheadContainer.appendChild(h3Test);

// var mastheading = document.querySelector('.masthead-heading');
// mastheading.appendChild(h3Test);


// 4. appendChild() 사용 시 주의점
// 같은 부모를 가진 형제 태그들 안에 appendChild() 사용 시 가장 마지막 형제태그에만 적용됨
// var subHeading = document.querySelector('.masthead-subheading');
// var heading = document.querySelector('.masthead-heading');
// var btn = document.querySelector('.masthead .btn');

// subHeading.appendChild(h3Test);
// heading.appendChild(h3Test);
// btn.appendChild(h3Test); // btn 안에만 태그 삽입됨


// 5. 내가 원하는 위치에 태그 삽입 insertAdjacentHTML()
// h3Test.insertAdjacentHTML(position, text);
// position: 'beforebegin' 열림태그 전, 'afterbegin' 열림태그 후, 내용물 전, 
// 'beforeend' 내용물 후, 닫힘태그 전, 'afterend' 닫힘태그 후

// var heading = document.querySelector('.masthead-heading');
// var txt = "<h3>!!!!!!!!!!</h3>";

// heading.insertAdjacentHTML('beforeend', txt);




// html 태그 삭제하기: removeChild(), remove()

// 1. removeChild(): 부모 기준으로 삭제
// var headContainer = document.querySelector('.masthead .container'); // 부모 지정
// var heading = document.querySelector('.masthead-heading'); // 삭제할 태그

// // headContainer.removeChild(heading);

// // parentElement = 해당 태그의 바로 위 부모태그 선택
// // heading.parentElement.removeChild(heading);



// // 2. remove()
// heading.remove();



// 여러 자식 요소들 중 첫번째, 마지막 자식 선택: 부모태그.firstElementChild
// var headContainer = document.querySelector('.masthead .container'); // 부모 지정

// console.log(headContainer.firstElementChild);
// console.log(headContainer.lastElementChild);




// css 제어 property
var heading = document.querySelector('.masthead-heading');

// 1. style 뒤에 css 속성값 이름 camelCase로 작성
// html style 속성으로 바로 들어가서 cascading으로 인해 가장 우선 적용됨

// heading.style.color = 'red';
// heading.style.backgroundColor = "pink";
// heading.style.fontSize = '25px';


// 2. style.cssText: 오타에 취약함
// html style 속성으로 바로 들어가서 cascading으로 인해 가장 우선 적용됨
// heading.style.cssText = "color: red; background-color: blue; font-size: 25px";


// 3. setAttribute() 메서드 사용
// heading.setAttribute("id", "test");
// heading.setAttribute("style", "color: red; background-color: orange; font-size: 25px");

// heading.setAttribute("id", "heading-test");
// document.querySelector('#heading-test').style.backgroundColor = "pink";



// 자바스크립트로 css 클래스 접근: className, classList

// className: 클래스 전부를 문자열로 가져옴
// var heading = document.querySelector('.masthead-heading');
// var headingClass = heading.className;
// var headingArr = headingClass.split(' ');

// console.log(headingClass); // masthead-heading text-uppercase 
// console.log(headingArr[1]);

// className으로 새로운 클래스 추가: 기존 클래스에 덮어씌워짐
// heading.className += ' test';


// classList: split 과정 필요 없음
// var heading = document.querySelector('.masthead-heading');
// var headingClass = heading.classList;

// console.log(headingClass); // DOMTokenList라는 유사배열 형태로 가져옴

// // 기존 클래스 유지하면서 새로운 클래스 추가, 삭제
// heading.classList.add('test1', 'test2');
// heading.classList.remove(headingClass[1]);

// // toggle(): 추가, 삭제 가능. 인수로 준 클래스 있으면 삭제, 없으면 생성
// heading.classList.toggle('test1');

// contains(): 인수가 포함되어 있으면 true, 없으면 false
// console.log(heading.classList.contains('text-uppercase'));




// eventListener
// main.js:219 Uncaught TypeError: Cannot read property 'addEventListener' of null
// at main.js:219 이런 에러 많이 발생하는데 보통 querySelector 입력실수해서 객체 가져오지 못했을 때

// var heading = document.querySelector('.masthead-heading');

// heading.addEventListener('click', function(){
//     console.log('click');
// });
// 이벤트 종류: 'click', 'submit', 'keyup'(키보드입력) 등: javascript 이벤트 타입 검색
// https://www.w3schools.com/jsref/dom_obj_event.asp



var heading = document.querySelector('.masthead-heading');

function test() {
    console.log('click');
};
// // callback 함수 아닐 땐 호출하지 않고 함수명만 작성
// heading.addEventListener('click', test);
// heading.removeEventListener('click', test);

// 콜백함수가 익명함수 아닐 땐
// 원시타입과 참조타입(배열, 객체, 함수) 차이
// 참조타입 변수는 값이 저장된 장소의 주소값만 가지고 있음
heading.addEventListener('click', function (){
    console.log('click');
});
// // remove 적용 안 됨. 값은 같아보이지만 함수 저장된 주소값이 다름
// // 따라서 removeEvent 하려면 함수를 따로 만들어 Listener 인수로 전달해야 함
heading.removeEventListener('click', function (){
    console.log('click');
});


// var obj1 = {name: 'lee'};
// var obj2 = {name: 'lee'};
// var obj3 = obj1;

// console.log(obj1 === obj2); // false: 값은 같으나 주소값 다름
// console.log(obj1 === obj3); // true: 같은 주소값 저장하고 있음




// preventDefault(): 태그의 기본 기능 삭제
