const {
  Given,
  When,
  Then
} = require('@cucumber/cucumber')

const assert = require('assert')

const LoginPage =
  require('../pages/LoginPage')

const ProductPage =
  require('../pages/ProductsPage')

const CartPage =
  require('../pages/CartPage')

const CheckoutPage =
  require('../pages/CheckoutPage')

const testContext =
  require('../utils/testContext')

let loginPage
let productPage
let cartPage
let checkoutPage

Given(
  'el usuario inicia sesion en Saucedemo correctamente',

  async function () {

    loginPage =
      new LoginPage(testContext.page)

    await loginPage.navigate()

    await loginPage.login(
      'standard_user',
      'secret_sauce'
    )
  }
)

When(
  'el usuario agrega el producto al carrito y los podra visualizar en el carrito',
  async function (dataTable) {
    const productos = dataTable.rows().map(row => row[0]);
    productPage = new ProductPage(testContext.page);
    for (const producto of productos) {
      await productPage.addProduct(producto);
    }
      cartPage = new CartPage(testContext.page);
      await cartPage.goToCart();
      // Obtener los nombres de los productos en el carrito y compararlos con los productos agregados
      const cartItems = await testContext.page.$$eval('.cart_item .inventory_item_name', items => items.map(item => item.textContent));
      assert.deepStrictEqual(cartItems, productos);
      
  }
)

When(
  'el usuario completa la compra con los datos',
  async function (dataTable) {

    cartPage =
      new CartPage(testContext.page)
    await cartPage.goToCheckout()
    
    checkoutPage =
      new CheckoutPage(testContext.page)
      
      const formDataArray = dataTable.hashes()
    
    // Recorre cada fila y completa el formulario
    for (const formData of formDataArray) {
      for (const [field, value] of Object.entries(formData)) {
        await checkoutPage.fillForm(field, value)
      }
    }
      await checkoutPage.clickContinue()
      await checkoutPage.clickFinish()
    
  }
)

Then(
  'la compra se completa de forma exitosa con el mensaje {string}',
  async function (message) {
    const confirmationMessage = await checkoutPage.getOrderConfirmation()
    assert.strictEqual(confirmationMessage, message)
  }
)


