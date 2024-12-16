package testRunner;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(

		features = {
				"src/test/java/feature" }, 
		dryRun = !true,
		glue = {"steps","Hooks"},
		snippets = SnippetType.CAMELCASE,
		monochrome = true,
		plugin = "com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:"
	//	tags = {"@hari"}

)

public class runner extends AbstractTestNGCucumberTests {

}
