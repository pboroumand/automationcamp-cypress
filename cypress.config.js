const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "watchForFileChanges": false,
    "defaultCommandTimeout": 6000,
    "video": true
  },
});
