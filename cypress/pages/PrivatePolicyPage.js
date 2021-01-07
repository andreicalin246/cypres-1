import FooterLarge from './components/FooterLarge'
import HeaderLarge from './components/HeaderLarge'

class PrivatePolicyPage {
    constructor(){
        this.footerLarge = new FooterLarge();
        this.headerLarge = new HeaderLarge();
    }

    visit(){
        cy.visit('https://uk.godaddy.com/legal/agreements/privacy-policy');
    }

    goToPrivatePolicyFromFooter(){
        this.footerLarge.getPrivatePolicyLink().click();

        const privatePolicyPage = new PrivatePolicyPage();
        return privatePolicyPage;
    }
}
export default PrivatePolicyPage