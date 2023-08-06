const homepageElemLocator = require('../PageElements/HomepageElements.json')

export class HomePage{

    searchBar(){
       return cy.xpath(homepageElemLocator.homePageElement.searchBar); 
    }
    wantToRead(){
        return cy.xpath(homepageElemLocator.homePageElement.want_to_read);
    }
    myBooks(){
      return cy.get(homepageElemLocator.homePageElement.my_books);  
    }
    savedBooks() {
        return cy.get(homepageElemLocator.homePageElement.saved_books);
    }
    removeBookIcon(){
       return cy.xpath(homepageElemLocator.homePageElement.removed_books);
    }
    profileMenuDropdown(){
        return cy.xpath(homepageElemLocator.homePageElement.profile_menu_user);
    }
    signOutText(){
        return cy.xpath(homepageElemLocator.homePageElement.signOut);
    }
    searchBook(bookTitle) {
        cy.xpath(homepageElemLocator.homePageElement.searchBar).type(bookTitle);
        cy.xpath(homepageElemLocator.homePageElement.searchBtn).click();
    return  
    }
    addBooks(){
        cy.on('window:alert', (text) => {
            cy.log('Pop-up Message: ', text); 
            cy.on('window:confirm', () => true);
          });
        cy.xpath(homepageElemLocator.homePageElement.want_to_read).click({force:true});

        // Get the book's URL from the browser
        cy.url().then((url) => {
          // Extract the book ID from the URL using string manipulation
          const urlParts = url.split('/');
          const bookId = urlParts[urlParts.length - 1];
    
          // Store the book ID in Cypress environment variable for later use
          Cypress.env('unique_book_id', bookId);
        });

        return
    }
   gotoMybooks(){
    cy.get(homepageElemLocator.homePageElement.my_books).click({force: true});
   }
    removeBook() {
            cy.xpath(homepageElemLocator.homePageElement.removed_books)
          .click({force: true});

          cy.on('window:alert', (text) => {
            cy.log('Pop-up Message: ', text); 
            cy.on('window:confirm', () => true);
          });
    
        return;
      }

    signOut(){
        cy.xpath(homepageElemLocator.homePageElement.profile_menu_user).click();
        cy.xpath(homepageElemLocator.homePageElement.signOut).click();
        return
    }

     // Method to handle the popup window with an 'X' button
  handlePopupWithXButton() {
    cy.window().then((win) => {
      cy.wrap(win.document)
        .find('button.popupXButton')
        .click({ force: true });
    });
  }



}