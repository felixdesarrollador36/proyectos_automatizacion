package co.mergedev.googlesuite.stepdefinitions;

import co.mergedev.googlesuite.questions.LoginResults;
import co.mergedev.googlesuite.tasks.LoginTask;
import io.cucumber.java.Before;
import io.cucumber.java.en.*;
import net.serenitybdd.annotations.Managed;
import net.serenitybdd.screenplay.actors.OnStage;
import net.serenitybdd.screenplay.actors.Cast;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;
import org.openqa.selenium.WebDriver;


import static net.serenitybdd.screenplay.GivenWhenThen.seeThat;

public class LoginStepDefinitions {
    @Managed(driver = "chrome")
    WebDriver hisBrowser;

    @Before
    public void setTheStage() {
        OnStage.setTheStage(Cast.ofStandardActors());
        OnStage.theActorCalled("Félix").can(BrowseTheWeb.with(hisBrowser));
    }


    @Given("Félix opens the SauceDemo login page")
    public void openLoginPage() {
        OnStage.theActorCalled("Félix").wasAbleTo(
                net.serenitybdd.screenplay.actions.Open.url("https://www.saucedemo.com/")
        );
    }

    @When("he logs in with username {string} and password {string}")
    public void login(String username, String password) {
        OnStage.theActorInTheSpotlight().attemptsTo(
                LoginTask.withCredentials(username, password)
        );
    }

    @Then("he should see an error message")
    public void shouldSeeError() {
        OnStage.theActorInTheSpotlight().should(
                seeThat("Login error is visible", LoginResults.isErrorVisible())
        );
    }
}