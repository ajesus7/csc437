import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { io, Socket } from "socket.io-client";

import styles from "./game-feature-styles.ts";
import "../song-picker/song-picker.ts";

interface ChatMessage {
  text: string;
  sender: string;
  profilePic: string;
}

//TODO : Document this component.

/**
 *
 */

@customElement("game-feature")
export class GameFeatureElement extends LitElement {
  static styles = styles;

  // * the user info retrieved from the url userid that are needed for chatroom (image, name)
  @state()
  private userDetails: { name: string; profilePic: string } | null = null;

  // * list of messages sent in chat room
  @state()
  private messages: ChatMessage[] = [];

  // * list of users connected to chatRoom
  @state()
  private users: Array<{ name: string; profilePic: string }> = [];

  private socket?: Socket;

  /**
   * On first render, define the socket, then:
   * 1. when a message is sent, add it to messages list.
   * 2. console log when a user connects or disconnects
   *
   * Close connection when done (disconnectedCallback)
   *
   */
  connectedCallback() {
    super.connectedCallback();
    this.socket = io("ws://localhost:3000");

    // * Emit user details when connected
    if (this.userDetails) {
      this.socket?.emit("userDetails", this.userDetails);
    }
    // * add message to list of messages on (message send)?
    this.socket.on("message", (message: ChatMessage) => {
      this.messages = [...this.messages, message];
    });

    // * add user to list of users on (connect)?
    this.socket.on(
      "users",
      (users: Array<{ name: string; profilePic: string }>) => {
        this.users = users;
      }
    );

    this.socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    this.socket.on("disconnect", () => {
      console.log("Disconnected from WebSocket server");
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.socket) {
      this.socket.disconnect();
    }
  }

  /**
   * When the user clicks the send button on the frontend, grab the input, send the message using socket.emit.
   * Send the user's name as part of the message (object?) to display accordingly
   */
  private sendMessage() {
    const input = this.shadowRoot?.querySelector("input");
    console.log("within send message");
    console.log("user details: ", this.userDetails);
    if (input && input.value.trim() && this.userDetails) {
      console.log("everything exists within send message");
      const message = {
        text: input.value.trim(),
        sender: this.userDetails.name,
      };
      this.socket?.emit("message", message);
      input.value = "";
    }
  }

  /**
   *
   * Users and messages are rendered in their respective containers.
   * The sendMessage function is called when the user clicks the Send button
   */
  render() {
    return html`
      <section class="game-columns">
        <section class="left-column">
          <section class="game-info">
            <h3 class="game-sub-header">Round #</h3>
            <p class="leave-game">Leave Game</p>
          </section>
          <section class="user-section">
            <h3 class="game-sub-header">Player List</h3>
            <div class="user-list">
              ${this.users.map(
                (user) => html`
                  <div class="user">
                    <img
                      src="/images/${user.profilePic}.png"
                      alt="${user.name}"
                    />
                    <span class="username">${user.name}</span>
                  </div>
                `
              )}
            </div>
          </section>
        </section>
        <section class="middle-column">
          <div class="song-picker-holder">
            <h3 class="game-sub-header">Pick a Song.</h3>
            <song-picker .multiPicker=${false}></song-picker>
          </div>
        </section>
        <section class="right-column">
          <section class="playlist-section">
            <h3 class="game-sub-header">Game Playlist</h3>
            <ul class="playlist"></ul>
          </section>
          <section class="chat-section">
            <h3 class="game-sub-header">Chat Room</h3>
            <ul class="chat-log">
              ${this.messages.map(
                (message) => html`
                  <li class="chat-message">
                    <img
                      src="/images/${message.profilePic}.png"
                      alt="${message.sender}"
                      class="chat-profile-pic"
                    />
                    <span class="chat-sender">${message.sender}:</span>
                    <span class="chat-text">${message.text}</span>
                  </li>
                `
              )}
            </ul>
            <div class="message-input">
              <input placeholder="message" />
              <button @click="${this.sendMessage}">Send</button>
            </div>
          </section>
        </section>
      </section>
    `;
  }
}
