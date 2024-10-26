class LoginPage {
    visit() {
        cy.visit('https://www.saucedemo.com/');
    }

    fillCredentials(username, password) {
        cy.get('#user-name').type(username);
        cy.get('#password').type(password);
    }

    submit() {
        cy.get('#login-button').click();
    }

    verifyLoginSuccess() {
        cy.url().should('include', '/inventory');
        cy.get('#inventory_container').should('be.visible');
    }
}

export default LoginPage;