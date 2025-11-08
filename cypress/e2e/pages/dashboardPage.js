export class dashboardPage {
    verifyProfileButtonExists(){
        return cy.get('p.oxd-userdropdown-name').should('be.visible')
    }
}