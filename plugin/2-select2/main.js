// // data 만들기
// var data = [
//   {id: 0, text: 'apple'},
//   {id: 1, text: 'banana'},
//   {id: 2, text: 'grape'},
// ];


// // 실제론 option아닌 span li
// $('.single-select').select2({
//   width: 'resolve',
//   theme: 'classic',
//   // 언어 바꾸기
//   language: {
//     noResults: function() {
//       return '검색 내역이 없습니다.';
//     }
//   },
//   // 검색창 비활성화
//   minimumResultsForSearch: -1,
//   // html style 조정
//   width: '400px',
//   // data 넣기
//   data: data,
//   // option 디자인 커스텀
//   templateResult: function(fruit) { // 매개변수=선택된 객체
    
//     var $fruit = $(`<img src = https://via.placeholder.com/10><span>${fruit.text}<span>`);
//     return $fruit;
//   }
// });



// // // multi-select : 태그 기능 제작 가능
// $('.multiple-select').select2({
//   width: '50%',
//   placeholder:'select your favorite vegitable.', 
//   allowClear: true,

//   // 태그 분리 기능
//   tags: true,
//   tokenSeperators: [',', ' '],
  

// });





// // 버튼 클릭해서 on/off
// // prop() jQuery 명령어로 html속성 접근용. attr()도 비슷함
// $('.on').click(function() {
//   $('.single-select').prop("disabled", true);
// });

// $('.off').click(function() {
//   $('.single-select').prop("disabled", false);
// });




// 메소드 사용해보기
var $select = $('.single-select').select2();

$('.on').click(function() {
  $select.select2('open');
});

$('.off').click(function() {
  $select.select2('close');
});
// 1회만 적용하고 싶을 때 인수로 'destroy'전달

$('.set').click(function() {
  $select.val('grape').trigger('change'); // val()의 값으로 바꾸기
});
// select2와 관련된 디자인 전부 사라짐
$('.destroy').click(function() {
  $select.select2('destroy');
});
// 디자인 다시 복구
$('.re').click(function() {
  $select.select2();
});


// multiple에 메서드 적용
var $multiple = $('.multiple-select').select2();

// 복수의 value 배열로 전달
$('.set2').click(function() {
  $multiple.val(['tomato', 'carrot']).trigger('change');
});
// 모든 값 지우기 = value에 null 전달
$('.clear').click(function() {
  $multiple.val(null).trigger('change');
});



