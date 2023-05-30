import View from './View.js';

class topView extends View {
  _parentElement = document.querySelector('.top');

  addHandlertop(handler) {
    document.addEventListener('DOMContentLoaded', handler);
  };

  _generateMarkup() {
    return `
      <div class="top__container">
        ${this._data.data.slice(0, 4).map(this._generateMarkupItem).join('')}
      </div>
    `
  }

  _generateMarkupItem(element) {
    return `
      <div class="top__container__item">
        <a href="${element.url}" target="_blank"><img src="${element.images.webp.image_url}" loading="lazy"></a>
        <div class="top__container__info">
          <h2 class="top__container__title">${element.title}</h2>
          <span class="top__container__score">${element.score}</span>
          <p class="top__container__synopsis">${element.synopsis.split(' ').slice(0, 25).join(' ').concat('...')}</p>
        </div>
      </div>
    `;
  }
}

export default new topView();