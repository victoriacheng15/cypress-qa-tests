describe("The internet - add/remove elements page", () => {
	beforeEach(() => {
		cy.visit("http://the-internet.herokuapp.com/");
		cy.get("a").eq(2).click();
	});

	it("should click add button 4 times", () => {
		cy.get('[onclick="addElement()"]').click();
		cy.get('[onclick="addElement()"]').click();
		cy.get('[onclick="addElement()"]').click();
		cy.get('[onclick="addElement()"]').click();
		cy.get(".added-manually").should("have.length", 4);
	});

	it("should remove 1 delete buttons", () => {
		cy.get('[onclick="addElement()"]').click();
		cy.get('[onclick="addElement()"]').click();
		cy.get(".added-manually").eq(0).click();
	  cy.get(".added-manually").eq(0).should("be.visible");
	});
});
