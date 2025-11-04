/// <reference types="cypress"/>

describe ('waits', ()=>{
    it.only('implicit wait',{defaultCommandTimeout:7002},()=>{
        cy.visit('https://www.play1.automationcamp.ir/expected_conditions.html')
        cy.get('#min_wait').clear().type(7)
        cy.get('#max_wait').clear().type(7)
        cy.get('#visibility_trigger').click()
        cy.get('#visibility_target').should('be.visible')
    })
})