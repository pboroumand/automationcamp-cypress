/// <reference types="cypress"/>

describe ('Data Driven - Fixtures', ()=>{
    beforeEach(function(){
        cy.fixture('users.json').as('usersData')
    })
    it.only('user 1 form', function(){
        cy.log(JSON.stringify(this.usersData))
        cy.visit('https://www.play2.automationcamp.ir/index.html')
        cy.get('#fname').type(this.usersData.user1.firstName)
        cy.get('#lname').type(this.usersData["user1"]["lastName"])
        cy.get(`input#${this.usersData["user1"]["gender"]}`).click()
    })
    it.only('user 2 form', function(){
        cy.log(JSON.stringify(this.usersData))
        cy.visit('https://www.play2.automationcamp.ir/index.html')
        cy.get('#fname').type(this.usersData.user2.firstName)
        cy.get('#lname').type(this.usersData["user2"]["lastName"])
        cy.get(`input#${this.usersData["user2"]["gender"]}`).click()
    })
    it('asserting',()=>{
        cy.visit('')
    })
    it('asserting',()=>{
        cy.visit('')
    })
})