@all
Feature: Wireless Stick

    @aliaksandr2
    Scenario: Buy wireless stick
        Given I open "https://www.sandisk.com/" url
        When  I click "Shop Now Reference"
        And I wait until "next" tab appears
        And I switch to "next" tab
        And I click "Products Menu"
        And I click "Special Offers" in "Products Menu"
        And I click "240GB" in "Capacity List"
        And I wait until "Selected Filters Title" is visible
        And I click "250GB" in "Capacity List"


