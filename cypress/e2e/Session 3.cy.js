/// <reference types="cypress"/>

describe ('Session 3', ()=>{
    it ('Real Event', ()=>{
        cy.visit('https://play2.automationcamp.ir/index.html')
        cy.get('#fname').type('Cypress').realPress(['Home','ArrowRight','Backspace']).realPress(['Control','a']).realPress(['Control','x']).realPress(['Control','v'])
        cy.get('#fname').should('have.value','ypress')
    })
})