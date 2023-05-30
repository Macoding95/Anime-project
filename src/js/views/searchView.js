import View from './View.js';

class SearchView extends View {
  _parentElement = document.querySelector('#form-search');

  getQuery() {
    const query = this._parentElement.querySelector('#search-anime').value;
    this._clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  };

  _clearInput() {
    this._parentElement.querySelector('#search-anime').value = '';
  }
}

export default new SearchView();