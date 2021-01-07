Feature: Policy page
    The application should have a page for private policy

    Scenario: Private policy - desktop
    Given we open the private policy page
    When we are on desktop
    Then multiple options are available in the header
    