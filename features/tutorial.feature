Feature: Testing product info

  Scenario: View product info
     Given we are on home page
      When we click a product
      Then I should see product info
