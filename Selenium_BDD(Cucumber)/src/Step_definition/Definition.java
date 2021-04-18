package Step_definition;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Definition
{
	WebDriver driver;

	@Given("^Application is up and running$")
	public void application_is_up_and_running(){
		System.setProperty("webdriver.chrome.driver","C:\\Users\\SanjayKushwaha\\Desktop\\Selenium\\chromedriver.exe");
		driver = new ChromeDriver();    //..... will open new instance of firefix  but only till certainn version
		driver.manage().window().maximize();
		driver.get("https://opensource-demo.orangehrmlive.com/");

	}

	@When("^login with \"([^\"]*)\" and \"([^\"]*)\" credentials$")
	public void login_with_validNinvalid_credentials(String username,String password){
		driver.findElement(By.id("txtUsername")).sendKeys(username);
		driver.findElement(By.id("txtPassword")).sendKeys(password);
		driver.findElement(By.id("btnLogin")).click();
		
	}

	@Then("^Login should be successful$")
	public void login_should_be_successful() {
		System.out.println("Login is successful :-)");
	
	}

	@Given("^Login should have been successful$")
	public void login_should_have_been_successful()
	{
			System.out.println("Home page should be displayed");
	}

	@When("^Assert actual and expected titles$") 
	public void assert_actual_and_expected_titles(){

		driver.findElement(By.xpath("//a[@id='menu_admin_viewAdminModule']")).click();
		String actualTitle=driver.getTitle();
		System.out.println(actualTitle);

		String exp="OrangeHRM";
		Assert.assertEquals(actualTitle, exp);
	}

	@Then("^Assertion should be successful$")
	public void assertion_should_be_successful(){
		System.out.println("title comparison is successful");

	}

}


