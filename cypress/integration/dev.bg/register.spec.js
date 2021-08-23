describe('My First Cypress Test', function() {
    it('Visits dev.bg', ()=> {
        cy.visit("https://dev.bg/");
        cy.contains("Job Board за IT общността");
    })

    it('Open events', ()=> {
        cy.visit("https://dev.bg/");
        cy.contains("Събития").click();
    })

    it('Go to event and register for it', ()=> {
        cy.visit("https://dev.bg/");
        cy.contains("Разрешавам всички").click();
        cy.contains("Събития").click();
        cy.get('.section-inner a[href$="testove/"]').first().click();
        cy.contains("Регистрирай се").click();
    })
})