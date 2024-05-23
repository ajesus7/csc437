import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./favorites-list-styles";

@customElement("favorites-list")
export class FavoritesListElement extends LitElement {
  static styles = [styles];

  @property({ type: Array })
  artists: string[][] = [];

  @property({ type: String })
  listAttributes: string = "";

  render() {
    return html`
      <section class="favorite-list">
        <h3 class="current-favorites-h3">${this.listAttributes}</h3>
        <div class="favorite-section">
          <a href="./artist1.html" class="section-title"
            >${this.artists[0][0]}</a
          >
          <p>${this.artists[0][1]}</p>
        </div>
        <div class="favorite-section">
          <p class="section-title">${this.artists[1][0]}</p>
          <p>${this.artists[1][1]}</p>
        </div>
        <div class="favorite-section">
          <p class="section-title">${this.artists[2][0]}</p>
          <p>${this.artists[2][1]}</p>
        </div>
      </section>
    `;
  }
}
