@sandisk
@anton @anton2 
Feature: Search feature
  @bug
  Scenario Outline: Find <Search>
    Given I open "https://www.sandisk.com/" url
    When  I click text "SHOP NOW" in "|Title Menu"
      And I wait until "next" tab appears
      And I switch to "next" tab
    Then Page title should contain "SanDisk Online Store"
    When I click "Search Icon"
      And I type "<Search>" in "Search Field"
      And I click "Search Button"
    Then Page title should contain "Search Results"
      And Count of "|List Of Products" should not be "0"
      And Text of each "|List Of Products > Title" should contain "<Search>"

Examples:
  | Search       |
  | MP3 Player   | 
  | Earphones    | 
  | iPhone       |

Scenario Outline: Find <Search>
    Given I open "https://www.sandisk.com/" url
    When  I click text "SHOP NOW" in "|Title Menu"
      And I wait until "next" tab appears
      And I switch to "next" tab
    Then Page title should contain "SanDisk Online Store"
    When I click "Search Icon"
      And I type "<Search>" in "Search Field"
      And I click "Search Button"
    Then Page title should contain "Search Results"
      And Count of "|List Of Products" should be "0"

Examples:
  | Search       |
  | dasdasdasd   | 
  | @$@#!%!      | 
  | наушники     |