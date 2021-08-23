// add 버튼 클릭 시 이벤트
var addBtn = document.getElementById('add');

addBtn.addEventListener('click', function() {
    // input 태그 입력된 값은 value로 가져옴
    var value = document.getElementById('txt').value;

    // if문을 사용해서 value값이 있을 때를 구분해줌
    if(value) {
        // console.log(value);
        addListTodo(value);

        // form 태그 사용시에는 reset()있었지만 input은 value에 빈값 재할당
        document.getElementById('txt').value = '';
    }
});


function addListTodo(text) {
    // li 태그 넣을 ul 가져오기
    var list = document.getElementById('todo');
    // li 태그 만들고 text 삽입
    var item = document.createElement('li');
    item.textContent = text;

    // 버튼 감싸는 영역 만들기
    var buttons = document.createElement('div');
    buttons.classList.add('buttons');

    var removeBtn = document.createElement('button');
    removeBtn.classList.add('remove');
    // remove 버튼 생성 시 이벤트도 같이 붙여줌
    removeBtn.addEventListener('click', removeList);

    var completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.addEventListener('click', completeList);

    // 조립하기
    buttons.appendChild(removeBtn);
    buttons.appendChild(completeBtn);
    item.appendChild(buttons);

    console.log(item);

    // list.appendChild(item); // 가장 마지막에 삽입됨

    // 리스트의 최 상단에 아이템 삽입
    // childNodes[]로 리스트의 첫번째 자식 선택-> 그 앞에 삽입
    list.insertBefore(item, list.childNodes[0]);
};


function removeList() {
    // this = 이벤트 발생하는 객체인 removeBtn
    // parentNode 활용해 부모의 부모인 li 태그 선택 
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;

    parent.removeChild(item);
}


function completeList() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;

    // 기존 리스트에서 삭제
    parent.removeChild(item);

    // 삼항연산자로 id값에 따라 target 영역 바꾸기
    var target = (id === 'todo') 
                ? document.getElementById('completed')
                : document.getElementById('todo');

    // 최신순 업데이트
    target.insertBefore(item, target.childNodes[0]);
}