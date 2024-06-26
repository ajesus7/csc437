import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import styles from "./single-song-ui-styles";
import { TrackObject } from "../../../../ts-models/src/index.ts";

@customElement("single-song-ui")
export class SingleSongUiElement extends LitElement {
  static styles = [styles];

  @state()
  topTracks: TrackObject[] = [];

  @state()
  selectedTracks: TrackObject[] = [];

  // * sends event to song picker to clear the specified track list (top or selected)
  _sendClearTracks(topOrSelected: string) {
    console.log("wanting to clear ", topOrSelected, " tracks");
    this.dispatchEvent(
      new CustomEvent("clear-tracks", {
        detail: { topOrSelected: topOrSelected },
        bubbles: true, // This makes sure the event bubbles up through the DOM
        composed: true, // This allows the event to cross the shadow DOM boundary
      })
    );
  }

  render() {
    return html`
      <section class="search-and-selected">
        <section class="query-results">
          <h3 class="search-results">Search Results</h3>
          ${this.topTracks.length > 0
            ? html`<div class="track-box-search-results">
                  ${this.topTracks
                    .slice(0, 5)
                    .map(
                      (track) => html`<track-card .track=${track}></track-card>`
                    )}
                </div>
                <div class="clear-results-section">
                  <button
                    class="clear-results"
                    @click=${() => this._sendClearTracks("top")}
                  >
                    Clear Results
                  </button>
                </div>`
            : html`<div class="track-box-search-results"></div>
                <div class="clear-results-section">
                  <button
                    class="clear-results"
                    @click=${() => this._sendClearTracks("top")}
                  >
                    Clear Results
                  </button>
                </div>`}
        </section>
        <section class="selected-tracks">
          <h3 id="selectedSongHeader">Selected Song</h3>
          <p class="singleSongMessage">
            You may only choose to submit one song at a time. Selecting another
            song will replace any current selection.
          </p>
          <div class="track-box-selected-tracks">
            ${this.selectedTracks.map(
              (track) => html`<track-card .track=${track}></track-card>`
            )}
          </div>
          <div class="clear-selected-tracks-section">
            <button
              class="clear-selected-tracks"
              @click=${() => this._sendClearTracks("selected")}
            >
              Clear Selected Song
            </button>
          </div>
        </section>
      </section>
    `;
  }
}
