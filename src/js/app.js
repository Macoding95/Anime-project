import * as model from './model.js';
import recommendView from './views/recommendView.js';
import topView from './views/topView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';

import 'core-js/stable';
import 'regenerator-runtime';

const controlResults = async function () {
  await model.loadAnime();
  recommendView.render(model.state.recommend);
};

const controlTop = async function () {
  await model.loadTop();
  topView.render(model.state.top);
}

const controlSearchAnime = async function () {

  const query = searchView.getQuery();
  if (!query) return;

  await model.searchAnime(query);

  resultsView.render(model.state.search);
}

const init = function () {
  recommendView.addHandlerResults(controlResults);
  topView.addHandlertop(controlTop);
  searchView.addHandlerSearch(controlSearchAnime);
};
init();