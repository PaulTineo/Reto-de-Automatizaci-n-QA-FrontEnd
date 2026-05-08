class CartPage {

  constructor(page) {
    this.page = page
  }

  btnCheckout = "//button[@id='checkout']"
  btnCart = "//a[@data-test='shopping-cart-link']"

    async goToCheckout() {
        await this.page.click(
            this.btnCheckout
        )
    }

    async goToCart() {

        await this.page.click(
            this.btnCart
        )
    }
}
module.exports = CartPage