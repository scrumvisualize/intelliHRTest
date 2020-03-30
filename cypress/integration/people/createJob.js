
context('Actions',()=>{

    before(()=>{
    cy.loginTointelliHr();
    })

    beforeEach(()=>{

    })

    it.only('Create person only in the intelliHr',()=>{
        cy.viewport(1600, 1000);
        cy.createPerson();
        cy.helper.getProfile().should('contain', 'Profile');
        cy.helper.getJobs().should('contain', 'Jobs');

    })
    it('Create a job for the person in the intelliHr',()=>{
        cy.viewport(1600, 1000);
        cy.createPerson();
    })
})