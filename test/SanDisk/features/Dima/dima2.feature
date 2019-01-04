@all
Feature: Main page

@Dima2
Scenario: Check product's titles on pages
Given I open "https://www.sandisk.com/" url
 When I click "Usb Flash Reference"
 And I click "SANDISK EXTREME PRO USB 3.1 SOLID STATE FLASH DRIVE"
 And I click "Where To Buy"
 And I wait until "Select Region" is visible
 And I click "Select Region"
 And I click "Europe" in "Select Region"
 And I click "Select Area"
 And I click "Belarus" in "Select Area"
 And I wait until "Result Found Title" is visible
  Then Text of "Result Found Title" should contain "result found"