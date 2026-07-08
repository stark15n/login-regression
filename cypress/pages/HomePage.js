class HomePage{

    lblLoggedUser(){
        return cy.contains("a","Logged in as");
    }npx

    validarLoginExitoso(){
        this.lblLoggedUser().should("be.visible");
    }
}

module.exports = new HomePage();