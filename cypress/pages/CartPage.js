class CartPage {

  validateProducts() {
    cy.contains('Sauce Labs Backpack');
    cy.contains('Sauce Labs Bike Light');
  }

  clickCheckout() {
    cy.get('[data-test="checkout"]').click();
  }
}

export default CartPage;