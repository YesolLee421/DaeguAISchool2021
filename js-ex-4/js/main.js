// 버튼 누르면 이미지 바뀌는 효과

// 이미지 파일경로, title, description 들어가는 배열
// var arr = [
//     {
//         img: 'img/img-1.jpg',
//         name: "nature 1",
//         txt: 'nature description 1'
//     },
//     {
//         img: 'img/img-2.jpg',
//         name: "nature 2",
//         txt: 'nature description 2'
//     },
//     {
//         img: 'img/img-3.jpg',
//         name: "nature 3",
//         txt: 'nature description 3'
//     },
//     {
//         img: 'img/img-4.jpg',
//         name: "nature 4",
//         txt: 'nature description 4'
//     },
//     {
//         img: 'img/img-5.jpg',
//         name: "nature 5",
//         txt: 'nature description 5'
//     },
//     {
//         img: 'img/img-6.jpg',
//         name: "nature 6",
//         txt: 'nature description 6'
//     }
// ]

// var i = 0;




// // btn 클래스를 가진 모든 객체 가져오기 -> 배열로 html 태그 가져옴
// document.querySelectorAll('.btn').forEach (function(element, index){
//     element.addEventListener('click', function(e){
//         // a태그 링크 속성 '#'에 의해 항상 페이지 상단으로 이동됨
//         e.preventDefault();

//         // 해당 버튼이 prev인지 next인지 알아내기
//         // 1. e.target 내가 클릭한 영역 가져오기
//         // console.log(e.target);

//         // 2. classList, contain으로 특정 클래스를 포함하고 있는지 따지기
//         if(e.target.classList.contains('btn-prev')) {
//             if(i === 0) {
//                 i = arr.length;
//             }
//             i--;
//         }
//         if(e.target.classList.contains('btn-next')) {
//             if(i === arr.length - 1) {
//                 i = -1;
//             }
//             i++;
//         }
//         document.getElementById('img').src = arr[i].img;
//         document.getElementById('name').textContent = arr[i].name;
//         document.getElementById('txt').textContent = arr[i].txt;
//     });
// });


// pythontutor





// 클래스 (생성자 함수)

// 객체 지향 프로그래밍 (OOP - Object Oriented Programming)

// hero 객체 만들기: 생성자 함수: 첫 글자 대문자로 작성
// 생성자 함수 안 this는 인스턴스 자체를 가리킴
// function Heroes(name, age) {
//     this.name = name;
//     this.age = age;
// };

// // 인스턴스 = new 함수이름(인자)
// var superMan = new Heroes('Super Man', 30);
// var blackWidow = new Heroes('Black Widow', 34);

// console.log(superMan);
// console.log(blackWidow);




// 인스턴스에 메서드 부여 가능
// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;

//     this.fullName = function() {
//         console.log(this.firstName + " " + this.lastName);
//     }
// }

// var lee = new Person('Yesol', 'Lee');
// var heo = new Person('JuYeon', 'Heo');

// heo.fullName();



// 프로토타입

// Person 생성자 함수를 만들 때 Person.prototype 객체가 함께 생성됨
// prototype 객체에 fullName() 메서드 추가함
// Person.prototype = 조상. 조상의 메서드 상속받아 사용 가능
// 개별 인스턴스가 메서드 가지고 있지 않아 메모리 절약할 수 있음
// 메서드 등 모든 객체가 동일한 속성 가지고 있는 부분은 prototype에 적용하면 좋을 듯

// function Person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.fullName = function () {
//     console.log(this.firstName + " " +this.lastName);
// }

// // 인스턴스: 후손
// var lee = new Person('Yesol', 'Lee');
// var heo = new Person('JuYeon', 'Heo');

// heo.fullName();

// console.log(heo);




// __proto__ 인스턴스의 조상 (prototype)탐색하기
// var arr1 = [];
// var str1 = "Hello";
// var func1 = function() {};


// // 생성자로 만든 string은 데이터타입이 문자열이 아닌 객체이다.
// var arr2 = new Array(3); // 배열 생성자 함수 Array(length)
// var str2 = new String("Nice");
// var func2 = new Function('x, y', 'return x * y');
// console.log(arr2); // prototype 알려주는 속성: [[Prototype]]: Array(0), __proto__로 선택가능
// console.dir(func2);



// var person = new Object();
// console.log(person);

// person.name = 'Yesol';
// person.sayHi = function () {
//     console.log('hi');
// };

// console.log(person);
// console.log(person.__proto__ === Object.prototype);

// 모든 자바스크립트 객체는 Object prototype의 자손




// constructor: 인스턴스의 생성자 함수 보여주는 속성
// var str11 = new String('Nice');
// console.log(str11.constructor);
// console.log(str11.constructor === String);
// // String 프로토타입의 생성자함수는 인스턴스와 동일하게 string
// console.log(str11.__proto__.constructor);

// var func11 = new Function();
// console.log(func11.constructor === Function);




// var str21 = new String('AAA');

// // 생성자 함수의 프로토타입 = Functioin.prototype
// console.log(String.__proto__);

// Functioin.prototype의 프로토타입 = Object.prototype



function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var lee = new Person('Yesol', 'Lee');
console.log(lee);

console.log(lee.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(lee.__proto__ === Object.prototype); // false 중간단계 뛰어넘기 불가능

console.log(Person.__proto__ == Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

console.log(lee.constructor === Person);
console.log(Person.prototype.constructor === Person);




// this: this가 포함된 위치에 따라 가리키는 대상 달라짐

// 1. 일반 함수 this -> window (브라우저)
// 2. 중첩함수 this -> window (브라우저): 중첩 함수 안 this는 무조건 window
// 3. 이벤트에서 this -> 이벤트 객체
// 4. 객체의 메서드 안 this -> 객체
// 5. 메서드 안 함수 this -> window (브라우저)


// // 일반함수, 중첩함수 this
// function a () {
//     function b () {
//         console.log(this);
//     }
//     b();
// };
// a();

// // 이벤트의 this
// var btn_prev = document.querySelector('.btn-prev');
// btn_prev.addEventListener('click', function() {
//     console.log(this);
// });


// // 메서드 안 this = 메서드를 가진 객체 가리킴
// var obj = {
//     age: 54,
//     sum: function () {
//         console.log(this.age);
//         function c () {
//             console.log(this);
//         }
//         c(); // 중첩함수라서 this = window
//     }
// };
// obj.sum();





// 중첩함수의 this도 객체를 가리키게 하고 싶을 때: 변수 that에 this 저장
// var obj = {
//     age: 54,
//     sum: function () {
//         console.log(this.age);
//         var that = this;

//         function c () {
//             console.log(that);
//         }
//         c(); // 중첩함수라서 this = window
//     }
// };
// obj.sum();



// 템플릿 리터럴 (Templete Literal): es6에서 새로 등장한 개념
// 백틱(`)사용해서 문자열 만들기.
// var name = 'mango';
// console.log("my name is " + name);
// console.log(`my name is ${name}.`);






// // 이미지 정보 객체 생성자 함수로 만들기
// var arr = [];
// var i = 0;

// function NatureImage(name, img, txt) {
//     this.name = name;
//     this.img = img;
//     this.txt = txt;
// }
// function createNatureImage (name, img, txt) {
//     var fullImg = `img/img-${img}.jpg`;
//     var natureImage = new NatureImage(name, fullImg, txt);
//     arr.push(natureImage);
// };

// createNatureImage('nature 1 name', 1 , 'nature 1 description');
// createNatureImage('nature 2 name', 2 , 'nature 2 description');
// createNatureImage('nature 3 name', 3 , 'nature 3 description');
// createNatureImage('nature 4 name', 4 , 'nature 4 description');
// createNatureImage('nature 5 name', 5 , 'nature 5 description');
// createNatureImage('nature 6 name', 6 , 'nature 6 description');


// console.log(arr);



// // btn 클래스를 가진 모든 객체 가져오기 -> 배열로 html 태그 가져옴
// document.querySelectorAll('.btn').forEach (function(element, index){
//     element.addEventListener('click', function(e){
//         // a태그 링크 속성 '#'에 의해 항상 페이지 상단으로 이동됨
//         e.preventDefault();

//         // 해당 버튼이 prev인지 next인지 알아내기
//         // 1. e.target 내가 클릭한 영역 가져오기
//         // console.log(e.target);

//         // 2. classList, contain으로 특정 클래스를 포함하고 있는지 따지기
//         if(e.target.classList.contains('btn-prev')) {
//             if(i === 0) {
//                 i = arr.length;
//             }
//             i--;
//         }
//         if(e.target.classList.contains('btn-next')) {
//             if(i === arr.length - 1) {
//                 i = -1;
//             }
//             i++;
//         }
//         document.getElementById('img').src = arr[i].img;
//         document.getElementById('name').textContent = arr[i].name;
//         document.getElementById('txt').textContent = arr[i].txt;
//     });
// });