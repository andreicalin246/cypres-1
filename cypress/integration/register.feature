Feature: Register
    We want to register to the application using valid user and password 

    Scenario: Register with invalid user and password
    Given we open the registration page
    When we type an invalid email and we focus on username field
    Then the email field will have different style