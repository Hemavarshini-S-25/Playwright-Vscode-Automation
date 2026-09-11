Feature: Login Page

  Scenario: Login with valid credentials
    Given I open the login page
    When I enter the email
    And I enter the password
    And I click the login button
    Then the login should be successful