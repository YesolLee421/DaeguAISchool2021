// // 함수 function

// 함수 선언
function sum(a, b) {
    console.log(a + b);
}

// 함수 호출
sum(2, 10);
sum(10, 30);


// // parameter (매개변수): a, b
// // argument (인수): 함수 호출 시 전달하는 값



// function fullName (firstName, lastName) {
//     console.log(firstName + " " + lastName);
// }
// // fullName("Yesol", "Lee");


// function makeArea(width, height) {
//     let result = width * height;
//     console.log(result);
// }
// // makeArea(10);

// // 자바스크립트 모든 데이터타입은 함수의 인수가 될 수 있다.
// function printLog(a) {
//     console.log(a);
// }
// function a () { 
//     return 100;
// }
// // printLog(null);
// // printLog(a);
// // printLog(a());




// // 배열: 자바스크립트 모든 데이터타입 삽입 가능




// // if 조건문: 가장 먼저 나오는 참만 실행되고 즉시 종료
// // let aaa = 10, bbb = 5;

// // if (aaa > bbb) {
// //     console.log("aaa는 bbb보다 크다");
// // } else if (aaa < bbb) {
// //     console.log("aaa는 bbb보다 작다");
// // } else {
// //     console.log("aaa와 bbb는 같다.");
// // }



// // // 중첩 if문
// // if(aaa!==bbb) {
// //     if(aaa > bbb) {
// //         console.log("aaa가 더 크다")
// //     } else {
// //         console.log("aaa가 더 작다")
// //     }
// // } else {
// //     console.log("aaa와 bbb가 같다")
// // }



// // 거짓이 되는 상황
// // false가 되는 상황: ""(빈 문자열), 0, null, undefined

// // if("") {
// //     console.log("True");
// // } else {
// //     console.log("False");
// // }


// // 삼항 연산자
// // (조건) ?참이면 실행 :거짓이면 실행
// const age = 15;

// if(age >= 18) {
//     console.log("adult");
// } else {
//     console.log("kids");
// }

// let result = (age>=18) ? "adult" : "kids";
// console.log("result = " + result);



// 조건문 응용
// prompt: 브라우저 환경에서 사용자에게서 정보 입력받기 위한 팝업창. 값은 문자로 저장됨
// alert: 브라우저 환경에서 정보 전달만을 위한 팝업창 띄움
// parseInt(): string to int
// const userId = prompt("아이디를 입력해주세요.");
// const userPw = prompt("비밀번호를 입력해주세요");

// console.log(userId);
// console.log(userPw);




// 전역변수: 파일 모든 범위 안에서 적용되는 변수
// 지역변수: 특정 범위에서만 적용되는 변수


// 변수 생성 let, const 사용 시 전역변수, 지역변수 구분 기준점 달라짐


// scope 스코프: 변수가 적용되는 범위




// 호이스팅 (Hoisting, 무언가를 들어올리다 / 끌어올리다): var, function 등의 객체 선언문보다 호출을 먼저해도 참조가 되는 현상

// 변수 생성 과정: 선언 -> 초기화 (메모리할당):undefined -> 할당: undefined에 실제값 할당
// var 변수는 선언 + 초기화가 한 번에 이루어지기 때문에 변수에 접근 가능하다 (값은 할당 전이라 undefined)
// let 변수는 선언 / 초기화 분리되어 진행됨. 초기화 이전 변수 접근하면 아직 변수를 위한 메모리 공간 확보 안 된 상태라 참조에러 발생


// 변수 호이스팅

console.log(a);

var a;
a = "나는 a";

console.log(a);


console.log(b); // cannot access before inittialization 에러발생

let b;

console.log(b);

b = "나는 b";

console.log(b);




// 함수 호이스팅

func1();

function func1 () {
    console.log("func1 is a function.");
}

func1();

func2(); // 함수 선언 전 호출하면 not a function 에러발생

var func2 = function() {
    console.log("func2 is a function.");
}

func2();




// 자주 사용되는 객체와 메소드

// Math 객체
// console.log(Math); // mdn javascript math로 검색해서 메소드 알아보기


// // Math.abs() 절댓값 반환 메소드
// const num1 = Math.abs(-3);
// console.log(num1);

// // Math.ceil() 무조건 올림하는 메소드
// const num2 = Math.ceil(0.43);
// console.log(num2);

// // Math.floor() 무조건 내림하는 메소드
// const num3 = Math.floor(10.9);
// console.log(num3);

// // Math.random() 0에서 1 사이 랜덤한 숫자 뽑아내는 함수
// const num4 = Math.random();
// console.log(num4);





// parseInt() 정수형으로 변환(소수점 아래 버림), parseFloat() 실수형으로 변환


