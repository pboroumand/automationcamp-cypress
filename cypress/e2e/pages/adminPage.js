let locators= require ('./locators')
export class adminPage {

visitAdminPage () {
    return cy.visit(locators.ADMINPAGE.URL_ADMIN)
}

fillUsername (username) {
    return cy.get(locators.ADMINPAGE.USER_NAME_ADMIN).type(username)
}

fillRole () {
    cy.get(locators.ADMINPAGE.USER_ROLE_INPUT_ADMIN).eq(0).click()
    return cy.get(locators.ADMINPAGE.USER_ROLE_DROPDOWN_ADMIN).click()
}

search() {
    return cy.get(locators.ADMINPAGE.SEARCH_BUTTON_ADMIN).click()
}

}