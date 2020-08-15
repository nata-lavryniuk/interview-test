import authentication from '../../pageObjects/authentication_page'
import payBills from '../../pageObjects/pay_bills_page'
import purchaseForeignCurrency from '../../pageObjects/purchase_foreign_currency_page'

describe('04 Purchase Exchange', function () {
    beforeEach(function () {
        cy.allure().step('Navigate to Home Page')
        cy.visit('/')
    })

    it('case 1 check purchase exchange', () => {
        authentication.login()
        payBills.open()
        payBills.purchaseForeignCurrencyTabClick()
        purchaseForeignCurrency.selectCurrency('Canada (dollar)')
        purchaseForeignCurrency.typeAmount(1)
        purchaseForeignCurrency.selectUSDRadioButtonClick()
        purchaseForeignCurrency.calculateCostsButtonClick()
        purchaseForeignCurrency.verifyConversionAmountMessage('0.94 dollar (CAD) = 1.00 U.S. dollar (USD)')
        purchaseForeignCurrency.purchaseButtonClick()
        purchaseForeignCurrency.verifySuccessfullyPurchased()
    })
})