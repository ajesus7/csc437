import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("default-card")
export class DefaultCardElement extends LitElement {
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

  static styles = css`
    .user-friend {
      border: 0.9px solid var(--white-color);
      width: 120px;
      height: 120px;
      border-radius: var(--box-border-radius);
      font-weight: var(--bold-weight);
    }

    .user-friend p:first-child,
    .user-friend a:first-child {
      padding-top: 2.7em;
      margin: 0;
    }

    .user-friend a,
    .user-friend p {
      padding-left: 1em;
      margin: 0;
    }

    .user-friend a {
      display: flex;
      padding-left: 0.9em;
      color: var(--accent-color);
    }

    p.music-taste {
      padding-left: 1.2em;
      padding-top: 0.1em;
      font-weight: var(--light-weight);
      font-size: var(--small-size);
    }
  `;
}
