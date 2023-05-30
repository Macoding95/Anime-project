import { TIME_OUT } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(new Error('Request took too long'))
    }, s * 1000);
  });
};

export const AJAX = async function (url) {
  try {
    const result = await Promise.race([fetch(url), timeout(TIME_OUT)]);
    const data = await result.json();

    if (!result.ok) throw new Error(`${result.message}`);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  };
};