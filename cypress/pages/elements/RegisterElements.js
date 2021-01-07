class RegisterElements {
    getEmail(){
        return cy.get('input[type="email"]');
    }

    getUsername(){
        return cy.get('input[id="username"]');
    }

    getPassword(){
        return cy.get('input[type="password"]');
    }

    getPrivatePolicyLink(){
        return cy.get('#privacy-link');
    }
}
export default RegisterElements