import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Profile } from "../models/profile";
import styles from "./edit-profile-form-styles.ts";

// import { serverPath } from "../rest";

@customElement("edit-profile-form")
export class EditProfileElement extends LitElement {
  @property({ type: Object }) profile?: Profile;

  static styles = [styles];

  constructor(profile: Profile) {
    super();
    this.profile = profile;
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

    // * Dispatch event that goes all the way up the DOM to update profile within the MVC architecture
    const updateEvent = new CustomEvent("profile-update", {
      detail: { profile: updatedProfile },
      bubbles: true,
      composed: true,
    });
    console.log("profile-update Event being sent to DOM");
    this.dispatchEvent(updateEvent);

    // * Dispatch event that will update the using profile within the user-profile component (parent)
    const updateUsingEvent = new CustomEvent("update-using", {
      detail: { profile: updatedProfile },
      bubbles: true,
      composed: true,
    });
    console.log(
      "profile update event being sent to profile component to update using"
    );
    this.dispatchEvent(updateUsingEvent);
    this.requestUpdate();
  }

  render() {
    return html`
            <section class="edit-mode-section">
              <form @submit=${this._handleSubmit}>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    .value=${this.profile?.name}
                  />
                </div>
                <div class="form-group">
                  <label for="bio">Bio</label>
                  <input
                    type="text"
                    id="bio"
                    name="bio"
                    .value=${this.profile?.bio}
                  />
              </div>
                <div class="form-group">
                  <label for="musicTaste">Music Taste</label>
                  <input
                    type="text"
                    id="musicTaste"
                    name="musicTaste"
                    .value=${this.profile?.musicTaste}
                  />
                </div>
                <div class="form-group">
                  <label for="timezone">Timezone</label>
                  <input
                    type="text"
                    id="timezone"
                    name="timezone"
                    .value=${this.profile?.timezone}
                  />
                </div>
                <div class="form-group">
                  <label for="profileImage">Profile Image URL</label>
                  <input
                    type="text"
                    id="profileImage"
                    name="profileImage"
                    .value=${this.profile?.profileImage}
                  />
                </div>
                  <fieldset class="form-group">
                      <legend>Spotify</legend>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="true"
                          ?checked=${this.profile?.spotify === true}
                        /> Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="false"
                          ?checked=${this.profile?.spotify === false}
                        /> No
                      </label>
                    </fieldset>
                </fieldset>
                <div class="form-group">
                  <button type="submit">Save</button>
                </div>
              </form>
            </section>
          `;
  }
}
