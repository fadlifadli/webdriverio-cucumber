@regression
Feature: Saucedemo Login Tests with TDD

    @all @positive @smoke
        Scenario: Login succesfully with valid credentials
            Given I open Saucedemo website
            When I login with valid credentials
            Then I should be on the inventory page
        
        Scenario Outline: Login with invalid credentials
            Given I open Saucedemo website
            When I login with <username> and <password>
            Then I should see an error message

            Example:
                | username      | password          |
                | invalid_user  | secret_sauce      |
                | standard_user | invalid_password  |