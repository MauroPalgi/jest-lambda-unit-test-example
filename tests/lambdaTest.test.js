const lambda = require("../functions/lambda");

describe("test lambda function", () => {
  const OLD_ENV = process.env;

  beforeEach(() => {
    jest.resetModules(); // this is important - it clears the cache
    process.env = { ...OLD_ENV, stage: "dev" };
  });

  afterEach(() => {
    process.env = OLD_ENV;
  });

  test("This should return ", async () => {
    const value = await lambda.lambdaHandler({ name: "Mauro" });
    expect(value).toBe("b");
  });
});
