/// <reference types="cypress"/>

describe ('Alias', ()=>{
    // beforeEach(function(){
    //     cy.visit('https://play2.automationcamp.ir/index.html')
    //     cy.get('#fname').as('firstname')
    //     cy.fixture('Data.json').as('dataFile')
    // })
    it('First it', function(){
        cy.log(this.dataFile.email)
        cy.log(this.dataFile.password)
    })
    it('Second it', function(){
        cy.get('@firstname').type('Hello World!')
        cy.wrap(this.firstname).clear().type('parni')
    })
    it('Post waiting',()=>{
        cy.intercept('GET','*/*iris.najva.com/**').as('zm')
        //https://iris.najva.com/v1/script-settings/settings/website/?api_key=75206919-30ec-44d2-940e-8b295780b0b9
        cy.visit('https://zoomit.ir')
        cy.wait('@zm')
    })
    it.only('Post waiting',()=>{
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').as('jp')
        cy.get('@jp').then(function(response){
            expect(response.status).to.equal(200)
        })
    })
})