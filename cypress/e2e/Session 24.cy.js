/// <reference types="cypress"/>
import { loginPage } from "./pages/loginPage"
import { dashboardPage } from "./pages/dashboardPage"
import { adminPage } from "./pages/adminPage"

let login = new loginPage
let dashboard = new dashboardPage
let admin = new adminPage

describe ('Page Object Model - POM', ()=>{
    context ('Login page', ()=>{
        it('verify valid login',()=>{
            login.openLoginPage()
            login.enterUserName('Admin')
            login.enterPassword('admin123')
            login.clickOnLoginButton()
            dashboard.verifyProfileButtonExists()
        })
        it('verify invalid login',()=>{
            login.openLoginPage()
            login.enterUserName('Admin')
            login.enterPassword('admi')
            login.clickOnLoginButton()
            login.verifyInvalidCredMessage()
        })
    })
    context ('Admin page', ()=>{
        beforeEach(()=>{
            cy.session('userSession', ()=> {
                login.loginWithAdminUser()
                dashboard.verifyProfileButtonExists()
            })
        })
        it('search by username',()=>{
            admin.visitAdminPage()
            admin.fillUsername('Admin')
            admin.search()
            cy.contains('(1) Record Found')
            //cy.findByPlaceholderText('sth')
            //cy.api('')
        })
        it('search by role',()=>{
            admin.visitAdminPage()
            admin.fillRole()
            admin.search()
            cy.contains('(3) Records Found')
        })
    })
})