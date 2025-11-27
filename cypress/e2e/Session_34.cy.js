/// <reference types="cypress"/>

describe ('working with database', ()=>{
    before (function(){
        cy.task('queryDb', "insert into ac.Users(userId, userName, email, city) values (3, 'admin', 'admin@test.com', 'Tehran');")
    })
    it('creating table',()=>{
        cy.task('queryDb', 'create table ac.Users (userId int, userName varchar(255), email varchar(255), city varchar(255))')
    })
    it('02-Insert & Select record', function (){
        cy.task('queryDb', "insert into ac.Users(userId, userName, email, city) values (2, 'reza', 'reza@test.com', 'Shiraz');")
        cy.task('queryDb', "select * from ac.Users").then(res => {
            cy.log(res)
            expect(res[0].userName).to.equal('reza')
        })
    })
    it.only('login test',()=>{
        cy.visit('https://play1.automationcamp.ir/login.html')
        cy.task('queryDb', "select * from ac.users").then (res => {
            cy.get('#user').type(res.at(-1).userName)
            cy.get('#password').type(res.at(-1).userName)
        })
        cy.get('#login').click()
        cy.get('#submit_button').should('be.visible')
    })
    after(function(){
        cy.task('queryDb', "delete from ac.users where userName='admin'")
    })
})