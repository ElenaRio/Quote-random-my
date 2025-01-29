import quotes from '../data/quotes.js'
import { generateRandomInt } from '../utils/utils.js'

function getRandomQuote() {
    const randomIndex = generateRandomInt(quotes.length);
    const randomQuote = { ...quotes[randomIndex] };
    return randomQuote;
}

export {
    getRandomQuote
}
