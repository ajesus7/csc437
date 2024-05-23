import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./toggle-switch-styles";

@customElement("toggle-switch")
export class ToggleSwitchElement extends LitElement {
  static styles = [styles];

  @property({ reflect: true, type: Boolean })
  on: boolean = false;

  @property()
  filteredState: string = "";

  render() {
    return html`<label>
      <slot class="label-title">sort alphabetically by name</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._onInput} />
      </span>
    </label>`;
  }

  private _onInput() {
    if (this.filteredState == "unsorted") {
      this.filteredState = "sorted";
    } else {
      this.filteredState = "unsorted";
    }

    this.dispatchEvent(new Event("state-changed"));
  }
}
