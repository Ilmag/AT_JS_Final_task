const { Then } = require("@wdio/cucumber-framework");
const { expect, $ } = require('@wdio/globals');
const LoginPage = require('../po/login.page')
const ProductsPage = require('../po/products.page')
const loginPage = new LoginPage()
const productsPage = new ProductsPage()

Then('I should get error message {string}', async (message) => {
    const errorMessage = await loginPage.error.getText();
    expect(errorMessage).toContain(message);
});

Then('I should navigate to Products page and page title should be {string}', async (title) => {
    const products = await productsPage.products;
    expect(products).toBeDisplayed();
    await expect(browser).toHaveTitle(title);
})