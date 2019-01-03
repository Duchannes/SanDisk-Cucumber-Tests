@all
Feature: Where to buy

  @sandisk
  Scenario: Choose where to buy
    Given I open "https://www.sandisk.com/" url
    Then I get text in "Body1 > Title Menu > Link"
    Then I get text in "Body > Title Menu > Menu Option > Link"