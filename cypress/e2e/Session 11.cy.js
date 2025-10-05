/// <reference types='cypress'/>

describe ('Function',()=>{
    it('Open Link Function', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.openLinkwithText('English')
    })
    it.only('Get Text', ()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get("#mp-otd-h2").getText().should('contain', "On this day")
    })
})