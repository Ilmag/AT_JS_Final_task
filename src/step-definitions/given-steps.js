const { Given } = require("@wdio/cucumber-framework");
const LoginPage = require('./../po/login.page');
const loginPage = new LoginPage();

Given('I am on the login page', async () => {
    await loginPage.open();
})