import { css } from "lit";

export default css`
  :host {
    display: block;
    font-family: "Arial", sans-serif;
  }

  .game-columns {
    display: flex;
    gap: 1em;
    margin: 2.5em auto;
    padding: 1em;
    max-width: 1500px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    flex-wrap: nowrap; /* Ensure columns do not wrap */
  }

  .left-column,
  .middle-column,
  .right-column {
    flex: 1; /* Ensure all columns have equal flex value */
    background: white;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 1em;
  }

  .left-column {
    max-width: 225px;
  }

  .middle-column {
    flex: 2;
    padding: 1em 2em;
  }

  .right-column {
    flex: 2;
    padding: 1em 2em;
  }

  .game-info,
  .user-section,
  .playlist-section,
  .chat-section {
    margin-bottom: 1em;
  }

  .game-sub-header {
    color: #333;
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 0.2em;
  }

  a {
    text-decoration: none;
  }

  .leave-game {
    color: var(--subtext-color);
    font-size: 0.9em;
  }

  .leave-game:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .user-list {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em;
    background: #f1f1f1;
    border-radius: 8px;
    transition: background 0.3s ease;
  }

  .user:hover {
    background: #e1e1e1;
  }

  .user img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 2px solid #ddd;
    margin-bottom: 0.5em;
  }

  .username {
    font-size: 0.9em;
    color: #555;
  }

  .song-picker-holder {
    margin-top: 2em;
  }

  .playlist-section,
  .chat-section {
    padding: 1em;
    border-radius: 8px;
    background: #f1f1f1;
  }

  .playlist,
  .chat-log {
    background: white;
    border-radius: 8px;
    padding: 0.5em;
    height: 150px;
    overflow-y: auto;
  }

  .chat-message {
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
  }

  .chat-profile-pic {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 0.5em;
  }

  .chat-sender {
    font-weight: bold;
    margin-right: 0.5em;
  }

  .message-input {
    display: flex;
    gap: 0.5em;
    margin-top: 0.5em;
  }

  .message-input input {
    flex: 1;
    padding: 0.5em;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .message-input button {
    padding: 0.5em 1em;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .message-input button:hover {
    background: #0056b3;
  }

  .subtext {
    color: var(--subtext-color);
    font-size: 0.9em;
    margin: 0;
    padding: 0;
  }

  .sub-sub-header {
    font-size: 1em;
    color: var(--text-color);
    margin-bottom: 0.2em;
  }

  .last-recommended-song {
    margin-bottom: 1em;
  }

  h3,
  h4 {
    margin: 0;
    padding: 0;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Ensure it appears above other content */
  }

  .modal {
    background: white;
    padding: 2em;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
  }

  .modal h2 {
    margin-top: 0;
  }

  .modal form {
    display: flex;
    flex-direction: column;
    gap: 1em;
    margin-top: 1em;
  }

  .modal input {
    padding: 0.5em;
    border: 1px solid #ddd;
    border-radius: 4px;
  }

  .modal button {
    margin-top: 1em;
    padding: 0.5em 1em;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .modal button:hover {
    background: #0056b3;
  }

  .song-player-component {
    background: #fff;
    padding: 1em;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    text-align: center;
    margin-top: 2em;
  }

  .song-player-component .song-name {
    font-size: 1.25em;
    font-weight: bold;
    margin-bottom: 0.15em;
    margin: 0;
    padding: 0;
  }

  .song-player-component .artist-name {
    font-size: 1.15em;
    color: #666;
    margin: 0;
    padding: 0;
    margin: 0;
    margin-bottom: 0.25em;
  }

  .song-player-component .album-cover {
    width: 150px;
    height: 150px;
    border-radius: 8px;
    margin: 0.5em 0;
  }

  .song-player-component .recommended-by {
    font-size: 1em;
    color: #333;
  }

  .song-player-component button {
    padding: 0.5em 1em;
    border: none;
    background: #007bff;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.3s ease;
  }

  .song-player-component button:hover {
    background: #0056b3;
  }
`;
