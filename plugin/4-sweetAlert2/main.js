// 기본 작성법 Swal() 생성자 함수로 만들어진 객체
// Swal.fire({
//   title: 'Error!',
//   text: 'Do you want to continue',
//   icon: 'error',
//   confirmButtonText: 'Cool'
// })

// 문자열 방식으로 html 태그 삽입 가능
// 수많은 요소들을 display:none을 이용해 조절함
// title은 html 되는데 text는 안됨. 대신 html에 삽입 가능
Swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!',
  footer: '<a href="">Why do I have this issue?</a>',

  html:
  'You can use <b>bold text</b>, ' +
  '<a href="//sweetalert2.github.io">links</a> ' +
  'and other HTML tags',

  // close=오른쪽 상단 x / cancel=취소버튼
  showCloseButton: true,
  showCancelButton: true,
  showDenyButton: true,
  focusConfirm: false,
  confirmButtonText: 'Great',
  cancelButtonText: '취소',
  denyButtonText: '싫어',

  // 이미지 넣기
  // imageUrl: 'https://placeholder.pics/svg/300x1500',
  // imageHeight: 1500,
  // imageAlt: 'A tall image'

// then 이전 코드에서 선택한 결과물 받아서 그 다음 처리하는 콜백함수
// then((result) => {} 최신 js 화살표함수
}).then(function(result) {
  console.log(result);

  if(result.isConfirmed) {
    Swal.fire('thanks')
    console.log('confirmed');
  }else if(result.isDenied) {
    console.log('denied');
  } else if(result.isDismissed) {
    console.log('dismissed');
  }
})


// 일정 시간 지나면 자동으로 사라지는 알림
// Popup window position, can be 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
// Swal.fire({
//   // position: 'bottom-start',
//   icon: 'success',
//   title: '위치 변경',
//   // showConfirmButton: false,
//   // timer: 1500

//   showCancelButton: true,
//   // 버튼 색상 변경
//   confirmButtonColor: '#3085d6',
//   cancelButtonColor: '#d33',
// })




// mixin() 으로 css class 사용하기
// Swal.mixin({
//   customClass: {
//     confirmButton: 'btn-success-1',
//     cancelButton: 'btn-danger-1'
//   },
//   buttonsStyling: false // 플러그인의 css 스타일 제거
// }).fire({
//   title: 'Title',
//   text: 'text',

//   showCancelButton: true
// })


// Swal.fire({
//   title: 'Custom width, padding, background.',
//   width: 600,
//   padding: '3em',
//   icon: 'warning'
//   // background: '#fff url(/images/trees.png)',
//   // // backdrop: 오버레이 디자인
//   // backdrop: `
//   //   rgba(0,0,123,0.4)
//   //   url("/images/nyan-cat.gif")
//   //   left top
//   //   no-repeat
//   // `
// })



// await js 비동기방식으로 처리할 때 사용하는 키워드
// 서버에 데이터 보내야 할 때 사용
// (async function() {})();
// (async function() {
//   var result = await Swal.fire({
//     title: 'get email',
//     input: 'email',
//     inputLabel: 'your email address',
//     inputPlaceholder: 'enter your email address'
//   })

//   if(result.value) {
//     Swal.fire(`${result.value}`);
//   }

// })();


// Swal.fire({
//   title: 'get email',
//   input: 'email',
//   inputLabel: 'your email address',
//   inputPlaceholder: 'enter your email address'
// }).then(function(result) {
//   console.log(result);
//   if(result.value) {
//     Swal.fire(`${result.value}`);
//   }
// })



// password 받기
// Swal.fire({
//   title: 'Enter your password',
//   input: 'password',
//   inputLabel: 'Password',
//   inputPlaceholder: 'Enter your password',
//   // input 태그의 다양한 속성값 객체로 받기
//   inputAttributes: {
//     maxlength: 10,
//   }
// })


// textarea
// Swal.fire({
//   input: 'textarea',
//   inputLabel: 'Message',
//   inputPlaceholder: 'Type your message here...',
//   inputAttributes: {
//     'aria-label': 'Type your message here'
//   },
//   showCancelButton: true
// })


// select 지정하기
// Swal.fire({
//   title: 'Select field validation',
//   input: 'select',
//   // option 안에서 대분류 가능
//   // value: 표시되는 값
//   inputOptions: {
//     'apples': 'apple',
//     'oranges': 'oranges',
//     'icecream': 'Ice cream'
//   },
//   inputPlaceholder: 'Select a fruit',
//   showCancelButton: true,

//   // 선택, 취소 버튼 순서 바꾸기
//   // reverseButtons: true,

//   // 오버레이 클릭 제어
//   allowOutsideClick: false,


//   // inputValidator: (value) => {
//   //   return new Promise((resolve) => {
//   //     if (value === 'oranges') {
//   //       resolve()
//   //     } else {
//   //       resolve('You need to select oranges :)')
//   //     }
//   //   })
//   // }
// })


// input에서 파일 받기
// Swal.fire({
//   title: 'Select image',
//   input: 'file',
//   inputAttributes: {
//     'accept': 'image/*',
//     'aria-label': 'Upload your profile picture'
//   }
// })