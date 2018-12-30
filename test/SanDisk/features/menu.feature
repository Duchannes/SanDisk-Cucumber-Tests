@all
Feature: Menu

  @san1disk
  Scenario: Verify user can open menu
    Given I open "https://www.sandisk.com/" url
    Then Text of "Shop Now Reference > ASD > asd > asdas" should contain "SHOP NOW"

    When  I click "Shop Now Reference" 

  @sandisk 
  Scenario: Choose where to buy
    Given I open "https://www.sandisk.com/" url
    
    When  I click "Extreme Reference" 
      And I click "Where To Buy" 
    Then Text of "To Find A Store Text" should contain "To Find A Store"
      And I click "Select Region" 
      And I click "Select Area" 
      And I click "Option Europe"
      And I click "Option Belarus"
    Then Text of "Result Found Title" should contain "result found"
    