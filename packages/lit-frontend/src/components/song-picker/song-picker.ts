import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import styles from "./song-picker-styles";

import {
  selectTrack,
  recommendTracks,
  handleSubmit,
  authenticate,
  clearTopTracks,
  clearSelectedTracks,
  fetchTopTracks,
  searchSpotify,
} from "../helpers/spotifyQueryHelper.ts";
import { TrackObject } from "../../../../ts-models/src/index.ts";

// TODO : I think I imported all of the styles from feed-post-styles to song-picker-styles.ts, but if anything doesn't work this may be the cause of the issue
@customElement("song-picker")
export class SongPickerElement extends LitElement {
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
  static styles = [styles];

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

  render() {
    return html`
      <section class="expanded-window">
        <section class="search-form">
          <form class="search-bar-form" @submit=${this._handleSubmit}>
            <input
              type="text"
              id="inputted-artist-name"
              name="inputted-artist-name"
              placeholder="Search for a song, artist, album... anything!"
            />
            <button class="recommend-songs" type="submit">Search</button>
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
                          html`<track-card .track=${track}></track-card>`
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
                (track) => html`<track-card .track=${track}></track-card>`
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
            <form class="comment-message-form" @submit=${this._recommendTracks}>
              <input
                type="text"
                id="input-comment"
                name="input-comment"
                placeholder="Leave a message..."
              />
              <button class="recommend-songs" type="submit">Submit</button>
            </form>
          </section>
        </section>
      </section>
    `;
  }
}
