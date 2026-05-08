class ProductsPage {

  constructor(page) {
    this.page = page
  }

  lblProduct = "//div[text()='%s']/following::button[1]"



  async addProduct(name) {

     await this.page.click(
      this.lblProduct.replace('%s', name)
    )
  }

 
}

module.exports = ProductsPage