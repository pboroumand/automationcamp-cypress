/// <reference types="cypress"/>

describe ('wrap', ()=>{
    it.only('asserting',()=>{
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
    it('asserting',()=>{
        cy.visit('')
    })
    it('asserting',{defaultCommandTimeout:7000},()=>{
        cy.visit('https://www.play1.automationcamp.ir/')
    })
})