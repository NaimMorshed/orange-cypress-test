describe('Add Employee Testing', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      cy.contains('Dashboard').should('be.visible');
    });

    it('should be able to add a member', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
      cy.get('.orangehrm-firstname').type('John');
      cy.get('.orangehrm-middlename').type('Doe');
      cy.get('.orangehrm-lastname').type('Smith');
      cy.get('button[type="submit"]').click();
    });
});