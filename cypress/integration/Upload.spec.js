describe("Upload", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080/home/");
  });

  it('should contain an upload box', function () {
    cy.get('#muButton').click(function () {
      cy.get("#list4").should("contain", "Upload").click(function () {
        cy.get('.upload-demo').should('contain', 'Drag and drop files here');
      });
    });
  });
  it('should contain text field for file name', function () {
    cy.get('#muButton').click(function () {
      cy.get("#list4").should("contain", "Upload").click(function () {
        cy.get('#t1').type('Qiluo').should('have.value', 'Qiluo');
      });
    });
  });
  it('should contain text field for name', function () {
    cy.get('#muButton').click(function () {
      cy.get("#list4").should("contain", "Upload").click(function () {
        cy.get('#t2').type('Qiluo').should('have.value', 'Qiluo');
      });
    });
  });
  it('should contain text field for title', function () {
    cy.get('#muButton').click(function () {
      cy.get("#list4").should("contain", "Upload").click(function () {
        cy.get('#t3').type('Qiluo').should('have.value', 'Qiluo');
      });
    });
  });
  it('should contain text field for content', function () {
    cy.get('#muButton').click(function () {
      cy.get("#list4").should("contain", "Upload").click(function () {
        cy.get('#t4').type('Qiluo').should('have.value', 'Qiluo');
      });
    });
  });
  it('should contain a button to upload', function () {
    cy.get('#muButton').click(function () {
      cy.get("#list4").should("contain", "Upload").click(function () {
        cy.get('#uploadBut');
      });
    });
  });

});
