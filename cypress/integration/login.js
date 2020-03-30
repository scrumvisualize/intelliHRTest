
context('Login and Logout test',()=>{

    before(()=>{
    cy.visit('/');
    })

    beforeEach(() => {
    
    cy.loadTokens();
    cy.loginRequest();
    
    })

    it.only('Check whether the login to intelliHr is successfull',()=>{
        cy.wait(5000);
        cy.viewport(1600, 1000);
        cy.loginTointelliHr();
        cy.get('#offCanvasLeft > ul > li > a > span').eq(1).invoke('text').then((text)=>{
            expect(text).to.equal("Dashboard");
        })
        cy.wait(2000);
        cy.get('.header-greeting').invoke('text').then((text)=>{
            cy.helper.getLoginUserFirstName().then((firstNameText)=>{
                var greetingText = text;
                var greeting = greetingText.replace('Good','');
                var firstName = firstNameText.replace(' Mathew','');
                expect(text).to.include("Good" +greeting,+' '+firstName);
            })
        })
    })

    it('Check whether the logout is working fine',()=>{
        cy.viewport(1600, 1000);
        cy.loginTointelliHr();
        cy.logoutintelliHr();
        cy.get('.sign-in-form > div > h1').invoke('text').then((text)=>{
            expect(text).to.equal("Welcome back!")
        })
    })
   
})