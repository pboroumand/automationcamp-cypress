const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-terminal-report/src/installLogsPrinter')(on, {
        printLogsToConsole: "always",
      });
      on('task', {downloadFile});
    },
    "watchForFileChanges": false,
    "defaultCommandTimeout": 6000,
    "video": true
  },
});
