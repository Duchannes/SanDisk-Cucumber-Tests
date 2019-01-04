@all
Feature: Wireless Stick

    @aliaksandr1
    Scenario: Buy wireless stick
        Given I open "https://www.sandisk.com/" url
        When  I click "Usb Flash Reference"
        And I click "Wireless Radio Button"
        And I wait for "2" seconds
        And I click "Learn More Button"
        And I click "Capacity Button 128GB"
        And I click "Buy Sandisk Connect Button"
        Then Page title should be "SanDisk Online Store - SanDisk Connect™ Wireless Stick"
