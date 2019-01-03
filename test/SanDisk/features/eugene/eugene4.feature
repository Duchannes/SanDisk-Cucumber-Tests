@all
Feature: SHOP

  @eugene
  Scenario: Products sorting
    Given I open "https://www.sandisk.com/" url
    When  I click "Shop Now Reference"
      And I wait until "next" tab appears
      And I switch to "next" tab
    Then I get tab title
    When I click "Products Menu"
    Then Count of "List Of Products Types" should be "9"
    When I click "Mobile Cards / microSD" in "Products Menu"
    Then Text of "Category Title" should contain "Mobile Cards / microSD"
    