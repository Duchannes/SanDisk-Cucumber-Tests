@sandisk
@anton @anton3
Feature: Payment Checkout

  Scenario: Try to buy some item
    Given I open "https://www.sandisk.com/" url
    When  I click text "SHOP NOW" in "|Title Menu"
      And I wait until "next" tab appears
      And I switch to "next" tab
    Then Page title should contain "SanDisk Online Store"
    When I click on "any" element from "|Top Sellers > Buy Now Buttons"
    Then Page title should contain "Shopping Cart"
    When I click "Checkout Button"
    Then Page title should contain "Billing"
    When I click "Checkout As Guest Button"
    Then Page title should contain "Billing"
      And Text of "Billing Information" should contain "Billing Information"
