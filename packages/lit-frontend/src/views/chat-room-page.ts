import { customElement, property, state } from "lit/decorators.js";
import { html } from "lit";
import * as App from "../app";
import { io, Socket } from "socket.io-client";

// import styles from "./create-profile-page-styles.ts";

type ProfileLocation = Location & {
  params: { userid: string; edit: string };
  searchParams: Map<string, string>;
};

@customElement("chat-room-page")
export class ChatRoomPage extends App.View {
  //   static styles = styles;
  @property({ attribute: false })
  location?: ProfileLocation;

  @property({ reflect: true })
  get userid() {
    console.log();
    return this.location?.params.userid;
  }

  @property({ reflect: true })
  get edit() {
    return this.location?.params.edit;
  }

  // TODO : Some kind of check to make the new profile? or where do I put the create profile logic
  @property()
  get profile() {
    return this.getFromModel("profile");
  }

  @state()
  private messages: string[] = [];

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

    this.socket.on("message", (message: string) => {
      this.messages = [...this.messages, message];
    });

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
   */
  private sendMessage() {
    const input = this.shadowRoot?.querySelector("input");
    if (input && input.value.trim()) {
      this.socket?.emit("message", input.value.trim());
      input.value = "";
    }
  }

  /**
   *
   * Messages are rendered within the ul.
   */
  render() {
    return html`
      <div>
        <ul>
          ${this.messages.map((message) => html`<li>${message}</li>`)}
        </ul>
        <input placeholder="message" />
        <button @click="${this.sendMessage}">Send</button>
      </div>
    `;
  }
}
