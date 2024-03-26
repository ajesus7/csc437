import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Profile } from "../models/profile";

import "../components/sortable-list";
import "../components/general-list";
import "../components/favorites-list";
import "../components/drop-down";
import "../components/color-mode-switch";
import "../components/default-card";
import "../components/toggle-switch";

// import { serverPath } from "../rest";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property()
  path: string = "";

  @property()
  editMode: boolean = false;

  @property({ attribute: false })
  using?: Profile;

  get profile() {
    return this.using || ({} as Profile);
  }

  _changeEditMode() {
    console.log("Edit mode changed");
    this.editMode = !this.editMode;
  }

  _handleNameChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.profile.name = input.value;
    this.requestUpdate();
  }

  _handleBioChange(e: Event) {
    const input = e.target as HTMLTextAreaElement;
    this.profile.bio = input.value;
    this.requestUpdate();
  }

  _handleMusicTasteChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.profile.musicTaste = input.value;
    this.requestUpdate();
  }

  _handleTimezoneChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.profile.timezone = input.value;
    this.requestUpdate();
  }

  _handleSpotifyChange(e: Event) {
    const input = e.target as HTMLInputElement;
    this.profile.spotify = input.value === "true"; // Converts the string back to a boolean
    this.requestUpdate();
  }

  _handleSubmit(e: Event) {
    e.preventDefault();
    // Dispatch a custom event with the updated profile data
    console.log("Form submitted with:", this.profile);
    const updateEvent = new CustomEvent("profile-update", {
      detail: { profile: this.profile },
      bubbles: true, // Allows the event to bubble up through the DOM
      composed: true, // Allows the event to cross the shadow DOM boundary
    });
    console.log("dispatching event: ", updateEvent);
    this.dispatchEvent(updateEvent);
    this.editMode = !this.editMode;
  }

  render() {
    const { name, profileImage, profileDescription, bio } = this.profile;

    return html`
      ${this.editMode
        ? html`
            <section class="edit-mode-section">
              <form @submit=${this._handleSubmit}>
                <div class="form-group">
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    .value=${name}
                    @input=${this._handleNameChange}
                  />
                </div>
                <div class="form-group">
                  <label for="bio">Bio</label>
                  <input
                    type="text"
                    id="bio"
                    name="bio"
                    .value=${bio}
                    @input=${this._handleBioChange}
                  />
              </div>
                <div class="form-group">
                  <label for="musicTaste">Music Taste</label>
                  <input
                    type="text"
                    id="musicTaste"
                    name="musicTaste"
                    .value=${this.profile.musicTaste}
                    @input=${this._handleMusicTasteChange}
                  />
                </div>
                <div class="form-group">
                  <label for="timezone">Timezone</label>
                  <input
                    type="text"
                    id="timezone"
                    name="timezone"
                    .value=${this.profile.timezone}
                    @input=${this._handleTimezoneChange}
                  />
                </div>
                  <fieldset class="form-group">
                      <legend>Spotify</legend>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="true"
                          ?checked=${this.profile.spotify === true}
                          @change=${this._handleSpotifyChange}
                        /> Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          name="spotify"
                          value="false"
                          ?checked=${this.profile.spotify === false}
                          @change=${this._handleSpotifyChange}
                        /> No
                      </label>
                    </fieldset>
                </fieldset>
                <div class="form-group">
                  <button type="submit">Save</button>
                </div>
              </form>
            </section>
          `
        : ""}

      <section class="user-profile-header">
        <p class="edit-profile-toggle" @click=${this._changeEditMode}>
          Edit profile.
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

  static styles = css`
    .user-profile-header {
      padding: 25px 15px 15px 100px;
    }

    .user-profile-user-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 25px;
      height: 8em;
    }

    .edit-mode-section {
      margin-left: 100px;
      border: 1px solid white;
      margin-top: 2.5em;
      width: 38em;
    }

    .user-profile-header-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 50px;
      height: 75%;
    }

    .edit-profile-toggle {
      color: var(--accent-color);
      text-decoration: underline;
    }

    .user-description {
      font-weight: var(--light-weight);
      font-size: 1.5rem;
      margin: 0;
    }

    h1 {
      color: var(--white-color);
      font-size: 4rem;
      margin: 0;
    }

    .current-favorites-h3 {
      margin-bottom: 15px;
      padding: 10px 0px 0px 10px;
    }

    .current-favorites {
      padding-bottom: 50px;
    }

    .favorite-album,
    .favorite-song,
    .favorite-artist {
      padding: 10px 0px 5px 10px;
    }

    .favorite-artist p,
    .favorite-album p,
    .favorite-song p {
      margin-top: 3px;
    }

    .favorite-artists-list,
    .favorite-songs-list,
    .favorite-albums-list {
      border: 0.9px solid var(--white-color);
      border-radius: var(--box-border-radius);
      width: 265px;
    }

    .favorites-all-lists {
      display: flex;
      flex-direction: row;
      gap: 25px;
      margin-left: 5em;
      width: 100%;
    }

    .favorites-section {
      display: flex;
      flex-direction: column;
      margin-bottom: 2em;
    }

    .song-title,
    .album-title,
    .artist-title {
      font-weight: var(--bold-weight);
    }

    .subsection-header-line {
      height: 1.5em;
      width: 36.5em;
      margin-left: 5em;
      margin-top: 1.25em;
      margin-bottom: 2em;
    }

    .name-and-icon {
      display: flex;
      height: 1em;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.5em;
    }

    .profile-section-description {
      margin: 0em;
      font-size: 0.8em;
    }

    .subsection-header-line h2 {
      margin-right: 0.35em;
      font-weight: var(--medium-weight);
    }

    svg.icon {
      display: inline;
      height: 1.4em;
      width: 1.4em;
      vertical-align: top;
      fill: currentColor;
      margin: 4px 0px 0px 13px;
    }

    /* edit form styling */
    .edit-mode-section {
      background-color: #f8f9fa; /* Light gray background */
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin: 20px auto;
      width: 90%;
      max-width: 500px; /* Adjust the form width as needed */
    }

    .form-group {
      margin-bottom: 15px;
    }

    label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #333;
    }

    input[type="text"],
    input[type="radio"],
    textarea {
      width: calc(100% - 20px);
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 4px;
      border: 1px solid #ced4da;
    }

    input[type="radio"] {
      width: auto;
      margin-right: 5px;
    }

    textarea {
      resize: vertical; /* Allows vertical resizing, might be useful for the bio */
      padding: 8px; /* Adjust padding as necessary */
      vertical-align: top; /* Align text to the top */
      height: 100px; /* Initial height; adjust as necessary */
    }

    button[type="submit"] {
      width: 100%;
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }

    button[type="submit"]:hover {
      background-color: #0056b3;
    }

    fieldset {
      border: none;
      margin: 0;
      padding: 0;
    }

    legend {
      margin-bottom: 10px;
      font-weight: bold;
      color: #333;
    }

    .radio-group {
      display: flex;
      align-items: center;
    }

    .radio-group label {
      margin-right: 20px; /* Space between radio buttons */
    }
  `;
}

// in src/user-profile.ts, after the previous component
// @customElement("user-profile-edit")
// export class UserProfileEditElement extends UserProfileElement {
//   @property()
//   path: string = "";

//   // @state()
//   // profile?: Profile;

//   //from form tag @submit=${this._handleSubmit
//   render() {
//     return html` <section class="form-container">
//       <h2>edit profile form</h2>

//       <form }>
//         <div class="form-group">
//           <label for="name">First Name</label>
//           <input type="text" id="name" name="name" placeholder="e.g John" />
//         </div>
//         <div class="form-group">
//           <label for="timezone">Timezone</label>
//           <input
//             type="text"
//             id="timezone"
//             name="timezone"
//             placeholder="e.g PST"
//           />
//         </div>
//         <div class="form-group">
//           <label for="music-taste">Music Taste</label>
//           <input
//             type="text"
//             id="music-taste"
//             name="musicTaste"
//             placeholder="e.g Indie Rock"
//           />
//         </div>
//         <div class="form-group">
//           <label for="profile-image">Profile Image</label>
//           <input
//             type="text"
//             id="profile-image"
//             name="profileImage"
//             placeholder="(slug)"
//           />
//         </div>
//         <div class="form-group">
//           <label for="bio">Bio</label>
//           <textarea id="bio" name="bio" placeholder="A short bio..."></textarea>
//         </div>
//         <div class="form-group">
//           <label for="image-description" name="profileDescription"
//             >Profile Image Description</label
//           >
//           <input
//             type="text"
//             id="image-description"
//             placeholder="Describe your profile image"
//           />
//         </div>
//         <div class="form-group">
//           <label>Spotify</label>
//           <div class="radio-group">
//             <input type="radio" id="spotify-yes" name="spotify" value="yes" />
//             <label for="spotify-yes">Yes</label>
//             <input type="radio" id="spotify-no" name="spotify" value="no" />
//             <label for="spotify-no">No</label>
//           </div>
//         </div>
//         <div class="form-group">
//           <button type="submit" class="btn">Submit</button>
//         </div>
//       </form>
//     </section>`;
//   }

// _handleSubmit(ev: Event) {
//   ev.preventDefault(); // prevent browser from submitting form data itself
//   const target = ev.target as HTMLFormElement;
//   const formdata = new FormData(target);

//   const entries = Array.from(formdata.entries())
//     .map(([k, v]) => (v === "" ? [k] : [k, v]))
//     .map(([k, v]) =>
//       k === "airports"
//         ? [k, (v as string).split(",").map((s) => s.trim())]
//         : [k, v]
//     );
//   const json = Object.fromEntries(entries);
//   this._putData(json);
// }

// _putData(json: Profile) {
//   fetch(serverPath(this.path), {
//     method: "PUT",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(json),
//   })
//     .then((response) => {
//       if (response.status === 200) return response.json();
//       else return null;
//     })
//     .then((json: unknown) => {
//       if (json) this.profile = json as Profile;
//     })
//     .catch((err) => console.log("Failed to PUT form data", err));
// }

//   static styles = css`
//     ${UserProfileElement.styles}

//     .form-container {
//       border: 0.05em solid white;
//       border-radius: var(--box-border-radius);
//       width: 70%;
//       margin: 25px 0 100px 100px;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//     }

//     .form-container h2 {
//       font-weight: var(--medium-weight);
//     }

//     .form-group,
//     .form-container {
//       background-color: var(--background-color);
//       padding: .6em;
//       border-radius: 8px;
//       width: 95%;
//       max-width: 625px;
//     }

//     form {
//       width: 90%;
//       margin: 0;
//       padding: 0;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items; center;
//     }

//     label {
//       display: block;
//       margin-bottom: 0.5rem;
//       color: var(--white-color);
//     }

//     input[type="text"],
//     input[type="email"],
//     input[type="password"],
//     select,
//     textarea {
//       width: 100%;
//       padding: 0.75rem;
//       border: 1px solid var(--darker-color);
//       border-radius: 4px;
//       box-sizing: border-box;
//     }

//     .radio-group {
//       display: flex;
//       align-items: center;
//     }

//     .radio-group label {
//       margin-left: 0.5rem;
//       margin-right: 1rem;
//     }

//     .radio-group input[type="radio"] {
//       margin-right: 0.25rem;
//     }

//     .btn {
//       display: block;
//       width: 100%;
//       padding: 1rem;

//       background-color: var(--accent-color);
//       color: var(--white-color);
//       border: none;
//       border-radius: 4px;
//       margin-top: .85rem;
//       cursor: pointer;
//       text-transform: uppercase;
//       font-weight: bold;
//     }

//     .btn:hover {
//       background-color: var(--accent-color-hover);
//     }
//   `;
// }
