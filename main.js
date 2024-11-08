const quotes = [
    {
        author: 'Albert Einstein',
        quote: 'Two things are infinite: the universe and human stupidity; and I am not sure about the universe.'
    },
    {
        author: 'Frank Zappa',
        quote: 'So many books, so little time.'
    },
    {
        author: 'William W. Purkey',
        quote: "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth."
    },
    {
        author: 'Mae West',
        quote: 'You only live once, but if you do it right, once is enough.'
    },
    {
        author: 'Mahatma Gandhi',
        quote: 'Be the change that you wish to see in the world.'
    }
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomIndex].quote;
    const authorText = quotes[randomIndex].author;

    document.querySelector('#quoteOutput').textContent = `"${quoteText}"`;
    document.querySelector('#authorOutput').textContent = `— ${authorText}`;
}
