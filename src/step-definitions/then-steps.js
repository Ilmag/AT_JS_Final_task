const { Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require('@wdio/globals');
const LoginPage = require('../po/login.page');
const ProductsHeader = require('../po/products.component');
const loginPage = new LoginPage();
const productsHeader = new ProductsHeader();

Then('I should get error message {string}', async (message) => {
    const errorMessage = await loginPage.loginError.getText();
    expect(errorMessage).toContain(message);
});

Then('I should navigate to Products page and page title should be {string}', async (title) => {
    const products = await productsHeader.products;
    expect(products).toBeDisplayed();
    await expect(browser).toHaveTitle(title);
})