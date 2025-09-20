/// <reference types="cypress" />

//cy.visit ('https://datatables.net/examples/basic_init/scroll_xy.html')

describe ('Locate Elements', ()=>{
    it ('cy get', ()=> {
        cy.visit('https://play2.automationcamp.ir/index.html')
        // cy.contains('.main > :nth-child(1)','This is your layout')
        //cy.get('.main').find('h2').contains('This is').should('contain.text','This is your layout two')
        cy.get('.main').within(()=>{
            cy.get('h2').eq(0).should('contain.text','This is your layout two')
        })
        cy.get('td').filter('#td_id').should('contain.text','Smith')
    })
})