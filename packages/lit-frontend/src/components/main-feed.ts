import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

// components
import "./feed-post-list";
import "./create-post";

import Post from "../models/post";

@customElement("main-feed")
export class MainFeedElement extends LitElement {
  @state()
  posts: Post[] = []; // Initialize posts as an empty array to ensure type correctness

  async connectedCallback() {
    super.connectedCallback();
    this.addEventListener("post-created", () => this._handlePostCreated());
    await this._fetchData();
  }

  // * when called, re fetches the posts
  // * is this the most efficient way to do it? or should it just append the newly created post to the top of the list?
  // * in the case where there are many users, you might want to update all posts in case multiple are created at the same time
  async _handlePostCreated() {
    console.log("Post Created, Now Refreshing Component");
    await this._fetchData();
  }

  async _fetchData() {
    console.log("fetching posts!");
    try {
      const response = await fetch("http://localhost:3000/posts");
      if (response.ok) {
        // Check if response is ok (status in the range 200-299)
        const json = await response.json();
        this.posts = json; // This will trigger an update and re-render if needed
        this.posts = this.posts.reverse(); // reverse the posts to make them in chronological order
        console.log("POSTS RECEIVED: ", this.posts);
      } else {
        console.error("Failed to fetch posts:", response.status);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  }

  render() {
    return html`
      <section class="feed-container">
        <h2 class="feed-header">Song Recommendation Feed</h2>
        <create-post></create-post>
        <feed-post-list .posts=${this.posts}></feed-post-list>
      </section>
    `;
  }

  static styles = css`
    .feed-container {
      width: 50em;
      margin-top: 3em;
    }

    h2 {
      font-size: 2em;
    }
  `;
}
