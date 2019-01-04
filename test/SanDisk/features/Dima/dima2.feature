@all
Feature: Main page

@Dima2
Scenario: Check product's titles on pages
Given I open "https://www.sandisk.com/" url
When I click "Usb Flash Reference"
And I look "SANDISK EXTREME PRO USB 3.1 SOLID STATE FLASH DRIVE" in "List Of Usb Flash"
And I click "Where To Buy"
And 

    