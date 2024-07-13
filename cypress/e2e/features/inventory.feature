Feature: Add to cart

    As a user, I'm in a inventory page so I can purchase products

    Scenario: TC01 - Adding the first product to the cart
        Given My login was sucesseful and I'm on the inventory page
        When I choose the first product
        And I'll click in a button 'Add To Cart'
        Then The button 'Add to Cart' change to button 'Remove'  
        And I can see the product inside the cart

    Scenario: TC02 - Adding product directly of product page
        Given My login was sucesseful and I'm on the inventory page
        When I want to buy a jacket and I click on the product to go to your page
        And I will click in a button 'Add To Cart'
        Then The button 'Add to Cart' change to button 'Remove'  
        And  I can see the product inside the cart

    Scenario: TC03 - Confirming that the product was added to the cart
        Given My login was sucesseful and I'm on the inventory page
        When I choose the product that I want 
        And I click on the Cart, to go to your page
        Then I can see my products and yours quantity
            

    
    
