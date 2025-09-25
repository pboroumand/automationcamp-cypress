/// <reference types="cypress"/>

describe('then',()=>{
    it('.then', ()=>{
        cy.visit('https://play1.automationcamp.ir/login.html')
        cy.get('#user').type('parni').then((usr)=>{
            let a = usr.val()
            debugger
            console.log(`The value is ${a}`)
        })
    })
})