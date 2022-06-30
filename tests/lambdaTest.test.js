const lambdaJokes = require("../functions/lambdaJokes");

describe("Test Lambda Jokes function", () => {
  // This part it's just to clean de global enviroment
  // Creating a copy of the Old ones
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    // Restoring global variables to it's initial values
    process.env = { ...OLD_ENV, ERROR: "false" };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  // TEST
  test("This should return an Object with category = Programming", async () => {
    const lambdaEvnt = { category: "Programming" };
    // this is the event obj that the lambda will received
    const joke = await lambdaJokes.handler(lambdaEvnt);
    expect(joke.category).toBe("Programming");
  });
  test("This should return an Object with category = Any", async () => {
    const joke = await lambdaJokes.handler();
    expect(joke.category).not.toBe("empty");
  });
  test("This should return an Object with category = empty", async () => {
    process.env.ERROR = "true";
    const joke = await lambdaJokes.handler();
    expect(joke.category).toBe("empty");
  });
});
