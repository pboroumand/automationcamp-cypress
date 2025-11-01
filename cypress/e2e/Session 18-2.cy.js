/// <reference types="cypress"/>

describe ('Login', ()=>{
    it('login using session',()=>{
        Cypress.Cookies.debug(true)
        cy.LoginUsingUI('parni','***')
        cy.visit('https://talafilmu.ir/')
        cy.get('#dropdownMenuLink').click()
        cy.get('.item-avatar-text > strong').should('have.text','parni')
        cy.getAllCookies().then((cookies)=>{
            console.log(cookies)
        })
        cy.logout()
    })
    it.only('working with cookies',()=>{
        cy.visit('https://talafilmu.ir/')
        cy.setCookie('myCookie','Parni')
        cy.getCookie('myCookie').should('have.property','value','Parni')
        .then((cookie)=>{
            console.log(cookie)
        })
        cy.clearCookie('myCookie')
        cy.getCookie('myCookie').should('be.null')
        cy.clearAllCookies()
    })
})