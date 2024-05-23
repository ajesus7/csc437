import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../../models/profile";
import { authContext } from "../auth-required/auth-required";
import { consume } from "@lit/context";
import { APIUser, APIRequest } from "../../rest";
import styles from "./match-the-vibe-header-styles";

@customElement("match-the-vibe-header")
export class MatchTheVibeHeaderElement extends LitElement {
  static styles = [styles];

  @state()
  profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();

  render() {
    const { profileImage, profileDescription, userid } = this.profile || {};
    return html`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${profileImage}"
          profileDescription="${profileDescription}"
          profileUserID="${userid}"
        ></drop-down>
      </section>
    `;
  }

  updated(changedProperties: Map<string, unknown>) {
    console.log("Profile Data has been updated", changedProperties);
    if (changedProperties.has("user")) {
      console.log("New user", this.user);
      const { username } = this.user;
      this._getData(`/profiles/${username}`);
    }
    return true;
  }

  _getData(path: string) {
    const request = new APIRequest();

    request
      .get(path)
      .then((response: Response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        console.log("Profile:", json);
        this.profile = json as Profile;
      });
  }

  _signOut() {
    console.log("Signout");
    this.user.signOut();
  }
}
