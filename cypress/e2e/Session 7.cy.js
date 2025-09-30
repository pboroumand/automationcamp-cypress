/// <reference types="cypress" />

describe('First spec', () => {
  it('Array', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.get("a[id*='js-link-box']").should('contain.text','日本語')
    cy.get("a[id*='js-link-box']").eq(-2).click()
  })
})