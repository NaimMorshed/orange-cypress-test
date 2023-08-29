describe('Cross-Browser and Responsive Test', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.contains('Dashboard').should('be.visible'); 
      });
  
    it('performs cross-browser and responsive testing', () => {
      cy.viewport(375, 667); //iPhone 6/7/8 viewport size
  
      cy.viewport(1024, 768); //Tablet landscape viewport size
    });
  });
  