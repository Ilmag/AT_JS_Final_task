Feature: Test Login form with credentials by passing Username & Password
  Background: Navigate to login page  
    Given I am on the login page
    
  Scenario Outline: Test login with different credentials
    When I type "username" and "password" in input fields
    And Click login button
    Then I should navigate to Products page and page title should be "Swag Labs"
            
    Examples:
      | Username | Password |
      | standard_user | secret_sauce |
      | locked_out_user | secret_sauce |
      | problem_user | secret_sauce |
      | performance_glitch_user | secret_sauce |
      | error_user | secret_sauce |
      | visual_user | secret_sauce |
