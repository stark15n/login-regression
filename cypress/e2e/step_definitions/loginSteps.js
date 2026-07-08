const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
const initialPage = require("../../pages/InitialPage");
const loginPage = require("../../pages/LoginPage");
const homePage = require("../../pages/HomePage");

//Acciones generales
Given ("que el usuario se encuentra en la página principal", ()=> {
 cy.visit("/");
});

When ("hace clic en Signup Login", ()=>{
    initialPage.irAlLogin();
});

// Happy Path
When ("ingresa un correo válido", ()=>{
    cy.fixture("users").then((usuarios)=>{
        loginPage.ingresarEmail(usuarios.usuarioValido.email);
    });
});

When ("ingresa una contraseña válida", ()=>{
    cy.fixture("users").then((usuarios)=>{
        loginPage.ingresarPassword(usuarios.usuarioValido.password);
    });
});

Then ("debería visualizar el usuario autenticado", ()=>{
    homePage.validarLoginExitoso()
});

// Casos negativos
When ("ingresa un correo inválido", ()=>{
    cy.fixture("users").then((usuarios)=>{
        loginPage.ingresarEmail(usuarios.usuarioInvalido.email);
    });
});

When ("ingresa una contraseña inválida", ()=>{
    cy.fixture("users").then((usuarios)=>{
        loginPage.ingresarPassword(usuarios.usuarioInvalido.password);
    });
});

When ("deja vacío el correo", ()=>{
    //Sin acción
});

When ("deja vacía la contraseña", ()=>{
    //Sin acción
});

When ("ingresa correo sin formato", ()=>{
    cy.fixture("users").then((usuarios)=>{
        loginPage.ingresarEmail(usuarios.usuarioError.email);
    });
});

Then ("debería visualizar el mensaje Your email or password is incorrect!", ()=>{
    loginPage.validarLoginFail();
});

Then ("debería permanecer en la página Login", ()=>{
    loginPage.validarLoginIncompleto();
});

//Acciones generales
When ("presiona el botón Login", ()=>{
    loginPage.clickLogin();
});



