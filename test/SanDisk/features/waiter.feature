@all
Feature: Menu

  @sandisk
  Scenario: Verify user can open menu
    Given I open "https://www.sandisk.com/" url
    Then Text of "Shop Now Reference" should contain "SHOP NOW"
    When  I click "Shop Now Reference"
      And I wait until "next" tab appears
      And I switch to "next" tab
    Then I get tab title

    When I wait until "previous" tab appears
      And I switch to "previous" tab
    Then I get tab title
    When i click "Belarus" in "Area" drop-list