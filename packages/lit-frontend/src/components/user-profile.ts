import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../models/profile";
import { serverPath } from "../rest";

@customElement("user-profile")
export class UserProfileElement extends LitElement {
  @property()
  path: string = "";

  @state()
  profile?: Profile;

  //runs once when instantiated
  connectedCallback() {
    if (this.path) {
      this._fetchData(this.path);
    }
    super.connectedCallback();
  }

  // in class UserProfileElement
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "path" && oldValue !== newValue && oldValue) {
      this._fetchData(newValue);
    }

    super.attributeChangedCallback(name, oldValue, newValue);
  }

  _fetchData(path: string) {
    fetch(serverPath(path))
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        if (json) this.profile = json as Profile;
        //print the profile for testing
        console.log("profile", this.profile);
      });
  }

  render() {
    return html` <section class="match-the-vibe-header">
        <a href="./index.html">match the vibe home</a>
        <drop-down
          profileImage="${this.profile.profileImage}"
          profileDescription="${this.profile.profileDescription}"
        ></drop-down>
      </section>

      <section class="user-profile-header">
        <section class="user-profile-user-content">
          <section class="user-profile-picture">
            <img
              src="/images/${this.profile.profileImage}.png"
              alt="${this.profile.profileDescription}"
              width="150"
            />
          </section>
          <section class="user-profile-header-text">
            <h1>${this.profile.name}&apos;s Page</h1>
            <p class="user-description">${this.profile?.bio}</p>
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
      ${Object.entries(this.profile || {}).map(
        ([key, value]) => html` <p><b>${key}:</b> ${value}</p> `
      )}`;
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
