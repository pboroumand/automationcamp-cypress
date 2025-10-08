/// <reference types="cypress"/>

describe ('wrap', ()=>{
    it('asserting',()=>{
        let obj={fname:'Parni', lname: 'Boru'}
        cy.wrap(obj).should('have.a.property', 'lname','Boru')
        let a=['Cherry','Blue Berry', 'Water Melon']
        cy.wrap(a).should('include','Water Melon')
        let b='Hello World!'
        cy.wrap(b).should('eq','Hello World!')
    })
    it('Time out',()=>{
        setTimeout(function(){
            console.log('First log')
        }, 2000)
        console.log('Second log')
    })
    it('Using Promise',()=>{
        const pr= new Promise( function(resolve, reject){
            setTimeout(() => {
                console.log('First log')
            resolve()
            }, 2000);
        })
        pr.then(()=>{
            console.log('Second log')
        })
    })
    it.only('Wrap Promise',()=>{
        const food = function(foodName, waitTime){
            console.log('Start')
            return new Promise (resolve=>{
                setTimeout(() => {
                    console.log('inside function')
                    resolve({order:foodName})
                }, waitTime);
            })
        }
        let dinner= new food('Pizza', 3000)
        cy.wrap(dinner).should('have.a.property', 'order','Pizza')
    })
})