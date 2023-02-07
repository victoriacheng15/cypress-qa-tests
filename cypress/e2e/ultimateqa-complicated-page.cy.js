describe("ultimate qa - complicated page", () => {
	beforeEach(() => {
		cy.visit("https://ultimateqa.com/automation");
		cy.get("li a").eq(12).click();
	});

	it("should have a title", () => {
		cy.title().should("contain", "Ultimate QA");
	});

	it("should should have the Section of Buttons title", () => {
		cy.get("#Section_of_Buttons").should("be.visible");
	});

	it("should check mouse hover effect", () => {
		cy.get(".et_pb_button_0_wrapper > .et_pb_button")
			.trigger("mouseover")
			.should("have.css", "background-color", "rgb(128, 203, 121)");
	});

	it("should have the Section of Social Media Follows", () => {
		cy.get("#Section_of_Social_Media_Follows").should("be.visible");
	});

	it("should fill out the form", () => {
		cy.get("#et_pb_contact_name_0").clear().type("Test User");
		cy.get("#et_pb_contact_email_0").clear().type("user@example.com");
		cy.get("#et_pb_contact_message_0")
			.clear()
			.type("this is a random message that is using for testing with cypress!");
		cy.get(
			"#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input",
		)
			.clear()
			.type(16);
	});
});
