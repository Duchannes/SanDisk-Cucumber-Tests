@all
Feature: Wireless Stick

    @aliaksandr @aliaksandr1
    Scenario: Buy wireless stick
        Given I open "https://www.sandisk.com/" url
        When  I click "Usb Flash Reference"
        And I click "Wireless Radio Button"
        And I click "Learn More Button"
        And I click "Capacity Button 128GB"
        And I wait until "Buy Sandisk Connect Button" is present
        And I click "Buy Sandisk Connect Button"
        And I wait until "next" tab appears
        And I switch to "next" tab
        Then Page title should contain "SanDisk Online Store - SanDisk Connect™ Wireless Stick"
