import * as App from "../app";
import { css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

//fix these imports?
// import resetCSS from "/styles/reset.css?inline";
// import pageCSS from "/styles/page.css?inline";

import "../components/user-profile";

type ProfileLocation = Location & {
  params: { userid: string; edit: string };
  searchParams: Map<string, string>;
};

@customElement("profile-page")
export class ProfilePageElement extends App.View {
  // TODO does this grab param url?
  @property({ attribute: false })
  location?: ProfileLocation;

  @property({ reflect: true })
  get userid() {
    console.log();
    return this.location?.params.userid;
  }

  // TODO WHAT DOES THIS DO?
  @property({ reflect: true })
  get edit() {
    return this.location?.params.edit;
  }

  @property()
  get profile() {
    return this.getFromModel("profile");
  }

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

  render() {
    return html` <user-profile .using=${this.profile}> </user-profile> `;
  }

  static styles = [
    // unsafeCSS(resetCSS),
    // unsafeCSS(pageCSS),
    css`
      :host {
        display: contents;
      }
    `,
  ];
}
