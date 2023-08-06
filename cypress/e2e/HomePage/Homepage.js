import { HomePage } from '../../PageObjects/PageActions/HomePageActions';

const homePage = new HomePage();

describe('Login to the goodreads.com and Run All Test Cases', () => {

let bookID;


  // Log in before running all test cases
  beforeEach('Should Login with valid credentials',() => {
    cy.loginToGoodreads('damit5221@gmail.com','amit@1234#');
  });

  it('TC_017: Verify the existence of the "Search bar" input box on the home page', () => {
    cy.visit('/');
    homePage.searchBar().should('exist');
  });

  it('TC_018: Verify the existence of the "Want to read" button on the books', () => {
    cy.visit('/');
    homePage.searchBook("Math");
    homePage.wantToRead().should('exist');
  });

  it('TC_019: Verify the existence of the "My Books" tab on the navbar', () => {
    cy.visit('/');
    homePage.gotoMybooks().should('be.visible'); 
 });


  it('TC_022: Verify the existence of the "Profile Menu" option on the profile icon on navbar', () => {
    cy.visit('/'); 
    homePage.profileMenuDropdown().should('be.visible');
 });

  it('TC_023: Verify the existence of the "Sign out" option on the profile icon dropdown', () => {
    cy.visit('/');
    homePage.profileMenuDropdown().click();
    homePage.signOutText().should('be.visible'); 
 });

  it('TC_038: Should Search for a specific book title', () => {
    cy.visit('/');
    homePage.searchBook("Math");
  });
 

  it("TC_039: Should Mark it as 'want to read'", () => {
    cy.visit('/');
    homePage.searchBook("Math");
    homePage.addBooks();
  });
  it("TC_40: should go to My Book page", () => {
    cy.visit('/');
    homePage.gotoMybooks();
  })
  it('TC_020: Verify the existence of the books on the My Books page', () => {
    cy.visit('/');
    homePage.gotoMybooks();
    homePage.savedBooks().should('exist').its('length').then((size) => {
      console.log('Number of saved books:', size);
    });
  });
  it('TC_021: Verify the existence of the "Remove from my books" option on the My Books page', () => {
    cy.visit('/');
    homePage.removeBookIcon().should('be.visible');
  });
  it('TC_41: Should  Remove the selected book from my book list',() => {
    cy.visit('/');
    homePage.gotoMybooks();
    cy.wait(3000);
    homePage.removeBook();
  });

  
  
  // Log out after all test cases are completed
  it('TC_042,TC_043: Should Logout/signout',() => {
    cy.visit('/');
    homePage.signOut();
  })
});
