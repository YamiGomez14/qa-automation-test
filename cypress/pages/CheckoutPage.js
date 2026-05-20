class CheckoutPage {

  elements = {

    firstNameInput: () =>
      cy.get('[data-test="firstName"]'),

    lastNameInput: () =>
      cy.get('[data-test="lastName"]'),

    postalCodeInput: () =>
      cy.get('[data-test="postalCode"]'),

    continueButton: () =>
      cy.get('[data-test="continue"]')
  }

  fillCheckoutInformation(firstName, lastName, postalCode) {

    this.elements.firstNameInput()
      .type(firstName);

    this.elements.lastNameInput()
      .type(lastName);

    this.elements.postalCodeInput()
      .type(postalCode);
  }

  continueCheckout() {

    this.elements.continueButton()
      .click();
  }
}

export default CheckoutPage;