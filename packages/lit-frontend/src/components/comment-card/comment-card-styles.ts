import { css } from "lit";

export default css`
  .single-comment {
    display: flex;
    flex-direction: row;
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 6px;
    border-radius: var(--default-border-radius);
    margin-bottom: 10px;
    box-shadow: var(--box-shadow);
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }

  .comment-left,
  .comment-right {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .details-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.5em;
  }

  .comment-name {
    font-weight: 600;
    margin-right: 0.5em;
    font-size: 0.9em;
  }

  .comment-time {
    font-size: var(--small-size);
    color: var(--subtext-color);
  }

  .comment-message {
    margin-top: 0.5em;
    font-size: 0.9em;
  }

  .track-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    background-color: var(--track-background-color);
    padding: 5px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
  }

  .track-info:hover {
    background-color: var(--track-hover-background-color);
  }

  .track-name-and-artist {
    display: flex;
    flex-direction: column;
    align-content: center;
    margin-left: 10px;
  }

  .track-name,
  .track-artist {
    margin: 0;
  }

  .track-name {
    font-size: 0.9em;
    font-weight: 500;
  }

  .track-artist {
    font-size: 0.8em;
    color: var(--subtext-color);
  }

  .track-image {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    object-fit: cover;
  }
`;
