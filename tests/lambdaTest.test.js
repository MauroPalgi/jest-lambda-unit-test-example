const lambdaJokes = require("../functions/lambdaJokes");

describe("Test Lambda Jokes function", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...OLD_ENV, stage: "local" };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  test("This should return an Object with category = Programming", async () => {
    const joke = await lambdaJokes.handler({ category: "Programming" });
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
