// 랜덤한 인용문구와 작가 표시 기능

var arr = [
    {
        quote: '아이들은 누구나 예술가이다.',
        author: '피카소'
    },
    {
        quote: '내면의 목소리는 들리지 않게 된다.',
        author: '고흐'
    },
    {
        quote: '완벽을 두려워하지 말라',
        author: '달리'
    },
    {
        quote: '영감이 오는 것을 기다릴 수만은 없다.',
        author: '고흐'
    },
    {
        quote: '떡볶이는 언제 먹어도 맛있다.',
        author: '예솔'
    }
];

var btn = document.getElementById('btn');
var quote = document.getElementById('quote');
var author = document.getElementById('author');

console.log(quote);

btn.addEventListener('click', function() {
    var random = Math.floor(Math.random() * arr.length);

    quote.textContent = arr[random].quote;
    author.textContent = arr[random].author;
});