@all
Feature: Scenario1

  @sandisk 
  Scenario: Choose where to buy
    Given I open "https://www.sandisk.com/" url
    
    When  I click "Extreme Reference" 
      And I click "Where To Buy" 
    Then Text of "To Find A Store Text" should contain "To Find A Store"
    When I click "Select Region" 
    When I click "Select Area" 
    When I click "Option Europe"
    When I click "Option Belarus"
    Then Text of "Result Found Title" should contain "result found"