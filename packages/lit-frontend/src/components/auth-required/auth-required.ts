import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { createContext, provide } from "@lit/context";
import { APIUser, AuthenticatedUser, FormDataRequest } from "../../rest";
import { Router } from "@vaadin/router";
export let authContext = createContext<APIUser>("auth");

import styles from "./auth-required-styles";

@customElement("auth-required")
export class AuthRequiredElement extends LitElement {
  static styles = [styles];
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

  // used to toggle between the Sign Up and Login Forms
  @state()
  whereToRedirect: string = "/createProfile";

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

        console.log("WTR within login ", this.whereToRedirect);
        Router.go(
          this.whereToRedirect === "app/home" ? `app/home` : `/createProfile`
        );

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

    // * update redirect route so user gets taken to home page
    this.whereToRedirect = "app/home";
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
  async _handleRegister(event: SubmitEvent) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const data = new FormData(form);

    // Access form data values
    const username = data.get("username") as string;
    const password = data.get("pwd") as string;

    if (!username || !password) {
      this.communicateResultToUser("error");
      throw new Error("Username or password missing from form data.");
    }

    try {
      const request = new FormDataRequest(data);
      const res = await request.base().post("/signup");

      if (res.status === 201) {
        await this.createNewUserProfileAfterRegisterSuccess(username);

        this.whereToRedirect = `/createProfile/${username}`;
        console.log("whereToRedirect within Register: ", this.whereToRedirect);

        this.communicateResultToUser("success");
        this._loginUser(username, password); // Make login call for user
      } else {
        throw new Error(`Failed to register. Status: ${res.status}`);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      this.communicateResultToUser("error");
    }
  }

  /**
   * Takes in the client's username, makes a POST request to the database to create a new profile document for their account.
   * All other inputs will be blank to start (as the client will fill these out within the createProfile page).
   *
   * Returns the profile object created so that the _id/other attributes can be accessed within the scope of this component (and added to the model).
   * @param username - The username the user inputted when registering their account (to be added to their profile as their 'userid')
   */
  async createNewUserProfileAfterRegisterSuccess(
    username: string
  ): Promise<any> {
    // * First part of endpoint (localhost or matchthevibe.com...)
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;

    try {
      const response = await fetch(`${SERVER_URL}/profileCreation`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userid: username,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to create profile: ${response.statusText}`);
      }

      const profile = await response.json();
      console.log("Profile created:", profile);

      // Return the created profile object
      return profile;
    } catch (error) {
      console.error("Error creating profile:", error);
      // Return null if there was an error
      return null;
    }
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

  // * Adds event listener to handle user logout
  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener(
      "userSignOutTriggeredWithinDropDown",
      this._handleSignOutEvent as EventListener
    );
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener(
      "userSignOutTriggeredWithinDropDown",
      this._handleSignOutEvent as EventListener
    );
  }

  private _handleSignOutEvent = (event: Event): void => {
    console.log("Sign out event received", event);
    this._signOut();
  };

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
