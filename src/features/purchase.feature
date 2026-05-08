Feature: Carrito de Compras

@regresion @purchase @happypath
  Scenario: Agrego Productos al carrito
    
    Given el usuario inicia sesion en Saucedemo correctamente
    When el usuario agrega el producto al carrito y los podra visualizar en el carrito
      | producto              |
      | Sauce Labs Backpack   |
      | Sauce Labs Bike Light |
      |Sauce Labs Bolt T-Shirt|
      |Sauce Labs Fleece Jacket|
    And el usuario completa la compra con los datos
        | firstName     | lastName  | postalCode   |
        | Paul          | Tineo     | 15001        |
    Then la compra se completa de forma exitosa con el mensaje "Thank you for your order!"

