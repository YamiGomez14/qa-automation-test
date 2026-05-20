class OverviewPage {

  finishPurchase() {
    cy.get('[data-test="finish"]').click();
  }

  validateSuccessfulPurchase() {
    cy.contains('Thank you for your order!').should('be.visible');
  }
}

export default OverviewPage;