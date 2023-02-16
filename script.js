const quote = document.querySelector('.advice__quote');
const quoteId = document.querySelector('.numeric');
const generateBtn = document.querySelector('.advice__dice-container');




const fetchQuote = () => {
    fetch('https://api.adviceslip.com/advice')
    .then((response) => response.json())
    .then(({slip}) => {
        let {id,advice} = slip;

        quoteId.textContent = id;
        quote.textContent = advice;
        
    });
}

fetchQuote();

generateBtn.addEventListener('click',fetchQuote);


