describe('Erro Not Solved Content Test', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.get('input[name="username"]').type('Admin');
      cy.get('input[name="password"]').type('admin123');
      cy.get('button[type="submit"]').click();
      cy.contains('Dashboard').should('be.visible'); 
    });

    // // Delete member

    it('deletes an employee from the table', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  
      cy.get(".table-view tbody tr td:nth-child(2)").contains("John Doe").click();
  
      cy.contains("Delete").click();
  
      cy.contains("Are you sure you want to delete this user?").click();
  
      cy.contains("John Doe").should("not.exist");
    });
    

    // // Like the Status

    it('Should be able to like a status', ()=>{
      
      cy.get('.oxd-sheet').each((post, index) => {
        const postText = post.find('.orangehrm-buzz-post-body-text').text();
        const timestamp = post.find('.orangehrm-buzz-post-time').text();
        
        cy.log(`Post ${index + 1}: ${postText} - ${timestamp}`);
      });
        
    });

    // File Upload

    it('adds an employee with an image', () => {
  
      cy.contains('Buzz').click();
      cy.contains('Share Photos').click();
      cy.fixture('profile.jpg', 'base64').then((fileContent) => {
        cy.get('orangehrm-photo-upload-area').attachFile(
          { fileContent, fileName: 'profile.jpg', mimeType: 'image/jpg' },
          { subjectType: 'input' }
        );
      });
  
      
      cy.get('button[type="submit"]').click();
  
    });
  
  });
  