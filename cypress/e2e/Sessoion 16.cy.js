/// <reference types="cypress"/>

describe ('Iframe', ()=>{
    it('Iframe 1',()=>{
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('#frame1').then(function($fr){
            const frcont = $fr.contents().find('body')
            cy.wrap(frcont).find('#click_me_1').click()
        })
    })
    it.only('nested iframe',()=>{
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('#frame1').then(function($fr1){
            const frcont1 = $fr1.contents().find('#frame2')
            cy.wrap(frcont1).as('fr2ref')
            cy.get('@fr2ref').then(function($fr2){
                const frcont2= $fr2.contents().find('body')
                cy.wrap(frcont2).find('#click_me_2').should('have.text','Click Me 2')
                cy.wrap(frcont2).find('#click_me_2').click()
                cy.wrap(frcont2).find('#click_me_2').should('have.text','Clicked')
            })
        })
    })
    it('asserting',()=>{
        cy.visit('')
    })
})