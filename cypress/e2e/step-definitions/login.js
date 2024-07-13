import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import LoginPage from "../../pageObject/loginPage";
const loginPage = new LoginPage 

beforeEach( () => {
    Given("I'm on the login page", () => {
        cy.visit(Cypress.env('url'))
    })
})


// TC-01
When("I set a registered my email", () => {
    loginPage.getUsername().type('standard_user')
})
//TC-02
When("I set a registered an wrong email", () => {
    loginPage.getUsername().type('wrong_standard_user')
})
//TC-03
When("I set a registered an wrong email ", () => {
    loginPage.getUsername().type('wrong_standard_user')
})
//TC-04
When("I set a registered my email ", () => {
    loginPage.getUsername().type('standard_user')
})
//TC-06
When("I set a registered my email ", () => {
    loginPage.getUsername().type('standard_user')
})


//TC-01
And ("I set a registered my password", () => {
    loginPage.getPassword().type('secret_sauce')
})
//TC-02
And ("I set a registered my wrong password", () => {
    loginPage.getPassword().type('wrong_secret_sauce')
})
//TC-03
And ("I set a registered my password", () => {
    loginPage.getPassword().type('secret_sauce')
})
//TC-04
And ("I set a registered an wrong password", () => {
    loginPage.getPassword().type('wrong_secret_sauce')
})
//TC-05
And ("I set a registered my password", () => {
    loginPage.getPassword().type('secret_sauce')
})





//TC-01
Then("I have a successful login", () => {
    loginPage.getLoginButton().click()
})
//TC-02
Then("I don't have a successful login", () => {
    loginPage.getLoginButton().click()
})
//TC-03
Then("I don't have a successful login", () => {
    loginPage.getLoginButton().click()
})
//TC-04
Then("I don't have a successful login", () => {
    loginPage.getLoginButton().click()
})
//TC-05
Then("I don't have a successful login", () => {
    loginPage.getLoginButton().click()
})
//TC-06
Then("I don't have a successful login", () => {
    loginPage.getLoginButton().click()
})
//TC-07
Then("I don't have a successful login", () => {
    loginPage.getLoginButton().click()
})




//TC-01
And("I'm forwarded to the inventory page", () => {
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html')
})
//TC-02
And("The error text appears: 'Epic sadface: Username and password do not match any user in this service'", () => {
    loginPage.getErrorMsg().should('be.visible')
    .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
}) 
//TC-O3
And("The error text appears: 'Epic sadface: Username and password do not match any user in this service'", () => {
    loginPage.getErrorMsg().should('be.visible')
    .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
}) 
//TC-O4
And("The error text appears: 'Epic sadface: Username and password do not match any user in this service'", () => {
    loginPage.getErrorMsg().should('be.visible')
    .and('have.text', 'Epic sadface: Username and password do not match any user in this service')
}) 
//TC-O5
And("The error text appears: 'Epic sadface: Username is required'", () => {
    loginPage.getErrorMsg().should('be.visible')
    .and('have.text', 'Epic sadface: Username is required')
}) 
//TC-O6
And("The error text appears: 'Epic sadface: Password is required'", () => {
    loginPage.getErrorMsg().should('be.visible')
    .and('have.text', 'Epic sadface: Password is required')
}) 
//TC-O7
And("The error text appears: 'Epic sadface: Username is required'", () => {
    loginPage.getErrorMsg().should('be.visible')
    .and('have.text', 'Epic sadface: Username is required')
}) 


