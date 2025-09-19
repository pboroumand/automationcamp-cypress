/// <reference types="cypress" />
beforeEach (function(){
  cy.visit ("www.play2.automationcamp.ir/index.html")
})

describe('First spec', () => {
  it('passes', () => {
    console.log('Hello World!')
  })
  it.only('My Test', ()=>{
    cy.get('#fname').type('Parni Parni').should('have.value','Parni Parni')
  })
  it('Test', function(){
    //cy.visit ('https://duckduckgo.com/')
    //cy.get('input#searchbox_input').type("cypress{enter}")
  })
})