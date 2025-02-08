describe("Web app", () => {
  it("shows the title of product on first load", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Die Hard");
  });

  it("shows searched movie", () => {
    cy.visit("http://localhost:3000");

    cy.get('input[aria-label="Search"]').type("Shutter Island{enter}");

    cy.wait(1000);

    cy.contains("p", "Shutter Island").should("exist");
  });
});
