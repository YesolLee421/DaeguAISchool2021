// // 함수 function

// 함수 선언
// function sum(a, b) {
//     console.log(a + b);
// }

// // 함수 호출
// sum(2, 10);
// sum(10, 30);


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

// console.log(a);

// var a;
// a = "나는 a";

// console.log(a);


// console.log(b); // cannot access before inittialization 에러발생

// let b;

// console.log(b);

// b = "나는 b";

// console.log(b);




// // 함수 호이스팅

// func1();

// function func1 () {
//     console.log("func1 is a function.");
// }

// func1();

// func2(); // 함수 선언 전 호출하면 not a function 에러발생

// var func2 = function() {
//     console.log("func2 is a function.");
// }

// func2();




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




// 반복문

// // while: 조건이 참이면 해당 행동 실행. 
// var num = 1;

// while (num < 10) {
//     console.log(2*num);
//     num++;
// }

// // do ~ while: 최초 한 번은 실행시킨 후 그다음에 조건 파악
// var i = 12;

// do {
//     console.log(i);
//     i++;
// } while (i <10)



// for
// 고정값과 일정한 규칙을 갖고 있는 가변값
// 가변값 시작점; 조건; 규칙
// for (var i = 1; i < 10; i++) {
//     console.log(2 * i);
// }




// 중첩반복문

// break (즉시 종료), continue (아래 코드 건너뛰고 진행)


// var arr = ['banana', 'apple', 'watermelon'];

// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// // 배열 길이 property arr.length



// // 배열 반복문 for ~ in
// for (var i in arr) {
//     console.log(i); // 배열 인덱스
//     console.log(arr[i]);
// }



// 배열이 가지고 있는 내장 메소드 forEach
// Array가 가지고 있는 property, method 찾아보기
// forEach ( f(배열데이터, 배열 인덱스) {})
// callback 함수: 익명함수, 콜백함수: 특정 조건이 만족되면 호출되는 함수. 함수 이름 없음

// arr.forEach( function(element, index) {
//     console.log(element);
//     console.log(index);
// })




// arr.map(): forEach와 유사하지만 return 할 수 있음
// arr.map(function(element, index) {
//     console.log(element);
//     console.log(index);
// });


// 배열 map의 return은 배열로 나옴
// var result = arr.map(function(element, index) {
//     return element + " " + "10";
// });

// console.log(result);





// 객체에서 사용 가능한 반복문
// var student =  {
//     name: "Yesol",
//     age: 28,
//     skills: ["javascript", "HTML", "css"],

//     sum: function (num1, num2) {
//         console.log(num1 + num2);
//     }
// }


// for ~ in으로 객체 안 탐색
// student.name, studend['name'] 두 가지 방법

// for (var i in student) {
//     console.log(student[i]);
// }




// 배열: forEach(), map(), length




// 문자열 String: length, trim()

// length
// var txtLenght = "Hello World   ";

// console.log(txtLenght.length); // 공백까지 글자수로 인식함

// // 순수 텍스트만 가져오기 trim() 왜 안되지? 검색해보니 글자의 양 끝 공백만 제거함
// console.log(txtLenght.trim());



// 문자 추출
// charAt(index) index번째 글자 1개 가져오기
// var str = "Nice to meet you";

// console.log(str.charAt(0));
// console.log(str.charAt(str.length-1));


// slice(start, end) start번째부터 end 전까지 가져오기. 공백 포함
// console.log(str.slice(2,6)); 
// console.log(str.slice(2));


// split()  일정한 규칙으로 문자를 잘라서 배열에 담아 리턴
// console.log(str.split(" "));
// var result = str.split(" ");
// console.log(result);



// replace(original, new) 변경하고 싶은 단어 original을 new로 바꾸기
// console.log(str.replace('Nice', 'Happy'));


// indexOf() 특정 단어가 가장 먼저 나오는 위치값 반환. 대소문자 구분. 단어 없으면 -1 반환
// console.log(str.indexOf('to'));


// 단어 전부 대문자, 소문자화
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());



// var search = prompt('검색어 입력');

// if(search.toLowerCase() === "apple") {
//     console.log("사과가 맞습니다.");
// } else {
//     console.log("false")
// }




// 배열의 property, method

// var arr = ['apple', 'banana', 'watermelon'];
// console.log(arr);
// length 배열 안 데이터 개수 반환



// push: 배열의 마지막에 데이터 추가
// arr.push('grape', 'orange');
// console.log(arr);


// unshift() 배열의 처음에 데이터 추가
// arr.unshift('tomate');
// console.log(arr);


// pop() 배열 마지막부터 하나씩 값 삭제하고 삭제한 값 반환
// console.log(arr.pop());
// console.log(arr);


// shift() 배열 앞에서부터 하나씩 값 삭제하고 삭제한 값 반환
// console.log(arr.shift());
// console.log(arr);




// var arr1 = ['apple', 'banana', 'watermelon'];
// var arr2 = ['laptop', 'mic', 'keyboard'];

// // join 배열의 모든 값 차례대로 가져와서 특정 규칙에 따라 한 문장으로 결합
// var str1 = arr1.join(', ');
// console.log(str1);



// // 기준배열.concat(합칠배열): 배열 서로 합치기
// var merge = arr1.concat(arr2);
// console.log(merge);








// 버튼을 클릭하면 body의 배경색 바뀌고 색상코드 보여주기
var hex = document.getElementById('hex');
var btn = document.getElementById('btn');

console.log(btn);


// 콜백함수 파라미터 없으면 괄호없이 이름만 넣어주기
btn.addEventListener('click', createColor);


// 헥사 코드 조합: #로 시작, 숫자는 0~9, 알파벳은 a ~ f, #제외 총 6자리 조합


function createColor() {
    var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    var color = '#'; 

    for (var i = 0; i < 6; i++) {
        // 1에서부터 6까지 모든 주사위 숫자 가져오기 Math.floor(Math.random() * 6) + 1
        var random = Math.floor(Math.random() * arr.length);
        color += arr[random];
    }
    hex.textContent = color;
    document.body.style.backgroundColor = color;
}