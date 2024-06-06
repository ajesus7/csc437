import { css } from "lit";

export default css`
  .search-and-selected {
    display: flex;
    flex-direction: column;
  }
  .selected-tracks,
  .query-results {
    width: 100%;
  }
  .query-results h3,
  .selected-tracks h3 {
    color: var(--text-color);
    font-size: 1.1em;
    font-weight: 300;
    margin: 0;
    margin-top: 6px;
  }
  .track-box-selected-tracks,
  .track-box-search-results {
    background: var(--sub-menu-color);
    border-radius: 12px;
    padding: 10px;
    width: 92%;
    height: 9em; /* overflows if smaller */
    margin-top: 10px;
    overflow: auto;
  }

  /* no overflow (scroll bar) because it is a single song */
  .track-box-selected-tracks {
    overflow: visible;
  }

  /* update height to reflect only one song being chosen*/
  .track-box-selected-tracks {
    height: 3em;
  }
  .clear-results-section button,
  .clear-selected-tracks-section button {
    text-decoration: underline;
    cursor: pointer;
    border: none;
    color: var(--subtext-color);
  }

  .clear-results:hover,
  .clear-selected-tracks:hover {
    color: var(--text-color);
  }
  .expanded-content {
    padding-top: 20px; /* Space above the content */
  }

  .singleSongMessage {
    color: var(--subtext-color);
    font-size: 0.8em;
    margin: 0.25em 0 0.6em 0;
    padding: 0;
  }

  /* FIX: id to override other header styling, was too lazy to fix cascade issue*/
  #selectedSongHeader {
    margin-top: 1em;
  }
`;
