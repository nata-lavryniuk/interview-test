import authentication from '../../pageObjects/authentication_page'

describe('02 Forgotten Password', function () {

  beforeEach(function () {
    cy.allure().step('Navigate to Home Page')
    cy.visit('/')
  })

  it('case 1 check redirect to Forgotten Password page', () => {
    authentication.signinButtonClick()
    authentication.verifyForgottenPasswordPage()
  })

  it.skip('case 2 check email validation', () => {
    authentication.signinButtonClick()
    authentication.forgotPasswordButtonClick()
    authentication.forgotPasswordTypeEmail('notvalidemail')
    authentication.sendPasswordButtonClick()
    cy.contains('Error message email not valid')
  })

  it.skip('case 3 check email validation blank email field', () => {
    authentication.signinButtonClick()
    authentication.forgotPasswordButtonClick()
    authentication.sendPasswordButtonClick()
    cy.contains('Error message email not valid')
  })

  it('case 4 check message was sent to email', () => {
    authentication.signinButtonClick()
    authentication.forgotPasswordButtonClick()
    authentication.forgotPasswordTypeEmail('i@i.ua')
    authentication.sendPasswordButtonClick()
    cy.contains('Your password will be sent to the following email: i@i.ua')
  })

})

