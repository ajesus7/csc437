import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createContext, provide } from "@lit/context";
import { APIUser, AuthenticatedUser, FormDataRequest } from "../rest";

export let authContext = createContext<APIUser>("auth");

@customElement("auth-required")
export class AuthRequiredElement extends LitElement {
  @state()
  loginStatus: number = 0;

  @state()
  registerStatus: number = 0;
  @state() activeForm: "login" | "register" = "register"; // State to control which form to display

  // used to toggle between the Sign Up and Login Forms
  @state()
  showLoginForm: boolean = false;

  // informs user of error signing up
  @state()
  showSignUpErrorMessage: boolean = false;

  // informs user of successful sign up
  @state()
  showSignUpSuccessMessage: boolean = false;

  @provide({ context: authContext })
  @state()
  user: APIUser = AuthenticatedUser.authenticateFromLocalStorage(() =>
    this._signOut()
  );

  isAuthenticated() {
    return this.user.authenticated;
  }

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
    // reset error messages as they should not be visible if the user navigates back (form data not persisted)
    this.showSignUpErrorMessage = false;
    this.showSignUpSuccessMessage = false;
    this.requestUpdate(); // causes UI to update?
  }

  firstUpdated() {
    this._toggleDialog(!this.isAuthenticated());
  }

  render() {
    return html`
      <section class="formsContainer">
        ${this.showLoginForm
          ? html` <form
              @submit=${this._handleLoginSubmit}
              class="loginForm ${this.activeForm === "login" ? "active" : ""}"
            >
              <h2>Login</h2>
              <p class="formInformation">
                Welcome back. Are you ready to find some new music?
              </p>
              <div class="formLabelAndInput">
                <label>Username</label>
                <input name="username" type="text" required />
              </div>
              <div class="formLabelAndInput">
                <label>Password</label>
                <input type="password" name="password" required />
              </div>
              <button type="submit" class="submitButton">Sign in</button>
              <p class="loginSignupLink">
                Don&apos;t have an account yet?
                <span @click=${this.toggleLoginForm} class="signInLink"
                  >Sign Up Here</span
                >
              </p>
            </form>`
          : html`<form @submit=${this._handleRegister} class="registrationForm">
              <h2>Sign Up</h2>
              <p class="formInformation">
                Join your friends and see who can match the vibe the best!
              </p>
              <div class="formLabelAndInput">
                <label>Name</label>
                <input name="username" type="text" required />
              </div>
              <div class="formLabelAndInput">
                <label>Password</label>
                <input type="password" name="pwd" required />
              </div>

              <button type="submit" class="submitButton">Sign up</button>
              ${this.showSignUpErrorMessage
                ? html`<p class="errorMessage">
                    There was an error with signing you up, please try again.
                  </p>`
                : html``}
              ${this.showSignUpSuccessMessage
                ? html`<p class="successMessage">
                    Sign up successful. If you are not redirected shortly,
                    please
                    <span @click=${this.toggleLoginForm} class="signInLink"
                      >log in here.</span
                    >
                  </p>`
                : html``}
              <p class="loginSignupLink">
                Already have an account?
                <span @click=${this.toggleLoginForm} class="signInLink"
                  >Sign In</span
                >
              </p>
            </form>`}
      </section>
    `;
  }

  static styles = css`
    :host {
      display: block;
      max-width: 400px;
      margin: auto;
    }

    .formsContainer {
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      border: 2px solid black;
    }

    form {
      display: flex;
      flex-direction: column;
    }

    h2 {
      color: #333;
      text-align: center;
      font-size: 24px;
      margin: 0;
      padding: 0;
      width: auto;
      text-align: left;
    }

    label {
      color: black;
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 3px;
    }

    .formInformation {
      color: #665;
      font-size: 16px;
      margin-bottom: 10px;
      position: relative;
      top: -6px;
    }

    .formLabelAndInput {
      display: flex;
      flex-direction: column;
    }
    input {
      padding: 12px;
      margin-bottom: 16px;
      border: 1px solid #ccc;
      border-radius: 8px;
      height: 1em;
    }

    .submitButton {
      background-color: #4caf50;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
    }

    .submitButton:hover {
      background-color: #45a049;
    }

    .signInLink {
      color: #4caf50;
    }

    .signInLink:hover {
      color: #4caf50;
      cursor: pointer;
      text-decoration: underline;
    }

    .loginSignupLink {
      font-size: 12px;
      color: #888;
      text-align: center;
      margin-top: 25px;
    }

    a {
      color: #4caf50;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .registrationForm {
      display: flex;
      flex-direction: column;
    }

    .errorMessage {
      color: red;
      font-size: 12px;
      margin: 0;
      padding: 0;
      margin-top: 12px;
    }
    .successMessage {
      color: black;
      font-size: 12px;
      margin: 0;
      padding: 0;
      margin-top: 12px;
    }
  `;

  // * This function creates the actual login request, it is separated from _handleLoginSubmit
  // * so that this can be called on successful sign up to automatically login a user without needed to retrigger the event
  // * (by passing in the username and password)
  _loginUser(username: string, password: string) {
    console.log("login user called!");
    console.log("username: ", username, " password: ", password);
    const formData = new FormData();
    formData.append("username", username);
    formData.append("pwd", password);
    const request = new FormDataRequest(formData);
    console.log("request within loginUser: ", request);
    request
      .base()
      .post("/login")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          this.loginStatus = res.status;
          throw new Error(`Login failed with status: ${res.status}`);
        }
      })
      .then((json) => {
        console.log("Authentication:", json.token);
        console.log("Log In Request Successful!:", json.token);
        this.user = AuthenticatedUser.authenticate(json.token, () =>
          this._signOut()
        );
        this._toggleDialog(false);
        this.requestUpdate();
      })
      .catch((error) => console.error("Login Error:", error));
  }

  // * triggered when the login is submitted, but calls loginUser helper function to actually submit the request
  _handleLoginSubmit(event: SubmitEvent) {
    event.preventDefault();
    console.log("handle login submit called!");
    const form = event.target as HTMLFormElement;
    const usernameElement = form.querySelector('[name="username"]');
    const passwordElement = form.querySelector('[name="pwd"]');
    console.log("username: ", usernameElement, " password: ", passwordElement);
    if (
      usernameElement instanceof HTMLInputElement &&
      passwordElement instanceof HTMLInputElement
    ) {
      const username = usernameElement.value;
      const password = passwordElement.value;
      console.log(
        "in HLS, right before calling loginUser: username: ",
        username,
        " password: ",
        password
      );
      this._loginUser(username, password);
    } else {
      console.error(
        "Username or password field is missing or not an input element."
      );
    }
  }

  _handleRegister(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const request = new FormDataRequest(data);

    // Access form data values
    const username = data.get("username");
    const password = data.get("pwd");
    console.log(
      "handling registration, about to make signup request. user: ",
      username,
      " pwd: ",
      password
    );
    console.log("request: ", request);
    request
      .base()
      .post("/signup")
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        } else {
          // Throw an error when the response status is not 200
          throw new Error(`Failed to register. Status: ${res.status}`);
        }
      })
      .then((json) => {
        console.log("Registration Successful, response:", json);
        this.communicateResultToUser("success");
        console.log("Logging in user from sign up success!");
        if (typeof username === "string" && typeof password === "string") {
          this._loginUser(username, password); // login the user
        } else {
          throw new Error("Username or password missing from form data.");
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        this.communicateResultToUser("error");
      });
  }

  communicateResultToUser(signUpOutcome: string) {
    console.log("The result of the sign up is: ", signUpOutcome);
    if (signUpOutcome === "error") {
      this.showSignUpErrorMessage = !this.showSignUpErrorMessage;
    }
    if (signUpOutcome === "success") {
      this.showSignUpErrorMessage = false;
      this.showSignUpSuccessMessage = true;
    }
  }
  _toggleDialog(open: boolean) {
    const dialog = this.shadowRoot?.querySelector(
      "dialog"
    ) as HTMLDialogElement | null;
    if (dialog) {
      if (open) {
        console.log("Showing dialog");
        dialog.showModal();
      } else {
        console.log("Closing dialog");
        dialog.close();
      }
    }
  }

  _signOut() {
    this.user = APIUser.deauthenticate(this.user);
    this._toggleDialog(!this.isAuthenticated());
    document.location.reload();
  }
}
