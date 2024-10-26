class CheckoutCompletePage {
    verifySuccessMessage() {
        cy.get('.complete-header').should('contain', 'Thank you for your order!');
    }
}

export default CheckoutCompletePage;