@all
Feature: Main page

@Dima @Dima4
Scenario: Check product's titles on pages
Given I open "https://www.sandisk.com/" url
 When I click "Shop Now Reference"
  And I wait until "next" tab appears
  And I switch to "next" tab
  And I click "Products Menu"
  And I click text "USB Flash Drives" in "Products Menu"
  And I click text "16GB" in "Capacity List"
  And I wait for "2" seconds
Then Count of "List Of Usb Products" should be "10"