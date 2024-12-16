package Hooks;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import Driver.DriverInstance;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.AfterStep;
import cucumber.api.java.Before;
import cucumber.api.java.BeforeStep;

public class hook extends DriverInstance {

	@Before
	public void beforescenario(Scenario scenario) throws InterruptedException {

		driver = new ChromeDriver();

		driver.get("https://bookcart.azurewebsites.net/");

	
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);

		/*
		 * String name = scenario.getName(); System.out.println("scenario name" + name);
		 */
	}

	@After("@clear")

	public void clear(Scenario scenario) throws InterruptedException {
		scenario.write("Before clear the cart");
		byte[] screenshot = driver.getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");

		driver.findElement(By.xpath("(//span[@class='mat-mdc-button-touch-target'])[3]")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//span[normalize-space(text())='Clear cart']")).click();
		Thread.sleep(2000);
		String textclear = driver
				.findElement(By.xpath("//mat-card-title[normalize-space(text())='Your shopping cart is empty.']"))
				.getText();
		Assert.assertEquals(textclear, "Your shopping cart is empty.");
		scenario.write("After clear the cart");
		screenshot = driver.getScreenshotAs(OutputType.BYTES);
		scenario.embed(screenshot, "image/png");

	}

	@After
	public void afterscenario(Scenario scenario) {

		boolean failed = scenario.isFailed();
		System.out.println("is failed" + failed);

		if (failed) {
			byte[] screenshot = driver.getScreenshotAs(OutputType.BYTES);
			scenario.embed(screenshot, "image/png");
		}
		driver.quit();
	}

	@BeforeStep
	public void beforestep(Scenario scenario) {
//		scenario.write("started-hari");
	}

	@AfterStep
	public void afterstep(Scenario scenario) {
//		scenario.write("finished-hari");
	}

}
