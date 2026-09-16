
Feature: Smart Assets Pro Company

  Scenario: Login and add company
    Given I open the login page
    When I enter the email
    And I enter the password
    And I click the login button
    And I select a company
    And I click OK
    And I click System
    And I click Company
    And I click Add