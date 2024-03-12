import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { Profile } from "../models/profile";
// import { serverPath } from "../rest";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property()
  path: string = "";

  @property({ attribute: false })
  using?: Profile;

  get profile() {
    return this.using || ({} as Profile);
  }

  // //runs once when instantiated
  // connectedCallback() {
  //   if (this.path) {
  //     this._fetchData(this.path);
  //   }
  //   super.connectedCallback();
  // }

  // // in class UserProfileElement
  // attributeChangedCallback(name: string, oldValue: string, newValue: string) {
  //   console.log("PROFILE");
  //   if (name === "path" && oldValue !== newValue && oldValue) {
  //     this._fetchData(newValue);
  //   }

  //   super.attributeChangedCallback(name, oldValue, newValue);
  // }

  // _fetchData(path: string) {
  //   fetch(serverPath(path))
  //     .then((response) => {
  //       if (response.status === 200) {
  //         return response.json();
  //       }
  //       return null;
  //     })
  //     .then((json: unknown) => {
  //       if (json) this.profile = json as Profile;
  //       //print the profile for testing
  //       console.log("profile", this.profile);
  //     });
  // }

  render() {
    const { name, profileImage, profileDescription, bio } = this.profile;

    return html`
      <section class="match-the-vibe-header">
        <a href="./index.html">match the vibe home</a>
        <drop-down
          profileImage="${profileImage}"
          profileDescription="${profileDescription}"
        ></drop-down>
      </section>

      <section class="user-profile-header">
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

      <user-profile-edit path="/profile/aidan"></user-profile-edit>
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
    .user-profile-header-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 50px;
      height: 75%;
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

    .match-the-vibe-header a {
      font-weight: var(--bold-weight);
      color: var(--background-color);
      padding: var(--component-inside-padding);
    }

    .match-the-vibe-header {
      display: flex;
      justify-content: space-between;
      background: var(--white-color);
      padding: 15px 15px 15px 0px;
      height: 4.3em;
    }
  `;
}

// in src/user-profile.ts, after the previous component
@customElement("user-profile-edit")
export class UserProfileEditElement extends UserProfileElement {
  @property()
  path: string = "";

  // @state()
  // profile?: Profile;

  //from form tag @submit=${this._handleSubmit
  render() {
    return html` <section class="form-container">
      <h2>edit profile form</h2>

      <form }>
        <div class="form-group">
          <label for="name">First Name</label>
          <input type="text" id="name" name="name" placeholder="e.g John" />
        </div>
        <div class="form-group">
          <label for="timezone">Timezone</label>
          <input
            type="text"
            id="timezone"
            name="timezone"
            placeholder="e.g PST"
          />
        </div>
        <div class="form-group">
          <label for="music-taste">Music Taste</label>
          <input
            type="text"
            id="music-taste"
            name="musicTaste"
            placeholder="e.g Indie Rock"
          />
        </div>
        <div class="form-group">
          <label for="profile-image">Profile Image</label>
          <input
            type="text"
            id="profile-image"
            name="profileImage"
            placeholder="(slug)"
          />
        </div>
        <div class="form-group">
          <label for="bio">Bio</label>
          <textarea id="bio" name="bio" placeholder="A short bio..."></textarea>
        </div>
        <div class="form-group">
          <label for="image-description" name="profileDescription"
            >Profile Image Description</label
          >
          <input
            type="text"
            id="image-description"
            placeholder="Describe your profile image"
          />
        </div>
        <div class="form-group">
          <label>Spotify</label>
          <div class="radio-group">
            <input type="radio" id="spotify-yes" name="spotify" value="yes" />
            <label for="spotify-yes">Yes</label>
            <input type="radio" id="spotify-no" name="spotify" value="no" />
            <label for="spotify-no">No</label>
          </div>
        </div>
        <div class="form-group">
          <button type="submit" class="btn">Submit</button>
        </div>
      </form>
    </section>`;
  }

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

  static styles = css`
    ${UserProfileElement.styles}

    .form-container {
      border: 0.05em solid white;
      border-radius: var(--box-border-radius);
      width: 70%;
      margin: 25px 0 100px 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .form-container h2 {
      font-weight: var(--medium-weight);
    }

    .form-group,
    .form-container {
      background-color: var(--background-color);
      padding: .6em;
      border-radius: 8px;
      width: 95%;
      max-width: 625px;
    }

    form {
      width: 90%;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items; center;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--white-color);
    }

    input[type="text"],
    input[type="email"],
    input[type="password"],
    select,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--darker-color);
      border-radius: 4px;
      box-sizing: border-box;
    }

    .radio-group {
      display: flex;
      align-items: center;
    }

    .radio-group label {
      margin-left: 0.5rem;
      margin-right: 1rem;
    }

    .radio-group input[type="radio"] {
      margin-right: 0.25rem;
    }

    .btn {
      display: block;
      width: 100%;
      padding: 1rem;

      background-color: var(--accent-color);
      color: var(--white-color);
      border: none;
      border-radius: 4px;
      margin-top: .85rem;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;
    }

    .btn:hover {
      background-color: var(--accent-color-hover);
    }
  `;
}
