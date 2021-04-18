$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("MyTest.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "## Keywords should start with Capital letters"
    }
  ],
  "line": 3,
  "name": "To test the login in the application",
  "description": "",
  "id": "to-test-the-login-in-the-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Test login with valid and invalid credentials",
  "description": "",
  "id": "to-test-the-login-in-the-application;test-login-with-valid-and-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Login:"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Application is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "login with \"\u003cusername\u003e\" and \"\u003cpassword\u003e\" credentials",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "to-test-the-login-in-the-application;test-login-with-valid-and-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "to-test-the-login-in-the-application;test-login-with-valid-and-invalid-credentials;;1"
    },
    {
      "comments": [
        {
          "line": 12,
          "value": "##|test|test|"
        },
        {
          "line": 13,
          "value": "##|dev|DEV|"
        },
        {
          "line": 14,
          "value": "##|SANJAY|SANJAY|"
        }
      ],
      "cells": [
        "admin",
        "admin123"
      ],
      "line": 15,
      "id": "to-test-the-login-in-the-application;test-login-with-valid-and-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "comments": [
    {
      "line": 12,
      "value": "##|test|test|"
    },
    {
      "line": 13,
      "value": "##|dev|DEV|"
    },
    {
      "line": 14,
      "value": "##|SANJAY|SANJAY|"
    }
  ],
  "line": 15,
  "name": "Test login with valid and invalid credentials",
  "description": "",
  "id": "to-test-the-login-in-the-application;test-login-with-valid-and-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@Login:"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "Application is up and running",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "login with \"admin\" and \"admin123\" credentials",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Login should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.application_is_up_and_running()"
});
formatter.result({
  "duration": 9646483000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 12
    },
    {
      "val": "admin123",
      "offset": 24
    }
  ],
  "location": "Definition.login_with_validNinvalid_credentials(String,String)"
});
formatter.result({
  "duration": 4557649500,
  "status": "passed"
});
formatter.match({
  "location": "Definition.login_should_be_successful()"
});
formatter.result({
  "duration": 124000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Test the title of the page",
  "description": "",
  "id": "to-test-the-login-in-the-application;test-the-title-of-the-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "Login should have been successful",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "Assert actual and expected titles",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "Assertion should be successful",
  "keyword": "Then "
});
formatter.match({
  "location": "Definition.login_should_have_been_successful()"
});
formatter.result({
  "duration": 155700,
  "status": "passed"
});
formatter.match({
  "location": "Definition.assert_actual_and_expected_titles()"
});
formatter.result({
  "duration": 745300,
  "error_message": "java.lang.NullPointerException\r\n\tat Step_definition.Definition.assert_actual_and_expected_titles(Definition.java:54)\r\n\tat ✽.When Assert actual and expected titles(MyTest.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Definition.assertion_should_be_successful()"
});
formatter.result({
  "status": "skipped"
});
});