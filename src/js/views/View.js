export default class View {
  _data;

  render(data) {
    if (!data)
      renderError("")

    this._data = data;
    const markup = this._generateMarkup();
    this._parentElement.insertAdjacentHTML('beforeend', markup);
  }

  addHandlerResults(handler) {
    document.addEventListener('DOMContentLoaded', function (e) {
      handler()
    });
  };
}