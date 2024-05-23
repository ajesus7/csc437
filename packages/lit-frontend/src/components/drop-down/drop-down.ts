import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./drop-down-styles";

@customElement("drop-down")
export class DropDownElement extends LitElement {
  static styles = [styles];

  @property({ reflect: true, type: Boolean })
  open: boolean = false;

  @property()
  align: "left" | "right" = "left";

  @property()
  profileImage?: "";

  @property()
  profileUserID?: "";

  @property()
  profileDescription?: "";

  @property()
  profileImageLink: string = "";

  // * when clicked, log the user out. They will need to reauthenticate.
  _signOutUser() {
    console.log("Log Out Clicked.");

    // Dispatches custom event that bubbles up to Auth-Required Component
    const event = new CustomEvent("userSignOutTriggeredWithinDropDown", {
      bubbles: true, // bubbles up through the DOM
      composed: true, // Allow the event to cross the shadow DOM boundary
    });
    this.dispatchEvent(event);
  }

  render() {
    return html`
      <section class="drop-down">
        <input
          type="checkbox"
          id="is-shown"
          @change=${this._handleChange}
          .checked=${this.open}
        />
        <label for="is-shown">
          <slot>
            <img
              src="/images/${this.profileImage}.png"
              alt="${this.profileDescription}"
              class="dropdown-pfp"
            />
          </slot>
        </label>
        <slot name="menu">
          <ul>
            <li class="link border-top-only">
              <a href="app/profile/${this.profileUserID}" class="link"
                >Your Profile</a
              >
            </li>
            <li>Settings</li>
            <li>
              <color-mode-switch></color-mode-switch>
            </li>
            <li class="border-bottom-only signOut" @click=${this._signOutUser}>
              Sign out
            </li>
          </ul>
        </slot>
      </section>
    `;
  }

  _handleChange(ev: InputEvent) {
    const target = ev.target as HTMLInputElement;
    this._toggle(target.checked);
  }

  _toggle(open: boolean) {
    this.open = open;
    this._toggleClickAway(open);
  }

  _toggleClickAway(open: boolean) {
    const clickawayHandler = (ev: Event) => {
      if (!ev.composedPath().includes(this)) {
        this._toggle(false);
      } else {
        ev.stopPropagation();
      }
    };

    if (open) {
      document.addEventListener("click", clickawayHandler);
    } else {
      document.removeEventListener("click", clickawayHandler);
    }
  }
}
