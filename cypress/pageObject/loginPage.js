class LoginPage
{
    getUsername()
    {
        return cy.get('[data-test="username"]')
    }
    
    getPassword()
    {
        return cy.get('[data-test="password"]')
    }

    getLoginButton()
    {
        return cy.get('#login-button')
    }

    getErrorMsg()
    {
        return cy.get('[data-test="error"]')
    }
}

export default LoginPage