/// <reference types="cypress"/>

describe ('Session 15', ()=>{
    it('Radio',()=>{
        cy.visit('https://play1.automationcamp.ir/forms.html')
        cy.get('#rad_selenium').should('not.be.checked')
        cy.get('#rad_protractor').should('not.be.checked').click().should('be.checked')
        cy.get('#rad_selenium').should('not.be.checked').click().should('be.checked')
        cy.get('#rad_protractor').should('not.be.checked')
    })
    it.only('asserting disabled item',()=>{
        cy.visit('https://play1.automationcamp.ir/forms.html')
        cy.get('#check_java').should('be.disabled')
        cy.get('#check_java').invoke('removeAttr','disabled')
        cy.get('#check_java').should('be.enabled')
    })
    it('asserting',()=>{
        cy.visit('')
    })
})