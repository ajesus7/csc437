// Import lit package components
import { html, LitElement, css, CSSResult, TemplateResult } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("test-page")
export class TestPage extends LitElement {
  // Optionally, define static styles for your component
  static styles: CSSResult = css`
    h1 {
      color: blue;
    }
  `;

  // The render method returns a TemplateResult
  render(): TemplateResult {
    return html`<h1>This is a Test Page</h1>`;
  }
}
