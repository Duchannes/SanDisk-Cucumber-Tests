@sandisk
@anton @anton4
Feature: Promocode

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
    When I click "Promocode Area > Link"
      And I type "WRONGPROMO" in "Promocode Area > Code Field"
      And I click "Promocode Area > Apply Button"
    Then Text of "Promocode Area > Message Area" should contain "Invalid promo code"