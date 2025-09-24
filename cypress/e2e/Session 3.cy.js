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
    it('Long Press', ()=>{
        cy.visit('https://demos.telerik.com/kendo-ui/circular-gauge/index')
        cy.get('#onetrust-accept-btn-handler').click()
        cy.get('.k-draghandle').invoke('attr','aria-valuenow').should('equal','55')
        cy.get('.k-button-increase').trigger('mousedown',{which:1}).wait(3000).trigger('mouseup',{force:true})
        cy.get('.k-draghandle').invoke('attr','aria-valuenow').should('not.equal','55')
    })
    it('Drag & Drop', ()=>{
        cy.visit('https://play1.automationcamp.ir/mouse_events.html')
        cy.get('#drop_target').should('have.class', 'bg-success')
        const dataTransfer = new DataTransfer();
        cy.get('#drag_source').trigger('dragstart', { dataTransfer });
        cy.get('#drop_target')
        .trigger('dragenter', { dataTransfer })
        .trigger('dragover', { dataTransfer })
        .trigger('drop', { dataTransfer });
        cy.get('#drag_source').trigger('dragend', { dataTransfer });
        cy.wait(500)
        cy.get('#drop_target').should('have.class', 'bg-danger')
    })
    it.only('Scrolling',()=>{
        cy.visit('https://datatables.net/examples/basic_init/scroll_xy.html')
        cy.get('.dt-scroll-headInner').scrollIntoView()
        cy.get('.dt-scroll-body').scrollTo('right')
        cy.get(':nth-child(4) > :nth-child(9)').click()
        should('have.text','b.greer@datatables.net')
    })
})