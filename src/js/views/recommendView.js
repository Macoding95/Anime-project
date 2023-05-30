import View from './View.js';

class recommendView extends View {
  _parentElement = document.querySelector('.results');

  _generateMarkup() {
    return `
      <div class="results__container">
        ${this._data.map(this._generateMarkupItem).join('')}
      </div>
    `;
  }

  _generateMarkupItem(element) {
    return `
      <div class="results__container__item">
        <a href="${element.entry[0].url}" target="_blank"><img src="${element.entry[0].images.webp.image_url}" loading="lazy"></a>
        <p class="results__container__title">${element.entry[0].title}</p>
      </div>
    `
  };
}

export default new recommendView();