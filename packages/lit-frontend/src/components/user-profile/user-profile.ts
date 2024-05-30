import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Profile } from "../../models/profile";
import styles from "./user-profile-styles";

import "../sortable-list/sortable-list";
import "../general-list/general-list";
import "../favorites-list/favorites-list";
import "../drop-down/drop-down";
import "../color-mode-switch/color-mode-switch";
import "../default-card/default-card";
import "../toggle-switch/toggle-switch";
import "../edit-profile-form/edit-profile-form";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  static styles = styles;

  @property()
  path: string = "";

  @property()
  editMode: boolean = false;

  @property()
  profileEditText: string = "Edit Profile.";

  @property({ attribute: false })
  using?: Profile;

  get profile() {
    return this.using || ({} as Profile);
  }

  // * Connected Callbacks used to receive the usingUpdate that is sent from the edit Profile function
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener(
      "update-using",
      this._handleUsingUpdate as EventListener
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener(
      "update-using",
      this._handleUsingUpdate as EventListener
    );
  }

  // TODO : probably shouldn't also update editmode in here, but would this require sending another update?
  _handleUsingUpdate(event: CustomEvent) {
    if (event.detail && event.detail.profile) {
      this.using = event.detail.profile;
      this._changeEditMode();
      this.requestUpdate();
    }
  }

  // * Displays the edit profile form and updates the toggle buttons message
  _changeEditMode() {
    this.editMode = !this.editMode;
    this.profileEditText = this.editMode ? "Close Edit Menu." : "Edit Profile.";
  }

  _handleSubmit(e: Event) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    // Update the profile object attributes based on the form data
    const updatedProfile = {
      ...this.profile,
      name: formData.get("name") as string,
      bio: formData.get("bio") as string,
      musicTaste: formData.get("musicTaste") as string,
      timezone: formData.get("timezone") as string,
      profileImage: formData.get("profileImage") as string,
      spotify: formData.get("spotify") === "true", // Converts the string back to a boolean
    };

    this.using = updatedProfile;
    this.requestUpdate();

    // Dispatch a custom event with the updated profile data
    console.log("Form submitted with:", updatedProfile);
    const updateEvent = new CustomEvent("profile-update", {
      detail: { profile: updatedProfile },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(updateEvent);
    this._changeEditMode();
  }

  render() {
    const { name, profileImage, profileDescription, bio } = this.profile;

    return html`
      ${this.editMode
        ? html`<edit-profile-form .profile=${this.profile}></edit-profile-form>`
        : ""}

      <section class="user-profile-header">
        <p class="edit-profile-toggle" @click=${this._changeEditMode}>
          ${this.profileEditText}
        </p>
        <section class="user-profile-user-content">
          <section class="user-profile-picture">
            <img
              src="/images/${profileImage}.png"
              alt="${profileDescription}"
              width="150"
            />
          </section>
          <section class="user-profile-header-text">
            <h1>${name}&apos;s Page</h1>
            <p class="user-description">${bio}</p>
          </section>
        </section>

        <section class="coming-soon-container">
          <p class="info">More profile functionality is coming soon!</p>
        </section>
      </section>
    `;
  }
}
