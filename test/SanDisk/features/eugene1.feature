@all
Feature: Where to buy

  @sandisk
  Scenario: Choose where to buy
    Given I open "https://www.sandisk.com/" url
    When  I click "Extreme Reference"
      And I click "Where To Buy"
      And I click "Select Region"
      And I click "Europe" in "Select Region"
      And I wait for "2" seconds
      And I click "Select Area"
      And I click "Belarus" in "Select Area"
      And I wait for "2" seconds
    Then Text of "Result Found Title" should contain "result found"
