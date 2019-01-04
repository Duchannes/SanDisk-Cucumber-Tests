@all
Feature: Main page

@Dima @Dima2
Scenario: Check product's titles on pages
Given I open "https://www.sandisk.com/" url
When I click "Usb Flash Reference"
  And I look "SANDISK EXTREME PRO USB 3.1 SOLID STATE FLASH DRIVE" in "List Of Usb Flash"
  And I click "Where To Buy"
  And I wait until "Select Region" is clickable
  And I click text "Europe" in "Select Region"
  And I click text "Belarus" in "Select Area"
  And I wait until "Result Found Title" is visible
Then Text of "Result Found Title" should contain "2 result found"


    