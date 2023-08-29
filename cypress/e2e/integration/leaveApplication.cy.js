describe('Leave Application', () => {
  beforeEach(() => {

    cy.visit('http://localhost/orangehrm/web/index.php/auth/login');
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('Testme123.#//');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible'); 
  });

  it('should apply for leave with mock balances', () => {
    cy.contains('Leave').click();

    cy.contains('January').type('February');
    cy.contains('01').type('01');
    cy.contains('Save').click();

    cy.contains('Successfully Save').should('be.visible');
  });
});


