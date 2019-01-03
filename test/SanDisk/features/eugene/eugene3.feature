@all
Feature: Find the right feet

  @eugene
  Scenario: Find the right feet
    Given I open "https://www.sandisk.com/" url
    When  I click "Find The Right Fit"
      And I wait until "next" tab appears
      And I switch to "next" tab
    Then Page title should be "SanDisk | Product Compatibility Tool"
    When I click "Select Manufacturer"
      And I click "Nintendo" in "Select Manufacturer"
      And I wait for "2" seconds
      And I click "Select Device Type"
      And I click "Game Consoles" in "Select Device Type"
      And I wait for "2" seconds
      And I click "GO Button"
      And I wait for "5" seconds
    Then Count of "Products" should be "2"
  