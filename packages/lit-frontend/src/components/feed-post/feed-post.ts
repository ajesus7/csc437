import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import Post from "../../models/post.ts";
import { IComment } from "../../../../ts-models/src/index.ts";
import styles from "./feed-post-styles.ts";

//import components
import "../track-card/track-card.ts";
import "../comment-card/comment-card.ts";
import "../song-picker/song-picker.ts";

// * Functionality: Should take in the list of feed posts,
// * then generate a post object for each post. Should handle overflow of posts well.

@customElement("feed-post")
export class FeedPostElement extends LitElement {
  static styles = styles;

  @property({ type: Object })
  post?: Post;

  @state()
  getPostComments?: IComment[] = [];

  @state()
  expanded: boolean = false;

  @state()
  submissionSuccess: boolean | null = null;

  @property()
  expandedText: String = "unexpanded";

  @property({ type: String })
  requestedSearchQuery = "";

  @property({ type: String })
  accessToken = "";

  @state()
  expandedClass: String = "feed-single-post";

  _calculateTimeFromDate(): string {
    // Ensure post?.postTime exists and is of type string | Date | undefined
    const postedTime: Date | undefined = this.post?.postTime
      ? new Date(this.post.postTime)
      : undefined;

    if (!postedTime) {
      // Handle the case where postedTime or this.post is undefined
      console.error("Posted time is undefined");
      return "Post time cannot be found."; // or another appropriate value indicating an error or undefined state
    }

    // Get the current time as a Date object
    const currentTime: Date = new Date();

    // Calculate the difference in milliseconds
    const diff: number = currentTime.getTime() - postedTime.getTime();

    // Convert milliseconds to hours
    let hours: number = diff / (1000 * 60 * 60);
    hours = Math.round(hours);

    if (hours < 1) {
      return `Less than an hour ago.`;
    } else if (hours > 23) {
      return `${hours % 24} days ago`;
    } else {
      return `${hours} hours ago`;
    }
  }

  _expand() {
    this.expanded = !this.expanded;
    if (this.expandedClass === "feed-single-post") {
      this.expandedClass = "feed-single-post-expanded";
    } else {
      this.expandedClass = "feed-single-post";
    }
  }

  constructor() {
    super();
    // ! deals with adding tracks to the selected tracks section when a click event bubbles up
    // TODO :
    // this.addEventListener("track-selected", (event: Event) => {
    //   const customEvent = event as CustomEvent;
    //   this._selectTrack(customEvent.detail.track);
    // });
  }

  connectedCallback(): void {
    super.connectedCallback(); // Always call super first in connectedCallback

    //if not already initialized, set initial post comments state to getPostComments, this will be updated later when a comment is submitted
    if (!this.getPostComments || this.getPostComments.length === 0) {
      this.getPostComments = this.post?.comments || [];
    }
  }

  // * when called, re renders the specific post to show new comment
  async _handleCommentAdded() {
    console.log("Comment Created, Now Refreshing Component");
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;
    console.log("SERVER URL FROM COMMENT ADDED: ", SERVER_URL);
    if (!this.post?._id) {
      console.error("Post ID is undefined.");
      return;
    }

    try {
      const response = await fetch(`${SERVER_URL}/comments/${this.post._id}`, {
        method: "GET",
      });
      if (!response.ok) throw new Error("Failed to fetch comments");

      const comments = await response.json();

      // Ensure this is treated as a new array for reactivity
      this.getPostComments = [...comments];
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  // <section class="post-comments">
  //         <h3 class="comments-header">Comments</h3>
  //         ${this.getPostComments?.map(
  //           (comment) => html`<comment-card .comment=${comment}></comment-card>`
  //         )}
  //       </section>

  render() {
    const readablePostTime = this._calculateTimeFromDate();

    return html`
      <section class="${this.expandedClass}">
        <section class="profile-name-time">
          <section class="individual-post-profile-image">
            <img src="/images/aidan_pfp.png" alt="placeholder image" />
            ${
              this.expanded
                ? html`<div class="line-decoration"></div>`
                : html`<div></div>`
            }
            </button>
          </section>
          <section class="non-image-content">
            <section class="name-and-time">
              <h3 class="feed-name">${this.post?.userName}</h3>
              <p class="time-posted">${readablePostTime}</p>
            </section>
            <p class="message">${this.post?.postMessage}</p>
            <button class="expand-unexpand" @click=${this._expand}>
              ${
                this.expanded
                  ? "Close song recommendation form."
                  : "Recommend a song."
              }
            </button>
          </section>
        </section>

        ${
          this.expanded
            ? html` <song-picker .multiPicker=${false}></song-picker>`
            : ""
        }
      </section>
    `;
  }
}
