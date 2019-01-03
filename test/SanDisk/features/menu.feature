@all
Feature: Menu

  @sandisk
  Scenario: Verify user can open menu
    Given I open "https://www.sandisk.com/" url
    When  I click "CHOOSE MAIN > LI > USB" 