
package steps;

import org.openqa.selenium.By;
import org.testng.Assert;

import Driver.DriverInstance;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class loginsteps extends DriverInstance {

	@And("User click on the login link")
	public void userClickOnTheLoginLink() throws InterruptedException {
		

		driver.findElement(By.xpath("(//span[@class='mdc-button__label'])[2]")).click();
		Thread.sleep(2000);
	}

	@Given("User enter the username as {string}")
	public void userEnterTheUsernameAs(String username) throws InterruptedException {
		driver.findElement(By.cssSelector("input[placeholder='Username']")).sendKeys(username);
		Thread.sleep(2000);

	}

	@Given("User enter the password as {string}")
	public void userEnterThePasswordAs(String password) throws InterruptedException {
		driver.findElement(By.cssSelector("input[placeholder='Password']")).sendKeys(password);
		Thread.sleep(2000);
	}

	@When("User click the login button")
	public void userClickTheLoginButton() {

		driver.findElement(By.xpath("//span[text()='Login']")).click();

	}

	@Then("login should be success")
	public void loginShouldBeSuccess() throws InterruptedException {
		String text = driver.findElement(By.xpath("(//span[@class='mdc-button__label']//span)[1]")).getText();
		System.out.println(text);
		Thread.sleep(2000);

	}

	@When("login should be fail")
	public void loginShouldBeFail() {
		String exmsg = driver
				.findElement(By.xpath("//mat-error[normalize-space(text())='Username or Password is incorrect.']"))
				.getText();

		Assert.assertEquals(exmsg, "Username or Password is incorrect.");

	}

}