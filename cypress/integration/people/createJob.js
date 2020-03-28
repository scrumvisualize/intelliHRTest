
context('Actions',()=>{

    before(()=>{
    cy.loginTointelliHr();
    })

    beforeEach(()=>{

    })

    it.skip('Create a new person in the intelliHr',()=>{
        cy.viewport(1600, 1000);
        cy.createPerson();
    })
    it('Create a job for the person in the intelliHr',()=>{
        cy.viewport(1600, 1000);
        cy.createPerson();
        cy.createJob();
    })
})