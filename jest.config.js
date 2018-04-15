const path = require('path');

module.exports = {
  projects: [
    {
      displayName: "server tests",
      setupFiles: ["<rootDir>/tests/setup-server.js"],
      testEnvironment: '<rootDir>/tests/mongo-environment.js',
      testMatch: ["<rootDir>/server/**/*.test.js"],
      transform: {
        "\\.jsx?$": "babel-jest",
      },
    },
    {
      displayName: "client tests",
      testEnvironment: 'jsdom',
      setupFiles: [
        path.join(__dirname, 'tests', 'setup-client.js'),
      ],
      testMatch: ["<rootDir>/client/**/*.test.js"],
      transform: {
        "\\.jsx?$": "babel-jest",
        ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform"
      },
    },
  ],
};
