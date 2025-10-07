// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('openLinkwithText',(LinkText)=>{
    cy.get('a').contains(LinkText).click()
})

Cypress.Commands.add('getText', {prevSubject:true}, ($element)=>{
    return cy.wrap($element).invoke('text')
})
Cypress.Commands.add('getTextOptional', {prevSubject: 'optional'}, (subject)=>{
    if (subject)        //if it is not undefined (0), it is a child command and is chained
        return cy.wrap(subject).invoke('text')
    else
        return cy.get('h1').then (function ($el){
            return $el.text()
        })
})