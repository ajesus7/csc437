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

  @state()
  showLoginForm: boolean = false;

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
              @submit=${this._handleLogin}
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
                <input name="name" type="text" required />
              </div>
              <div class="formLabelAndInput">
                <label>Email</label>
                <input name="email" type="email" required />
              </div>
              <div class="formLabelAndInput">
                <label>Password</label>
                <input type="password" name="password" required />
              </div>

              <button type="submit" class="submitButton">Sign up</button>
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
      font-family: "Arial", sans-serif;
      max-width: 400px;
      margin: auto;
    }

    .formsContainer {
      border-radius: 8px;
      padding: 20px;
      background-color: white;
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
  `;

  _handleLogin(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const request = new FormDataRequest(data);

    request
      .base()
      .post("/login")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          this.loginStatus = res.status;
        }
      })
      .then((json) => {
        if (json) {
          console.log("Authentication:", json.token);
          this.user = AuthenticatedUser.authenticate(json.token, () =>
            this._signOut()
          );
          this._toggleDialog(false);
          this.requestUpdate();
        }
      });
  }

  _handleRegister(event: SubmitEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const request = new FormDataRequest(data);
    console.log("handling registration, about to make signup request");
    request
      .base()
      .post("/signup")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          this.registerStatus = res.status;
        }
      })
      .then((json) => {
        console.log("Registration response:", json);
      })
      .catch((error) => {
        console.error("Error during registration:", error);
        // Optionally, update UI to display an error message to the user
      });
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
