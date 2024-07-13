Feature: Checkout

    As a user, I want purchase one product sucessefully 

    Scenario: TC01 - I want to complete the purchase of products sucessefully
    Given My login was sucesseful and I'm on the inventory page
    When I select the product that I want
    And I click on the Cart button and click on the Checkout button
    Then I fill in the data: First Name, Last Name and Postal Code
    And I'm taken to the purchase summary page and I click the Finish button to complete the purchase

    