# Reto-de-Automatizacion-QA-FrontEnd
Reto de Automatizacion QA Front End

1. Ejecutar el comando: npm install
2. Ejecutar el comando: npx playwright install
3. Ejecutar el comando para las pruebas: npx cross-env ENV=dev BROWSER=chrome cucumber-js --tags "@regresion"
  Observacion: "ENV" es el ambiente donde se ejecutara las pruebas(dev,qa,prod), "BROWSER" es el navegador que se usara (chrome, edge, firefox), --tags es el tag de la prueba que se quiere ejecutar (@regresion, @happypath, @unhappypath)
