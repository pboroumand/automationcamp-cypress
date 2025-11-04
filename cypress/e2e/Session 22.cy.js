/// <reference types="cypress"/>

describe ('waits', ()=>{
    it.only('implicit wait',()=>{
        cy.visit('https://www.play1.automationcamp.ir/expected_conditions.html')
        cy.get('#min_wait').clear().type(8)
        cy.get('#max_wait').clear().type(8)
        cy.get('#visibility_trigger').click()
        cy.get('#visibility_target',{Timeout:8002}).should('be.visible')
    })
    it('asserting',()=>{
        cy.visit('')
    })
    it('asserting',()=>{
        cy.visit('')
    })
})