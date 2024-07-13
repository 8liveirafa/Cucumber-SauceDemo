import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import InventoryPage from "../../pageObject/inventoryPage";
import LoginPage from "../../pageObject/loginPage";
const loginPage = new LoginPage
const inventoryPage = new InventoryPage


//TC01 - Adding the first product to the cart
Given("My login was sucesseful and I'm on the inventory page", () => {
    cy.visit(Cypress.env('url'))
    loginPage.getUsername().type('standard_user')
    loginPage.getPassword().type('secret_sauce')
    loginPage.getLoginButton().click()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
})
//TC02 - Adding product directly of product page
Given("My login was sucesseful and I'm on the inventory page", () => {
    cy.visit(Cypress.env('url'))
    loginPage.getUsername().type('standard_user')
    loginPage.getPassword().type('secret_sauce')
    loginPage.getLoginButton().click()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
})
//TC03 - Confirming that the product was added to the cart
Given("My login was sucesseful and I'm on the inventory page", () => {
    cy.visit(Cypress.env('url'))
    loginPage.getUsername().type('standard_user')
    loginPage.getPassword().type('secret_sauce')
    loginPage.getLoginButton().click()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
})

//TC01 - Adding the first product to the cart
When("I choose the first product", () => {
    cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    inventoryPage.getAddToCart_1().should('be.visible')
})
//TC02 - Adding product directly of product page
When("I want to buy a jacket and I click on the product to go to your page", () => {
    //inventoryPage.getJacket().should('be.visible')
    inventoryPage.getJacket().click({force:true})
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory-item.html?id=5')
})
//TC03 - Confirming that the product was added to the cart
When("I choose the product that I want", () => {
    inventoryPage.getAddToCart_1().click()
    inventoryPage.getAddtoCart_3().click({force:true})
}) 


//TC01 - Adding the first product to the cart
And("I'll click in a button 'Add To Cart'", () => {
    inventoryPage.getAddToCart_1().click({force:true})
})
//TC02 - Adding product directly of product page
And("I will click in a button 'Add To Cart'", () => {
    inventoryPage.getAddtoCart_2().click({force:true})
})
//TC03 - Confirming that the product was added to the cart
And("I click on the Cart, to go to your page", () => {
    inventoryPage.getCart().click()
    cy.url().should('eq', 'https://www.saucedemo.com/v1/cart.html')
})


//TC01 - Adding the first product to the cart
Then("The button 'Add to Cart' change to button 'Remove'", () => {
    cy.get('.btn_secondary').should('have.text', 'REMOVE')
    .and('be.visible')
})    
//TC02 - Adding product directly of product page
Then("The button 'Add to Cart' change to button 'Remove'", () => {
    cy.get('.btn_secondary').should('have.text', 'REMOVE')
    .and('be.visible')
})
//TC03 - Confirming that the product was added to the cart
Then("I can see my products and yours quantity", () => {
    inventoryPage.getCart().should('have.text', '2')
    cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack')
    cy.get('#item_5_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Fleece Jacket')
}) 


//TC01 - Adding the first product to the cart
And("I can see the product inside the cart", () => {
    cy.get(".fa-layers-counter").should('have.text', '1')
})
//TC02 - Adding product directly of product page
And("I can see the product inside the cart", () => {
    inventoryPage.getCart().should('have.text', '1')
})

