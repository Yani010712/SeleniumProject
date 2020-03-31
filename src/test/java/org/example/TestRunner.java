package org.example;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "src/test/resources/LoginFeature",
    glue = {"org/example/step_definitions"},
    plugin = {"pretty", "html:target/cucumber-html-report", "json:target/cucumber-json-report.json"})
public class TestRunner {
}
