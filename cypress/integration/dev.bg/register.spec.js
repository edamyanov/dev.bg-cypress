describe('My First Cypress Test', function() {
    it('Visits dev.bg', ()=> {
        cy.visit("https://dev.bg/");
        cy.contains("Job Board за IT общността");
    })

    it('Open events', ()=> {
        cy.visit("https://dev.bg/");
        cy.contains("Събития").click();
    })

})