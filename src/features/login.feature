Feature: Login

@regresion @login @happypath 
  Scenario Outline: Login con credenciales validas

    Given el usuario ingresa al login de la pagina de Saucedemo
    When el usuario ingresa las credenciales "<user>" y "<pass>"
    Then el usuario podra ver el apartado de productos

    Examples:
    |user|pass|
    |standard_user|secret_sauce|

@regresion @login @unhappypath
  Scenario: Login con credenciales invalidas

    Given el usuario ingresa al login de la pagina de Saucedemo
    When el usuario ingresa las credenciales "standard_user" y "ilegalpassword"
    Then el usuario visualizara mensaje de error "Epic sadface: Username and password do not match any user in this service"

@regresion @login @unhappypath
   Scenario: Login con usuario bloqueado

    Given el usuario ingresa al login de la pagina de Saucedemo
    When el usuario ingresa las credenciales "locked_out_user" y "secret_sauce"
    Then el usuario visualizara mensaje de error "Epic sadface: Sorry, this user has been locked out."