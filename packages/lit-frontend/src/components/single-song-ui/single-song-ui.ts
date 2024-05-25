import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import styles from "./single-song-ui-styles";
import { TrackObject } from "../../../../ts-models/src/index.ts";

import {
  clearTopTracks,
  clearSelectedTracks,
} from "../helpers/spotifyQueryHelper.ts";

@customElement("single-song-ui")
export class SingleSongUiElement extends LitElement {
  static styles = [styles];

  @state()
  topTracks: TrackObject[] = [];

  @state()
  selectedTracks: TrackObject[] = [];

  _clearTopTracks() {
    clearTopTracks(this);
  }

  _clearSelectedTracks() {
    clearSelectedTracks(this);
  }

  render() {
    return html`
      <section class="search-and-selected">
        <section class="query-results">
          <h3 class="search-results">SINGLE Search Results</h3>
          ${this.topTracks.length > 0
            ? html`<div class="track-box-search-results">
                  ${this.topTracks
                    .slice(0, 5)
                    .map(
                      (track) => html`<track-card .track=${track}></track-card>`
                    )}
                </div>
                <div class="clear-results-section">
                  <button class="clear-results" @click=${this._clearTopTracks}>
                    Clear Results
                  </button>
                </div>`
            : html`<div class="track-box-search-results"></div>
                <div class="clear-results-section">
                  <button class="clear-results" @click=${this._clearTopTracks}>
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
    `;
  }
}
