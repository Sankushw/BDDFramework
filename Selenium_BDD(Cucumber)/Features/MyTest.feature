## Keywords should start with Capital letters
Feature: To test the login in the application

  @Login:
  Scenario Outline: Test login with valid and invalid credentials
    Given Application is up and running
    When login with "<username>" and "<password>" credentials
    Then Login should be successful

    Examples: 
      | username | password |
      | test     | test     |
      | dev      | DEV      |
      | SANJAY   | SANJAY   |
      | admin    | admin123 |

  Scenario: Test the title of the page
    Given Login should have been successful
    When Assert actual and expected titles
    Then Assertion should be successful
