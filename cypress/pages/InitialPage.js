class InitialPage{
    SignupBtn(){
        return cy.contains("Signup / Login")
    }

    irAlLogin(){
        this.SignupBtn().click()
    }

}

module.exports = new InitialPage();