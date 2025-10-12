/// <reference types="cypress"/>

describe ('Session 15', ()=>{
    it('Radio',()=>{
        cy.visit('https://play1.automationcamp.ir/forms.html')
        cy.get('#rad_selenium').should('not.be.checked')
        cy.get('#rad_protractor').should('not.be.checked').click().should('be.checked')
        cy.get('#rad_selenium').should('not.be.checked').click().should('be.checked')
        cy.get('#rad_protractor').should('not.be.checked')
    })
    it('asserting disabled item',()=>{
        cy.visit('https://play1.automationcamp.ir/forms.html')
        cy.get('#check_java').should('be.disabled')
        cy.get('#check_java').invoke('removeAttr','disabled')
        cy.get('#check_java').should('be.enabled')
    })
    it('asserting invisible element',()=>{
        cy.visit('https://play1.automationcamp.ir/expected_conditions.html')
        cy.get('#min_wait').clear().type('5')
        cy.get('#max_wait').clear().type('7')
        cy.get('#visibility_target').invoke('attr','style').should('eq','display: none') //or should not be visible
        cy.get('#visibility_trigger').click()
        cy.get('#visibility_target', {timeout:7000}).should('be.visible')
    })
    it.only('asserting existance',()=>{
        cy.visit('https://material.angular.dev/components/snack-bar/examples')
        cy.get('button.mat-primary span.mdc-button__label').click()
        cy.get('snack-bar-component-example-snack> .example-pizza-party').should('not.exist')
        cy.get('#mat-input-1').clear().type(7)
        cy.get('snack-bar-component-example>.mdc-button').click()
        cy.get('snack-bar-component-example-snack> .example-pizza-party').should('exist')
        cy.get('snack-bar-component-example-snack> .example-pizza-party').should('be.visible')
        cy.get('snack-bar-component-example-snack> .example-pizza-party', {timeout: 7001}).should('not.exist')
    })
})