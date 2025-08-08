describe('Search Logic', () => {

    it('search happy scenario', () => {

        cy.visit('http://localhost:3000/en/search');

        cy.get('[data-cy="search"]').should('be.visible');

        cy.get('[data-cy="category"]').then(element => {
            cy.wrap(element).should('be.visible');
            cy.wrap(element).click();

            cy.get('[data-cy="category"] ul li').each((el, index) => {
                cy.wrap(el).should('be.visible');
            });

        });


    });

});