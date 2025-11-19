/// <reference types="cypress"/>

describe ('wrap', ()=>{
    it('asserting',()=>{
        cy.visit('https://www.play1.automationcamp.ir/expected_conditions.html')
        cy.get('#min_wait').clear().type(15)
        cy.get('#max_wait').clear().type(15)
        cy.get('#visibility_target').should('not.be.visible')
        cy.clock()
        cy.get('#visibility_trigger').click()
        cy.tick(15050)
        cy.get('#visibility_target').should('be.visible')
        cy.clock().invoke('restore')
    })
})