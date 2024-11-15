const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect, $ } = require('@wdio/globals');
const LoginPage = require('./../po/login.page')
const loginPage = new LoginPage()

const clearInputField = async (element) => {
    const value = await element.getValue();
    const backspaces = new Array(value.length).fill('Backspace');
    await element.click(); // Focus on the input field await browser.keys(backspaces);
    await browser.keys(backspaces);
};

Given('I am on the login page', async () => {
    await loginPage.open()
})

When('I type {string} and {string} in input fields', async (username, password) => {
    await loginPage.inputUsername.setValue(username);
    await loginPage.inputPassword.setValue(password);
});
When('Clear username and password fields', async () => {
    await clearInputField(loginPage.inputUsername);
    await clearInputField(loginPage.inputPassword);
})
When('Click login button', async () => {
    await loginPage.loginBtn.click()
})
Then('I should get error message {string}', async (message) => {
    const errorMessageElement = await loginPage.error;
    const isDisplayed = await errorMessageElement.isDisplayed({timeout:10000});
    const errorMessage = await errorMessageElement.getText();
    expect(errorMessage).toContain(message);
});