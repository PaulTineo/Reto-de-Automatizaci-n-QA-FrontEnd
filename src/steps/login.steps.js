const {
  Given,
  When,
  Then
} = require('@cucumber/cucumber')

const assert = require('assert')

const LoginPage =
  require('../pages/LoginPage')

const testContext =
  require('../utils/testContext')

let loginPage

Given(
  'el usuario ingresa al login de la pagina de Saucedemo',

  async function () {

    loginPage =
      new LoginPage(testContext.page)

    await loginPage.navigate()
  }
)

When(
  'el usuario ingresa las credenciales {string} y {string}',

  async function (user,pass) {

    await loginPage.login(
      user,
      pass
    )
  }
)

Then(
  'el usuario podra ver el apartado de productos',

  async function () {

    const successful = 
      await loginPage.loginSuccessful()

    assert.ok(
      successful.includes('Products')
    )
  }
)

Then(
  'el usuario visualizara mensaje de error {string}',

  async function (message) {

    const error =
      await loginPage.getErrorMessage()

    assert.ok(
      error.includes(message)
    )
  }
)