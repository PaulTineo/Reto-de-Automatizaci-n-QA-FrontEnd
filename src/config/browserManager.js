const {
  chromium,
  firefox,
  webkit
} = require('@playwright/test')

class BrowserManager {

  static browser

  static async launchBrowser() {

    const browserType =
      process.env.BROWSER || 'chromium'

    switch(browserType) {

      case 'firefox':

        this.browser =
          await firefox.launch({
            headless: false
          })

        break

      case 'edge':

        this.browser =
          await chromium.launch({
            channel: 'msedge',
            headless: false
          })

        break

      default:

        this.browser =
          await chromium.launch({
            headless: false
          })
    }

    return this.browser
  }
}

module.exports = BrowserManager