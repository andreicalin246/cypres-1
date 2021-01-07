import RegisterPage from '../../pages/RegisterPage'

const register = new RegisterPage()
Given('we open the registration page', ()=>{
    register.visit();
});

When('we type an invalid email and we focus on username field', ()=>{
    register.typeEmail('test')
            .focusUsername();
})

Then('the email field will have different style', ()=>{
    register.elements.getEmail().should(($x)=>{
        expect($x).to.have.class('form-control-danger')
    })
})