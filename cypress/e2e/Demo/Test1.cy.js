describe("Orange HRM Test Cases..", () => {

  it("Orange HRM Login", () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.title().should("contain", "HRM");
    cy.url().should("contain", "demo");
    cy.get("#txtUsername").type("Admin").should("have.value", "Admin");
    cy.get("#txtPassword").type("admin123").should("have.value", "admin123");
    cy.get(".button").click();

  }

  )

  it("Forgot Password", function () {

    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.contains("Forgot your password?").click();

  }

  )

});





