const { defineConfig } = require("cypress");

module.exports = defineConfig({
  numTestsKeptInMemory: 30,
  e2e: {
    hideXHRInCommandLog: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
