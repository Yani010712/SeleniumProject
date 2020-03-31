package org.example.step_definitions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Login_steps {

    @Before
    public static void setupClass() { WebDriverManager.chromedriver().setup();}

    WebDriver driver = null;

    @Given("^I have open the browser$")
    public void iHaveOpenTheBrowser() throws Throwable {
        driver = new ChromeDriver();

    }
    @When("I open Facebook website")
    public void iOpenFacebookWebsite()  {
       driver.navigate().to( "https://www.facebook.com/");
    }

    @Then("Login button should exit")
    public void loginButtonShouldExit()  {
        Assert.assertTrue(driver.findElement(By.cssSelector("#u_0_b")).isDisplayed());
    }
    @After
    public  void tearDown(){
        driver.quit();
    }
}
