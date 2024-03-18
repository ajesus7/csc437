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
import { TrackObject } from "../../../ts-models";

//import components
import "./track-card";
import "./comment-card";

@customElement("feed-post")
export class FeedPostElement extends LitElement {
  @property({ type: Object })
  post?: Post;

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
      userName: "Aidan",
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
          ${this.post?.comments.map(
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
      border: 1px solid white;
      width: 47.5em;
      padding: 1.25em;
      box-sizing: border-box; /* Ensures padding is included in width */
    }

    #inputted-artist-name {
      width: 15em;
      height: 2em;
    }

    .search-form {
      margin-bottom: 0.75em;
    }

    .button-recommend-tracks {
      width: 10em;
      background: var(--accent-color);
      padding: 1em;
      border-radius: 5px;
    }

    .message {
      border-bottom: 2px solid white;
      padding-bottom: 1em;
    }

    .comments-header {
      margin-bottom: 0.5em;
    }

    .expanded-header {
      margin-top: 2em;
      margin-bottom: 1em;
    }
    .search-and-selected {
      display: flex;
      flex-direction: row;
      width: 100%;
      min-height: 8em; /* Set minimum height and allow expansion */
    }

    button.expand-unexpand {
      background: none;
      color: var(--white-color);
      border: none; /* Remove default border */
      padding: 0; /* Remove default padding */
      margin: 0; /* Adjust as needed */
      outline: none; /* Remove focus outline, though consider accessibility implications */
      -webkit-appearance: none; /* For Safari and Chrome */
      -moz-appearance: none; /* For Firefox */
      appearance: none; /* Standard property for removing default styling */
      margin-left: 3em;
      background: var(--accent-color);
      border-radius: 5px;
      padding: 0.5em;
    }

    svg.icon {
      display: inline;
      height: 2em;
      width: 2em;
      vertical-align: top;
      fill: var(--white-color);
      color: var(--white-color);
      margin: 4px 0px 0px 13px;
    }

    .query-results,
    .selected-tracks {
      flex: 1; /* Each takes up half of the container */
      min-height: 8em; /* Set minimum height and allow expansion */
      box-sizing: border-box; /* Ensures padding is included in dimensions */
      border: 2px solid white;
      margin-bottom: 0.5em;
    }

    .clear-buttons {
      display: flex;
      flex-direction: row;
      width: 100%;
      margin-bottom: 1.5em;
    }

    .clear-results-section,
    .clear-selected-tracks-section {
      display: flex;
      justify-content: right;
      width: 50%;
    }

    .clear-results,
    .clear-selected-tracks {
      text-align: center;
      width: 8em;
      height: 3em;
      font-size: 0.8em;
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

    .name-and-time-and-expand {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .clear-results,
    .clear-selected-tracks {
      background: red;
      font-size: 0.5em;
      padding: 0.5em;
      border: none;
      color: white;
      cursor: pointer;
      border-radius: 5px;
    }

    .clear-results:hover,
    .clear-selected-tracks:hover {
      background: darkred;
    }

    .recommend-songs {
      background: var(--accent-color);
      padding: 1em;
      border: none;
      color: white;
      border-radius: 5px;
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
      margin-right: 0.5em;
      font-size: 1.2em;
    }

    .time-posted {
      font-size: 0.8em;
      font-weight: 300;
      color: lightgray;
    }
  `;
}
