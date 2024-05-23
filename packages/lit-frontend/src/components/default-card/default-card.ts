import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./default-card-styles";

@customElement("default-card")
export class DefaultCardElement extends LitElement {
  static styles = [styles];

  @property()
  title: string = "";

  @property()
  description: string = "";

  //how to initialize a "default" number without null?
  @property()
  user_id: number = 0;

  constructor() {
    super();
    this.title = "";
    this.description = "";
  }

  render() {
    return html`<div class="user-friend">
      <a href="./${this.user_id}">${this.title}</a>
      <p class="music-taste">${this.description}</p>
    </div> `;
  }
}
