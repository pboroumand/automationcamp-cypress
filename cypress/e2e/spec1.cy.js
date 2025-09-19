/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit ("www.play2.automationcamp.ir/index.html"),
    console.log('Hello World!')
  })
  it.only('My Test', ()=>{
    cy.visit ("www.play2.automationcamp.ir/index.html")
    cy.get('#fname').type('Parni Parni')
    cy.get('#fname').should('have.value','Parni Parni')
  })
})