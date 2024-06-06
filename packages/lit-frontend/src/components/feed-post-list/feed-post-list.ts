import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import styles from "./feed-post-list-styles";
import { Profile } from "../../models/profile";

// * Functionality: Should take in the list of feed posts,
// * then generate a post object for each post. Should handle overflow of posts well.

import Post from "../../models/post";
import "../feed-post/feed-post";

@customElement("feed-post-list")
export class FeedPostListElement extends LitElement {
  static styles = [styles];

  @property({ type: Array })
  posts: Post[] = [];

  //  * the profile object retrieved from the Model
  @state()
  using?: Profile;

  render() {
    return html`
      <div class="posts-container">
        ${this.posts.map(
          (post) =>
            html` <feed-post
              .using=${this.using}
              .hasMargin=${true}
              .post=${post}
            ></feed-post>`
        )}
      </div>
    `;
  }
}
