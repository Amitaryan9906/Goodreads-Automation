// login.js

import { LoginPageElements } from "../../PageObjects/PageActions/LoginPageActions";
const loginElements = new LoginPageElements();
import { HomePage } from "../../PageObjects/PageActions/HomePageActions";
const homePage = new HomePage();

describe('Login to the goodreads.com and Run All Test Cases', () => {
  let testCases;

  before(() => {
    // Load test cases data from the JSON file
    cy.fixture('credentials.json').then((data) => {
      testCases = data;
    });
  });
  it('TC_001: Verify the existence of the "Sign in" text on the sign-ip page', () => {
    cy.visit('/');
    loginElements.waitUntil();
    loginElements.signInBtn().should('exist'); 
  });

  it.skip('TC_002: Checking spelling mistakes', () => {
    // You can perform any checks related to spelling mistakes here, if applicable
  });

  it.skip('TC_003: Verifying the font, text color, and style', () => {
    // You can perform any checks related to font, text color, and style here, if applicable
  });

  it.skip('TC_004: Checking by hovering over the fields', () => {
    // You can perform any checks related to hovering over fields here, if applicable
  });

  it.skip('TC_005: Checking alignment of the fields', () => {
    // You can perform any checks related to field alignment here, if applicable
  });

  it('TC_006: Verify the existence of the "Continue with Amazon" button on the sign-in window', () => {
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.continueWithAmazonUI().should('be.visible').contains('Continue with Amazon');
  });

  it('TC_007: Verify the existence of the "Continue with Apple" button on the sign-in window', () => {
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.continueWithAppleUI().should('be.visible').contains('Continue with Apple');
  });

  it('TC_008: Verify the existence of the "Continue with Google" button on the sign-in window', () => {
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.continueWithGoogleUI().should('be.visible').contains('Continue with Google');
  });

  it('TC_009: Verify the existence of the "Continue with Facebook" button on the sign-in window', () => {
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.continueWithFacebookUI().should('be.visible').contains('Continue with Facebook');
  });

  it('TC_010: Verify the existence of the "Sign in with email" button on the sign-in window', () => {
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().should('exist');
  });

  it('TC_011: Verify the existence of the "Sign-up" text on the sign-in window', () => {
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signUpBtnUI().click();
  });

  it('TC_012: Verify the existence of the "Email" input field on the sign-in page', () => {
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click(); 
    loginElements.waitUntil();
    loginElements.username().should('exist');
  });

  it('TC_013: Verify the existence of the "Password" field on the sign-in page', () => {
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click(); 
    loginElements.waitUntil();
    loginElements.password().should('exist');
  });

  it('TC_014: Verify the existence of the "Sign in" button on the sign-in page', () => {
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click(); 
    loginElements.waitUntil();
    loginElements.loginBtn().should('exist');
  });

  it('TC_015: Verify the existence of the checkbox field "Keeping sign-in" on the sign-in page', () => {
    cy.visit('/');

    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click(); 
    loginElements.waitUntil();
    loginElements.keepSignInCheckboxUI().should('exist');
  });

  it('TC_016: Verify the existence of the "Sign up" button on the sign-in page', () => {
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click(); 
    loginElements.waitUntil();
    loginElements.signUpBtnUI().should('be.visible');
  });


  it('TC_027: Checking login with valid credentials in the email and password field', () => {
    const validCredentials = testCases.TC_027.testData;
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click();
    loginElements.waitUntil();
    loginElements.username().type(validCredentials.email);
    loginElements.password().type(validCredentials.password);
    loginElements.loginBtn().click();
    loginElements.assertionUI();
    homePage.signOut();
  });

  it.skip('TC_028: Verifying "Forgot Password" functionality', () => {
    const testData = testCases.TC_028.testData;
    // Implement the test steps to verify the 'Forgot Password' functionality using the testData
  });

  it('TC_029: Keeping email and password field blank', () => {
    // This test case does not require any test data as it tests the behavior with blank fields
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click();
    loginElements.waitUntil();
    loginElements.loginBtn().click();
    loginElements.assertionUIForBlankEmailFields();
  });

  it('TC_030: Keeping email or password field blank', () => {
    const testData = testCases.TC_030.testData;
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click();
    loginElements.waitUntil();
    if (!testData.email) {
      loginElements.password().type(testData.password);
    } else if (!testData.password) {
      loginElements.username().type(testData.email);
    }
    loginElements.loginBtn().click();
    loginElements.assertionUIForBlankEmailFields();
  });

  it('TC_031: Checking login with wrong email and valid password field', () => {
    const testData = testCases.TC_031.testData;
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click();
    loginElements.waitUntil();
    loginElements.username().type(testData.email);
    loginElements.password().type(testData.password);
    loginElements.loginBtn().click();
    loginElements.assertionUIForInvalidCredentials();
  });

  it('TC_032: Checking login with valid email but wrong password field', () => {
    const testData = testCases.TC_032.testData;
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click();
    loginElements.waitUntil();
    loginElements.username().type(testData.email);
    loginElements.password().type(testData.password);
    loginElements.loginBtn().click();
    loginElements.assertionUIForInvalidCredentials();
  });

  it('TC_033: Checking login with wrong credentials in email and password field', () => {
    const testData = testCases.TC_033.testData;
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click();
    loginElements.waitUntil();
    loginElements.username().type(testData.email);
    loginElements.password().type(testData.password);
    loginElements.loginBtn().click();
    loginElements.assertionUIForInvalidCredentials();
  });

  it('TC_034: Checking login by invalid email format in the email field', () => {
    const testData = testCases.TC_034.testData;
    cy.visit('/');
    loginElements.signInBtn().click(); 
    loginElements.waitUntil();
    loginElements.signInWithEmailBtn().click();
    loginElements.waitUntil();
    loginElements.username().type(testData.email);
 
    loginElements.assertionUIForInvalidEmailFormat();
  });

  
});
