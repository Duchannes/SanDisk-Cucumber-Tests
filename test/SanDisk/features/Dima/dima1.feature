@all
Feature: Main page

@Dima1
Scenario: Check product's titles on pages
Given I open "https://www.sandisk.com/" url
 When I click "Shop Now Reference"
  And I wait until "next" tab appears
  And I switch to "next" tab
  And I click 
