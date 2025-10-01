/// <reference types="cypress" />

describe('First spec', () => {
  it('Array', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.get("a[id*='js-link-box']").should('contain.text','日本語')
    cy.get("a[id*='js-link-box']").eq(-2).click()
  })
  it('Each', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.get("a[id*='js-link-box']").each(function($el,index,$list){
      if (index===6){
        cy.wrap($el).click()
      }
    })
  })
  it.only('Table', () => {
    cy.visit('https://play2.automationcamp.ir/index.html')
    cy.scrollTo('bottom')
    cy.get('table th').eq(4).should('have.text','Occupation')
  })
})