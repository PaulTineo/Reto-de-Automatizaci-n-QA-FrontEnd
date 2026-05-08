const {
  Before,
  After,
  setDefaultTimeout
} = require('@cucumber/cucumber')

const BrowserManager =
  require('../config/browserManager')

const testContext =
  require('../utils/testContext')

const fs = require('fs')

setDefaultTimeout(60000)

Before(async function () {

  testContext.browser =
    await BrowserManager.launchBrowser()

  testContext.context =
    await testContext.browser.newContext()

  testContext.page =
    await testContext.context.newPage()
})

After(async function (scenario) {

  // SI FALLA EL ESCENARIO
  if (scenario.result.status === 'FAILED') {

    // Crear carpeta screenshots
    if (!fs.existsSync('reports/screenshots')) {

      fs.mkdirSync(
        'reports/screenshots',
        { recursive: true }
      )
    }

    const screenshotPath =

      `reports/screenshots/${scenario.pickle.name}.png`

    // Guardar screenshot
    await testContext.page.screenshot({

      path: screenshotPath,

      fullPage: true
    })

    // Adjuntar al reporte Cucumber
    const screenshot =

      await testContext.page.screenshot()

    await this.attach(
      screenshot,
      'image/png'
    )
  }

  await testContext.page.close()

  await testContext.browser.close()
})