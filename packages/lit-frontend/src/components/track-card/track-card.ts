import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./track-card-styles";

// * Takes in an object that represents a Spotify track
// * Renders a single card with that songs title, artist, image.

// interfaces
import { TrackObject } from "../../../../ts-models/src";

@customElement("track-card")
export class TrackCardElement extends LitElement {
  static styles = [styles];

  @property({ type: Object })
  track?: TrackObject;

  _handleClick() {
    console.log("track clicked!");
    // Emit a custom event with the track data
    this.dispatchEvent(
      new CustomEvent("track-selected", {
        detail: { track: this.track },
        bubbles: true, // This makes sure the event bubbles up through the DOM
        composed: true, // This allows the event to cross the shadow DOM boundary
      })
    );
  }

  render() {
    if (!this.track) {
      // Render a message or empty state if track is undefined
      return html`
        <section class="single-track">
          <p>Track information is not available.</p>
        </section>
      `;
    }

    // Now that we've checked that track is defined, we can safely destructure it
    const { name } = this.track;
    const artist = this.track.artists[0].name;
    const { url } = this.track.album.images[0];
    // Render the track information
    return html`
      <section class="single-track" @click=${() => this._handleClick()}>
        <img src="${url}" alt="Album cover for ${name}" class="track-image" />
        <section class="details">
          <p class="track-name">${name}</p>
          <p class="artist-name">${artist}</p>
        </section>
      </section>
    `;
  }
}
