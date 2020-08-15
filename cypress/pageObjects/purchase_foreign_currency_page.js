const AMOUNT_INPUT_FIELD = '#pc_amount'

const CONVERSION_AMOUNT_OUTPUT = '#pc_conversion_amount'

const CALCULATE_COSTS_BUTTON = '#pc_calculate_costs'
const PURCHASE_BUTTON = '#purchase_cash'

const USD_RADIO_BUTTON = '#pc_inDollars_true'

const CURRENCY_SELECT = '#pc_currency'

class purchase_foreign_currency_page {

    static selectCurrency(currency) {
        cy.allure().step('select currency')
        cy.get(CURRENCY_SELECT).select(currency)
    }

    static typeAmount(amount) {
        cy.allure().step('type amount')
        cy.get(AMOUNT_INPUT_FIELD).type(amount)
    }

    static selectUSDRadioButtonClick() {
        cy.allure().step('select USD');
        cy.get(USD_RADIO_BUTTON).click()
    }

    static calculateCostsButtonClick() {
        cy.allure().step('calculate costs')
        cy.get(CALCULATE_COSTS_BUTTON).click()
    }

    static purchaseButtonClick() {
        cy.allure().step('purchase button')
        cy.get(PURCHASE_BUTTON).click()
    }
    
    static verifyConversionAmountMessage(message) {
        cy.get(CONVERSION_AMOUNT_OUTPUT).should('have.text', message)
    }

    static verifySuccessfullyPurchased() {
        cy.get('#alert_content').should('have.text', 'Foreign currency cash was successfully purchased.')
    }

}

export default purchase_foreign_currency_page