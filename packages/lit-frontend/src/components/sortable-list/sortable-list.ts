import { html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ToggleSwitchElement } from "../toggle-switch/toggle-switch";
import styles from "./sortable-list-styles";

@customElement("sortable-list")
export class SortableListElement extends LitElement {
  static styles = [styles];

  @property({ type: Array })
  names: string[][] = [];

  @property({ type: Array })
  namesOriginalOrder: string[][] = [];

  @property({ type: Array })
  listAttributes: string[] = [];

  @state()
  sort_state = "unsorted";

  constructor() {
    super();
    this.names = [];
    // Create a deep copy of the names array for namesOriginalOrder
    this.namesOriginalOrder = [...this.names];
    this.listAttributes = [];
  }

  private initializedNamesOriginalOrder = false;

  _onStateChanged(event: Event) {
    const target = event.target as ToggleSwitchElement;

    //if namesOriginalOrder hasn't been set to Names yet, will only run once
    if (!this.initializedNamesOriginalOrder) {
      this.namesOriginalOrder = [...this.names];
      this.initializedNamesOriginalOrder = true;
    }

    //do the sorting depending on current sort state
    if (this.sort_state == "unsorted") {
      //sort based on name attribute
      this.names.sort((a, b) => {
        // access name attribute of list, convert to uppercase for ASCII comparison
        const nameA = a[0].toUpperCase();
        const nameB = b[0].toUpperCase();

        if (nameA < nameB) {
          return -1; // Name A should come before Name B
        } else if (nameA > nameB) {
          return 1; // Name B should come before Name A
        } else {
          return 0; // Names are equal, no change in order
        }
      });
    } else if (this.sort_state == "sorted") {
      this.names = [...this.namesOriginalOrder];
    }
    this.sort_state = target.filteredState; //update the state
  }

  render() {
    return html`
      <section class="friends-list">
        <section class="subsection-header-line">
          <section class="name-and-icon">
            <h2>${this.listAttributes[0]}</h2>
            <svg class="icon">
              <use href="/icons/user-icons.svg#icon-friends-list" />
            </svg>
          </section>
          <toggle-switch
            filteredState=${this.sort_state}
            @state-changed=${this._onStateChanged}
          ></toggle-switch>
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
                ></default-card>
              </slot>`
          )}
        </section>
      </section>
    `;
  }
}
