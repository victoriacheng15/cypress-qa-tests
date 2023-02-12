describe("LetCode - input", () => {
	beforeEach(() => {
    cy.visit("https://letcode.in/test");
		cy.viewport(1920, 1080);
    cy.get(".card-footer-item").eq(0).click()
	});

  it("should have LetCode in the title", () => {
    cy.title().should("contain", "Interact with Input fields");
  })

  it("should be able to type full name", () => {
    cy.get("#fullName").clear().type("John Doe");
  })

  it("should be able to type a word 'today'", () => {
    cy.get("#join").type(" today")
  })

  it("should be get the value of what is inside the text box", () => {
    cy.get("#getMe").should("have.value", "ortonikc")
  })

  it("should be clear the text inside of input", () => {
    cy.get("#clearMe").clear()
    cy.get("#clearMe").should("have.value", "")
  })

  it("should check if the input filed is disabled", () => {
    cy.get('#noEdit').should("be.disabled")
  })

  it("should confirm text is readonly", () => {
    cy.get('#dontwrite').should("have.attr", "readonly")
  })

});
