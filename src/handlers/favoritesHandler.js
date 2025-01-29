import {favoriteBtn, removeFavoriteQuote} from '../../index.js'


function toggleFavoriteCard(quote, favoriteContainer) {
  quote.isFavorite 
  ? showFavoriteCard(quote, favoriteContainer)
  : hideFavoriteCard(quote.id)
}

function showFavoriteBtn(isFavorite) {
  const btn = favoriteBtn;
  if(btn.style.display = 'none') btn.style.display = 'inline-block';
  btn.classList.toggle('fa', isFavorite);
  btn.classList.toggle('far', !isFavorite);
}

function hideFavoriteBtn() {
  favoriteBtn.style.display = 'none';
}

function showFavoriteCard(quote, favoriteContainer) {
  const { id, text, author} = quote;
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.quoteId = id;
  favoriteCard.innerHTML = `
  <div class = "favorite-card-content">
    <p>${text}</p>
    <p class ="author">${author}</p>
    </div>
    <button class ="btn btn-danger"><i class = "fas fa-trash"></i> Remove from favorite</button>
    `;
  favoriteContainer.appendChild(favoriteCard);

  const removeButton = favoriteCard.querySelector('.btn-danger');
  removeButton.addEventListener('click', () => 
    removeFavoriteQuote(id))
}


function hideFavoriteCard(id) {
  const favoriteCards = document.querySelector(`.favorite-card[data-quote-id = "${id}"]`);
  if (favoriteCards) {
    favoriteCards.remove();
  }
}

export {
  toggleFavoriteCard,
  hideFavoriteBtn, 
  showFavoriteCard,
  showFavoriteBtn,
  hideFavoriteCard

}