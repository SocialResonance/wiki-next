describe('Edit Page Test', () => {
  it('should log in via GitHub and edit a page', () => {
    // Visit the sign-in page
    cy.visit('/auth/signin');

    // Click the "Sign in with GitHub" button
    cy.get('button').contains('Sign in with GitHub').click();

    // Log in to GitHub
    cy.loginToGithub();

    // Verify that we've been redirected back to the application
    cy.url().should('include', '/');

    // Navigate to the specific page to edit
    cy.visit('/edit/page-to-edit'); // Replace 'page-to-edit' with the actual slug

    // Perform actions to edit the page
    cy.get('input[name="title"]').clear().type('New Title');
    cy.get('textarea[name="content"]').clear().type('Updated content');
    cy.get('button[type="submit"]').click();

    // Assert that the page was edited successfully
    cy.contains('Page updated successfully'); // Adjust the selector/text as needed
  });
});
