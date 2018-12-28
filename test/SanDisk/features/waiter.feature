@all
Feature: Menu

  @sandisk
  Scenario: Verify user can open menu
    Given I open "https://www.sandisk.com/" url
    Then Text of "Shop Now Reference" should contain "SHOP NOW"
    When  I click "Shop Now Reference"
      And I wait until number of tabs became "2"
      And I switch to "2" tab
      And I wait for "5" seconds
      And I switch to "1" tab
      And I click "Search Icon"
      And I write "HELL" at "Search Field"
      And I wait for "5" seconds