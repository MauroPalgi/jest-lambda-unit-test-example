require("dotenv").config();
const axios = require("axios");

exports.handler = async (event, context) => {
  let joke = {
    category: "empty",
    setup: "empty",
    delivery: "empty",
  };
  const jokeCat = event?.category;

  try {
    if (process.env.ERROR == "true") {
      throw new Error("Error Simulated from Global Variable");
    }
    const { data } = await axios.get(
      `https://v2.jokeapi.dev/joke/${jokeCat || "Any"}`
    );
    const { category, setup, delivery } = data;
    joke = { category, setup, delivery };
  } catch (error) {
    console.log(error.message);
  }

  return joke;
};
