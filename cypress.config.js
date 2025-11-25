const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');

module.exports = defineConfig({
  //npx cypress run --record --key e3803921-bad1-4cbb-b2e6-e5b92143fd5e
  projectId: 'bnfvu7',
  retries: {
    runMode: 2
  },
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
