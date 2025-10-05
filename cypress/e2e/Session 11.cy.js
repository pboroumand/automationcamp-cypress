/// <reference types='cypress'/>

describe ('Function',()=>{
    it('Open Link Function', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.openLinkwithText('English')
    })
})