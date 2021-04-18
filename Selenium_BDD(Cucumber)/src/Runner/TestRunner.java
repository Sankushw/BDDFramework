package Runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

//by default cucumber uses Junit framework
@RunWith(Cucumber.class)                //to run with cucumber class  
@CucumberOptions(features="Features", glue="Step_definition" /*plugin="html:test-output/html_report"*/)   //annotation is used to set some properties for our cucumber test like feature file, step definition, 
public class TestRunner {

	
}
