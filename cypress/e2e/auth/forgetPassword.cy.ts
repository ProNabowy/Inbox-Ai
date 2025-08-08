import { login } from "../../utils/login";

describe("User Forget Password", () => {
	it("User Forget Password", () => {
		cy.visit("http://localhost:3000/en");

		cy.get("[data-cy='sign_in']")
			.click()
			.then(() => {
				cy.get("[data-cy='auth_modal']").should("be.visible");
			});

		cy.get("[data-cy='phone_number']").type("1006994920");

		cy.get("[data-cy='forget_password']").click();

		cy.get("[data-cy='phone_number_reset_password']").type("1006994920");

		cy.get("[data-cy='send_code']").click();

		cy.get("[data-cy='otp-container']").should("be.visible");

		cy.get("[data-cy='otp-input-field']").each(($el, index, $list) => {
			cy.wrap($el).type(`${index + 1}`);
		});

		cy.get("[data-cy='new_password']").type("123456789a");

		cy.get("[data-cy='confirm_password']").type("123456789a");

		cy.get("[data-cy='create_new_password']").click();

		cy.get("[data-cy='login_after_reset_password']").click();

		login(true)

	});
});


