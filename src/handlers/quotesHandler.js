function displayQuote(quote) {
    const { id, text, author, isFavorite } = quote;
    const authorText = document.getElementById('author');
    const quoteElement = document.getElementById('quote');
    const quoteTextElement = document.getElementById('quote-text')
    quoteTextElement.textContent = `"${text}"`;
    authorText.textContent = author;
    quoteElement.dataset.currenQuoteId = id
  
}


export {   
   displayQuote
}