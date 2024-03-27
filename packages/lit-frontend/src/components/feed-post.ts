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
              <section class="expanded-content">
                <h3 class="expanded-header">
                  Leave a Comment and Recommend Some Songs!
                </h3>
                <section class="search-form">
                  <form @submit=${this._handleSubmit}>
                    <input
                      type="text"
                      id="inputted-artist-name"
                      name="inputted-artist-name"
                      placeholder="Enter an artist, song, or album!"
                    />
                    <button class="recommend-songs" type="submit">
                      Search for Songs
                    </button>
                  </form>
                </section>

                <section class="search-and-selected">
                  <section class="query-results">
                    ${this.topTracks.length > 0
                      ? this.topTracks
                          .slice(0, 5)
                          .map(
                            (track) =>
                              html`<track-card .track=${track}></track-card>`
                          )
                      : html`<h3>
                          The tracks you search for will show up here
                        </h3>`}
                  </section>
                  <section class="selected-tracks">
                    <h3>Selected Tracks</h3>
                    ${this.selectedTracks.map(
                      (track) => html`<track-card .track=${track}></track-card>`
                    )}
                  </section>
                </section>

                <section class="clear-buttons">
                  <div class="clear-results-section">
                    <button
                      class="clear-results"
                      @click=${this._clearTopTracks}
                    >
                      Clear Results
                    </button>
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

                <section class="recommend-form">
                  ${this.submissionSuccess === true
                    ? html`<p>Submission successful!</p>`
                    : ``}
                  ${this.submissionSuccess === false
                    ? html`<p>Submission failed. Please try again.</p>`
                    : ``}
                  <form @submit=${this._recommendTracks}>
                    <input
                      type="text"
                      id="input-comment"
                      name="input-comment"
                      placeholder="Leave a message!"
                    />
                    <button class="recommend-songs" type="submit">
                      Recommend Tracks!
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
      background-color: #2c2c2e;
      color: #ffffff;
      padding: 20px;
      margin-bottom: 1em;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
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
      font-size: 0.8em;
      color: #a9a9a9;
      margin-left: 1em; /* Ensures the time is to the right of the name */
      flex-grow: 1;
    }

    .expand-unexpand {
      background: var(--accent-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      padding: 8px 16px;
      font-size: 0.875em;
      white-space: nowrap; /* Prevents wrapping on small screens */
    }

    .expand-unexpand:hover {
      background: #0056b3;
    }

    .message {
      font-size: 1em;
      margin-bottom: 1em;
    }
    /* Additional Styles for Expanded Content */
    .query-results,
    .selected-tracks {
      background-color: #3a3a3c;
      padding: 10px;
      margin-top: 10px;
      border-radius: 8px;
      box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
      overflow: auto; /* Allow scrolling if content exceeds container size */
    }

    .query-results h3,
    .selected-tracks h3 {
      color: #ddd;
      font-size: 1.2em;
    }

    .track-card {
      display: flex;
      align-items: center;
      background-color: #2c2c2e;
      color: #fff;
      margin: 10px 0;
      padding: 10px;
      border-radius: 6px;
      transition: background-color 0.2s ease;
    }

    .track-card:hover {
      background-color: #424244;
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
      font-size: 0.875em;
      color: #bbbbbb;
    }

    /* Search Form */
    .search-form input[type="text"] {
      width: calc(
        100% - 130px
      ); /* Adjust based on button width to fit on one line */
      padding: 8px;
      margin-right: 10px; /* Space between input and button */
      border: 1px solid #555;
      background-color: #2c2c2e;
      color: #fff;
      border-radius: 4px;
    }

    .search-form button {
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    .search-form button:hover {
      background-color: #0056b3;
    }

    /* Clear Buttons */
    .clear-results,
    .clear-selected-tracks {
      padding: 8px 16px;
      background-color: #444;
      border: none;
      color: #ccc;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.875em;
    }

    .clear-results:hover,
    .clear-selected-tracks:hover {
      background-color: #555;
    }

    /* Styling for the entire expanded content section */
    .expanded-content {
      border-top: 1px solid #555; /* Adds a subtle separation line */
      padding-top: 20px; /* Space above the content */
    }
  `;
}
