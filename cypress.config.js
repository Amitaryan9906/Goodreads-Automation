const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    specPattern: 'cypress/e2e/**/*.js',
    baseUrl:"https://www.goodreads.com/"  ,

    setupNodeEvents(on, config) {
     screenshotOnRunFailure=true;
     require('cypress-mochawesome-reporter/plugin')(on);
    }
    
  },
});