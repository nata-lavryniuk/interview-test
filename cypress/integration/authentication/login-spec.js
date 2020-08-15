import authentication from '../../pageObjects/authentication_page'

describe('01 Login and Logout', function () {

  beforeEach(function () {
    cy.allure().step('Navigate to Home Page')
    cy.visit('/')
  })

  it('case 1 check Signin button redirect to Login page', () => {
    authentication.signinButtonClick()
    authentication.verifyLoginPage()
  })

  it('case 2 check successful login', () => {
    authentication.login()
  })

  it('case 3 check unsuccessful login', () => {
    authentication.signinButtonClick()
    authentication.authenticate('wrongusername', 'wrongpassword')
    authentication.verifyUnsuccessfulLogin();
  })

  it('case 4 check logout', () => {
    authentication.login()
    authentication.logout()
    authentication.verifyMainPage()
  })

})