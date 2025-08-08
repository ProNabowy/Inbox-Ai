import { login } from "../../utils/login";

describe("User Can Login", () => {
	it("User Can Login", () => {
		login(false)
	});

	it('user not found', () => {

		cy.visit("http://localhost:3000/en");

		cy.wait(3000);

		cy.get("[data-cy='sign_in']")
			.click()
			.then(() => {
				cy.get("[data-cy='auth_modal']").should("be.visible");
			});

		cy.fixture('userData').then((userCardinality) => {

			cy.get("[data-cy='phone_number']").type(userCardinality.UN_AUTHENTICATED_USER_MOBILE_NUMBER);

			cy.get("[data-cy='password']").type(userCardinality.PASSWORD);

		});

		cy.get("[data-cy='submit_login']").click();

		cy.get("[data-cy='phone_number']").should("contain", "This Account does not exists");

		cy.get("[data-cy='phone_number']").contains("This Account does not exists").should('have.css', 'color', 'rgb(240, 68, 56)');

		cy.get("[data-cy='phone_number'] .MuiInputBase-root").should('have.css', 'border-color', 'rgb(240, 68, 56)');


	})

	it('user not active', () => {
		cy.visit("http://localhost:3000/en");

		cy.wait(1000);

		cy.get("[data-cy='sign_in']")
			.click()
			.then(() => {
				cy.get("[data-cy='auth_modal']").should("be.visible");
			});

		cy.fixture('userData').then((userCardinality) => {

			cy.get("[data-cy='phone_number']").type(userCardinality.UN_ACTIVE_USER_MOBILE_NUMBER);

			cy.get("[data-cy='password']").type(userCardinality.PASSWORD);

		});

		cy.get("[data-cy='submit_login']").click();

		cy.get("[data-cy='phone_number']").should("contain", "This Account is not active");

		cy.get("[data-cy='phone_number']").contains("This Account is not active").should('have.css', 'color', 'rgb(240, 68, 56)');

		cy.get("[data-cy='phone_number'] .MuiInputBase-root").should('have.css', 'border-color', 'rgb(240, 68, 56)');

	})

	it('wrong password', () => {

		cy.visit("http://localhost:3000/en");

		cy.wait(1000);

		cy.get("[data-cy='sign_in']")
			.click()
			.then(() => {
				cy.get("[data-cy='auth_modal']").should("be.visible");
			});

		cy.fixture('userData').then((userCardinality) => {

			cy.get("[data-cy='phone_number']").type(userCardinality.AUTHENTICATED_USER_MOBILE_NUMBER);

			cy.get("[data-cy='password']").type('password');

		});

		cy.get("[data-cy='submit_login']").click();

		cy.get("[data-cy='phone_number']").should("contain", "These Credentials Doesn't Match Our Database Records.");

		cy.get("[data-cy='phone_number']").contains("These Credentials Doesn't Match Our Database Records.").should('have.css', 'color', 'rgb(240, 68, 56)');

		cy.get("[data-cy='phone_number'] .MuiInputBase-root").should('have.css', 'border-color', 'rgb(240, 68, 56)');

	});

});
