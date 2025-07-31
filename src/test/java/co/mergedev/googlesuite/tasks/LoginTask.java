package co.mergedev.googlesuite.tasks;
import co.mergedev.googlesuite.userinterfaces.LoginInterface;
import net.serenitybdd.screenplay.Actor;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Enter;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.Tasks;

public class LoginTask implements Task {

    private final String username;
    private final String password;

    public LoginTask(String username, String password) {
        this.username = username;
        this.password = password;
    }

    //Pruebas de login con credenciales
    public static LoginTask withCredentials(String username, String password) {
        return Tasks.instrumented(LoginTask.class, username, password);
    }

    @Override
    public <T extends Actor> void performAs(T actor) {
        actor.attemptsTo(
                Enter.theValue(username).into(LoginInterface.USERNAME_FIELD),
                Enter.theValue(password).into(LoginInterface.PASSWORD_FIELD),
                Click.on(LoginInterface.LOGIN_BUTTON)
        );
    }
}