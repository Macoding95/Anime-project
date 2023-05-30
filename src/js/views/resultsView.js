import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.search__results');

  _generateMarkup() {
    this._activeMarkup();
    const data = this._data.data;
    console.log(data);
    if (data.length === 0) {
      return `
      <p class="search__results__noresult">There's no result for your word, try another :)</p>      
      `;
    } else {
      return `
        <div class="search__results__main">
        <h2 class="search__results__title">${data[0].title}</h2>
        <h3 class="search__results__subtitle">${data[0].episodes} Episodes</h3>
        ${data[0].trailer.embed_url
          ? `<iframe src="${data[0].trailer.embed_url}" frameborder="0"></iframe>`
          : `<a href="${data[0].url}]}" target="_blank"><img src="${data[0].images.webp.image_url}" loading="lazy"></a>`} 
      </div>
      `;
    };
  }

  _activeMarkup() {
    this._parentElement.classList.add('search__results--active');
    this.clear();
  }
}

export default new ResultsView();