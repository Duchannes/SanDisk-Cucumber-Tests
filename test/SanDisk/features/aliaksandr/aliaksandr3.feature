@all
Feature: Shopping cart

     @aliaksandr @aliaksandr3
    Scenario: Shopping cart actions
        Given I open "https://www.sandisk.com/" url
        When  I click "Shop Now Reference"
        And I wait until "next" tab appears
        And I switch to "next" tab
        And I click text "SanDisk microSDXC Card for Nintendo Switch - 64GB" in "Top Sellers Buy Now Button"
        And  I click "Buy Now Button"
        And  I click "Delete Product Icon"
        And  I click "Continue Shopping"
        Then Text of "Number Of Products Icon" should contain "0"
        And  I click "Basket Icon"
        Then Text of "Mini Cart Text" should contain "Your shopping cart is currently empty."
        