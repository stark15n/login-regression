Feature: Login

 Scenario: Login exitoso

    Given que el usuario se encuentra en la página principal
    When hace clic en Signup Login
    And ingresa un correo válido
    And ingresa una contraseña válida
    And presiona el botón Login
    Then debería visualizar el usuario autenticado


  Scenario: Login con credenciales incorrectas

    Given que el usuario se encuentra en la página principal
    When hace clic en Signup Login
    And ingresa un correo inválido
    And ingresa una contraseña inválida
    And presiona el botón Login
    Then debería visualizar el mensaje Your email or password is incorrect!

  Scenario: Login con correo vacío

    Given que el usuario se encuentra en la página principal
    When hace clic en Signup Login
    And deja vacío el correo
    And ingresa una contraseña válida
    And presiona el botón Login
    Then debería permanecer en la página Login

  Scenario: Login con contraseña vacía

    Given que el usuario se encuentra en la página principal
    When hace clic en Signup Login
    And ingresa un correo válido
    And deja vacía la contraseña
    And presiona el botón Login
    Then debería permanecer en la página Login

  Scenario: Login con formato de correo incorrecto

    Given que el usuario se encuentra en la página principal
    When hace clic en Signup Login
    And ingresa correo sin formato
    And ingresa una contraseña válida
    And presiona el botón Login
    Then debería permanecer en la página Login