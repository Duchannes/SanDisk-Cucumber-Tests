@all
Feature: SHOP

  @sandisk5
  Scenario: Searching
    Given I open "https://www.sandisk.com/" url
    When  I click "Shop Now Reference"
      And I wait until "next" tab appears
      And I switch to "next" tab
    Then I get tab title
    When I click "Search Icon"
    Then "Search Field" should be visible
    When I type "iPad" at "Search Field"
      And I click "Search Button"
    Then Count of "List of products by search" should be "10"
