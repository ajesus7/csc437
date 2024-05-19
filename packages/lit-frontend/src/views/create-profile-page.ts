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

  // ! attributeChangedCallback, connectedCallback, _handleProfileUpdate, all are needed to make profile data populate
  // ! I'm not sure if there is fluff code here because I copied it from the profile page, but these methods are needed in some capacity
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === "userid" && oldValue !== newValue && newValue) {
      console.log("Profile Page:", newValue);
      this.dispatchMessage({
        type: "ProfileSelected",
        userid: newValue,
      });
    }
    super.attributeChangedCallback(name, oldValue, newValue);
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("profile-update", (ev: Event) =>
      this._handleProfileUpdate(ev as CustomEvent)
    );
  }

  _handleProfileUpdate(ev: CustomEvent) {
    console.log("Profile updated", ev.detail.profile);
    // Ensure you have the userid available
    const userid = this.userid;

    // Check if userid is available
    if (userid) {
      this.dispatchMessage({
        type: "ProfileSaved",
        userid: userid, // Use the userid here
        profile: ev.detail.profile,
      });
    } else {
      console.error("UserID is undefined.");
    }
  }

  render() {
    return html`
      <section class="page-content">
        <div class="descriptionAndForm">
          <div class="description">
            <h2 class="formHeader">Please set up your profile.</h2>
            <p class="formParagraph">
              You're almost ready to start matching the vibe, just take a few
              seconds to fill in some more details about yourself!
            </p>
          </div>
          <edit-profile-form
            .profile=${this.profile}
            .redirectAfterSubmit="${true}"
          ></edit-profile-form>
        </div>
      </section>
    `;
  }
}
