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
    it.only('Closing Dialog',()=>{
        cy.visit('https://material.angular.dev/components/dialog/examples')
        //,
    })
})