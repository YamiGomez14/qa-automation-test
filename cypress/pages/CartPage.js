class CartPage {

  elements = {

    backpackItem: () =>
      cy.contains('Sauce Labs Backpack'),

    bikeLightItem: () =>
      cy.contains('Sauce Labs Bike Light'),

    checkoutButton: () =>
      cy.get('[data-test="checkout"]')
  }

  clickCheckout() {

    this.elements.checkoutButton()
      .click();
  }
}

export default CartPage;