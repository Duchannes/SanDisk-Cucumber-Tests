@all
Feature: Where to buy

  @eugene @eugene1
  Scenario: Choose where to buy
    Given I open "https://www.sandisk.com/" url
    When  I click "Extreme Reference"
      And I click "Where To Buy"
      And I click "Select Region"
      And I click text "Europe" in "Select Region"
      And I wait until "Select Area" is clickable
      And I click "Select Area"
      And I click text "Belarus" in "Select Area"
      And I wait until "Result Found Title" is present
    Then Text of "Result Found Title" should contain "result found"
