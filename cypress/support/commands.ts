/// <reference types="cypress" />

// Add custom command to log in to GitHub
Cypress.Commands.add('loginToGithub', () => {
  const username = Cypress.env('GITHUB_USERNAME');
  const password = Cypress.env('GITHUB_PASSWORD');

  // Use cy.origin to handle cross-origin login
  cy.origin('https://github.com', { args: { username, password } }, ({ username, password }) => {
    cy.visit('/login');
    cy.get('input[name="login"]').type(username);
    cy.get('input[name="password"]').type(password, { log: false });
    cy.get('input[name="commit"]').click();
  });
});

// Extend Cypress Chainable interface to include the loginToGithub command
declare global {
  namespace Cypress {
    interface Chainable {
      loginToGithub(): Chainable<void>;
    }
  }
}
