class LoginPage{
    emailTxt(){
        return cy.get('input[data-qa="login-email"]')
    }

    passwordTxt(){
        return cy.get('input[data-qa="login-password"]')
    }

    loginBtn(){
        return cy.get('button[data-qa="login-button"]')
    }

    lblLoggedFail(){
        return cy.contains("Your email or password is incorrect!")
    }

    ingresarEmail(email){
        this.emailTxt().type(email)
    }

    ingresarPassword(password){
        this.passwordTxt().type(password)
    }

    clickLogin(){
        this.loginBtn().click()
    }

    validarLoginFail(){
        this.lblLoggedFail().should("be.visible")
    }

    validarLoginIncompleto(){
        cy.url().should("include","/login");
        this.loginBtn().should("be.visible");
    }

}

module.exports = new LoginPage();