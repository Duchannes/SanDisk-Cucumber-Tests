@all
Feature: Shopping cart

  @eugene @eugene2
  Scenario: Add to shopping cart and delete
    Given I open "https://www.sandisk.com/" url
    When  I click "Buy It Now"
      And I wait until "next" tab appears
      And I switch to "next" tab
    Then "Product Information" should be visible
      And I click "Select Size"
      And I click "Select Option"
      And I wait until "Stock Message" is present
    Then Text of "Stock Message" should contain "Stock"
    When I click "Buy Now Button"
    Then "Continue Shopping" should be visible
    When I click "Continue Shopping"
      And I wait until "Icon Basket" is present
    Then "Icon Basket" should be visible
    When I click "Basket"
      And I click "Checkout Button"
      And I click "Delete Product Icon"
    Then Text of "Empty Cart" should contain "Your shopping cart is currently empty."
    