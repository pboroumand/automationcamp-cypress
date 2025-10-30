/// <reference types="cypress"/>

describe ('Login', ()=>{
    beforeEach(function(){
        /// cy.request('post','https://talafilmu.ir/account-login/',{log:"parni",pwd:"***"})
        // .then(($resp)=>{
        //     expect($resp.status).to.eq(200)
        // })
        // cy.session('session1',()=>{
        //     cy.visit('https://talafilmu.ir/account-login/')
        //     cy.get('input[name=log]').type('parni')
        //     cy.get('input[name=pwd]').type('***')
        //     cy.get('input[type=submit]').click()
        //     cy.location('pathname').should('eq','/')
        // })
        
    })
    it('login test',()=>{
        cy.visit('https://talafilmu.ir/account-login/')
        cy.get('input[name=log]').type('parni')
        cy.get('input[name=pwd]').type('***')
        cy.get('input[type=submit]').click()
        cy.get('#dropdownMenuLink').click()
        cy.get('.item-avatar-text > strong').should('have.text','parni')
    })
    it('login with beforeEach',()=>{
        cy.visit('https://talafilmu.ir/')
        cy.get('#dropdownMenuLink').click()
        cy.get('.item-avatar-text > strong').should('have.text','parni')
    })
    it.only('login using custom command',()=>{
        cy.LoginUsingUI('parni','***')
        cy.visit('https://talafilmu.ir/')
        cy.get('#dropdownMenuLink').click()
        cy.get('.item-avatar-text > strong').should('have.text','parni')
        cy.LoginUsingUI('padiav','***')
        cy.visit('https://talafilmu.ir/')
        cy.get('#dropdownMenuLink').click()
        cy.get('.item-avatar-text > strong').should('have.text','padiav')
    })
})