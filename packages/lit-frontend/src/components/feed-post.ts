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

@customElement("feed-post")
export class FeedPostElement extends LitElement {
  @property({ type: Object })
  post?: Post;

  @state()
  expanded: boolean = false;

  @property({ type: String })
  requestedSearchQuery = "";

  @property({ type: String })
  accessToken = "";

  @property()
  topTracks: TrackObject[] = [];

  _expand() {
    this.expanded = !this.expanded;
    console.log("EXPAND CALLED");
  }
  _handleSubmit(ev: Event) {
    ev.preventDefault(); // Prevent the browser from submitting the form itself
    const target = ev.target as HTMLFormElement;
    const formData = new FormData(target);

    // Retrieve the value of the input field by its name
    this.requestedSearchQuery = formData.get("inputted-artist-name") as string;

    console.log("Artist Name: ", this.requestedSearchQuery);
    this.searchSpotify();
  }

  async fetchTopTracks(artistId: string) {
    console.log("WITHIN FETCH TOP TRACKS\n ArtistId: ", artistId);

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
        console.log("body: ", this.topTracks);
      } else {
        console.log("No tracks found or data is malformed");
      }
    } else {
      throw new Error(`Error: ${response.statusText}`);
    }
  }

  constructor() {
    super();
  }

  async authenticate() {
    console.log("AUTHENTICATING");
    const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
    const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET;

    console.log("CLIENTID: ", clientId, "\n", "CLIENTSECRET: ", clientSecret);

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
      console.log("Authentication response data: ", data);
      this.accessToken = data.access_token;
      console.log("Access Token:", this.accessToken); // Add this line to log the token
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
      console.log("Tracks Search Response: ", data);

      // Update the component state with the found tracks
      if (data.tracks.items.length > 0) {
        this.topTracks = data.tracks.items;
        console.log("Tracks found:", this.topTracks);
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

    if (this.expanded) {
      return html`
        <section class="feed-single-post-expanded">
          <section class="name-and-time">
            <h3 class="feed-name">${this.post?.userName}</h3>
            <p class="time-posted">${readablePostTime}</p>
          </section>
          <p class="message">${this.post?.postMessage}</p>

          ${this.topTracks.slice(0, 5).map(
            // Only process the first 5 elements of the array
            (track) => html` <track-card .track=${track}></track-card>`
          )}

          <form @submit=${this._handleSubmit}>
            <input
              type="text"
              id="inputted-artist-name"
              name="inputted-artist-name"
              placeholder="Enter an artist, song, or album!"
            />
            <button class="recommend-songs" type="submit">Submit Songs</button>
          </form>
        </section>
      `;
    } else {
      return html`
        <section class="feed-single-post">
          <section class="name-and-time">
            <h3 class="feed-name">${this.post?.userName}</h3>
            <p class="time-posted">${readablePostTime}</p>
          </section>
          <p class="message">${this.post?.postMessage}</p>
          <button class="recommend-songs" @click=${this._expand}>Expand</button>
        </section>
      `;
    }
  }

  static styles = css`
    .feed-single-post {
      border: 1px solid white;
      width: 47.5em;
      height: 8em;
      padding: 1.25em;
    }

    .feed-single-post-expanded {
      border: 1px solid white;
      width: 47.5em;
      height: auto;
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
