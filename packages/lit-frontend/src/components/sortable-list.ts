import { css, html, LitElement } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { ToggleSwitchElement } from "./toggle-switch";

@customElement("sortable-list")
export class SortableListElement extends LitElement {
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

  //change the property definition to take a list of lists, add another loop within the above loop?, or maybe do i or j?
  static styles = css`
    svg {
      height: 1.4em;
      width: 1.4em;
    }

    .subsection-header-line {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      height: 2em;
      width: 36.5em;
    }
    
    .subsection-header-line h2 {
      margin-right: 0.35em;
      font-weight: var(--medium-weight);
    }

    .friends-list {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: var(--component-inside-padding);
      margin-bottom: 10px;
    }


    .name-and-icon {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .profile-section-description {
      font-size: 0.75em;
      color: var(--accent-color);
    }

    .user-friend {
      border: 0.9px solid var(--white-color);
      width: 120px;
      height: 120px;
      border-radius: var(--box-border-radius);
      font-weight: var(--bold-weight);
    }

    .friends-list-friends {
      display: flex;
      gap: 1.25em;
      margin-top: 1em;
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

    /*these may not be exactly aligned to above text lol */
    p.music-taste {
      padding-left: 1.2em;
      padding-top: 0.1em;
      font-weight: var(--light-weight);
      font-size: var(--small-size);
    }
  `;
}
