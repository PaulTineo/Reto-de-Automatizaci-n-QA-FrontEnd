const environment =
  require('../config/environment')

class LoginPage {

  constructor(page) {
    this.page = page
  }

  // Locators

  txtUsername = "//input[@id='user-name']"

  txtPassword = "//input[@id='password']"

  btnLogin = "//input[@id='login-button']"

  lblSuccessful = "//span[@data-test='title']"

  lblError = '[data-test="error"]'


  async navigate() {

    await this.page.goto(
      environment.baseUrl
    )
  }

  async login(user, pass) {

    await this.page.fill(
      this.txtUsername,
      user
    )

    await this.page.fill(
      this.txtPassword,
      pass
    )

    await this.page.click(
      this.btnLogin
    )
  }

  async loginSuccessful(){

    return await this.page.textContent(
      this.lblSuccessful
    )
  }

  async getErrorMessage() {

    return await this.page.textContent(
      this.lblError
    )
  }
}

module.exports = LoginPage