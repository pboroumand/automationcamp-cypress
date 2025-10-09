/// <reference types="cypress"/>

describe ('Session 13', ()=>{
    it('its',()=>{
        cy.viewport(500,500)
        cy.visit('https://play2.automationcamp.ir/')
        cy.window().its('innerWidth').should('eq',500)
        let list= {fname:'Parni'}
        cy.wrap(list).its('fname').should('eq','Parni')
    })
    it.only('invoke',()=>{
        cy.visit('https://play1.automationcamp.ir/forms.html')
        cy.get('#rad_protractor').click()
        cy.get('#rad_validate').invoke('text').should('eq','PROTRACTOR')
        cy.get('.btn-primary').click()
        cy.get('#invalid_city').invoke('text').should('include','Please provide a valid city.')
        cy.visit('https://play1.automationcamp.ir/expected_conditions.html')
        cy.get('#min_wait').invoke('attr','value').should('eq','2')
        cy.visit('https://play1.automationcamp.ir/multi_window.html')
        cy.get('#window1').invoke('removeAttr','target').click()
        cy.get('#click_me_2').should('be.visible')
        cy.visit('https://play1.automationcamp.ir/index.html')
        cy.window().invoke('scrollTo',300,300)
    })
})