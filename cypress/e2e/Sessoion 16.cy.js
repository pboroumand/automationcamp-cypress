/// <reference types="cypress"/>

describe ('Iframe', ()=>{
    it.only('Iframe 1',()=>{
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('#frame1').then(function($fr){
            const frcont = $fr.contents().find('body')
            cy.wrap(frcont).find('#click_me_1').click()
        })
    })
    it('asserting',()=>{
        cy.visit('')
    })
    it('asserting',()=>{
        cy.visit('')
    })
})