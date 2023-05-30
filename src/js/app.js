import * as model from './model.js';
import recommendView from './views/recommendView.js';
import topView from './views/topView.js';

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

const init = function () {
  recommendView.addHandlerResults(controlResults);
  topView.addHandlertop(controlTop);
};
init();