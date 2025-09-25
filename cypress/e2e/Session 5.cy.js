/// <reference types="cypress"/>

describe('then',()=>{
    it('Checkbox',()=>{
        cy.visit('https://play1.automationcamp.ir/forms.html')
        cy.get('#check_java').should('be.disabled')
        cy.get('#check_python').should('not.be.checked')
        cy.get('#check_javascript').should('not.be.checked')
        cy.get('.form-check-input').check(['PYTHON','JAVASCRIPT'])
        cy.get('#check_python').should('be.checked')
        cy.get('#check_javascript').should('be.checked')
    })
    it('Drop Down',()=>{
        cy.visit('https://play1.automationcamp.ir/forms.html')
        cy.get('#select_tool').select('pro')
        cy.get('select option[value="pro"]').should('have.text','Protractor')
    })
    it('Drop Down non-select tag',()=>{
        cy.visit('https://material.angular.dev/components/select/overview#select-overview')
        cy.get('select-overview-example > .mat-mdc-form-field-type-mat-select > .mat-mdc-text-field-wrapper').wait(10000).scrollIntoView().should('be.visible')
        cy.get('select-overview-example > .mat-mdc-form-field-type-mat-select > .mat-mdc-text-field-wrapper').click()
        cy.get('#mat-option-2').click()
        cy.get('#mat-option-2>span.mdc-list-item__primary-text').should('have.text','Tacos')
    })
    it.only('Chips',()=>{
        cy.visit('https://material.angular.dev/components/select/overview#select-overview')
        cy.wait(30000)
        cy.get('select-multiple-example > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').wait(10000).scrollIntoView().should('be.visible')
        cy.get('select-multiple-example > .mat-mdc-form-field > .mat-mdc-text-field-wrapper').click()
        cy.get('#mat-option-91').click()
        cy.get('#mat-option-93').click()
        cy.get('#mat-option-94').click()
        cy.wait(500)
        cy.get('#mat-select-value-9 > .mat-mdc-select-value-text > .mat-mdc-select-min-line').within(function(){cy.contains('Onion').should('exist')})
    })
})