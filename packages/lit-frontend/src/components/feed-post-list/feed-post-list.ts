import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./feed-post-list-styles";

// * Functionality: Should take in the list of feed posts,
// * then generate a post object for each post. Should handle overflow of posts well.

import Post from "../../models/post";
import "../feed-post/feed-post";

@customElement("feed-post-list")
export class FeedPostListElement extends LitElement {
  static styles = [styles];
  @property({ type: Array })
  posts: Post[] = [];

  render() {
    return html`
      <div class="posts-container">
        ${this.posts.map(
          (post) =>
            html` <feed-post .hasMargin=${true} .post=${post}></feed-post>`
        )}
      </div>
    `;
  }
}
