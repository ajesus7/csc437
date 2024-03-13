import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
// import { Profile } from "../models/profile";
// import { authContext } from "./auth-required";
// import { consume } from "@lit/context";
// import { APIUser, APIRequest } from "../rest";

// * Functionality: Should take in the list of feed posts,
// * then generate a post object for each post. Should handle overflow of posts well.

import Post from "../models/post";

@customElement("feed-post")
export class FeedPostElement extends LitElement {
  @property({ type: Object })
  post?: Post;

  render() {
    return html`
      <section class="feed-single-post">
        <h3 class="feed-name">${this.post?.userName}</h3>
      </section>
    `;
  }

  static styles = css``;
}
