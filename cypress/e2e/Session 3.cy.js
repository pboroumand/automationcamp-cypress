/// <reference types="cypress"/>

describe ('Session 3', ()=>{
    it ('Keyboard', ()=>{
        cy.visit('https://play2.automationcamp.ir/index.html')
        cy.get('#fname').type('Cypress').realPress(['Home','ArrowRight','Backspace']).realPress(['Control','a']).realPress(['Control','x']).realPress(['Control','v'])
        cy.get('#fname').should('have.value','ypress')
    })
    it('Mouse Actions', ()=>{
        cy.visit('https://play1.automationcamp.ir/mouse_events.html')
        cy.get('#click_type').should('not.have.value')
        cy.get('#click_area').dblclick()
        cy.wait(1000)
        cy.get('#click_type').should('contain','Double-Click')
        cy.get('body').rightclick()
    })
    it('Hover', ()=>{
        cy.visit('https://play1.automationcamp.ir/mouse_events.html')
        cy.get('#hover_validate').should('not.have.value')
        cy.get('.dropbtn').realHover();
        cy.get('.dropdown-content').should('be.visible');
        cy.get('#dd_python').click()
        cy.get('#hover_validate').should('contain','Python')
    })
    it.only('Long Press', ()=>{
        cy.visit('https://demos.telerik.com/kendo-ui/circular-gauge/index')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.k-draghandle').invoke('attr','aria-valuenow').should('equal','55')
        cy.get('.k-button-increase').trigger('mousedown',{which:1}).wait(3000).trigger('mouseup',{force:true})
        cy.get('.k-draghandle').invoke('attr','aria-valuenow').should('not.equal','55')
    })
})