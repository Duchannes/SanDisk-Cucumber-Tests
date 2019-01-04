@all
Feature: Main page

@Dima3
Scenario: Check product's titles on pages
Given I open "https://www.sandisk.com/" url
 When I click "Shop Now Reference"
  And I wait until "next" tab appears
  And I switch to "next" tab
  And I click "Products Menu"
  And I click text "Music | Video" in "Products Menu"
  And I click text "SanDisk Clip Sport Plus - Black" in "List of products"
  And I click "Buy Now Button"
  And I click "Delete Product Icon"
  Then "Empty Cart" should be equal to "Your shopping cart is currently empty."
