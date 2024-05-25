import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import styles from "./song-picker-styles";
import Post from "../../models/post.ts";

import {
  submitCommentToDatabase,
  handleSubmit,
  authenticate,
  fetchTopTracks,
  searchSpotify,
  selectTrack,
  clearSelectedTracks,
  clearTopTracks,
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

  @property({ type: Object })
  post?: Post;

  @state()
  expandedClass: String = "feed-single-post";
  static styles = [styles];

  // * passed in by parent, decides if one song can be selected or multiple can (feed post vs game)
  @property({ type: Boolean })
  multiPicker: boolean = false;

  async _authenticate() {
    await authenticate(this);
  }

  // * this function holds the comment submit logic
  async _submitCommentToDatabase(ev: Event) {
    await submitCommentToDatabase(ev, this);
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

  // * pass in the multiPicker state: if false (single song ui), only 1 song may be selected at a time
  _selectTrack(track: TrackObject, multiPicker: boolean) {
    selectTrack(this, track, multiPicker);
  }

  async fetchTopTracks(artistId: string) {
    await fetchTopTracks(this, artistId);
  }

  async searchSpotify(): Promise<void> {
    await searchSpotify(this);
  }

  // * defined in song-picker so that when new top songs are requested, and state update passes
  // * topTracks/selectedSongs back down to multi/single song picker, the selectedSongs are remembered
  constructor() {
    super();
    // ! deals with adding tracks to the selected tracks section when a click event bubbles up
    this.addEventListener("track-selected", (event: Event) => {
      const customEvent = event as CustomEvent;
      this._selectTrack(customEvent.detail.track, this.multiPicker);
    });

    // * clear the top tracks if event is passed with message, "top", otherwise clear selected tracks
    this.addEventListener("clear-tracks", (event: Event) => {
      console.log("Within Clear Tracks Listener");
      const customEvent = event as CustomEvent;
      if (customEvent.detail.topOrSelected === "top") {
        console.log("Within Top, executing clear top tracks");
        this._clearTopTracks();
      } else {
        console.log("Within Selected, executing clear selected tracks");
        this._clearSelectedTracks();
      }
    });
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
          ? html`<multi-song-ui
              .selectedTracks=${this.selectedTracks}
              .topTracks=${this.topTracks}
            ></multi-song-ui>`
          : html`<single-song-ui
              .selectedTracks=${this.selectedTracks}
              .topTracks=${this.topTracks}
            ></single-song-ui>`}
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
              @submit=${this._submitCommentToDatabase}
            >
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
