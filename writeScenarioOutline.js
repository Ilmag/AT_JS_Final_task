const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

/**
 * Retrieves accepted usernames and password
 * from https://www.saucedemo.com/ and creates Scenario Outline in ./src/features/outline.feature
 */

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/');

    const data = await page.evaluate(() => {
        const usernames = document.querySelector('.login_credentials').innerText.split('\n').filter(Boolean);
        const password = document.querySelector('.login_password').innerText.split('\n').filter(Boolean)[1];
        return { usernames, password };
    })

    let featureContent = `
    Feature: Test Login form with credentials by passing Username & Password
      Background: Navigate to login page
        Given I am on the login page
    
      Scenario Outline: Test login with different credentials
        When I type "username" and "password" in input fields
        And Click login button
        Then I should navigate to Products page and page title should be "Swag Labs"
            
        Examples:
          | Username | Password |\n`;

    data.usernames.shift()

    data.usernames.forEach(username => {
        featureContent += `          | ${username} | ${data.password} |\n`;
    })

    const dirPath = path.join(__dirname, '../features');
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(path.join(__dirname, 'src/features/outline.feature'), featureContent);
    console.log('Feature file generated successfully!');

    await browser.close();
})()
