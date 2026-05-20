import LoginPage from '../../pages/LoginPage'
import InventoryPage from '../../pages/InventoryPage'
import CartPage from '../../pages/CartPage'
import CheckoutPage from '../../pages/CheckoutPage'
import OverviewPage from '../../pages/OverviewPage'

describe('SauceDemo - Devsu', () => {

  const loginPage = new LoginPage()
  const inventoryPage = new InventoryPage()
  const cartPage = new CartPage()
  const checkoutPage = new CheckoutPage()
  const overviewPage = new OverviewPage()

  beforeEach(function () {

    cy.fixture('user').then((userData) => {

      this.userData = userData
    })

    loginPage.visit();
  })

  it('Should complete a purchase successfully', function () {

    // Login
    loginPage.login(
      this.userData.username,
      this.userData.password
    )

    // Login validations
    cy.url()
      .should('include', '/inventory')

    cy.contains('Products')
      .should('be.visible')

    // Add products
    inventoryPage.addBackpackToCart()

    inventoryPage.addBikeLightToCart()

    // Cart badge validation
    inventoryPage.elements.cartBadge()
      .should('contain', '2')

    // Open cart
    inventoryPage.openCart()

    // Product validations
    cartPage.elements.backpackItem()
      .should('be.visible')

    cartPage.elements.bikeLightItem()
      .should('be.visible')

    // Checkout
    cartPage.clickCheckout()

    // Checkout form validations
    checkoutPage.elements.firstNameInput()
      .should('be.visible')

    checkoutPage.fillCheckoutInformation(
      this.userData.firstName,
      this.userData.lastName,
      this.userData.postalCode
    )

    checkoutPage.continueCheckout()

    // Overview validations
    overviewPage.elements.overviewTitle()
      .should('be.visible')

    // Finish purchase
    overviewPage.finishPurchase()

    // Success validation
    overviewPage.elements.successMessage()
      .should('be.visible')
  })
})