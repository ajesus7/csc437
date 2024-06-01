import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../../models/profile";
import { authContext } from "../auth-required/auth-required";
import { consume } from "@lit/context";
import { APIUser, APIRequest } from "../../rest";
import styles from "./match-the-vibe-header-styles";

// ! TODO: Do I need to refactor the method of getting the profile here? This is not an App.View, so I can't use getFromModel("profile");
// ! however, I can pass this.profile as .using...
@customElement("match-the-vibe-header")
export class MatchTheVibeHeaderElement extends LitElement {
  static styles = [styles];

  @state()
  profile?: Profile;

  @state()
  loading = true;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();


  render() {
    return html`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        ${this.loading
          ? html`<p>Loading...</p>`
          : this.profile
          ? html`
              <drop-down
                .profileImage="${this.profile.profileImage}"
                .profileDescription="${this.profile.profileDescription}"
                .profileUserID="${this.profile.userid}"
              ></drop-down>
            `
          : html``}
      </section>
    `;
  }

  async updated(changedProperties: Map<string, unknown>) {
    console.log("within header updated");
    if (changedProperties.has("user")) {
      console.log("New user", this.user);
      const { username } = this.user;
      
      console.log("NEW USER USERNAME: ", username);
      await this._getData(`/profiles/${username}`);
      console.log("NEW PROFILE: ", this.profile);
    } else {
      console.log(
        "changed properties doesn't have user, printing profile anyway? ",
        this.profile
      );
    }
    return true;
  }

  async _getData(path: string) {
    console.log("WITHIN HEADER GET DATA");

    const request = new APIRequest();

    try {
      const response = await request.get(path);
      if (response.status === 200) {
        const json = await response.json();
        console.log("Profile:", json);
        this.profile = json as Profile;
        console.log("Profile successfully updated:", this.profile);
      } else {
        console.error("Failed to fetch profile data. Status:", response.status);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    } finally {
      this.loading = false;
    }
  }

  _signOut() {
    console.log("Signout");
    this.user.signOut();
  }
}
