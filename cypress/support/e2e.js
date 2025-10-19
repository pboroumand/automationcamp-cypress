// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';
import "cypress-real-events";
import 'cypress-iframe';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test due to uncaught exceptions
  return false;
});

// Hide XHR / fetch logs from the Cypress Command Log
Cypress.on('log:added', (log) => {
  try {
    const name = (log.name || '').toString().toLowerCase();
    const instr = (log.instrument || '').toString().toLowerCase();
    const type = (log.type || '').toString().toLowerCase();

    const isNetwork =
      ['xhr', 'fetch', 'xmlhttprequest'].includes(name) ||
      ['xhr', 'fetch'].includes(instr) ||
      ['xhr', 'fetch'].includes(type);

    if (isNetwork) {
      // `log.set` exists on the internal log object in many Cypress versions.
      // Fall back to direct property assignment if not available.
      if (typeof log.set === 'function') {
        log.set('displayName', null);
        log.set('consoleProps', () => ({}));
      } else {
        log.displayName = null;
        log.consoleProps = () => ({});
      }
    }
  } catch (e) {
    // ignore errors from this handler
  }
});

