const { Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require('@wdio/globals');
const LoginPage = require('../po/login.page')
const loginPage = new LoginPage()

Then('I should get error message {string}', async (message) => {
    const errorMessage = await loginPage.error.getText();
    expect(errorMessage).toContain(message);
});