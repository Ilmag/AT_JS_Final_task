Feature: Login Page

    Background: Navigate to login page
        Given I am on the login page

    Scenario: Test Login form with empty credentials
        When I type "username" and "password" in input fields
        And Clear username and password fields
        And Click login button
        Then I should get error message "Username is required"

    Scenario: Test Login form with credentials by passing Username
        When I type any "credentials" in username
        And Enter "password" in password
        And Clear the password input
        And Click login button
        Then I should get error message "Password is required"