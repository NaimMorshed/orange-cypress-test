describe('Employee Profile Update Test', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      cy.contains('Dashboard').should('be.visible');
    });
      
    it('edits an employee\'s details', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  
      cy.contains('Hiruni Deepthika').click();
  
      cy.get('.orangehrm-firstname').type('John');
      cy.get('.orangehrm-lastname').type('Imran');
      cy.contains('Save').click();
      cy.contains('Save').click();
    });
  });
  