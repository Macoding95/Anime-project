import { AJAX } from "./helper.js";
import { URL_API_RECOM, URL_API_TOP } from "./config.js";

export const state = {
  recommend: [],
  range: {
    min: 0,
    max: 0
  },
  top: []
};

const randomNumber = function () {
  const min = Math.floor(Math.random() * 93);
  const max = min + 8;

  state.range.min = min;
  state.range.max = max;
};
randomNumber();

export const loadAnime = async function () {
  try {
    const result = await AJAX(`${URL_API_RECOM}`);
    const data = result.data.slice(state.range.min, state.range.max);
    state.recommend = data;

  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const loadTop = async function () {
  try {
    const result = await AJAX(`${URL_API_TOP}`);
    state.top = result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}