/// <reference types="cypress"/>

describe ('Data Driven - Fixtures', ()=>{
    beforeEach(function(){
        cy.fixture('users.json').as('usersData')
        cy.fixture('Books.json').as('booksData')
    })
    it('user 1 form', function(){
        cy.log(JSON.stringify(this.usersData))
        cy.visit('https://www.play2.automationcamp.ir/index.html')
        cy.get('#fname').type(this.usersData.user1.firstName)
        cy.get('#lname').type(this.usersData["user1"]["lastName"])
        cy.get(`input#${this.usersData["user1"]["gender"]}`).click()
    })
    it('user 2 form', function(){
        cy.log(JSON.stringify(this.usersData))
        cy.visit('https://www.play2.automationcamp.ir/index.html')
        cy.get('#fname').type(this.usersData.user2.firstName)
        cy.get('#lname').type(this.usersData["user2"]["lastName"])
        cy.get(`input#${this.usersData["user2"]["gender"]}`).click()
    })
    it('mock', ()=>{
        cy.intercept('https://api.realworld.io/api/tags',{fixture: 'Tags.json'}).as('reqAlias')
        cy.visit('https://angular.realworld.io/')
        cy.wait('@reqAlias')
        cy.get('@reqAlias').then((req)=>{
            expect(req.response.body).to.eql({"tags":["AutomationCamp","Cypress","Parni","Padi","Today","Happy","Practice","Rain"]})
        })
        cy.get('.tag-list > a').should('include.text','Parni')
        cy.get('.tag-list > a').should('include.text','Rain')
    })
    it.only('add to cart',function(){
        cy.visit('https://demo.nopcommerce.com/books')
        this.booksData.booksForTest.forEach(function(element){
            cy.addProduct(element)
            cy.wait(2000)
        })
        cy.visit('https://demo.nopcommerce.com/cart')
        cy.get('.product-name').should('have.length',2)
        .each(function($el, index, list){
            expect(this.booksData.booksForTest.includes($el.text()))
        })
    })
})