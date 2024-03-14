@regression @tdd
Feature: KasirDemo Login Tests

    @all @positive @smoke
    Scenario: Login succesfully with valid credentials
        Given I open KasirDemo website
        When I login with valid credentials
        Then I should be on the inventory page

    @all @negative
    Scenario: Verify login failed with Invalid email
        Given I open KasirDemo website
        When I login with invalid email
        Then I should see an error message

    @all @negative
    Scenario: Verify login failed with Invalid password
        Given I open KasirDemo website
        When I login with invalid password
        Then I should see an error message kredensial