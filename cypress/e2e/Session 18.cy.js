/// <reference types="cypress"/>

describe ('Login', ()=>{
    it.only('asserting login',()=>{
        cy.visit('https://automationexercise.com/login')
        cy.get('input[data-qa=login-email]').type('support@parni.com')
        cy.get('input[data-qa=login-password]').type('1234')
        cy.window().then((win) => {
            win.document.querySelector('[data-qa="login-button"]').click()
        })
        // cy.get('button[data-qa=login-button]').then(($btn) => {
        //     // trigger native click directly in browser, outside Cypress' control
        //     $btn[0].click()
        // })
        // cy.origin('https://automationexercise.com', () => {
        //     cy.url().should('eq', 'https://automationexercise.com/')
        //     cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > b').should('have.text', 'support')
        // })
        cy.get('#header > div > div > div > div.col-sm-8 > div > ul > li:nth-child(10) > a > b').should('have.text', 'support')
    })
    it('asserting',()=>{
        cy.visit('')
    })
    it('asserting',()=>{
        cy.visit('')
    })
})