
export const login = (skipInitialSteps: boolean, url?: string) => {

	if (!skipInitialSteps) {
		cy.visit(url || "http://localhost:3000/en");
		cy.wait(3000);
		cy.get("[data-cy='sign_in']")
			.click()
			.then(() => {
				cy.get("[data-cy='auth_modal']").should("be.visible");
			});
	}

	cy.fixture('userData').then((userCardinality) => {

		cy.get("[data-cy='phone_number']").type(userCardinality.AUTHENTICATED_USER_MOBILE_NUMBER);

		cy.get("[data-cy='password']").type(userCardinality.PASSWORD);

	});

	cy.get("[data-cy='submit_login']").click();

	cy.get("[data-cy='sign_in']").should("not.exist");

	cy.get("[data-cy='auth_modal']").should("not.exist");

	cy.get("[data-cy='user_menu']").should("exist");
};


