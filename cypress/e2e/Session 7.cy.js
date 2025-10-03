/// <reference types="cypress" />

describe('First spec', () => {
  it('Array', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.get("a[id*='js-link-box']").should('contain.text','日本語')
    cy.get("a[id*='js-link-box']").eq(-2).click()
  })
  it('Each', () => {
    cy.visit('https://www.wikipedia.org/')
    cy.get("a[id*='js-link-box']").each(function($el,index,$list){
      if (index===6){
        cy.wrap($el).click()
      }
    })
  })
  it('Table', () => {
    cy.visit('https://play2.automationcamp.ir/index.html')
    cy.scrollTo('bottom')
    cy.get('table th').eq(4).should('have.text','Occupation')
  })
  it('Table 2', () => {
    cy.visit('https://play2.automationcamp.ir/index.html')
    cy.scrollTo('bottom')
    cy.get('td').contains('Ross').parent().within(function(){
      cy.get('td').eq(4).should('have.text','Paleontogist')
    })
  })
  it('Table 3', () => {
    cy.visit('https://play2.automationcamp.ir/index.html')
    cy.scrollTo('bottom')
    cy.get('th').each(function($el, index){
      if ($el.text()==='Occupation'){
        cy.get('td').contains('Ross').parent().within(function(){
          cy.get('td').eq(index).should('have.text','Paleontogist')
        })
      }
    })
  })
  it('Table 3', () => {
    cy.visit('https://play2.automationcamp.ir/index.html')
    cy.scrollTo('bottom')
    cy.get('table tr').each(function($row, index){
      if (index>0){
        //cy.get('tr').eq(index).within(function(){
        cy.wrap($row).within(function(){
          cy.get('td').each(function($item){
            cy.log($item.text())
          })
        })
      }
    })
  })
  it.only('Table 4 - Asserting a User name', () => {
    cy.visit('https://play2.automationcamp.ir/index.html')
    cy.scrollTo('bottom')
    let list = []
    cy.get('table th').each(function($el,index){
      if ($el.text()==='Firstname'){
        cy.get(`tr>td:nth-child(${index+1})`).each(function($tdval){
          list.push($tdval.text())
        })
      }
    }).then(function(){
      cy.log(JSON.stringify(list))
      expect(list).to.contain('Pheobe')
    })
  })
})