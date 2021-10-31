Feature: Landing Page

    As a user
    I want to open the Landing Page
    In order to Use the app.

    Scenario: Opening the Landing Page
        When I open the Landing Page
        Then I see a white <div>-box
        And I see a text field "user name" inside that box
        And I see a text field "age" inside that box
        And I see a button "Add User" inside that box.