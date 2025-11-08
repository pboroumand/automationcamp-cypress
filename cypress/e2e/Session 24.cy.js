/// <reference types="cypress"/>
import { loginPage } from "./pages/loginPage"
import { dashboardPage } from "./pages/dashboardPage"

let login = new loginPage
let dashboard = new dashboardPage

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
    // context ('Admin page', ()=>{
    //     beforeEach(()=>{
    //         cy.session('userSession', ()=> {
    //             login.loginWithAdminUser()
    //             dashboard.verifyProfileButtonExists()
    //         })
    //     })
    //     it('verify filter users by username',()=>{
    //         login.openLoginPage()
    //         login.enterUserName('Admin')
    //         login.enterPassword('admin123')
    //         login.clickOnLoginButton()
    //         dashboard.verifyProfileButtonExists()
    //     })
    //     it('verify filter users by username',()=>{
    //         login.openLoginPage()
    //         login.enterUserName('Admin')
    //         login.enterPassword('admi')
    //         login.clickOnLoginButton()
    //         login.verifyInvalidCredMessage()
    //     })
    // })
})