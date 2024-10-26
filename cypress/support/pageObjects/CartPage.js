class CartPage {
    proceedToCheckout() {
        cy.get('#checkout').click();
    }
}

export default CartPage;