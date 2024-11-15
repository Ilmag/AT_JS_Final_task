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

    get usernames () {
        return $('.login_credentials');
    }

    get password () {
        return $('.login_password');
    }

    get error () {
        return $('h3[data-test="error"]');
    }

    open () {
        return browser.url('/');
    }

    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }
}

module.exports = LoginPage;