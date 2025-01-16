Feature: Login Page

    Background: Navigate to login page
        Given I am on the login page

    Scenario: Test Login form with credentials by passing Username
        When I type any "credentials" in username
        And Enter "password" in password
        And Clear the password input
        And Click login button
        Then I should get error message "Password is required"