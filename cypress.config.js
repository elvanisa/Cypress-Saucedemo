const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      lockedUser: 'locked_out_user',
      username: 'standard_user',
      password: 'secret_sauce'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 5500,
    screenshotOnRunFailure: false,
    chromeWebSecurity: false
  },
});
