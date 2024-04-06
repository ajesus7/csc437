import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";

// import { Profile } from "../models/profile";
// import { authContext } from "./auth-required";
// import { consume } from "@lit/context";
// import { APIUser, APIRequest } from "../rest";
import { Buffer } from "buffer";

// * Functionality: Should take in the list of feed posts,
// * then generate a post object for each post. Should handle overflow of posts well.

import Post from "../models/post";
import { TrackObject, IComment } from "../../../ts-models";

//import components
import "./track-card";
import "./comment-card";

@customElement("feed-post")
export class FeedPostElement extends LitElement {
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

  _selectTrack(track: TrackObject) {
    // Check if the track is already in the selectedTracks array
    const existingIndex = this.selectedTracks.findIndex(
      (selectedTrack) => selectedTrack.id === track.id
    );

    if (existingIndex > -1) {
      // If the track is already selected, remove it from the array
      this.selectedTracks = [
        ...this.selectedTracks.slice(0, existingIndex),
        ...this.selectedTracks.slice(existingIndex + 1),
      ];
    } else {
      // If the track is not already selected, add it to the array
      this.selectedTracks = [...this.selectedTracks, track];
    }
  }

  // * make a PUT request to the post that the button was clicked on,
  // * create a comment with the inputted information (songs, userid, time, message)
  // * add the comment to the list of comments of that post in the database
  async _recommendTracks(ev: Event) {
    ev.preventDefault();
    this.submissionSuccess = null; // Reset the submission state on each attempt
    const target = ev.target as HTMLFormElement;
    const formData = new FormData(target);

    // Retrieve the value of the input field by its name
    let message = formData.get("input-comment") as string;

    const trackIds = this.selectedTracks.map((track) => track.id);
    const url = `http://localhost:3000/posts/${this.post?._id}`; // Replace '1234567890' with the actual ObjectId

    // todo USERID NEEDS TO BE CHANGED TO BE DYNAMIC based on given profile
    const newComment = {
      userName: "aidan",
      commentTime: new Date(), // Current time as the comment time
      commentMessage: message,
      SongIDs: trackIds,
    };

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment), // Ensure your server expects this format
      });

      if (response.ok) {
        console.log("Comment successfully added");
        this._clearTopTracks();
        this._clearSelectedTracks();
        this.submissionSuccess = true;
        target.reset(); // Reset the form if the response is successful
        this._handleCommentAdded(); // calls fn that fetches comments of specific post
      } else {
        throw new Error("Failed to post comment");
      }
    } catch (error) {
      console.error("Error:", error);
      this.submissionSuccess = false;
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

  _handleSubmit(ev: Event) {
    ev.preventDefault(); // Prevent the browser from submitting the form itself
    const target = ev.target as HTMLFormElement;
    const formData = new FormData(target);

    // Retrieve the value of the input field by its name
    this.requestedSearchQuery = formData.get("inputted-artist-name") as string;

    this.searchSpotify();
  }

  _clearTopTracks() {
    this.topTracks = []; // This empties the array, removing all tracks
  }
  _clearSelectedTracks() {
    this.selectedTracks = []; // This empties the array, removing all tracks
  }

  async fetchTopTracks(artistId: string) {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, // Ensure to add a market parameter as it's required by the Spotify API.
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      const data = await response.json(); // Use await to wait for the promise to resolve
      if (data && data.tracks) {
        // Check if 'data' and 'data.tracks' are present
        this.topTracks = data.tracks; // Assuming 'data.tracks' is the array you're interested in
      } else {
        console.log("No tracks found or data is malformed");
      }
    } else {
      throw new Error(`Error: ${response.statusText}`);
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

    if (!this.post?._id) {
      console.error("Post ID is undefined.");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/comments/${this.post._id}`,
        { method: "GET" }
      );
      if (!response.ok) throw new Error("Failed to fetch comments");

      const comments = await response.json();

      // Ensure this is treated as a new array for reactivity
      this.getPostComments = [...comments];
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }

  async authenticate() {
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          Buffer.from(`${clientId}:${clientSecret}`).toString("base64"),
      },
      body: "grant_type=client_credentials",
    });
    if (response.ok) {
      const data = await response.json();
      this.accessToken = data.access_token;
    } else {
      console.error("Spotify authentication failed");
    }
  }

  async searchSpotify(): Promise<void> {
    // Ensure there's a query to search for
    if (!this.requestedSearchQuery.trim()) return;

    // Construct the search URL for tracks only
    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      this.requestedSearchQuery
    )}&type=track&limit=10`;

    try {
      // Authenticate and get the access token
      await this.authenticate();

      const response = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();

      // Update the component state with the found tracks
      if (data.tracks.items.length > 0) {
        this.topTracks = data.tracks.items;
      } else {
        this.topTracks = [];
        alert("No tracks found. Please try another search.");
      }
    } catch (error) {
      console.error("Error searching for tracks:", error);
    }
  }

  render() {
    const readablePostTime = this.post?.postTime
      ? new Date(this.post.postTime).toLocaleString()
      : "";

    return html`
      <section class="${this.expandedClass}">
        <section class="name-and-time-and-expand">
          <section class="name-and-time">
            <h3 class="feed-name">${this.post?.userName}</h3>
            <p class="time-posted">${readablePostTime}</p>
          </section>
          <button class="expand-unexpand" @click=${this._expand}>
            ${this.expanded ? "Unexpand" : "Expand"}
          </button>
        </section>
        <p class="message">${this.post?.postMessage}</p>
        <section class="post-comments">
          <h3 class="comments-header">Comments</h3>
          ${this.getPostComments?.map(
            (comment) => html`<comment-card .comment=${comment}></comment-card>`
          )}
        </section>
        ${this.expanded
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
            `
          : ""}
      </section>
    `;
  }

  static styles = css`
    .feed-single-post,
    .feed-single-post-expanded {
      background-color: var(--background-color);
      color: var(--text-color);
      padding: 20px;
      margin-bottom: 1em;
      border-radius: var(--default-border-radius);
      box-shadow: var(--box-shadow);
    }

    .message {
      padding-bottom: 1.5em;
    }

    .name-and-time-and-expand {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1em;
    }

    .name-and-time {
      display: flex;
      align-items: center;
      flex-grow: 1;
    }

    .feed-name {
      font-weight: 600;
      margin-right: 1em; /* Adjust as needed */
    }

    .time-posted {
      font-size: var(--smaller-size);
      color: var(--subtext-color);
      margin-left: 1em; /* Ensures the time is to the right of the name */
      flex-grow: 1;
    }

    .expand-unexpand {
      background: var(--button-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      padding: 8px 16px;
      font-size: var(--smaller-size);
      white-space: nowrap; /* Prevents wrapping on small screens */
    }

    .expand-unexpand:hover {
      background: var(--button-hover-color);
    }

    .message {
      font-size: 1em;
      margin-bottom: 1em;
    }

    .selected-tracks,
    .query-results {
      width: 50%;
    }

    .track-box-selected-tracks,
    .track-box-search-results {
      background: var(--menu-color);
      border-radius: 12px;
      padding: 10px;
      width: 92%;
      height: 22.5em;
      margin-top: 10px;
      overflow: auto; /* Allow scrolling if content exceeds container size */
    }
    .query-results h3,
    .selected-tracks h3 {
      color: var(--text-color);
      font-size: 1.15em;
      font-weight: 300;
      margin: 0;
      margin-top: 6px;
    }

    .track-image {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 15px;
    }

    .track-details {
      flex-grow: 1;
    }

    .track-name,
    .track-artist {
      margin: 0;
      padding: 0;
    }

    .track-name {
      font-weight: bold;
    }

    .track-artist {
      font-size: var(--smaller-size);
      color: var(--subtext-color);
    }

    /* Search Form */
    .search-form input[type="text"] {
      width: calc(
        100% - 130px
      ); /* Adjust based on button width to fit on one line */
      padding: 10px 0px 10px 14px;
      margin-right: 10px; /* Space between input and button */
      border: 1px solid var(--section-border-color);
      background-color: var(blue);
      font-weight: 300;
      color: var(--text-color);
      border-radius: 50px;
    }

    .search-and-selected {
      display: flex;
      flex-direction: row;
    }

    .expanded-header {
      font-weight: 500;
    }
    .search-bar-form {
      display: flex;
      flex-direction: row;
    }

    #input-comment {
      border: none;
      border-bottom: 2px solid var(--section-border-color);
      width: 90%;
      height: 2em;
    }

    .comment-message-form {
      display: flex;
      flex-direction: row;
      width: 98%;
    }

    .search-form {
      margin-bottom: 15px;
    }

    .search-form button,
    button.recommend-songs {
      padding: 2px 20px 2px 20px;
      margin-left: 10px;
      background-color: var(--button-color);
      color: white;
      border: none;
      border: 2px solid black;
      border-radius: 4px;
      cursor: pointer;
    }

    button.recommend-songs {
      padding: 6px 20px;
    }

    .search-form button:hover {
      background-color: var(--button-hover-color);
    }

    .clear-results-section button,
    .clear-selected-tracks-section button {
      text-decoration: underline;
      cursor: pointer;
      background: var(--background-color);
      border: none;
      color: var(--subtext-color);
    }

    .clear-results:hover,
    .clear-selected-tracks:hover {
      color: var(--text-color);
    }

    /* Styling for the entire expanded content section */
    .expanded-content {
      padding-top: 20px; /* Space above the content */
    }
  `;
}
