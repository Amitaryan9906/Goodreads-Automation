const loginElemtLocator = require('../PageElements/LoginPageElements.json')
const homepageElemLocator = require('../PageElements/HomepageElements.json')
export class LoginPageElements{


signInBtn(){
    return cy.xpath(loginElemtLocator.LoginPageLocators.signIn_btn);
}
signInWithEmailBtn(){
    return cy.xpath(loginElemtLocator.LoginPageLocators.signIn_with_email_btn);
    
}
username(){
    return cy.xpath(loginElemtLocator.LoginPageLocators.username_text);

}

password(){
    return cy.xpath(loginElemtLocator.LoginPageLocators.password_text);

}

loginBtn(){
    return cy.xpath(loginElemtLocator.LoginPageLocators.login_btn_text);

}
waitUntil(){
    cy.wait(2000);
    return
}
assertionUI(){
    let ele=cy.xpath(homepageElemLocator.homePageElement.profile_menu_user);
    ele.should('exist');
    return
}
assertionUIForBlankEmailFields(){
    cy.xpath(loginElemtLocator.LoginPageLocators.emptyEmail_text).should('be.visible').contains(' Enter your email');
    return
}
assertionUIForInvalidEmailFormat(){
    cy.xpath(loginElemtLocator.LoginPageLocators.wrongEmailError_text).should('be.visible').contains('Invalid email format');
}
assertionUIForInvalidCredentials(){
    cy.xpath(loginElemtLocator.LoginPageLocators.wrongEmailError_text).should('be.visible');
}

//  All UI methods
  signInBtnUI() {
    return cy.xpath(loginElemtLocator.LoginPageLocators.signIn_text);
  }

  signInWithEmailBtnUI() {
    return cy.get(loginElemtLocator.LoginPageLocators.signIn_with_email_btn);
  }

  emailFieldUI() {
    return cy.get(loginElemtLocator.LoginPageLocators.username_text);
  }

  passwordFieldUI() {
    return cy.get(loginElemtLocator.LoginPageLocators.password_text);
  }

  loginBtnUI() {
    return cy.get(loginElemtLocator.LoginPageLocators.login_btn_text);
  }

  keepSignInCheckboxUI() {
    return cy.get(loginElemtLocator.LoginPageLocators.keepSignInCheckbox);
  }

  signUpBtnUI() {
    return cy.xpath(loginElemtLocator.LoginPageLocators.signUp_btn).should('be.visible');
  }

  
  continueWithAmazonUI() {
    return cy.xpath(loginElemtLocator.LoginPageLocators.continue_with_amazon_btn);
  }

  continueWithAppleUI() {
    return cy.xpath(loginElemtLocator.LoginPageLocators.continue_with_apple_btn);
  }

  continueWithGoogleUI() {
    return cy.xpath(loginElemtLocator.LoginPageLocators.continue_with_google_btn);
  }

  continueWithFacebookUI() {
    return cy.xpath(loginElemtLocator.LoginPageLocators.continue_with_facebook_btn);
  }

}