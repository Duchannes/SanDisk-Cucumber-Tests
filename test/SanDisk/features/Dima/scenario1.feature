@all
Feature: Main page

@Dima @Dima1
Scenario: Check product's titles on pages
Given I open "https://www.sandisk.com/" url
 When I click "Shop Now Reference"
  And I wait until "next" tab appears
  And I switch to "next" tab
  And I click "Products Menu"
  And I click text "Music | Video" in "Products Menu"
  And I click text "SanDisk Clip Sport Plus - Black" in "List of products"
Then "Product Name" should be equal to "SanDisk Clip Sport Plus"
