@all
Feature: SHOP

  @eugene @eugene4
  Scenario: Products sorting
    Given I open "https://www.sandisk.com/" url
    When  I click "Shop Now Reference"
      And I wait until "next" tab appears
      And I switch to "next" tab
      And I click "Products Menu"
    Then Count of "List Of Products Types" should be "9"
    When I click text "Mobile Cards / microSD" in "Products Menu"
    Then Text of "Category Title" should contain "Mobile Cards / microSD"
      And I click text "Price Low to High" in "Sort By Menu"
    Then Text of "Products Price" should sort ascending