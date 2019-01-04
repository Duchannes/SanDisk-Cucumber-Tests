@all
Feature: Find the right feet

  @eugene @eugene3
  Scenario: Find the right feet
    Given I open "https://www.sandisk.com/" url
    When  I click "Find The Right Fit"
      And I wait until "next" tab appears
      And I switch to "next" tab
    Then Page title should contain "SanDisk | Product Compatibility Tool"
    When I click "Select Manufacturer"
      And I click text "Nintendo" in "Select Manufacturer"
      And I wait until "Select Device Type" is clickable
      And I click "Select Device Type"
      And I click text "Game Consoles" in "Select Device Type"
      And I wait until "GO Button" is clickable
      And I click "GO Button"
    Then Count of "Products" should be "2"
  