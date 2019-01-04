@sandisk
@anton @anton1
Feature: Buy item

  Scenario: Add and delete item to basket
    Given I open "https://www.sandisk.com/" url
    When  I click text "SHOP NOW" in "|Title Menu"
      And I wait until "next" tab appears
      And I switch to "next" tab
    Then Page title should contain "SanDisk Online Store"
    When I click on "any" element from "|Top Sellers > Buy Now Buttons"
    Then Page title should contain "Shopping Cart"
    When I click "SanDisk Image"
    Then Page title should contain "SanDisk Online Store"
    When I click "Basket Icon"
      And I click "View Cart Button"
    Then Page title should contain "Shopping Cart"
      And Count of "Shopping Cart Items" should be "1"
    When I click "Delete Product Icon"
    Then Count of "Shopping Cart Items" should be "0"