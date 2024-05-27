import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { io, Socket } from "socket.io-client";
import styles from "./game-feature-styles.ts";

// * components
import "../song-picker/song-picker.ts";
import "../track-card/track-card.ts";

import { TrackObject } from "../../../../ts-models/src/index.ts";

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

  // * used to allow 'enter' key to send message
  @state()
  private isInputFocused: boolean = false;

  // * list of track objects that is rendered in the playlist section
  @state()
  private playlist: TrackObject[] = [];

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

    this.addEventListener("single-track-submitted", (event: Event) => {
      const customEvent = event as CustomEvent;
      this._handleSongSubmittedByUser(customEvent.detail.track);
    });

    // * Emit user details when connected
    if (this.userDetails) {
      this.socket?.emit("userDetails", this.userDetails);
    }
    // * add message to list of messages on (message send)?
    this.socket.on("message", (message: ChatMessage) => {
      this.messages = [...this.messages, message];
    });

    // * add emitted track to playlist
    this.socket.on("track-submitted", (track: TrackObject) => {
      this.playlist = [...this.playlist, track];
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

    this.removeEventListener(
      "single-track-submitted",
      this._handleSongSubmittedByUser as unknown as EventListener
    );
  }

  _handleSongSubmittedByUser(track: TrackObject) {
    if (track) {
      this.socket?.emit("track-submitted", track);
    }
  }

  // * update input state to be focused
  private handleInputFocus() {
    this.isInputFocused = true;
  }

  // * unfocus input
  private handleInputBlur() {
    this.isInputFocused = false;
  }

  /**
   * If the following conditions are true, send the message:
   * 1. Enter key clicked.
   * 2. The chat message input is focused, user is actively typing and therefore this won't be a misfire for another input.
   * 3. The input is not blank.
   *
   * @param event : event is click a key?
   */
  private handleKeydown(event: KeyboardEvent) {
    const input = this.shadowRoot?.querySelector("input");
    if (event.key === "Enter" && this.isInputFocused && input?.value.trim()) {
      this.sendMessage();
    }
  }

  /**
   * When the user clicks the send button on the frontend, grab the input, send the message using socket.emit.
   * Send the user's name as part of the message (object?) to display accordingly
   */
  private sendMessage() {
    const input = this.shadowRoot?.querySelector("input");
    if (input && input.value.trim() && this.userDetails) {
      const message = {
        text: input.value.trim(),
        sender: this.userDetails.name,
        profilePic: this.userDetails.profilePic,
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
            <ul class="playlist">
               ${this.playlist.map((track) =>
                 track ? html`<track-card .track=${track}></track-card>` : ""
               )}
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
              <input
                placeholder="message"
                @keydown="${this.handleKeydown}"
                @focus="${this.handleInputFocus}"
                @blur="${this.handleInputBlur}"
                tabindex="0"
              />
              <button @click="${this.sendMessage}">Send</button>
            </div>
          </section>
        </section>
      </section>
    `;
  }
}
