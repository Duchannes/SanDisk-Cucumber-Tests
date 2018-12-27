@all
Feature: Menu

  @sandisk
  Scenario: Verify user can open menu
    Given I open "https://www.sandisk.com/" url
    Then Text of "SHOP NOW" should contain "SHOP NOW"

    When  I click "SHOP NOW" 
