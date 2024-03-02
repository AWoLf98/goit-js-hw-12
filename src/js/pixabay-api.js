export default class PixabayAPI {
  #parametrs;

  constructor() {
    this.#parametrs = {
      key: '13766037-6b94ce31e5d6d188a57cfe399',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
    };
  }
  searchImg(q) {
    this.#parametrs['q'] = q;

    return fetch(
      `https://pixabay.com/api/?${new URLSearchParams(this.#parametrs)}`
    )
      .then(responce => {
        if (!responce.ok) {
          throw Error('Network response was is bad');
        }
        return responce.json();
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation: ', error);
        return null;
      }
      );
  }
}
