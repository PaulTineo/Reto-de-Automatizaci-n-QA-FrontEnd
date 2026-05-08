class CheckoutPage {

  constructor(page) {
    this.page = page
  }

  lblText = "//input[@data-test='%s']"
  btnContinue = "//input[@data-test='continue']"
  btnFinish = "//button[@data-test='finish']"
  lblOrderConfirmation = "//h2[@data-test='complete-header']"

  async fillForm(field,value) {
    await this.page.fill(this.lblText.replace('%s', field), value)
  }

  async clickContinue() {
    await this.page.click(this.btnContinue)
  }

  async clickFinish() {
    await this.page.click(this.btnFinish)
  }

  async getOrderConfirmation(){
    return await this.page.textContent(
      this.lblOrderConfirmation
    )
  }

}
module.exports = CheckoutPage