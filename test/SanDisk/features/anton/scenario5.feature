@sandisk
@anton @anton5
Feature: Promocode

  Scenario Outline: Add and delete item to basket
    Given I open "https://www.sandisk.com/" url
    When  I click text "SHOP NOW" in "|Title Menu"
      And I wait until "next" tab appears
      And I switch to "next" tab
    Then Page title should contain "SanDisk Online Store"
    When I click "Products Menu"
      And I click text "USB Flash Drives" in "Products Menu"
      And I click text "<Capacity>" in "Capacity List"
      And I wait until "|List Of Products" is visible
    Then Text of each "|List Of Products > Title" should contain "<Capacity>"

    Examples:
  | Capacity     |
  | 16GB         | 
  | 32GB         | 
  | 64GB         |
  | 128GB        |
  | 256GB        |