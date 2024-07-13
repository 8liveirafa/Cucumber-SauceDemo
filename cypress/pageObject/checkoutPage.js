class CheckoutPage
{
    getCheckoutButton()
    {
        return cy.get('.btn_action')
    }
    getFirstName()
    {
        return cy.get('[data-test="firstName"]')
    }

    getLastName()
    {
        return cy.get('[data-test="lastName"]')
    }

    getPostalCode()
    {
        return cy.get('[data-test="postalCode"]')
    }
}

export default CheckoutPage