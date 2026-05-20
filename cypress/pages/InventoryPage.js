class InventoryPage {

  elements = {

    backpackButton: () =>
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),

    bikeLightButton: () =>
      cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]'),

    cartBadge: () =>
      cy.get('.shopping_cart_badge'),

    cartLink: () =>
      cy.get('.shopping_cart_link')
  }

  addBackpackToCart() {

    this.elements.backpackButton()
      .click();
  }

  addBikeLightToCart() {

    this.elements.bikeLightButton()
      .click();
  }

  openCart() {

    this.elements.cartLink()
      .click();
  }
}

export default InventoryPage;