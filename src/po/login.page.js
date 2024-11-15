/**
 * Contains https://www.saucedemo.com/ selectors for login form,
 * error mesages, and a method to open page. 
 */

class LoginPage {
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get loginBtn () {
        return $('#login-button');
    }

    get error () {
        return $('h3[data-test="error"]');
    }

    open () {
        return browser.url('/');
    }
}

module.exports = LoginPage;