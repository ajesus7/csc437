import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./color-mode-switch-styles";
@customElement("color-mode-switch")
export class ColorModeSwitchElement extends LitElement {
  static styles = [styles];

  @property({ reflect: true, type: Boolean })
  on: boolean = false;

  render() {
    return html`<label>
      <slot>Light Mode</slot>
      <span class="slider">
        <input type="checkbox" @change=${this._handleChange} />
      </span>
    </label>`;
  }

  //change light mode borders and light mode header
  _handleChange(ev: Event) {
    const target = ev.target as HTMLInputElement;
    const composedEvent = new Event(ev.type, {
      bubbles: true,
      composed: true,
    });

    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");

      //   document.querySelector(drop - down).classList.remove("dark-mode");
      //   document.querySelector(drop - down).classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");

      //   document.querySelector(drop - down).classList.remove("light-mode");
      //   document.querySelector(drop - down).classList.add("dark-mode");
    }

    this.on = target?.checked;
    this.dispatchEvent(composedEvent);
  }
}
