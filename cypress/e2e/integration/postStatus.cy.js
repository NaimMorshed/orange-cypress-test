describe('Post Status Test', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      cy.contains('Dashboard').should('be.visible');
    });

    it('Should be able to post a status', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz');

        const statusMessage = "Hello, Cypress! Good Morning.";
        cy.get('.oxd-buzz-post-input').type(statusMessage);
        cy.get('button[type="submit"]').click();

    });
});
