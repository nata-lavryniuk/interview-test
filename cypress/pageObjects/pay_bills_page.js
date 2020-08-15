const PAY_BILLS_PAGE_TITLE = 'Zero - Pay Bills'

const PAY_BILLS_TAB = '#pay_bills_tab'
const PAY_SAVED_PAYEE_TAB = 'Pay Saved Payee'
const ADD_NEW_PAYEE_TAB = 'Add New Payee'
const PURCHASE_FOREIGN_CURRENCY_TAB = 'Purchase Foreign Currency'

class pay_bills_page {

    static open() {
        cy.allure().step('open pay bill tab')
        cy.get(PAY_BILLS_TAB).click()
        cy.url().should('include', '/bank/pay-bills.html')
        cy.title().should('eq', PAY_BILLS_PAGE_TITLE)
    }

    static paySavedPayeeTabClick() {
        cy.allure().step('click pay saved payee tab')
        cy.contains(PAY_SAVED_PAYEE_TAB).click()
    }

    static addNewPayeeTabClick() {
        cy.allure().step('click add new payee tab')
        cy.contains(ADD_NEW_PAYEE_TAB).click()
    }

    static purchaseForeignCurrencyTabClick() {
        cy.allure().step('click purchase foreign currency tab')
        cy.contains(PURCHASE_FOREIGN_CURRENCY_TAB).click()
    }
}

export default pay_bills_page