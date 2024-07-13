Feature: Login Funcionality

    As a user, I want to login to the system so I can purchase products

    Scenario: TC-01: Login with valid credentials
        Given I'm on the login page
        When I set a registered my email
        And I set a registered my password
        Then I have a successful login
        And I'm forwarded to the inventory page

    Scenario: TC-02: Login with invalid credentials
        Given I'm on the login page
        When I set a registered an wrong email 
        And I set a registered my wrong password
        Then I don't have a successful login
        And The error text appears: 'Epic sadface: Username and password do not match any user in this service'

    Scenario: TC-03: Login with invalid Username
        Given I'm on the login page
        When I set a registered an wrong email 
        And I set a registered my password
        Then I don't have a successful login
        And The error text appears: 'Epic sadface: Username and password do not match any user in this service'

    Scenario: TC-04: Login with invalid Password
        Given I'm on the login page
        When I set a registered my email 
        And I set a registered an wrong password
        Then I don't have a successful login
        And The error text appears: 'Epic sadface: Username and password do not match any user in this service'

    Scenario: TC-05: Login without Username
        Given I'm on the login page
        And I set a registered my password
        Then I don't have a successful login
        And The error text appears: 'Epic sadface: Username is required'

    Scenario: TC-06: Login without Password
        Given I'm on the login page
        When I set a registered my email 
        Then I don't have a successful login
        And The error text appears: 'Epic sadface: Password is required'

    Scenario: TC-07: Login without  credentials
        Given I'm on the login page
        Then I don't have a successful login
        And The error text appears: 'Epic sadface: Username is required'
    
    
