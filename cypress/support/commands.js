// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
import 'cypress-xpath';

import { LoginPageElements } from '../PageObjects/PageActions/LoginPageActions'; 
const loginElements = new LoginPageElements(); // Create an instance of LoginPageElements
Cypress.Commands.add('loginToGoodreads', (username,password) => {
  cy.session([username, password],()=>{
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click(); 
    loginElements.waitUntil();
    loginElements.username().type(username);
    loginElements.password().type(password);
    loginElements.loginBtn().click(); 
    loginElements.assertionUI();
  });
 
});

// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })