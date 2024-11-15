const { When } = require("@wdio/cucumber-framework");
const LoginPage = require('./../po/login.page')
const loginPage = new LoginPage()

const clearInputField = async (element) => {
    const value = await element.getValue();
    const backspaces = new Array(value.length).fill('Backspace');
    await element.click(); // Focus on the input field await browser.keys(backspaces);
    await browser.keys(backspaces);
};

When('I type {string} and {string} in input fields', async (username, password) => {
    await loginPage.inputUsername.setValue(username);
    await loginPage.inputPassword.setValue(password);
});

When('I type any {string} in username', async (username) => {
    await loginPage.inputUsername.setValue(username);
})

When('Enter {string} in password', async (password) => {
    await loginPage.inputPassword.setValue(password);
})

When('Clear username and password fields', async () => {
    await clearInputField(loginPage.inputUsername);
    await clearInputField(loginPage.inputPassword);
});

When('Clear the password input', async () => {
    await clearInputField(loginPage.inputPassword);
})

When('Click login button', async () => {
    await loginPage.loginBtn.click()
});
