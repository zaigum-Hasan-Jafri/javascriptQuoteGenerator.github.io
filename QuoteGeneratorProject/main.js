//! variable 
const button = document.querySelector('button');
const author = document.querySelector('.author');
const quote = document.querySelector('.quote');

const getNewQuotes = (data) => {
    let random = Math.floor(Math.random() * data.length);
    quote.innerText = data[random].text;
    author.innerText = data[random].author;
}
const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";
    try {
        let res = await fetch(api);
        let data = await res.json();
        let random = Math.floor(Math.random() * data.length);
        quote.innerText = data[random].text;
        author.innerText = data[random].author;
    }
    catch (error) {
        console.log(error.data.message);
    }
}


//? Event Listner
button.addEventListener('click', getQuotes);