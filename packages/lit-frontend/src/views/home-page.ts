import { customElement } from "lit/decorators.js";
import { html, css } from "lit";
import * as App from "../app";

import "../components/main-feed";
import "../components/feed-post-list";

@customElement("home-page")
export class HomePageElement extends App.View {
  render() {
    return html`
      <section class="feed-page">
        <main-feed></main-feed>
      </section>
    `;
  }

  static styles = css`
    .feed-page {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  `;
}
