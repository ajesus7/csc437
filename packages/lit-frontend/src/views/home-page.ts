import { customElement, property } from "lit/decorators.js";
import { html, css } from "lit";
import * as App from "../app";

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

  render() {
    return html`
      <section class="feed-page">
        <main-feed .using${this.profile}></main-feed>
      </section>
    `;
  }

  static styles = css`
    .feed-page {
      display: flex;
      justify-content: center;
    }
  `;
}
