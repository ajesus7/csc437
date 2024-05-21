import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import {
  selectTrack,
  recommendTracks,
  handleSubmit,
  authenticate,
  clearTopTracks,
  clearSelectedTracks,
  fetchTopTracks,
  searchSpotify,
} from "./spotifyQueryHelper";

import Post from "../models/post";
import { TrackObject, IComment } from "../../../ts-models";
import styles from "./feed-post-styles.ts";

//import components
import "./track-card";
import "./comment-card";

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

  @property()
  topTracks: TrackObject[] = [];

  @property()
  selectedTracks: TrackObject[] = [];

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
    this.addEventListener("track-selected", (event: Event) => {
      const customEvent = event as CustomEvent;
      this._selectTrack(customEvent.detail.track);
    });
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

  async _authenticate() {
    await authenticate(this);
  }

  _selectTrack(track: TrackObject) {
    selectTrack(this, track);
  }

  async _recommendTracks(ev: Event) {
    await recommendTracks(ev, this);
  }

  _handleSubmit(ev: Event) {
    handleSubmit(ev, this);
  }

  _clearTopTracks() {
    clearTopTracks(this);
  }

  _clearSelectedTracks() {
    clearSelectedTracks(this);
  }

  async fetchTopTracks(artistId: string) {
    await fetchTopTracks(this, artistId);
  }

  async searchSpotify(): Promise<void> {
    await searchSpotify(this);
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
            ? html`
                <section class="expanded-window">
                  <section>
                    <h3 class="expanded-header">Leave a Comment</h3>
                  </section>
                  <section class="search-form">
                    <form class="search-bar-form" @submit=${this._handleSubmit}>
                      <input
                        type="text"
                        id="inputted-artist-name"
                        name="inputted-artist-name"
                        placeholder="Search for a song, artist, album... anything!"
                      />
                      <button class="recommend-songs" type="submit">
                        Search
                      </button>
                    </form>
                  </section>
                  <section class="search-and-selected">
                    <section class="query-results">
                      <h3 class="search-results">Search Results</h3>
                      ${this.topTracks.length > 0
                        ? html`<div class="track-box-search-results">
                              ${this.topTracks
                                .slice(0, 5)
                                .map(
                                  (track) =>
                                    html`<track-card
                                      .track=${track}
                                    ></track-card>`
                                )}
                            </div>
                            <div class="clear-results-section">
                              <button
                                class="clear-results"
                                @click=${this._clearTopTracks}
                              >
                                Clear Results
                              </button>
                            </div>`
                        : html`<div class="track-box-search-results"></div>
                            <div class="clear-results-section">
                              <button
                                class="clear-results"
                                @click=${this._clearTopTracks}
                              >
                                Clear Results
                              </button>
                            </div>`}
                    </section>
                    <section class="selected-tracks">
                      <h3>Selected Songs</h3>
                      <div class="track-box-selected-tracks">
                        ${this.selectedTracks.map(
                          (track) =>
                            html`<track-card .track=${track}></track-card>`
                        )}
                      </div>
                      <div class="clear-selected-tracks-section">
                        <button
                          class="clear-selected-tracks"
                          @click=${this._clearSelectedTracks}
                        >
                          Clear Selected Tracks
                        </button>
                      </div>
                    </section>
                  </section>
                  <section class="expanded-content">
                    <section class="recommend-form">
                      ${this.submissionSuccess === true
                        ? html`<p>Submission successful!</p>`
                        : ``}
                      ${this.submissionSuccess === false
                        ? html`<p>Submission failed. Please try again.</p>`
                        : ``}
                      <form
                        class="comment-message-form"
                        @submit=${this._recommendTracks}
                      >
                        <input
                          type="text"
                          id="input-comment"
                          name="input-comment"
                          placeholder="Leave a message..."
                        />
                        <button class="recommend-songs" type="submit">
                          Submit
                        </button>
                      </form>
                    </section>
                  </section>
                </section>
              `
            : ""
        }
      </section>
    `;
  }
}
