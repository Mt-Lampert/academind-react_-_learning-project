Feature: Add User

    As an app admin
    I want to add other app users
    In order to have a proper user list


    Scenario: Adding the first user successfully
        Given the landing page has been opened successfully
        And there is no user list on the page yet
        When I add a valid username to the form
        And I add a valid user age to the form
        And I press the "Add User" button
        Then a new <div>-box pops up on the page below the form box
        And it shows a text box with the name and the age of the new user.

    Scenario: Adding another user successfully
        Given the landing page has been opened successfully
        And there exists a user list on the page already
        When I add a valid username to the form
        And I add a valid user age to the form
        And I press the "Add User" button
        Then another text box appears inside the list box
        And it shows the name and the age of the new user.

    Scenario: Adding a user without name and age entries
        Given the landing page has been opened successfully
        When I leave the name input field and the age input field blank
        And I click on the "Add User" button
        Then a modal pops up
        And on the modal a box appears
        And the box's title shows "Invalid input"
        And the box shows an error message in its body
        And the box shows an "Okay" button in its body
        When I click on the "Okay" button or I click on the modal backdrop
        Then the modal disappears again.
        
    Scenario: Adding a user with an invalid name
        Given the landing page has been opened successfully
        When I add no name or an invalid name in the form
        And I click on the "Add User" button
        Then a modal pops up
        And on the modal a box appears
        And the box's title shows "Invalid input"
        And the box shows "Please enter a valid name."
        And the box shows an "Okay" button
        When I click on the "Okay" button or I click on the modal backdrop
        Then the modal disappears again.

    Scenario: Adding a user with an invalid age
        Given the landing page has been opened successfully
        When I add no name or an invalid name in the form
        And I click on the "Add User" button
        Then a modal pops up
        And on the modal a box appears
        And the box's title shows "Invalid input"
        And the box shows "Please enter a valid age."
        And the box shows an "Okay" button
        When I click on the "Okay" button or I click on the modal backdrop
        Then the modal disappears again.

