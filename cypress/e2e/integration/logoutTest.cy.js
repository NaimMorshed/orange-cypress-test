describe('Logout Test', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      cy.contains('Dashboard').should('be.visible'); 
    });

    it('logs out successfully', () => {

        cy.get('.oxd-userdropdown-icon').click();
        cy.contains('Logout').click();
        cy.url().should('include', '/index.php/auth/login');
        cy.contains('LOGIN Panel').should('be.visible');
      });

});