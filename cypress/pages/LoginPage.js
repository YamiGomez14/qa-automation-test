class LoginPage {

  elements = {

    usernameInput: () =>
      cy.get('[data-test="username"]'),

    passwordInput: () =>
      cy.get('[data-test="password"]'),

    loginButton: () =>
      cy.get('[data-test="login-button"]')
  }

  visit() {

    cy.visit('/')
  }

  typeUsername(username) {

    this.elements.usernameInput()
      .type(username);
  }

  typePassword(password) {

    this.elements.passwordInput()
      .type(password);
  }

  clickLogin() {

    this.elements.loginButton()
      .click();
  }

  login(username, password) {

    this.typeUsername(username);

    this.typePassword(password);

    this.clickLogin();
  }
}

export default LoginPage;