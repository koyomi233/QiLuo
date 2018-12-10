describe("LeftControl", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080/home/");
  });

  it("Whether it contains a left control", () => {
    cy.get(".m-leftcol");
  });

  describe("left control", () => {
    it("Has a menu contained a button", () => {
      cy.get("#muButton").should("contain", "Damask")
    });
    it('should have a invisible list', function () {
      cy.get('#muButton').click(function () {
        cy.get("#list1").should("contain", "Home Page").click();
        cy.get("#list2").should("contain", "Discover").click();
        cy.get("#list3").should("contain", "Latest").click();
        cy.get("#list4").should("contain", "Upload").click();
      });
    });
  })
});
