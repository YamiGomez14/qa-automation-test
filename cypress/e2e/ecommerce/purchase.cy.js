import LoginPage from '../../pages/LoginPage';
import InventoryPage from '../../pages/InventoryPage';
import CartPage from '../../pages/CartPage';
import CheckoutPage from '../../pages/CheckoutPage';
import OverviewPage from '../../pages/OverviewPage';

describe('SauceDemo Purchase Flow Devsu Test', () => {

  const loginPage = new LoginPage();
  const inventoryPage = new InventoryPage();
  const cartPage = new CartPage();
  const checkoutPage = new CheckoutPage();
  const overviewPage = new OverviewPage();

  beforeEach(() => {
    cy.fixture('user').as('userData');
  })

  it('Should complete a purchase successfully', function () {

    loginPage.visit();

    loginPage.login(
      this.userData.username,
      this.userData.password
    )

    cy.url().should('include', '/inventory')

    inventoryPage.addBackpackToCart();
    inventoryPage.addBikeLightToCart();

    inventoryPage.validateCartBadge(2);

    inventoryPage.openCart();

    cartPage.validateProducts();

    cartPage.clickCheckout();

    checkoutPage.fillCheckoutInformation(
      this.userData.firstName,
      this.userData.lastName,
      this.userData.postalCode
    )

    checkoutPage.continueCheckout();

    overviewPage.finishPurchase();

    overviewPage.validateSuccessfulPurchase();
  });
});