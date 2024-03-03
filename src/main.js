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

  renderInst.toggleLoadingMsg('.loader-section');
  pixabayInst.searchImg(searchTerm).then(responce => {
    renderInst.toggleLoadingMsg('.loader-section');
    renderInst.toggleLoadingMsg('button[type="button"]')
    renderInst.showGalery(responce.data);
  });
});

const loadingImg = document.querySelector('button[type="button"]');
loadingImg.addEventListener(
  'click', () =>
  pixabayInst.searchImg().then(responce => {
    renderInst.showGalery(responce.data);
  })
); 

// function loadMoreImg() {

// }
