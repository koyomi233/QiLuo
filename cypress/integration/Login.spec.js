describe("Login", () => {

  beforeEach(() => {
    cy.visit("/");
  });

  it('should have a intorduction', function () {
    cy.get(".intro").contains("Create your own artboard")
  });

  it("Type into two forms", () => {
    cy.get("#username").type("317657452@qq.com").should("have.value", "317657452@qq.com");
    cy.get("#pwd").type("112358").should("have.value", "112358");
  });

  it('should go to the sign up page', function () {
    cy.get('.login').contains('Sign Up').click(function () {
      cy.url().should('include', '/signup');
    })
  });

  describe("Click login button", () => {
    it('should allow the login requirement', function () {
      cy.get('#username').type('317657452@qq.com');
      cy.get('#pwd').type('112358');
      cy.get('#loginButton').contains("Login").click(function () {
        cy.url().should('include', '/home');
      });
    });
    it('should return an error because of the wrong usename and password', function () {
      cy.get('#username').type('317657452@sina.com');
      cy.get('#pwd').type('12345678');
      cy.get('#loginButton').contains("Login").click(function () {
        cy.url.should('eq', 'http://localhost:8080')
      });
    });
  })
});
