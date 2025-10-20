/// <reference types="cypress"/>

describe ('API Testing', ()=>{
    it('Get country Info',()=>{
        cy.request('https://restcountries.com/v3.1/name/germany').then($resp=>{
            expect($resp.status).to.eq(200)
            expect($resp.body[0].continents[0]).eq('Europe')
        })
    })
    it.only('Get and Post',()=>{
        cy.request('https://restcountries.com/v3.1/name/australia').then($response=>{
            expect($response.status).to.eq(200)
            let currencykey= Object.keys($response.body[0]["currencies"])
            cy.request("post","https://webhook.site/7b52ac40-cf8b-49c2-bf68-7e031397ecb7",{
                name: "Australia",
                capital: $response.body[0].capital[0],
                Currency: currencykey[0]
            })
            cy.request("get","https://webhook.site/7b52ac40-cf8b-49c2-bf68-7e031397ecb7").then($respo=>{
                let result={}
                $respo.body.forEach(item=>{
                    if (item.name==="Australia"){
                        result=item
                    }
                })
                expect(result).not.to.empty
                expect(result.capital).to.eq("Canbera")
                expect(result.Currency).to.eq('AUD')
            })
        })
    })
    it('asserting',()=>{
        cy.visit('')
    })
})