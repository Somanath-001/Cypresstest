Feature: End to End Ecommerce validation

    application Regression
    @Regression
    Scenario: Ecommerce products delivery
        Given I open Ecommerce Page
        When I add items to Cart
        When Validate the total prices
        Then Select the country submit and verify Thankyou
    @Smoke
    Scenario: Filling the form details
        Given I open Ecommerce Page
        When I fill the form details
            | name     | gender |
            | Somanath | Male   |
        Then Validate the form behaviour
        Then Select the shop Page