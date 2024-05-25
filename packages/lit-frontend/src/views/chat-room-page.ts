import { customElement, property, state } from "lit/decorators.js";
import { html } from "lit";
import * as App from "../app";
import { io, Socket } from "socket.io-client";

import styles from "./chat-room-page-styles.ts";
import "../components/song-picker/song-picker.ts";
type Profile = {
  name: string;
  profileImage: string;
  profileDescription?: string;
  bio?: string;
};

type ProfileLocation = Location & {
  params: { userid: string; edit: string };
  searchParams: Map<string, string>;
};

@customElement("chat-room-page")
export class ChatRoomPage extends App.View {
  static styles = styles;

  // * the url?
  @property({ attribute: false })
  location?: ProfileLocation;

  // * the userid from the url parameter
  @property({ reflect: true })
  get userid() {
    console.log();
    return this.location?.params.userid;
  }

  // ! this does not work right now?
  @property()
  get profile() {
    return this.getFromModel("profile");
  }

  // * the user info retrieved from the url userid that are needed for chatroom (image, name)
  @state()
  private userDetails: { name: string; profilePic: string } | null = null;

  // * list of messages sent in chat room
  @state()
  private messages: string[] = [];

  // * list of users connected to chatRoom
  @state()
  private users: Array<{ name: string; profilePic: string }> = [];

  private socket?: Socket;

  async _getUserFromDatabase(userid: string): Promise<Profile> {
    console.log("Getting user with this id: ", userid);

    const SERVER_URL = import.meta.env.VITE_SERVER_URL;
    try {
      const response = await fetch(`${SERVER_URL}/profile/${userid}`);

      if (!response.ok) {
        throw new Error(`Error fetching profile: ${response.statusText}`);
      }

      const profile: Profile = await response.json();
      console.log("User profile data received: ", profile);
      return profile;
    } catch (error) {
      console.error("Error fetching user profile: ", error);
      throw error;
    }
  }

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

    // TODO : Currently getting profile info through url, not model
    // ! A user could play a game as someone else as set up currently

    // * check if userid exists in url, get profile info based on userid, emit the userdetails to the server
    if (this.location && this.location.params && this.location.params.userid) {
      this._getUserFromDatabase(this.location.params.userid)
        .then((user) => {
          this.userDetails = {
            name: user.name || "Unknown",
            profilePic: user.profileImage || "defaultProfileImage",
          };
          // * Emit user details when connected
          this.socket?.emit("userDetails", this.userDetails);
        })
        .catch((error) => {
          console.error("Failed to fetch user profile:", error);
        });
    } else {
      console.error("User ID is not available in location parameters");
    }

    // * add message to list of messages on (message send)?
    this.socket.on("message", (message: string) => {
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
              ${this.messages.map((message) => html`<li>${message}</li>`)}
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
