import Render from './js/render-functions.js';
import PixabayAPI from './js/pixabay-api.js';

const renderInst = new Render();
const pixabayInst = new PixabayAPI();

const searchImg = document.querySelector('.form-search');

searchImg.addEventListener('submit', event => {
  event.preventDefault();
  const searchTerm = searchImg.elements['search_string'].value.trim();
  if (!searchTerm) {
    renderInst.showErrorMsg('Empty field!');
    return;
  }

  renderInst.toggleLoadingMsg();
  pixabayInst.searchImg(searchTerm).then(data => {
    renderInst.toggleLoadingMsg();
    renderInst.showGalery(data);
  });
});
