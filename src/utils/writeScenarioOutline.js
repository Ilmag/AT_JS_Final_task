const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

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
    Feature: Login functionality
        Scenario Outline: Test login with different credentials
            Given I am on the login page
            When I type "<username>" and "<password>" in input fields
            And Click login button
            Then I should get error message "<errorMessage>"
            
            Examples: `;

    data.usernames.forEach(username => {
        featureContent += ` | ${username} | ${data.password} | Invalid username or password. |\n`;
    })

    const dirPath = path.join(__dirname, '../features');
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(path.join(__dirname, 'src/features/outline.feature'), featureContent);
    console.log('Feature file generated successfully!');

    await browser.close();
})()
