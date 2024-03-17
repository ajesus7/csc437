import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
// import { Profile } from "../models/profile";
// import { authContext } from "./auth-required";
// import { consume } from "@lit/context";
// import { APIUser, APIRequest } from "../rest";

// * Functionality: Should take in the list of feed posts,
// * then generate a post object for each post. Should handle overflow of posts well.

import Post from "../models/post";
import "./feed-post";
import "./feed-post-expanded";

@customElement("feed-post-list")
export class FeedPostListElement extends LitElement {
  @property({ type: Array })
  posts: Post[] = [];

  render() {
    return html`
      <div class="posts-container">
        ${this.posts.map(
          (post) => html` <feed-post .post=${post}></feed-post>`
        )}
      </div>
    `;
  }

  static styles = css``;
}
