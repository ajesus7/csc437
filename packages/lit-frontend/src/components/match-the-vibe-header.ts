import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { Profile } from "../models/profile";
import { authContext } from "./auth-required";
import { consume } from "@lit/context";
import { APIUser, APIRequest } from "../rest";

@customElement("match-the-vibe-header")
export class MatchTheVibeHeaderElement extends LitElement {
  @state()
  profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();

  render() {
    const { profileImage, profileDescription } = this.profile || {};
    return html`
      <section class="match-the-vibe-header">
        <a href="/app/home">match the vibe home</a>
        <drop-down
          profileImage="${profileImage}"
          profileDescription="${profileDescription}"
        ></drop-down>
      </section>
    `;
  }

  //change the property definition to take a list of lists, add another loop within the above loop?, or maybe do i or j?
  static styles = css`
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
