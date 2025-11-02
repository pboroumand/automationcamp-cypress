/// <reference types="cypress"/>

declare namespace Cypress {
    interface Chainable {
        openLinkwithText (LinkText:string): cypress.Chainable
        getText (element:Element): cypress.Chainable
        /**
         * 
         * @param {string} LinkText - an element
         * @example
         *      cy.getTextOptional('elem')
         */
        getTextOptional (element: Element): cypress.Chainable
        LoginUsingUI (user: string, password: string): cypress.Chainable
        logout(): Cypress.Chainable
        addProduct (bookName: string): cypress.Chainable
    }
}