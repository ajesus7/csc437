import { customElement } from "lit/decorators.js";
import { html, css } from "lit";
import * as App from "../app";

@customElement("home-page")
export class HomePageElement extends App.View {
  render() {
    return html` <section>
    <p>hello</p>
    </section `;
  }

  static styles = [
    css`
      :host {
        display: contents;
      }
    `,
  ];
}
