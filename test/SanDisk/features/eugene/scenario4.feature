@all
Feature: SHOP

  @eugene @eugene4
  Scenario Outline: Should check products menu by <Text>
    Given I open "https://www.sandisk.com/" url
    When  I click "Shop Now Reference"
      And I wait until "next" tab appears
      And I switch to "next" tab
      And I click "Products Menu"
    Then Count of "List Of Products Types" should be "9"
    When I click text "<Text>" in "Products Menu"
    Then Text of "Category Title" should contain "<Current Text>"
      
  Examples:
  | Text                          | Current Text        |  
  | Mobile Cards / microSD        | Mobile Cards        |                               
  | Mobile Storage                | Mobile Storage      |                
  | USB Flash Drives              | USB Flash Drives    |                
  | Solid State Drives            | Solid State Drives  |                        
  | Accessories & Readers         | Accessories         |                
  | Special Offers                | Special Offers      |       
  | SanDisk Outlet Store          | Outlet              |