import { displayQuote} from './src/handlers/quotesHandler.js'
import { toggleFavoriteCard, hideFavoriteCard, hideFavoriteBtn, showFavoriteCard, showFavoriteBtn } from './src/handlers/favoritesHandler.js'
import { localStorageGetItem, localStorageSetItem } from './src/utils/localStorage.js'
import { getRandomQuote } from './src/handlers/randomQuotes.js'
import {removeObjectFromArrayById} from './src/utils/array.js'

const favoriteContainer = document.getElementById('favorites-container');
const favoriteBtn = document.getElementById('make-favorite-btn');
const randomQuoteBtn = document.getElementById('random-quote-btn');

favoriteBtn.addEventListener('click', () => toggleCurrentQuote())

hideFavoriteBtn()

let currentQuote = null;
const favoriteQuote = [];
const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVORITE_QUOTE_KEY = 'favoriteQuote';

function removeFavoriteQuote (id) {
  if(id === currentQuote.id){
    toggleCurrentQuote()
  } else{
 removeObjectFromArrayById(favoriteQuote, id)
   
    hideFavoriteCard(id);
    localStorageSetItem(FAVORITE_QUOTE_KEY, favoriteQuote)
  }
}

function toggleCurrentQuote(){
  currentQuote.isFavorite = !currentQuote.isFavorite;
 showFavoriteBtn(currentQuote.isFavorite)
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote)

  if (currentQuote.isFavorite) {
    favoriteQuote.push({ ...currentQuote })
  } else {
    removeObjectFromArrayById(favoriteQuote, currentQuote.id);
  }
  toggleFavoriteCard(currentQuote, favoriteContainer);
  localStorageSetItem(FAVORITE_QUOTE_KEY, favoriteQuote)
}

function setCarren(quote) {
    currentQuote = { ...quote };
    currentQuote.isFavorite = !!favoriteQuote.find((quote) => quote.id === currentQuote.id)

    displayQuote(currentQuote)
    showFavoriteBtn(currentQuote.isFavorite)
    localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote)
}

function init() {
  const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTE_KEY)
  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      favoriteQuote.push(quote);
      showFavoriteCard(quote, favoriteContainer);
    });
  }
  const currentQuoteFromStore = localStorageGetItem(CURRENT_QUOTE_KEY);

  if (currentQuoteFromStore) {
    setCarren(currentQuoteFromStore)
  }
}
window.addEventListener('load', init);

randomQuoteBtn.addEventListener('click',() => {setCarren(getRandomQuote())})


export {
  favoriteBtn,
  toggleCurrentQuote, 
  removeFavoriteQuote
}



