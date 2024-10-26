class InventoryPage {
    selectProduct(productName) {
        cy.get('.inventory_item').contains(productName).click();
    }

    getProductPrice() {
        return cy.get('.inventory_details_price').invoke('text');
    }

    getProductDescription() {
        return cy.get('[data-test="inventory-item-desc"]').invoke('text');
    }

    addToCart() {
        cy.get('#add-to-cart').click();
    }

    goToCart() {
        cy.get('#shopping_cart_container').click();
    }
}

export default InventoryPage;