const apiUrl = 'https://api.quotable.io/random';

const quote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuote = document.getElementById('new-quote');
const tweetSection = document.getElementById('tweet');

async function getQuote(url) {
    const response = await fetch(url);
    var data = await response.json();
    quote.innerHTML = data.content;
    author.innerHTML = data.author;
    console.log(data);
}

getQuote(apiUrl);

newQuote.addEventListener('click', ()=>{
    getQuote(apiUrl);
})

tweetSection.addEventListener('click', ()=>{
    tweet(apiUrl);
})


function tweet() {
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "--- by " + author.innerHTML, 'Tweet Window', 'width=600', 'height=300');
}    
