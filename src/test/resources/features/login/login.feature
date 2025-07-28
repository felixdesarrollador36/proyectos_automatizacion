Feature: Login to SauceDemo

  Scenario: Login with invalid credentials
    Given Félix opens the SauceDemo login page
    When he logs in with username "locked_out_user" and password "secret_sauce"
    Then he should see an error message