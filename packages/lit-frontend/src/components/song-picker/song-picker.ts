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

import "../multi-song-ui/multi-song-ui.ts";
import "../single-song-ui/single-song-ui.ts";

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

  // * passed in by parent, decides if one song can be selected or multiple can (feed post vs game)
  @property()
  @property({ type: Boolean })
  multiPicker: boolean = false;

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
        ${this.multiPicker
          ? html`<multi-song-ui></multi-song-ui>`
          : html`<single-song-ui></single-song-ui>`}
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
