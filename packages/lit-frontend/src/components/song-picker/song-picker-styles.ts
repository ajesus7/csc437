import { css } from "lit";

export default css`
  /* Search Form */
  .search-form input[type="text"] {
    width: calc(
      100% - 130px
    ); /* Adjust based on button width to fit on one line */
    padding: 10px 0px 10px 14px;
    margin-right: 5px; /* Space between input and button */
    border: 1px solid var(--section-border-color);
    background-color: var(blue);
    font-weight: 300;
    color: var(--text-color);
    border-radius: 50px;
  }
  .search-form {
    margin-bottom: 15px;
  }

  .search-form button,
  button.recommend-songs {
    padding: 2px 20px 2px 20px;
    margin-left: 10px;
    background-color: var(--button-color);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .search-form button:hover {
    background-color: var(--button-hover-color);
  }
  .search-bar-form {
    display: flex;
    flex-direction: row;
  }
  button.recommend-songs {
    padding: 6px 20px;
    margin-left: 1em;
  }
  .search-and-selected {
    display: flex;
    flex-direction: row;
  }

  .selected-tracks,
  .query-results {
    width: 50%;
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
    height: 16.95em; /* overflows if smaller */
    margin-top: 10px;
    overflow: auto; /* Allow scrolling if content exceeds container size */
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
  /* Styling for the entire expanded content section */
  .expanded-content {
    padding-top: 20px; /* Space above the content */
  }
  .comment-message-form {
    display: flex;
    flex-direction: row;
    width: 99%;
  }
  .expanded-window {
    background: var(--menu-color);
    border-left: 2px solid var(--sub-menu-color);
    margin-left: 1.51em;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 0.3em 2em 1em 2em;
  }

  #input-comment {
    border: none;
    background: var(--background-color);
    border: 1px solid var(--section-border-color);
    width: 92%;
    height: 2em;
    padding: 7px;
    border-radius: 4px;
  }
`;
