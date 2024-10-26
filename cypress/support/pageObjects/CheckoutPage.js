class CheckoutPage {
    fillCheckoutForm(firstName, lastName, postalCode) {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#postal-code').type(postalCode);
        cy.get('#continue').click();
    }

    verifyOrderSummary(productName, productPrice, productDescription) {
        cy.get('.inventory_item_name').should('contain', productName);
        cy.get('.inventory_item_price').should('contain', productPrice);
        cy.get('.inventory_item_desc').should('contain', productDescription);
    }

    completePurchase() {
        cy.get('#finish').click();
    }
}

export default CheckoutPage;