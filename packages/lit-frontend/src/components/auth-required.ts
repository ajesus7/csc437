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

  @provide({ context: authContext })
  @state()
  user: APIUser = AuthenticatedUser.authenticateFromLocalStorage(() =>
    this._signOut()
  );

  // used to toggle between the Sign Up and Login Forms
  @state()
  showLoginForm: boolean = false;

  // state true informs user of error signing up
  @state()
  showSignUpErrorMessage: boolean = false;

  // state true informs user of successful sign up
  @state()
  showSignUpSuccessMessage: boolean = false;

  // needed to check if user authenticated yet
  isAuthenticated() {
    return this.user.authenticated;
  }

  // * DOC: when called, it will flip the state of the login form. Sign Up form is shown by default, but the user can
  // * toggle the login form if they already have an account.
  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
    // reset error messages as they should not be visible if the user navigates back (form data not persisted)
    this.showSignUpErrorMessage = false;
    this.showSignUpSuccessMessage = false;
    this.requestUpdate(); // causes UI to update?
  }

  // * only toggles the authentication dialog if user is not signed in (on first render)
  firstUpdated() {
    this._toggleDialog(!this.isAuthenticated());
  }

  // * Creates the actual login request, it is separated from _handleLoginSubmit
  // * This is called on a successful sign up so that the user can be automatically logged in (without having to resubmit their credentials on the login page)
  // * creates a new form, appends data to form and then creates the login request with the form data
  // ! I'm assume I need to make the login request with a FormDataRequest Object, and that is the purpose of this function, to be able to take in the login info as plaintext,
  // ! and simulate the form submit event to make login request.
  _loginUser(username: string, password: string) {
    const formData = new FormData();
    formData.append("username", username);
    formData.append("pwd", password);
    const request = new FormDataRequest(formData);
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
        console.log("Log In Request Successful!");
        this.user = AuthenticatedUser.authenticate(json.token, () =>
          this._signOut()
        );
        this._toggleDialog(false);
        this.requestUpdate();
      })
      .catch((error) => console.error("Login Error:", error));
  }

  // * Triggered when the login form is submitted by the user. The data from the form (username, pwd) is fed into the above _loginUser function to create
  // * the actual login request to the backend. Grabs the data from the form using the "name" attributes from the form inputs.
  _handleLoginSubmit(event: SubmitEvent) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Retrieve values directly from FormData
    const username = formData.get("username") as string;
    const password = formData.get("pwd") as string;

    // Check if the username and password are not null and are strings
    if (typeof username === "string" && typeof password === "string") {
      this._loginUser(username, password);
    } else {
      console.error(
        "Username or password field is missing or not correctly entered."
      );
    }
  }

  // * when the signup form is submitted by the user, this function will grab the inputs (username, pwd), construct a form request with the info,
  // * and make a registration request to the backend that will create user credentials if the proper conditions are met. Depending on the registration result,
  // * the communicateResultToUser function will be called to display success/error messages on the frontend to the user.
  _handleRegister(event: SubmitEvent) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const request = new FormDataRequest(data);

    // Access form data values
    const username = data.get("username");
    const password = data.get("pwd");

    request
      .base()
      .post("/signup")
      .then((res) => {
        if (res.status === 201) {
          return res.json();
        } else {
          throw new Error(`Failed to register. Status: ${res.status}`);
        }
      })
      .then((json) => {
        console.log("Registration Successful!", json);
        this.communicateResultToUser("success");
        if (typeof username === "string" && typeof password === "string") {
          this._loginUser(username, password); // make login call for user
        } else {
          throw new Error("Username or password missing from form data.");
        }
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        this.communicateResultToUser("error");
      });
  }

  // * A successful registration will remove any error messages and show the user a success message notifying them that they will be redirected shortly, or to login if not.
  // * A failed registration will display an error message to the user, prompting them to try again.
  communicateResultToUser(signUpOutcome: string) {
    if (signUpOutcome === "error") {
      this.showSignUpErrorMessage = !this.showSignUpErrorMessage;
    }
    if (signUpOutcome === "success") {
      this.showSignUpErrorMessage = false;
      this.showSignUpSuccessMessage = true;
    }
  }

  render() {
    // * The login form is hidden by default, but can be toggled by the user
    // * if they already have an account (and do not need to sign in).
    // * The signup form is shown by default, but is hidden by toggling login form.
    const dialog = html`
      <dialog class="formsContainer">
        ${this.showLoginForm
          ? html` <form @submit=${this._handleLoginSubmit} class="loginForm">
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
                <input type="password" name="pwd" required />
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
      </dialog>
    `;

    // * This untoggles the dialog if the user is authenticated... Nothing appears on the frontend if this is not here.
    return html`${this.isAuthenticated() ? "" : dialog} <slot></slot>`;
  }

  static styles = css`
    :host {
      display: block;
      margin: auto;
    }

    section {
      display: block;
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

  // * Selects the dialog within the DOM and displays it according to the user's authentication status.
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

  // * will signout the user, causing the dialog to reappear and another sign in/signup to be required before accessing the site.
  _signOut() {
    this.user = APIUser.deauthenticate(this.user);
    this._toggleDialog(!this.isAuthenticated());
    document.location.reload();
  }
}
