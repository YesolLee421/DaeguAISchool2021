// 배열 안 단어들로 한 글자씩 생성, 삭제




// 배열 무한루프로 만들기
// var arr = [10, 20, 30];
// var index = 0; // 기준점


// function loop() {
//     var current = index % arr.length; // 0 % 3 = 0
//     console.log(arr[current]);
//     index++;

//     setTimeout(function() {
//         loop()
//     }, 2000);
// }
// loop();




var words = ['엔드게임', '인피니티 워', '에이지 오브 울트론'];
var txtElement = document.getElementById('txt');


function TypeWriter(txtElement, words) {
    this.txtElement = txtElement;
    this.words = words;

    this.txt = "";
    this.wordIndex = 0;
    this.isDeleting = false;

    this.type();
};

// 
TypeWriter.prototype.type = function() {
    
    // 현재 배열 안 데이터 가져오기
    var current = this.wordIndex % this.words.length;
    var fullTxt = this.words[current];
    
    if(this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        // 각 단어에서 필요한 부분만 잘라서 가져오기
        // substring(start, end): start부터 end 직전까지. 인자 1개면 start 이후부터 가져오기
        this.txt = fullTxt.substring(0, this.txt.length + 1); // 글자수보다 1개 더까지 잘라내기
    }
    this.txtElement.textContent = this.txt;

    // 글자가 완성되었을 때, 글자가 모두 삭제되었을 때
    if(!this.isDeleting && this.txt === fullTxt) {
        this.isDeleting = true;

    } else if (this.isDeleting && this.txt === ""){
        this.isDeleting = false;
        this.wordIndex++; // 다음 단어로 넘어가기
    }

    var that = this;


    // 일정 시간마다 자기 자신 호출
    setTimeout(function() {
        console.log(that);

        // 멈추는 지점 추가
        if(that.wordIndex<5) {
            that.type();
        }
        
    }, 500);
};


// 인스턴스 없어도 생성자 함수 호출 가능
new TypeWriter(txtElement, words);