require("dotenv").config();
const axios = require("axios");

exports.handler = async (event, context) => {
  const jokeCat = event?.category;

  if (process.env.ERROR == "true") {
    throw new Error("Error Simulated from Eviroment Variable ERROR");
  }

  try {
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
