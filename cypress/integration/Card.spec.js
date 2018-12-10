describe("Card", () => {

  beforeEach(() => {
    cy.visit("http://localhost:8080/home/");
  });

  it('should contain an alert on the top', function () {
    cy.get('#muButton').click(function () {
      cy.get("#list1").should("contain", "Home Page").click(function () {
        cy.get('.alert-demo-wrapper').should('contain', 'Homepage')
      });
    });
  });

  describe("mu-card", function () {
    it('should return mu-card', function () {
      cy.get('#muButton').click(function () {
        cy.get("#list1").should("contain", "Home Page").click(function () {
          cy.get('#muCard');
        });
      });
    });
    it('card should contain two button', function () {
      cy.get('#muButton').click(function () {
        cy.get("#list1").should("contain", "Home Page").click(function () {
          cy.get('.button-wrapper').within(() => {
            cy.get('#b1').should('contain', 'Edit').click();
            cy.get('#b2').should('contain', 'Delete');
          })
        });
      });
    });
    it('card should contain avatar', function () {
      cy.get('#muButton').click(function () {
        cy.get("#list1").should("contain", "Home Page").click(function () {
          cy.get('#avatar')
        });
      });
    });
    it('card should contain image', function () {
      cy.get('#muButton').click(function () {
        cy.get("#list1").should("contain", "Home Page").click(function () {
          cy.get('.item').click()
        });
      });
    });
  })
});
