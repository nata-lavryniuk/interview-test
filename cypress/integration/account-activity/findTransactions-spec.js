import authentication from '../../pageObjects/authentication_page'
import accountActivity from '../../pageObjects/account_activity_page'

describe('03 Find Transactions', function () {

  beforeEach(function () {
    cy.allure().step('Navigate to Home Page')
    cy.visit('/')
  })

  /**
   * Based on this test case I can create other test cases, more complex
   */
  it('case 1 check find Transactions', () => {
    authentication.signinButtonClick()
    authentication.authenticate(Cypress.env('LOGIN'), Cypress.env('PASSWORD'))
    authentication.verifySuccessfulLogin()
    accountActivity.accountActivityTabClick()
    accountActivity.verifyAccountActivityPage()
    accountActivity.findTransactionsTabClick()
    accountActivity.typeAmountFromTo(30, 60)
    accountActivity.selectTransactionType('Withdrawal')
    accountActivity.findButtonClick()
    accountActivity.verifyResultsShowed()
    accountActivity.verifyPageContainsText('2012-09-05', 'OFFICE SUPPLY', '50')
    accountActivity.selectTransactionType('Deposit')
    accountActivity.findButtonClick()
    accountActivity.verifyNoResultsMessageShowed()
  })

})