import { css } from "lit";

export default css`
  .single-comment {
    display: flex;
    flex-direction: row;
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 6px;
    width: 23em;
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

  .details {
    padding: 5px;
  }

  .comment-name {
    font-weight: 600;
    margin: 0;
    padding: 0;
    margin-right: 0.5em;
    font-size: 0.8em;
  }

  .comment-time {
    font-size: var(--small-size);
    color: var(--subtext-color);
    margin: 0;
    padding: 0;
  }

  .comment-message {
    font-size: 0.8em;
    margin: 0;
    padding: 0;
  }

  .track-info {
    display: flex;
    flex-direction: row;
    align-items: center;
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
