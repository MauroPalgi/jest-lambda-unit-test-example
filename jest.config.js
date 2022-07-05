module.exports = {
  collectCoverageFrom: ["functions/*.{js,jsx}"],
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/"],
  setupFiles: ["<rootDir>/tests/envVariables.js"],
  verbose: true,
};
