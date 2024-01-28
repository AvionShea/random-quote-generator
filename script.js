const quoteContainer = document.getElementById('quote-container');
const generateQuoteBtn = document.getElementById('generate-quote');

async function getQuote() {
    try {
        const response = await fetch('https://api.quotable.io/random'); //storing the sent request to api
        const data = await response.json(); // retrieving response from api, converting to json and storing it in data
        return [data.content, data.author]; // returns content(quote) and the author

    } catch (error) {
        console.error('Error fetching quote:', error); //console logging error if retrieval isn't possible
    }
}

async function generateQuote() {
    const quote = await getQuote(); //stores the quote/author
    quoteContainer.textContent = `"${quote}"` //displays the information to the user
}

generateQuoteBtn.addEventListener('click', generateQuote); //starts the process of retrieving random quote when button is clicked