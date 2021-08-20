describe('My First Cypress Test', function() {
    it('Visits dev.bg', ()=> {
        cy.visit("https://dev.bg/");
    })
})