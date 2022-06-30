module.exports = {
  collectCoverageFrom: ["functions/*.{js,jsx}"],
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFiles: ["<rootDir>/tests/envVariables.js"],
  testEnvironment: "node",
  verbose: true,
  testTimeout: 10000,
};
