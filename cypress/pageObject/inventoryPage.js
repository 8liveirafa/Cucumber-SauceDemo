class InventoryPage
{
    getAddToCart_1()
    {
        return cy.get(':nth-child(1) > .pricebar > .btn_primary')
    }

    getAddtoCart_2()
    {
        return cy.get('.btn_primary')
    }

    getAddtoCart_3()
    {
        return cy.get(':nth-child(4) > .pricebar > .btn_primary')
    }

    getRemove1()
    {
        return cy.get('.btn_secundary')
    }
    getRemove2()
    {
        return cy.get('.btn_secundary')
    }

    getJacket()
    {
        return cy.get('#item_5_img_link')
    }

    getCart()
    {
        return cy.get('.fa-layers-counter')
    }
    
}

export default InventoryPage