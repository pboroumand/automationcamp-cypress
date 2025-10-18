/// <reference types="cypress"/>

describe ('Iframe', ()=>{
    it('Iframe 1',()=>{
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('#frame1').then(function($fr){
            const frcont = $fr.contents().find('body')
            cy.wrap(frcont).find('#click_me_1').click()
        })
    })
    it('nested iframe 1',()=>{
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
    it('nested iframe 2',()=>{
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('#frame1').then(function($ifr1){
            const ifr3Cont= $ifr1.contents().find('#frame3')
            cy.wrap(ifr3Cont).as('ifrEl3')
            cy.get('@ifrEl3').then(function($ifr3){
                const ifr4Cont= $ifr3.contents().find('#frame4')
                cy.wrap(ifr4Cont).as('ifrEl4')
                cy.get('@ifrEl4').then(function($ifr4){
                    const ifr4ContBod= $ifr4.contents().find('body')
                    cy.wrap(ifr4ContBod).find('#click_me_4').should('have.text','Click Me 4')
                    cy.wrap(ifr4ContBod).find('#click_me_4').click()
                    cy.wrap(ifr4ContBod).find('#click_me_4').should('have.text','Clicked')
                })
            })
        })
    })
    it('iframe different solution',()=>{
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('#frame1')
            .its('0.contentDocument')
            .should('exist')
            .its('body')
            .should('not.be.undefined')
            .find('#click_me_1').click().should('have.text','Clicked')
    })
    it.only('Nested iframe different solution', ()=>{
        cy.visit('https://play1.automationcamp.ir/frames.html')
        cy.get('#frame1')
            .its('0.contentDocument')
            .its('body')
            .should('not.be.undefined')
            .find('#frame2')
            .its('0.contentDocument')
            .its('body')
            .should('not.be.undefined')
            .find('#click_me_2').click().should('have.text','Clicked')
    })
})