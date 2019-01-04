@all
Feature: Shopping cart

    @aliaksandr @aliaksandr4
    Scenario: Shopping cart actions
        Given I open "https://www.sandisk.com/" url
        When  I click "Ssd Reference"
        And I wait until "Portable SSD Radio Button" is clickable
        And  I click "Portable SSD Radio Button"
        Then Text of each "Product Title Big" should contain "SSD"
        And I wait until "High Perfomance Radio Button" is clickable
        And  I click "High Perfomance Radio Button"
        Then Text of each "Product Title Big" should contain "SSD"
        And I wait until "On The Go Radio Button" is clickable
        And  I click "On The Go Radio Button"
        Then Text of each "Product Title Big" should contain "EXTREME"
        