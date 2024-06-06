import { customElement } from "lit/decorators.js";
import { PropertyValueMap, html } from "lit";
import * as App from "../app";
import { APIUser } from "../rest";

import "../components/main-feed/main-feed.ts";
import "../components/feed-post-list/feed-post-list.ts";
import "../components/edit-profile-form/edit-profile-form.ts";
import styles from "./create-profile-page-styles.ts";

@customElement("create-profile-page")
export class CreateProfilePage extends App.View {
  static styles = styles;
  // @property()

  get profile() {
    return this.getFromModel("profile");
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    console.log("******* CREATE PROFILE FIRST UPDATED ********");
    if (APIUser._theUser.authenticated) {
      console.log("___ dispatching ProfileSelected____");

      this.dispatchMessage({
        type: "ProfileSelected",
        userid: APIUser._theUser.username,
      });
    } else {
      console.log("***** this.userid is undefined *****");
    }
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

    // if user is authenticated and therefore can access the username/userid
    if (APIUser._theUser.authenticated) {
      this.dispatchMessage({
        type: "ProfileSaved",
        userid: APIUser._theUser.username,
        profile: ev.detail.profile,
      });
    } else {
      console.error("Profile is undefined within model.");
    }
  }

  render() {
    console.log("this.profile within createprofile page", this.profile);

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
            .redirectAfterSubmit=${true}
            .profile=${this.profile}
          ></edit-profile-form>
        </div>
      </section>
    `;
  }
}
