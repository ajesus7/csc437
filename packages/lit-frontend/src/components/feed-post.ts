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
    const readablePostTime = this.post?.postTime
      ? new Date(this.post.postTime).toLocaleString()
      : "";

    return html`
      <section class="feed-single-post">
        <section class="name-and-time">
          <h3 class="feed-name">${this.post?.userName}</h3>
          <p class="time-posted">${readablePostTime}</p>
        </section>
        <p class="message">${this.post?.postMessage}</p>
        <button class="recommend-songs">Recommend Something!</button>
      </section>
    `;
  }

  static styles = css`
    .feed-single-post {
      border: 1px solid white;
      width: 47.5em;
      height: 8em;
      padding: 1.25em;
    }

    h3 {
      margin: 0;
      height: auto;
    }

    .name-and-time {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 1em;
    }

    .recommend-songs {
      background: var(--accent-color);
      padding: 1em;
      border: none;
      color: white;
    }

    .recommend-songs:hover {
      cursor: pointer;
      background: rgb(194, 135, 39);
    }

    .message {
      margin-bottom: 1em;
    }
    .feed-name {
      font-weight: 600;
      margin-right: 1em;
      font-size: 1.2em;
    }

    .time-posted {
      font-size: 0.8em;
      font-weight: 300;
      color: lightgray;
    }
  `;
}
