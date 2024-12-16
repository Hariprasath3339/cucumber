
package steps;

import org.junit.Assert;
import org.openqa.selenium.By;

import Driver.DriverInstance;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class Addtocart extends DriverInstance {

	@Given("User should login as {string} and {string}")
	public void userShouldLoginAsAnd(String username, String password) throws InterruptedException {
		driver.findElement(By.xpath("(//span[@class='mdc-button__label'])[2]")).click();
		Thread.sleep(2000);
		driver.findElement(By.cssSelector("input[placeholder='Username']")).sendKeys(username);

		Thread.sleep(2000);
		driver.findElement(By.cssSelector("input[placeholder='Password']")).sendKeys(password);
		Thread.sleep(3000);
		driver.findElement(By.xpath("//span[text()='Login']")).click();
		Thread.sleep(3000);
	}

	@Given("User search the {string}")
	public void userSearchThe(String book) throws InterruptedException {
		driver.findElement(By.cssSelector("input[type='search']")).sendKeys(book);
		Thread.sleep(3000);
		driver.findElement(By.cssSelector("mat-option[role='option']")).click();
		Thread.sleep(3000);

	}

	@Given("User add the book to cart")
	public void userAddTheBookToCart() throws InterruptedException {
		driver.findElement(By.xpath("//span[normalize-space(text())='Add to Cart']")).click();

		Thread.sleep(2000);

	}

	@When("Badge updated successfully")
	public void badgeUpdatedSuccessfully() {
		String text = driver.findElement(By.id("mat-badge-content-0")).getText();
		Assert.assertEquals(Integer.parseInt(text) > 0, true);
	}
}