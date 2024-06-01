import { html, LitElement } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import styles from "./main-feed-styles";
import { Profile } from "../../models/profile";

// components
import "../feed-post-list/feed-post-list";
import "../create-post/create-post";

import Post from "../../models/post";

@customElement("main-feed")
export class MainFeedElement extends LitElement {
  static styles = [styles];

  @state()
  posts: Post[] = []; // Initialize posts as an empty array to ensure type correctness

  //  * the profile object retrieved from the Model
  @state()
  using?: Profile;

  @property({ type: String })
  userId?: string;

  async connectedCallback() {
    super.connectedCallback();
    this.addEventListener("post-created", () => this._handlePostCreated());
    await this._fetchPostDataFromDatabase();
  }

  // * when called, re fetches the posts
  // * is this the most efficient way to do it? or should it just append the newly created post to the top of the list?
  // * in the case where there are many users, you might want to update all posts in case multiple are created at the same time
  async _handlePostCreated() {
    console.log("Post Created, Now Refreshing Component");
    await this._fetchPostDataFromDatabase();
  }

  async _fetchPostDataFromDatabase() {
    console.log("fetching posts!");
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;

    try {
      const response = await fetch(`${SERVER_URL}/posts`);
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
    console.log("using", this.using);
    return html`
      <section class="feed-container">
        <section class="nav-section">
          <h3 class="nav-header">Navigation</h3>
          <ul class="nav">
            <li class="navlink">
              <a href="app/chatRoom/${this.using?.userid}">Chat Room</a>
            </li>
            <li class="navlink">
              <a href="app/profile/${this.using?.userid}">Your Profile</a>
            </li>
          </ul>
        </section>
        <section class="main-posts-section">
          <h2 class="feed-header">Song Recommendation Feed</h2>
          <create-post .using=${this.using}></create-post>
          <feed-post-list .posts=${this.posts}></feed-post-list>
        </section>
      </section>
    `;
  }
}
