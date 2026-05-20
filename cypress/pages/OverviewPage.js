class OverviewPage {

  elements = {

    finishButton: () =>
      cy.get('[data-test="finish"]'),

    successMessage: () =>
      cy.contains('Thank you for your order!'),

    overviewTitle: () =>
      cy.contains('Checkout: Overview')
  }

  validateCheckoutOverview() {

    this.elements.overviewTitle()
      .should('be.visible');
  }

  finishPurchase() {

    this.elements.finishButton()
      .should('be.visible')
      .click();
  }

  validateSuccessfulPurchase() {

    this.elements.successMessage()
      .should('be.visible');
  }
}

export default OverviewPage;