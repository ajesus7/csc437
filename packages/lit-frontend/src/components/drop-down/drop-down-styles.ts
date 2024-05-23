import { css } from "lit";

export default css`
  :host {
    font-family: var(--font);
    font-weight: var(--medium-weight);
    --position-left: 0;
    --position-right: auto;

    display: inline-block;
    position: relative;
    color: var(--text-color);
    margin: 0.8em 6.25em 0em 0em;
  }

  .drop-down {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  #is-shown {
    display: none;
  }

  label {
    cursor: pointer;
  }

  slot[name="menu"] {
    display: none;
    top: 100%;
  }

  .signOut:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  #is-shown:checked ~ slot[name="menu"] {
    display: block;
  }

  /* CSS for slotted elements and default slot content */

  /* this is container of the drop down when expanded */
  ::slotted(ul[slot="menu"]),
  slot[name="menu"] > ul {
    margin: 0;
    font-size: 0.8em;
    width: 15em;
    list-style: none;
    white-space: nowrap;
    margin-left: 0em;
    padding-left: 0em;
    border-radius: var(--border-radius-minus-one);
    box-shadow: var(--box-shadow);
  }

  li {
    padding: 1em 0.5em 1em 1em;
    border-bottom: 0.1em solid rgb(83, 83, 83);
    background: var(--menu-color);
  }

  li:hover {
    background: var(--hover-color);
  }

  .border-top-only {
    border-top-left-radius: var(--default-border-radius);
    border-top-right-radius: var(--default-border-radius);
  }

  /* also needs no bottom border */
  .border-bottom-only {
    border-bottom-left-radius: var(--default-border-radius);
    border-bottom-right-radius: var(--default-border-radius);
    border-bottom: 0;
  }

  .link {
    color: var(--accent-color);
    padding-bottom: 1em;
    padding-top: 1em;
  }

  .dropdown-pfp {
    height: 3em;
    width: 3em;
    position: relative;
    border: 0.1em solid var(--background-color);
    border-radius: 50px;
  }
`;