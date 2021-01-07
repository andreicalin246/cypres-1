class Footer {
    getPrivatePolicyLink(){
        return cy.get('a').contains('Private Policy');
    }
    
}
export default Footer