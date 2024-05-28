import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import styles from "./general-list-styles";

@customElement("general-list")
export class GeneralListElements extends LitElement {
  static styles = [styles];

  @property({ type: Array })
  names: string[][] = [];

  @property({ type: Array })
  listAttributes: string[] = [];

  @state()
  sort_state = "unsorted";

  constructor() {
    super();
    this.names = [];
    this.listAttributes = [];
  }

  //add a state of filtered, not filtered whatever
  //check what state is, change the list based on state
  //listener to see how user changes the state
  render() {
    return html`
      <section class="friends-list">
        <section class="subsection-header-line">
          <h2>${this.listAttributes[0]}</h2>
          <svg class="icon">
            <use href="/icons/user-icons.svg#icon-friends-list" />
          </svg>
        </section>
        <a href="./friends.html" class="profile-section-description"
          >... see all ${this.listAttributes[1]}</a
        >
        <section class="friends-list-friends">
          ${this.names.map(
            (i) =>
              html`<slot
                ><default-card
                  title=${i[0]}
                  description=${i[1]}
                  user_id=${i[2]}
                ></default-card
              ></slot>`
          )}
        </section>
      </section>
    `;
  }
}
