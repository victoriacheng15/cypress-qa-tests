describe("Google Homepage interaction", () => {
	beforeEach(() => {
		cy.visit("https://google.com");
	});

  it("should have sign in button", () => {
    cy.get('.gb_ia').should("contain", "Sign in");
  })

	it("should get input element and type Hello World", () => {
		cy.get("input[type='text']").type("hello world")
	})

	it("should press enter after typed Hello World", () => {
		cy.get("input[type='text']").type("hello world{enter}");
		cy.url().should("contain", "hello+world")
	})
});
