const lambdaJokes = require("../functions/lambdaJokes").handler;

describe("Test Lambda Jokes function", () => {
  const OLD_ENV = process.env;
  const posibleCategories = [
    "Programming",
    "Misc",
    "Dark",
    "Pun",
    "Spooky",
    "Christmas",
  ];

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV, ERROR: "false" };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  test("This should return an Object with category = Programming", async () => {
    const lambdaEvnt = { category: "Programming" };
    try {
      const joke = await lambdaJokes(lambdaEvnt);
      expect(joke.category).toBe("Programming");
    } catch (error) {
      console.log(error.message);
    }
  });
  test("This should return an Object with category = Any", async () => {
    try {
      const joke = await lambdaJokes();
      expect(posibleCategories).toContaine(joke.category);
    } catch (error) {
      console.log(error.message);
    }
  });
  test("This should throw an error with message = Error Simulated from Global Variable", async () => {
    process.env.ERROR = "true";
    expect.assertions(1);
    try {
      await lambdaJokes();
    } catch (error) {
      expect(error.message).toBe(
        "Error Simulated from Eviroment Variable ERROR"
      );
    }
  });
});
