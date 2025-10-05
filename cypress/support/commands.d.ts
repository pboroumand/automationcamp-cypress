/// <reference types="cypress"/>

declare namespace Cypress {
    interface Chainable {
        openLinkwithText (LinkText:string): cypress.Chainable
    }
}