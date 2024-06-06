import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

import Post from "../../models/post.ts";
import { IComment } from "../../../../ts-models/src/index.ts";
import styles from "./feed-post-styles.ts";
import { Profile } from "../../models/profile";

// Import components
import "../track-card/track-card.ts";
import "../comment-card/comment-card.ts";
import "../song-picker/song-picker.ts";

import { calculateTimeFromDate } from "../helpers/calculateTimeFromDate.ts";

// * Functionality: Should take in the list of feed posts,
// * then generate a post object for each post. Should handle overflow of posts well.

@customElement("feed-post")
export class FeedPostElement extends LitElement {
  static styles = styles;

  @property({ type: Object })
  post?: Post;

  @state()
  getPostComments: IComment[] = [];

  @state()
  expanded: boolean = false;

  @state()
  commentsSectionExpanded: boolean = false;

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

  //  * the profile object retrieved from the Model
  @state()
  using?: Profile;

  _expand() {
    // * can't have both expanded
    this.commentsSectionExpanded = false;
    this.expanded = !this.expanded;
    if (this.expandedClass === "feed-single-post") {
      this.expandedClass = "feed-single-post-expanded";
    } else {
      this.expandedClass = "feed-single-post";
    }
  }

  _showComments() {
    // * can't have both expanded
    this.commentsSectionExpanded = !this.commentsSectionExpanded;
    this.expanded = false;
    if (this.expandedClass === "feed-single-post") {
      this.expandedClass = "feed-single-post-expanded";
    } else {
      this.expandedClass = "feed-single-post";
    }
  }

  connectedCallback(): void {
    super.connectedCallback(); // Always call super first in connectedCallback

    // If not already initialized, set initial post comments state to getPostComments, this will be updated later when a comment is submitted
    if (!this.getPostComments || this.getPostComments.length === 0) {
      this.getPostComments = this.post?.comments || [];
    }
  }

  // * When called, re-renders the specific post to show new comment
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
      // close comment menu
      setTimeout(() => {
        this.expanded = !this.expanded;
      }, 1000);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  // * Time calculation refactored for better readability
  _calculateTimeFromDate() {
    calculateTimeFromDate(this);
  }

  // * Comment needs to appear in post, so therefore state needs to be updated here,
  // * so listen for the handle comment added event in the constructor
  constructor() {
    super();
    // ! Handle comment added event sent from song-picker
    this.addEventListener("handle-comment-added", () => {
      this._handleCommentAdded();
    });
  }

  render() {
    const readablePostTime = this._calculateTimeFromDate();
    const numberOfComments = this.getPostComments?.length ?? 0;

    return html`
      <section class="${this.expandedClass}">
        <section class="profile-name-time">
          <section class="post-content">
            <section class="individual-post-profile-image">
              <img
                src="/images/${this.post?.profileImage}.png"
                alt="${this.post?.profileDescription}"
              />
              ${this.expanded
                ? html`<div class="line-decoration"></div>`
                : html`<div></div>`}
            </section>
            <section class="non-image-content">
              <section class="name-and-time">
                <h3 class="feed-name">${this.post?.userName}</h3>
                <p class="time-posted">${readablePostTime}</p>
              </section>
              <p class="message">${this.post?.postMessage}</p>
              <button class="expand-unexpand" @click=${this._expand}>
                ${this.expanded
                  ? "Close song recommendation form."
                  : "Recommend a song."}
              </button>
              <button
                class="expand-unexpand-right"
                @click=${this._showComments}
              >
                ${this.commentsSectionExpanded
                  ? "Close comments."
                  : `View (${this.getPostComments?.length}) comments.`}
              </button>
            </section>
          </section>
        </section>

        ${this.commentsSectionExpanded && numberOfComments > 0
          ? html` <section class="comment-list">
              ${this.getPostComments?.map(
                (comment) => html`
                  <comment-card .comment=${comment}></comment-card>
                `
              )}
            </section>`
          : ``}
        ${this.commentsSectionExpanded && numberOfComments <= 0
          ? html` <section class="comment-list">
              <p class="subtext">There are no comments on this post yet.</p>
            </section>`
          : ``}
        ${this.expanded
          ? html` <song-picker
              .post=${this.post}
              .multiPicker=${true}
              .hasMargin=${true}
              .using=${this.using}
            ></song-picker>`
          : ""}
      </section>
    `;
  }
}
