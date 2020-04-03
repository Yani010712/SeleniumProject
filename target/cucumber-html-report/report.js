$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/LoginFeature/Login.feature");
formatter.feature({
  "name": "As a user I want to design a facebook login page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Login functionality exists",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeCICD"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_steps.iHaveOpenTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.match({
  "location": "Login_steps.iOpenFacebookWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login button should exit",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.loginButtonShouldExit()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functionality exists",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokeUAT"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_steps.iHaveOpenTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.match({
  "location": "Login_steps.iOpenFacebookWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login button should exit",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.loginButtonShouldExit()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functionality exists",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokePREPROD"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_steps.iHaveOpenTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.match({
  "location": "Login_steps.iOpenFacebookWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login button should exit",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.loginButtonShouldExit()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login functionality exists",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokePROD"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_steps.iHaveOpenTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I open Facebook website",
  "keyword": "When "
});
formatter.match({
  "location": "Login_steps.iOpenFacebookWebsite()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login button should exit",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.loginButtonShouldExit()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});