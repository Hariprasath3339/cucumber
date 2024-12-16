@hari
Feature: Bookcart application demo

  Background: 
    Given User click on the login link

  Scenario: Login should be success
    And User enter the username as "Hari prasath"
    And User enter the password as "H@ri$uba3"
    When User click the login button
    Then login should be success

  Scenario: Login should be fail
    And User enter the username as "ranga"
    And User enter the password as "pass1234"
    When User click the login button
    But login should be fail
