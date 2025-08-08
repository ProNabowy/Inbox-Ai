import { login } from "../../utils/login";

describe('Order Your Product Logic', () => {

    const selectOption = (placeholder: string, value: any) => {
        cy.get(`[data-cy="order-form"] input[placeholder="${placeholder}"]`).click();

        cy.get(`[data-cy="order-form"] input[placeholder="${placeholder}"]`).type(value);

        cy.contains(value).eq(0).click();
    }

    const typeToInput = (placeholder: string, value: any) => {
        cy.get(`[data-cy="order-form"] [placeholder="${placeholder}"]`).click();

        cy.get(`[data-cy="order-form"] [placeholder="${placeholder}"]`).type(value);
    }

    it("Order Car Happy Scenario", () => {
        // login(false, 'https://develop-v2.biddex.info/')
        login(false);

        cy.get('header').contains('Biddex Tools').click();

        cy.get('header').contains('Order Now').click();

        selectOption('Brand', 'BMW');

        selectOption('Model', '120i');

        selectOption('Body type', 'Convertible');

        typeToInput('Engine', '123');

        selectOption('Year', '2013');

        cy.get('[data-cy="order-form"] input[type="checkbox"]').each((checkbox) => {
            cy.wrap(checkbox).check();
        })

        typeToInput('Enter your comments here', 'we are testing');

        cy.get('[data-cy="order-form"] [data-cy="order-now-submit-button"]').contains('Submit').click();

        cy.get('[data-cy="order-form"]').should('not.exist');

        cy.get('[data-cy="successful-order"]').should('be.visible');

        cy.get('[data-cy="successful-order"]').contains('Close').click();

        cy.get('[data-cy="successful-order"] [data-cy="close-button"]').contains('We have received your order successfully').should('not.exist');

    });

    it("Order Yachts Happy Scenario", () => {

        login(false);

        cy.get('header[data-cy="layout-header"]').contains('Biddex Tools').click();

        cy.get('header[data-cy="layout-header"]').contains('Order Now').click();

        cy.get('button[data-cy="yachts-tab"]').click();

        selectOption('Brand', 'Benetti');

        selectOption('Model', 'Benetti Classic 121');

        selectOption('Year', '2019');

        typeToInput('Engine', 123);

        typeToInput('No. of bedrooms', 1);

        typeToInput('Draft', 123);

        typeToInput('Length', 1);

        typeToInput('Power', 5);

        cy.get('[data-cy="order-form"] input[type="checkbox"]').each((checkbox) => {
            cy.wrap(checkbox).check();
        })

        typeToInput('Enter your comments here', 'we are testing');

        cy.get('[data-cy="order-form"] [data-cy="order-now-submit-button"]').contains('Submit').click();

        cy.get('[data-cy="order-form"]').should('not.exist');

        cy.get('[data-cy="successful-order"]').should('be.visible');

        cy.get('[data-cy="successful-order"]').contains('Close').click();

        cy.get('[data-cy="successful-order"] [data-cy="close-button"]').contains('We have received your order successfully').should('not.exist');

    });

})