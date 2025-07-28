package co.mergedev.googlesuite.questions;

import co.mergedev.googlesuite.userinterfaces.LoginInterface;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Question;

public class LoginResults implements Question<Boolean> {

    public static LoginResults isErrorVisible() {
        return new LoginResults();
    }

    @Override
    public Boolean answeredBy(Actor actor) {
        return LoginInterface.ERROR_MESSAGE.resolveFor(actor).isVisible();
    }
}