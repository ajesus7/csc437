import { css } from "lit";

export default css`
  .single-comment {
    display: flex;
    flex-direction: row;
    background-color: var(--background-color);
    color: var(--text-color);
    padding: 15px;
    border-radius: var(--default-border-radius);
    margin-bottom: 10px;
    box-shadow: var(--box-shadow);
  }

  .comment-left,
  .comment-right {
    flex: 1;
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
  }

  .comment-time {
    font-size: var(--small-size);
    color: var(--subtext-color);
  }

  .comment-message {
    margin-top: 1em;
    font-size: 1em;
  }

  .track-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
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

  .track-artist {
    font-size: 0.875em;
    color: var(--subtext-color);
  }

  .track-image {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    object-fit: cover;
  }
`;
