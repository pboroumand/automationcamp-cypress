/// <reference types='cypress'/>

describe ('Function',()=>{
    it('Open Link Function', ()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.openLinkwithText('English')
    })
    it('Get Text', ()=>{
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get("#mp-otd-h2").getText().should('contain', "On this day")
    })
    it.only ('Optional PrevSubject', ()=>{
        cy.visit('https://play2.automationcamp.ir/')
        cy.get('h4').first().getTextOptional().should('contain','photo')
        cy.getTextOptional('h1').should('contain', 'Automation Testing')
    })
})