@all
Feature: Menu

  @san1disk
  Scenario: Verify user can open menu
    Given I open "https://www.sandisk.com/" url
    Then Text of "Shop Now Reference > ASD > asd > asdas" should contain "SHOP NOW"
    When  I click "Shop Now Reference" 