class FooterLarge {
    getPrivatePolicyLink(){
        return cy.get('a').contains('Private Policy');
    }
}
export default FooterLarge