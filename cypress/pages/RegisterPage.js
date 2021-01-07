import Footer from './components/Footer'
import RegisterElements from './elements/RegisterElements'
import PrivatePolicyPage from './PrivatePolicyPage'

class RegisterPage {
    constructor(){
        this.elements = new RegisterElements();
        this.footer = new Footer();
    }

    visit(){
        cy.visit('https://sso.godaddy.com/v1/account/create?realm=idp&path=%2Fproducts&app=account&autodetect=true&iframe=false');
    }

    typeEmail(email){
        this.elements.getEmail().clear().type(email);
        return this;
    }

    typeUsername(username){
        this.elements.getUsername().clear().type(username);
        return this;
    }

    focusUsername(){
        this.elements.getUsername().focus();
        return this;
    }

    typePassword(password){
        this.elements.getPassword().clear().type(password, { log: false });
        return this;
    }

    goToPrivatePolicy(){
        this.elements.getPrivatePolicyLink().click();

        const privatePolicyPage = new PrivatePolicyPage();
        return privatePolicyPage;
    }

    goToPrivatePolicyFromFooter(){
        this.footer.getPrivatePolicyLink().click();

        const privatePolicyPage = new PrivatePolicyPage();
        return privatePolicyPage;
    }
}
export default RegisterPage