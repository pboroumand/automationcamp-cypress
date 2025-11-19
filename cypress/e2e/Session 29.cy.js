describe("Session 29", () => {
  it('test with recorder', () => {
    cy.viewport(804, 607)
    cy.visit("https://play1.automationcamp.ir/expected_conditions.html")
    cy.get("form > div:nth-of-type(1)").click()
    cy.get("#min_wait").clear().type("3")
    cy.get("form > div:nth-of-type(2)").click()
    cy.get("#max_wait").clear().type("3")
    cy.get('#spinner_gone').should('not.be.visible')
    cy.get("#invisibility_trigger").click()
    cy.get('#spinner_gone').should('be.visible')
  })
})
