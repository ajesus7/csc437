import { customElement, property } from "lit/decorators.js";
import { html } from "lit";
import * as App from "../app";

import "../components/main-feed";
import "../components/feed-post-list";
import "../components/edit-profile-form";
import styles from "./create-profile-page-styles.ts";

type ProfileLocation = Location & {
  params: { userid: string; edit: string };
  searchParams: Map<string, string>;
};

@customElement("create-profile-page")
export class CreateProfilePage extends App.View {
  static styles = styles;
  @property({ attribute: false })
  location?: ProfileLocation;

  @property({ reflect: true })
  get userid() {
    console.log();
    return this.location?.params.userid;
  }

  @property({ reflect: true })
  get edit() {
    return this.location?.params.edit;
  }

  // TODO : Some kind of check to make the new profile? or where do I put the create profile logic
  @property()
  get profile() {
    return this.getFromModel("profile");
  }

  render() {
    return html`
      <section class="page-content">
        <edit-profile-form .profile=${this.profile}></edit-profile-form>
      </section>
    `;
  }
}
