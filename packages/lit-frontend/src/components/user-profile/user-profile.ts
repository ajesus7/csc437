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
      </section>

      <sortable-list
        listAttributes='["friend&apos;s list", "friends"]'
        names='[["thea", "indie", "user2.html"], ["Joey", "indie", "2599568"], ["Adam", "rock", "295853939"], ["Bob", "rap", "29588582"], ["Ethan", "white noise", "9995933"]]'
      ></sortable-list>
      <sortable-list
        listAttributes='["playlists list", "playlists"]'
        names='[["chill vibes", "", "playlist1.html"], ["vibes", "", "21"], ["sad", "", "2424"], ["happy", "", "2424"]]'
      ></sortable-list>

      <general-list
        listAttributes='["games list", "playlists"]'
        names='[["game1.", "12/2/23", "game1.html"], ["game2", "1/2/24", "21"], ["game3", "2/2/24", "2424"]]'
      ></general-list>

      <section class="favorites-section">
        <section class="subsection-header-line">
          <section class="name-and-icon">
            <h2>current favorites</h2>
            <svg class="icon">
              <use href="/icons/user-icons.svg#icon-heart" />
            </svg>
          </section>
          <p class="profile-section-description">what aidan loves right now</p>
        </section>
        <section class="favorites-all-lists">
          <favorites-list
            listAttributes="artists"
            artists='[["the backseat lovers", "1.2M Listeners"], ["arctic monkeys", "8M Listeners"], ["matt maltese", "1M Listeners"]]'
          ></favorites-list>
          <favorites-list
            listAttributes="albums"
            artists='[["silhouette", "the backseat lovers"], ["lost in the night ep", "palace"], ["orange blood", "mt joy"]]'
          ></favorites-list>
          <favorites-list
            listAttributes="songs"
            artists='[["words i used", "the backseat lovers"], ["disciples", "tame impala"], ["jigsaw falling into place", "radiohead"]]'
          ></favorites-list>
          <section></section>
        </section>
      </section>
    `;
  }
}
