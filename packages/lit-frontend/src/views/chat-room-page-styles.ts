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
  }

  .left-column,
  .middle-column,
  .right-column {
    flex: 1;
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
    margin-bottom: 0.5em;
  }

  .leave-game {
    color: #007bff;
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
`;
