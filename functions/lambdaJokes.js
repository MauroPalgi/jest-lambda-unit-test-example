require("dotenv").config();
const axios = require("axios");

exports.handler = async (event, context) => {
  let joke = { category: "empty", setup: "empty", delivery: "empty" };
  const jokeCat = event?.category;
  if (process.env.ERROR == "false") {
    try {
      const { data } = await axios.get(
        `https://v2.jokeapi.dev/joke/${jokeCat || "Any"}`
      );
      const { category, setup, delivery } = data;
      joke = { category, setup, delivery };
    } catch (error) {
      console.error(error.message);
    }
  }

  return joke;
};
