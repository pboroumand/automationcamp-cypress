/// <reference types="cypress"/>

//const { Runnable } = require("mocha")

describe ('Debugging', ()=>{
    it('console',()=>{
        console.time('myTimer')
        cy.visit('https://www.play1.automationcamp.ir/')
        console.timeEnd('myTimer')
        let user={
            name: "Parni",
            age: 36,
            job: "Automation Test Engineer"
        }
        console.table(user)
        console.assert(2==3)
        console.assert(2==2)
        let cities= ["Paris", "Rome", "Shahi"]
        console.table(cities)
        console.group("Second Group")
        console.log("Some texts...")
        console.warn('This is your last warning!')
        console.groupEnd()
        Cypress.log({
            name: 'Set Item',
            displayName: 'Loging in...',
            message: 'user: Parni',
            consoleProps: ()=>{
                return{
                    user: 'Parni',
                    password: '***',
                }
            }
        })
    })
    it.only('handling application errors',()=>{
        cy.on('uncaught: exception', (e, Runnable)=>{
            console.log(e)
            console.log(Runnable)
            // ignore the error
            return false
        })
        cy.visit('uncaught-exception.html')
        cy.get('#error').click()
        cy.screenshot("Element Screenshot")
        cy.wait(2000)
    })
    it('asserting',{defaultCommandTimeout:7000},()=>{
        cy.visit('https://www.play1.automationcamp.ir/')
    })
})