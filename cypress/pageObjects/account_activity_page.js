const AMOUNT_FROM_INPUT_FIELD = '#aa_fromAmount'
const AMOUNT_TO_INPUT_FIELD = '#aa_toAmount'

const FIND_BUTTON = 'button[type=submit]'
const FIND_TRANSACTIONS_BUTTON = 'Find Transactions'

const TRANSACTION_TYPE_SELECT = '#aa_type'

const ACCOUNT_ACTIVITY_TAB = '#account_activity_tab'

const FILTERED_TRANSACTIONS_FOR_ACCOUNT_RESULT_TABLE = '#filtered_transactions_for_account'

const ACCOUNT_ACTIVITY_PAGE_TITLE = 'Zero - Account Activity'

class account_activity_page {

    static accountActivityTabClick() {
        cy.allure().step('click account activity tab')
        cy.get(ACCOUNT_ACTIVITY_TAB).click()
    }

    static findTransactionsTabClick() {
        cy.allure().step('click find transactions tab')
        cy.contains(FIND_TRANSACTIONS_BUTTON).click()
    }

    static findButtonClick() {
        cy.allure().step('click find button')
        cy.get(FIND_BUTTON).click()
    }

    static typeAmountFromTo(from, to) {
        cy.allure().step('type amount');
        cy.get(AMOUNT_FROM_INPUT_FIELD).type(from)
        cy.get(AMOUNT_TO_INPUT_FIELD).type(to)
    }

    static selectTransactionType(typeName) {
        cy.allure().step('selectTransactionType')
        cy.get(TRANSACTION_TYPE_SELECT).select(typeName)
    }

    static verifyPageContainsText(...theArgs) {
        cy.allure().step('verifyOfficeSupplyTransaction')
        for (const key in theArgs) {
            cy.contains(key)
        }
    }

    static verifyResultsShowed() {
        cy.allure().step('verifyResultsShowed');
        cy.get(FILTERED_TRANSACTIONS_FOR_ACCOUNT_RESULT_TABLE).click()
    }
    
    static verifyNoResultsMessageShowed() {
        cy.allure().step('verifyNoResultsShowed');
        cy.get(FILTERED_TRANSACTIONS_FOR_ACCOUNT_RESULT_TABLE).click()
        cy.contains('No results.')
    }

    static verifyAccountActivityPage() {
        cy.allure().step('verifyAccountActivityPage');
        cy.url().should('include', '/bank/account-activity.html')
        cy.title().should('eq', ACCOUNT_ACTIVITY_PAGE_TITLE)
    }

}

export default account_activity_page