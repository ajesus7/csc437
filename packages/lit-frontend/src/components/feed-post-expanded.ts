import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import Post from "../models/post";
import { Buffer } from "buffer";

// import models
import { TrackObject } from "../../../ts-models";

//import components
import "./track-card";

@customElement("feed-post-expanded")
export class FeedPostExpandedElement extends LitElement {
  @property({ type: Object })
  post?: Post;

  // @state()
  // private songResults: SongInfo[] = [];

  @property({ type: String })
  artistName = "";

  @property({ type: String })
  accessToken = "";

  @property()
  topTracks: TrackObject[] = [];

  _handleSubmit(ev: Event) {
    ev.preventDefault(); // Prevent the browser from submitting the form itself
    const target = ev.target as HTMLFormElement;
    const formData = new FormData(target);

    // Retrieve the value of the input field by its name
    this.artistName = formData.get("inputted-artist-name") as string;

    console.log("Artist Name: ", this.artistName);
    this.searchArtist();
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

  async searchArtist(): Promise<void> {
    // ? if artistName not given, return nothing
    if (!this.artistName.trim()) return;

    console.log("calling searchArtist function!");

    // ? create the query url
    const url = `https://api.spotify.com/v1/search?q=${encodeURIComponent(
      this.artistName
    )}&type=artist&limit=1`;

    try {
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

      // ? if list of artists larger than 0, grab the artist id and find their top tracks
      // ? otherwise, artist couldn't be found, return error
      const data = await response.json();
      console.log("SEARCHARTIST RESPONSE: ", data);

      if (data.artists.items.length > 0) {
        const artistId = data.artists.items[0].id;
        this.fetchTopTracks(artistId);
      } else {
        this.topTracks = [];
        alert("Artist not found. Please try another search.");
      }
    } catch (error) {
      console.error("Error searching for artist:", error);
    }
  }

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

        ${this.topTracks.slice(0, 5).map(
          // Only process the first 5 elements of the array
          (track) => html` <track-card .track=${track}></track-card>`
        )}

        <form @submit=${this._handleSubmit}>
          <input
            type="text"
            id="inputted-artist-name"
            name="inputted-artist-name"
            placeholder="Enter an artist name!"
          />
          <button class="recommend-songs" type="submit">Submit Songs</button>
        </form>
      </section>
    `;
  }

  static styles = css`
    .feed-single-post {
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

    .song-search {
      border-left: 2px solid var(--accent-color);
      height: 6em;
      margin-bottom: 1.5em;
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
