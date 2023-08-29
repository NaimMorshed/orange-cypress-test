describe('Search and Filter', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();
    cy.contains('Dashboard').should('be.visible'); 
  });

  it('should search employees by name', () => {
    cy.contains('PIM').click();
    cy.contains('Employee List').click();

    cy.get('#empsearch_employee_name_empName').type('John Doe');
    cy.contains('Search').click();

    cy.contains('John Doe').should('be.visible');
  });

});
