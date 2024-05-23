import { css } from "lit";

export default css`
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
    border: 0.9px solid var(--section-border-color);
    width: 120px;
    height: 120px;
    border-radius: var(--default-border-radius);
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
