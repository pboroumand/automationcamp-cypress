const { defineConfig } = require('cypress');
const { downloadFile } = require('cypress-downloadfile/lib/addPlugin');
const mysql = require("mysql")

module.exports = defineConfig({
  //npx cypress run --record --key e3803921-bad1-4cbb-b2e6-e5b92143fd5e
  projectId: 'bnfvu7',
  retries: {
    runMode: 2
  },
  "env": {
    "db": {
      server: "127.0.0.1",
      user: "root",
      password: "12345678",
      database: "ac"
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-terminal-report/src/installLogsPrinter')(on, {
        printLogsToConsole: "always",
      });
      on('task', {downloadFile});
      on('task',{
        queryDb: (query)=> {
          return queryOnDatabase (query, config)
        }
      })
    },
    "watchForFileChanges": false,
    "defaultCommandTimeout": 6000,
    "video": true
  },
});
function queryOnDatabase (query, config){
  const connection = mysql.createConnection(config.env.db)
	connection.connect()
	return new Promise((resolve, reject) => {
		connection.query(query, (error, results) => {
			if (error) reject(error)
			else {
				connection.end()
				console.log(results)
				return resolve(results)
			}
		})
	})
}