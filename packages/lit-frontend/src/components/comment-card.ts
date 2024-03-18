import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
// import { Profile } from "../models/profile";
// import { authContext } from "./auth-required";
// import { consume } from "@lit/context";
// import { APIUser, APIRequest } from "../rest";
import { Buffer } from "buffer";

// * Takes in an object that represents a comment
// * Renders a single card with that comments information

// interfaces
import { IComment } from "../../../ts-models";
import { TrackObject } from "../../../ts-models";

@customElement("comment-card")
export class CommentCardElement extends LitElement {
  @property({ type: Object })
  comment?: IComment;

  @property({ type: String })
  accessToken = "";

  @state()
  currentTracks: TrackObject[] = []; // Initialize as null or an empty object with default values

  async findSong(trackId: string): Promise<TrackObject | null> {
    const url = `https://api.spotify.com/v1/tracks/${trackId}`;

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

      const data: TrackObject = await response.json();
      this.currentTracks = [...this.currentTracks, data]; // Append the fetched track to the currentTracks array
      return data;
    } catch (error) {
      console.error("Error searching for track:", error);
      return null;
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

  async connectedCallback() {
    super.connectedCallback();
    if (this.comment?.SongIDs) {
      await this.fetchAllTracks(this.comment.SongIDs);
    }
  }

  async fetchAllTracks(trackIds: string[]): Promise<void> {
    try {
      this.currentTracks = []; // Optionally reset currentTracks here or handle duplicates as needed

      // Map each ID to a promise that resolves to the track data
      const trackPromises = trackIds.map((id) => this.findSong(id));

      // Wait for all promises to resolve
      const tracks = await Promise.all(trackPromises);

      // Filter out any null values if findSong failed for any tracks
      // Use type assertion to assure TypeScript that the resulting array contains only TrackObject items
      this.currentTracks = tracks.filter(
        (track): track is TrackObject => track !== null
      );

      this.requestUpdate(); // This might be redundant depending on your LitElement version
    } catch (error) {
      console.error("Error fetching tracks:", error);
    }
  }

  render() {
    if (!this.comment) {
      // Render a message or empty state if comment is undefined
      return html`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;
    }

    // Now that we've checked that comment is defined, we can safely destructure it
    const { userName, commentTime, commentMessage } = this.comment;
    // Render the track information
    return html`
      <section class="single-comment">
        <section class="comment-left">
          <section class="details">
            <section class="details-header">
              <p class="comment-name">${userName}</p>
              <p class="comment-time">${commentTime}</p>
            </section>
            <p class="comment-message">${commentMessage}</p>
          </section>
        </section>
        <section class="comment-right">
          ${this.currentTracks.map(
            (track) => html`
              <div class="track-info">
                <img
                  src="${track.album.images[0].url}"
                  alt="Album cover"
                  class="track-image"
                />
                <section class="track-name-and-artist">
                  <p class="track-name">${track.name}</p>
                  <p class="track-artist">
                    ${track.artists.map((artist) => artist.name).join(", ")}
                  </p>
                </section>
              </div>
            `
          )}
        </section>
      </section>
    `;
  }

  static styles = css`
    .single-comment {
      display: flex;
      flex-direction: row;
      border: 2px solid white;
      font-weight: 500;
    }

    .details-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.5em;
    }

    .track-info {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.2em;
    }

    .track-name-and-artist {
      display: flex;
      flex-direction: column;
      align-content: center;
      text-align: left:
    }

    .comment-left {
      width: 30%;
    }

    .comment-right {
      width: 65%;
      display: flex;
      flex-direction: column;
      align-content: center;
    }

    .track-name,
    .track-artist {
      font-size: 0.8em;
      padding: 0;
      margin: 0;
    }

    .comment-name {
      color: white;
      font-size: 1em;
      margin: 0;
      padding: 0;
      margin-right: 1em;
    }
    .comment-time {
      color: darkgray;
      font-size: 0.6em;
      margin: 0;
      padding: 0;
    }

    .comment-message {
      font-size: 1em;
      font-weight: 300;
    }
    .track-image {
      width: 2.5em;
      height: 2.5em;
    }
  `;
}
