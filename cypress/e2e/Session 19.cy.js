/// <reference types="cypress"/>

describe ('Spy,Stub,Intercept,Mock', ()=>{
    it('Spy',()=>{
        cy.visit('spy-stub.html')
        cy.window().then((win) => {
            cy.spy(win.console,'log').as('consoleLog')
        })
        cy.get('#console-log').click()
        cy.get('#console-log').click()
        cy.get('@consoleLog').should('be.calledWith','Hello World!')
        cy.get('@consoleLog').should('be.calledTwice')
    })
    it('stub window print',()=>{
        cy.visit('spy-stub.html')
        cy.window().then((win) => {
            cy.stub(win,'print').as('winPrint')
        })
        cy.get('#print-window').click()
        cy.get('@winPrint').should('be.called')
        cy.get('#console-log').click()
    })
    it('stub new tab',()=>{
        cy.visit('spy-stub.html')
        cy.window().then((win) => {
            cy.stub(win,'open').as('winOpen')
        })
        cy.get('#open-window').click()
        cy.get('@winOpen').should('be.calledWith','https://google.com')
        cy.get('#console-log').click()
    })
    it('stub alert',()=>{
        cy.visit('spy-stub.html')
        cy.window().then((win) => {
            cy.stub(win,'alert').as('winAlert')
        })
        cy.get('#alert').click()
        cy.get('@winAlert').should('be.calledWith','I am a JS Alert')
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })
    it('stub confirm OK',()=>{
        cy.visit('spy-stub.html')
        cy.window().then((win) => {
            cy.stub(win,'confirm').returns(true).as('winConfirm')
        })
        cy.get('#confirm').click()
        cy.get('@winConfirm').should('be.calledWith','I am a JS Confirm')
        cy.get('#result').should('have.text','You clicked: Ok')
    })
    it('stub confirm cancel',()=>{
        cy.visit('spy-stub.html')
        cy.window().then((win) => {
            cy.stub(win,'confirm').returns(false).as('winConfirm')
        })
        cy.get('#confirm').click()
        cy.get('@winConfirm').should('be.calledWith','I am a JS Confirm')
        cy.get('#result').should('have.text','You clicked: Cancel')
    })
    it('stub prompt OK',()=>{
        cy.visit('spy-stub.html')
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns('Parni').as('winPrompt')
        })
        cy.get('#prompt').click()
        cy.get('@winPrompt').should('be.calledWith','I am a JS Prompt')
        cy.get('#result').should('have.text','You entered: Parni')
    })
    it('stub prompt cancel',()=>{
        cy.visit('spy-stub.html')
        cy.window().then((win) => {
            cy.stub(win,'prompt').returns(null).as('winPrompt')
        })
        cy.get('#prompt').click()
        cy.get('@winPrompt').should('be.calledWith','I am a JS Prompt')
        cy.get('#result').should('have.text','You entered: null')
    })
    it('intercept', ()=>{
        cy.LoginUsingUI('parni','***')
        cy.intercept('POST','https://talafilmu.ir/cdn-cgi/rum?').as('reqAlias')
        cy.wait('@reqAlias').its('response.statusCode').should('eq',204)
        cy.get('@reqAlias').then((req)=>{
            expect(req.request.body).to.have.ownProperty('location','https://talafilmu.ir/')
            expect(req.request.body).to.have.ownProperty('siteToken')
        })
        cy.logout()
    })
    it.only('mock', ()=>{
        cy.intercept('https://api.realworld.io/api/tags',{"tags":["Parni","Padi"]}).as('reqAlias')
        cy.visit('https://angular.realworld.io/')
        cy.wait('@reqAlias')
        cy.get('@reqAlias').then((req)=>{
            expect(req.response.body).to.eql({"tags":["Parni","Padi"]})
        })
        cy.get('.tag-list > a').contains('Parni')
        cy.get('.tag-list > a').contains('Padi')
    })
})