import { customElement, property } from "lit/decorators.js";
import { PropertyValueMap, html } from "lit";
import * as App from "../app";
import { APIUser } from "../rest";

import "../components/main-feed/main-feed";
import "../components/feed-post-list/feed-post-list";

type ProfileLocation = Location & {
  params: { userid: string; edit: string };
  searchParams: Map<string, string>;
};

@customElement("home-page")
export class HomePageElement extends App.View {
  @property({ attribute: false })
  location?: ProfileLocation;

  // ! userid not in the url
  @property({ reflect: true })
  get userid() {
    return this.location?.params.userid;
  }

  @property({ reflect: true })
  get edit() {
    return this.location?.params.edit;
  }

  // @property()
  get profile() {
    return this.getFromModel("profile");
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    console.log("******* HOME PAGE FIRST UPDATED ********");
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

  render() {
    console.log("this.profile within home page", this.profile);
    return html`
      <section class="feed-page">
        <main-feed .using=${this.profile}></main-feed>
      </section>
    `;
  }
}
