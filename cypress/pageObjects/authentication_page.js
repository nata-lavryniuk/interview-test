const LOGIN_INPUT_FIELD = '#user_login'
const PASSWORD_INPUT_FIELD = '#user_password'
const USER_EMAIL_INPUT_FIELD = '#user_email'

const SIGNIN_BUTTON = 'button[id="signin_button"]'
const SUBMIT_BUTTON = 'input[type=submit]'
const LOGOUT_BUTTON = '#logout_link'
const SEND_PASSWORD_BUTTON = 'Send Password'
const FORGOT_PASSWORD_BUTTON = 'Forgot your password ?'

const USER_MENU = '.icon-user'

const MAIN_PAGE_TITLE = 'Zero - Personal Banking - Loans - Credit Cards'
const LOGIN_PAGE_TITLE = 'Zero - Log in'
const ACCOUNT_SUMMARY_PAGE_TITLE = 'Zero - Account Summary'
const FORGOTTEN_PASSWORD_PAGE_TITLE = 'Zero - Forgotten Password'

class authentication_page {

    static signinButtonClick() {
        cy.allure().step('signin button click')
        cy.get(SIGNIN_BUTTON).click()
    }

    static forgotPasswordButtonClick() {
        cy.allure().step('forgot password button click')
        cy.contains(FORGOT_PASSWORD_BUTTON).should('exist').click()
    }

    static sendPasswordButtonClick() {
        cy.allure().step('send password button click')
        cy.contains(SEND_PASSWORD_BUTTON).should('exist').click()
    }
    
    static forgotPasswordTypeEmail(email) {
        cy.get(USER_EMAIL_INPUT_FIELD).type(email)
    }

    static authenticate(login, password) {
        cy.allure().step('authenticate')
        cy.get(LOGIN_INPUT_FIELD).type(login)
        cy.get(PASSWORD_INPUT_FIELD).type(password)
        cy.get(SUBMIT_BUTTON).click()
    }

    static login() {
        cy.allure().step('login')
        this.signinButtonClick()
        this.authenticate(Cypress.env('LOGIN'), Cypress.env('PASSWORD'))
        this.verifySuccessfulLogin()
    }

    static logout() {
        cy.allure().step('logout')
        cy.get(USER_MENU).click()
        cy.get(LOGOUT_BUTTON).click()
    }

    static verifySuccessfulLogin() {
        cy.allure().step('verifySuccessfulLogin')
        cy.url().should('include', '/bank/account-summary.html')
        cy.title().should('eq', ACCOUNT_SUMMARY_PAGE_TITLE)
    }

    static verifyUnsuccessfulLogin() {
        cy.allure().step('verifyUnsuccessfulLogin')
        cy.url().should('include', '/login.html?login_error=true')
        cy.title().should('eq', LOGIN_PAGE_TITLE)
        cy.get('.alert').should('contain', 'Login and/or password are wrong.')
    }

    static verifyMainPage() {
        cy.allure().step('verifyMainPage');
        cy.url().should('include', '/index.html')
        cy.title().should('eq', MAIN_PAGE_TITLE)
    }

    static verifyLoginPage() {
        cy.allure().step('verifyLoginPage')
        cy.url().should('include', '/login.html')
        cy.contains('Log in to ZeroBank')
        cy.title().should('eq', LOGIN_PAGE_TITLE)
    }

    static verifyForgottenPasswordPage() {
        cy.allure().step('verifyForgottenPasswordPage')
        cy.contains('Forgot your password ?').should('exist').click()
        cy.url().should('include', '/forgot-password.html')
        cy.title().should('eq', FORGOTTEN_PASSWORD_PAGE_TITLE)
    }

}

export default authentication_page