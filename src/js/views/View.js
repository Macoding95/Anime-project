export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  clear() {
    this._parentElement.innerHTML = '';
  }

  addHandlerResults(handler) {
    document.addEventListener('DOMContentLoaded', function (e) {
      handler()
    });
  };
}