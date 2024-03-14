@regression
Feature: Kasirdemo Login Tests with TDD

    @all @positive @smoke
        Scenario: Login succesfully with valid credentials
            Given I open Kasirdemo website
            When I login with valid credentials
            Then I should be on the inventory page
        
        Scenario Outline: Login with invalid credentials
            Given I open Kasirdemo website
            When I login with <email> and <password>
            Then I should see an error message

            Example:
                | email                  | password     |
                | Tonihawk233@gmail.com  | Aku1234      |
                | 233                    | 1234         |