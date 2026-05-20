class InventoryPage {

  addBackpackToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  addBikeLightToCart() {
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  }

  validateCartBadge(count) {
    cy.get('.shopping_cart_badge').should('contain', count);
  }

  openCart() {
    cy.get('.shopping_cart_link').click();
  }
}

export default InventoryPage;