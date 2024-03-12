import { customElement, property } from "lit/decorators.js";
import { html } from "lit";
import * as App from "../app";

@customElement("home-page")
export class HomePageElement extends App.View {
  //TODO placeholder property
  @property()
  title: string = "";

  render() {
    return html` <p>hi</p> `;
  }
}
