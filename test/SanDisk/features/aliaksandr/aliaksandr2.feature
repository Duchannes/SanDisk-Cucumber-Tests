@all
Feature: Special orders

    @aliaksandr @aliaksandr2
    Scenario: Filter special orders
        Given I open "https://www.sandisk.com/" url
        When  I click "Shop Now Reference"
        And I wait until "next" tab appears
        And I switch to "next" tab
        And I click "Products Menu"
        And I click text "Special Offers" in "Products Menu"
        And I click text "240GB" in "Capacity List"
        And I wait until "Selected Filters Title" is present
        And I click text "250GB" in "Capacity List"
