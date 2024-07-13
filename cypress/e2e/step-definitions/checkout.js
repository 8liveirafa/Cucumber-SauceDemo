import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../pageObject/loginPage";
import CheckoutPage from "../../pageObject/checkoutPage";
import InventoryPage from "../../pageObject/inventoryPage";
const loginPage = new LoginPage
const checkoutPage = new CheckoutPage
const inventoryPage = new InventoryPage


beforeEach( () => {
Given("My login was sucesseful and I'm on the inventory page", () => {
    cy.visit(Cypress.env('url'))
    loginPage.getUsername().type('standard_user')
    loginPage.getPassword().type('secret_sauce')
    loginPage.getLoginButton().click()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
    })
})

//TC01 - I want to complete the purchase of products sucessefully
When("I select the product that I want", () => {
    inventoryPage.getAddToCart_1().click()
    cy.get('.btn_secondary').should('have.text', 'REMOVE')
    .and('be.visible')
})


//TC01 - I want to complete the purchase of products sucessefully
And("I click on the Cart button and click on the Checkout button", () => {
    inventoryPage.getCart().should('have.text', '1')
    inventoryPage.getCart().click()
    checkoutPage.getCheckoutButton().click()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/checkout-step-one.html')

})


//TC01 - I want to complete the purchase of products sucessefully
Then("I fill in the data: First Name, Last Name and Postal Code", () => {
    checkoutPage.getFirstName().type('Rafael')
    checkoutPage.getLastName().type('Oliveira')
    checkoutPage.getPostalCode().type('1234-123')
    cy.get('.btn_primary').click()
})


//TC01 - I want to complete the purchase of products sucessefully
And("I'm taken to the purchase summary page and I click the Finish button to complete the purchase", () => {
    cy.get('.inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    .and('be.visible')
    cy.get('.summary_quantity').should('have.text','1')
    .and('be.visible')
    cy.get('.btn_action').click()
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
    .and('be.visible')
    cy.get('.pony_express').should('be.visible')
})
