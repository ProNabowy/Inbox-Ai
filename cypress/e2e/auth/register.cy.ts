describe("Register", () => {
	it("User Can Register", () => {
		cy.visit("https://develop-v2.biddex.info/");

		cy.wait(3000);

		cy.get("[data-cy='sign_in']").click()


		cy.get("[data-cy='auth_modal']").should("be.visible");


		cy.get("[data-cy='register']").click();

		cy.get("[data-cy='mobile_number']").type(
			cy.faker.fakerEN_US.phone.number("010########"),
		);

		cy.get("[data-cy='full_name']").type(
			cy.faker.fakerEN_US.person.firstName("female"),
		);

		cy.get("[data-cy='password']").type("Password@123");

		cy.get("[data-cy='password_confirmation']").type("Password@123");

		cy.get("[data-cy='submit_register']").click();

		cy.get("[data-cy='otp-container']").should("be.visible");

		cy.get("[data-cy='otp-input-field']").each(($el, index, $list) => {
			cy.wrap($el).type("1");
		});

		cy.get('[data-cy="resend-otp-btn"]').should("be.disabled");

		cy.get("[data-cy='auth_modal']").should("not.exist");
	});
});
