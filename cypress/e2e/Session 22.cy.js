/// <reference types="cypress"/>

describe ('waits', ()=>{
    before(function(){
        cy.log(`page load timeout: ${Cypress.config('pageLoadTimeout')}`)
        Cypress.config('pageLoadTimeout', 5000)
    })
    it.only('implicit wait',{defaultCommandTimeout:7002},()=>{
        cy.visit('https://www.play1.automationcamp.ir/expected_conditions.html')
        cy.debug()
        cy.get('#min_wait').clear().type(7)
        cy.get('#max_wait').clear().type(7)
        cy.get('#visibility_trigger').click()
        cy.get('#visibility_target').should('be.visible')
        console.error('this is an error')
    })
    it('page load test', ()=>{
        cy.log(`page load time: ${Cypress.config('pageLoadTimeout')}`)
        cy.visit('https://play2.automationcamp.ir/index.html')
        cy.document({timeout:1000}).its('readyState').should('eq','complete')
        cy.get('body > div.navbar > a:nth-child(1)').click()
        cy.location('pathname', {timeout:1000}).should('eq','/contact.html')
    })
    it('call back on should', ()=>{
        cy.visit('https://play2.automationcamp.ir/index.html')
        cy.get('#demo').should('not.be.visible')
        cy.pause()
        cy.get('.pop-up-alert').click()
        cy.get('#demo').should((item)=>{
            expect(item).to.have.text('You Pressed the OK Button!')
            expect(item).to.be.visible
        })
    })
})