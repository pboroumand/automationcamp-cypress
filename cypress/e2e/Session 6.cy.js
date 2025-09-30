/// <reference types="cypress"/>

describe ('Intract with Elements', ()=>{
    it('Alert',()=>{
        cy.visit('https://play1.automationcamp.ir/expected_conditions.html')
        cy.get('#min_wait').type('{backspace}1')
        cy.get('#min_wait').should('have.value','1')
        cy.get('#max_wait').type('{backspace}1')
        cy.get('#max_wait').should('have.value','1')
        cy.get('#alert_trigger').click().wait(1100)
        cy.on('window:alert', function(message) {expect(message).eq('I am alerting you!')})
        cy.get('#prompt_trigger').click().wait(1100)
        cy.on('window:confirm', function(message){
            expect(message).include("It's your life!")
            return false
        })
        cy.get('#confirm_cancelled_badge').should('have.text','Cancelled')
    })
    it('Prompt', ()=>{
        cy.visit('https://demoqa.com/alerts')
        cy.window().then(function($win){
            cy.get('#promtButton').click()
            cy.stub($win, 'prompt').returns("Hello Parni's World!")
        })
        cy.get('#promptResult').should('include.text',"Hello Parni's World!")
    })
    it('Closing Dialog',()=>{
        cy.visit('https://material.angular.dev/components/dialog/examples')
        cy.get('.mat-primary > .mdc-button__label').click() //cookie
        cy.get('#mat-tab-link-0').then(function(cdk){
            cy.get('dialog-animations-example > :nth-child(1)').click()
            cy.wait(1000)
            let position= cdk[0].getBoundingClientRect()
            cy.document().then(function(doc){
                doc.elementFromPoint(position.x, position.y).click()
            })
        })
    })
    it('Snackbar',()=>{
        cy.visit('https://material.angular.dev/components/snack-bar/overview')
        cy.get('.mat-primary > .mdc-button__label').click() //cookie
        cy.get('div.cdk-global-overlay-wrapper').should('not.exist')
        cy.get('#mat-input-2').clear().type(1)
        cy.get('snack-bar-annotated-component-example > .mdc-button').click()
        cy.get('div.cdk-global-overlay-wrapper').should('exist')
    })
    it.only('Snackbar',()=>{
        cy.visit('https://material.angular.dev/components/tooltip/overview')
        cy.get('.mat-primary > .mdc-button__label').click() //closing cookie dialog
        cy.get('div.mdc-tooltip__surface').should('not.exist')
        cy.get('#tooltip-overview > .docs-example-viewer-wrapper > .docs-example-viewer-title > [aria-label="View source"] > .mat-mdc-button-touch-target').realHover()
        cy.get('div.mdc-tooltip__surface').should('contain.text','View code')
    })
})