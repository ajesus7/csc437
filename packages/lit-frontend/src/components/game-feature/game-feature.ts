import { html, LitElement } from "lit";
import { customElement, state, property } from "lit/decorators.js";
import { io, Socket } from "socket.io-client";
import styles from "./game-feature-styles.ts";

// * components
import "../song-picker/song-picker.ts";
import "../track-card/track-card.ts";
import "../voting-form/voting-form.ts";

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

  @state()
  private submittedTrackList: TrackObject[] = [];

  @property()
  private chosenVibe: string = "fricken hype";

  private socket?: Socket;

  @state()
  private isPlaying: boolean = false;

  // Add state for loading bar
  @state()
  private isLoading: boolean = false;

  @state()
  private loadingProgress: number = 0;

  private audio: HTMLAudioElement | null = null;

  @state()
  private numberYes: number = 0;

  @state()
  private numberNo: number = 0;

  @state()
  private hasUserVoted: boolean = false;

  @state()
  private userWhoIsChoosingSong: boolean = false;

  @state()
  private idOfUserChoosingSong: string = "";

  @state()
  private lastUserToRecommendASong: string = "";

  @state()
  private notificationsList: string[] = [];

  @state()
  private currentSong: {
    name: string;
    artist: string;
    albumCover: string;
    recommendedBy: string;
    previewURL: string;
  } | null = null;

  @state()
  private currentRound: number = 1;

  @state()
  private roundsForThisGame: number = 0;

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

    this.addEventListener("voting-decision-made", (event: Event) => {
      const customEvent = event as CustomEvent;
      this._handleMajorityReached(customEvent.detail.decision);
    });

    this.addEventListener("single-vote-made", (event: Event) => {
      const customEvent = event as CustomEvent;
      this._handleSingleVoteMade(customEvent.detail.vote);
    });

    this.addEventListener("has-user-voted", (event: Event) => {
      const customEvent = event as CustomEvent;
      const userName = this.userDetails?.name || "Unknown";
      this.socket?.emit("has-user-voted", {
        userName,
        voteState: customEvent.detail.voteState,
      });
    });

    // * Emit user details when connected
    if (this.userDetails) {
      this.socket?.emit("userDetails", this.userDetails);
    }

    // * add message to list of messages on (message send)?
    this.socket.on("message", (message: ChatMessage) => {
      this.messages = [...this.messages, message];
    });

    // * receive the notification that was emitted, add it to notificationsList
    this.socket.on("notification", (notification: string) => {
      this.notificationsList = [...this.notificationsList, notification];
    });

    this.socket.on("has-user-voted", ({ userName, voteState }) => {
      console.log("within front end has-user-voted, voteState:", voteState);

      // * the user who voted is this user, so update their voting state
      if (this.userDetails?.name == userName) {
        console.log("USERNAMES MATCH!");
        this.hasUserVoted = voteState;
      }
    });

    // * add emitted track to playlist
    this.socket.on("track-submitted", (track: TrackObject) => {
      this.submittedTrackList = [...this.submittedTrackList, track];
    });

    // *
    this.socket.on("is-loading", (isLoading: boolean) => {
      this.isLoading = isLoading;
      this.startGameLoading();
    });

    // * send selected vibe
    this.socket.on("vibe-submitted", (chosenVibe: string) => {
      this.chosenVibe = chosenVibe;
    });

    // * handle voting decision made
    this.socket.on("voting-decision-made", (decision: string) => {
      if (decision.toUpperCase() === "YES") {
        const track = this.submittedTrackList.pop();
        if (track) {
          this.playlist = [...this.playlist, track];
        } else {
          console.error("No track to add to the playlist");
        }
      }
      this.lastUserToRecommendASong = this.idOfUserChoosingSong;
      this.startNextRoundOfGame();
    });

    // *
    this.socket.on("single-vote-made", (vote: string) => {
      if (vote.toUpperCase() === "YES") {
        this.numberYes += 1;
      } else {
        this.numberNo += 1;
      }
    });

    // * send current song
    this.socket.on("current-song", (currentSong: any) => {
      this.currentSong = currentSong;
    });

    this.socket.on("user-chosen-to-pick", (userName: string) => {
      console.log(
        "user-chosen-to-pick within frontend websocket receiver: ",
        userName
      );
      console.log("userName", this.userDetails?.name);
      if (userName === this.userDetails?.name) {
        this.userWhoIsChoosingSong = true;
      }
      this.idOfUserChoosingSong = userName;
    });

    // * add user to list of users on connect
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
    this.removeEventListener(
      "single-vote-made",
      this._handleSingleVoteMade as unknown as EventListener
    );
    this.removeEventListener(
      "voting-decision-made",
      this._handleMajorityReached as unknown as EventListener
    );
  }

  _handleMajorityReached(decision: string) {
    console.log("decision within majority reached event listener: ", decision);
    this.socket?.emit("voting-decision-made", decision);
  }

  _handleSingleVoteMade(vote: string) {
    console.log("single vote made: ", vote);
    this.socket?.emit("single-vote-made", vote);
  }

  _handleSongSubmittedByUser(track: TrackObject) {
    if (track) {
      console.log("submitting track from the front end");
      this.socket?.emit("track-submitted", track);
      const currentSong = {
        name: track.name,
        artist: track.artists[0].name,
        albumCover: track.album.images[0].url,
        previewURL: track.preview_url,
        recommendedBy: this.userDetails?.name || "Unknown",
      };
      this.currentSong = currentSong;
      console.log("emitting song from the frontend, ", currentSong);
      this.socket?.emit("current-song", currentSong);
      // * user has chosen, so they will no longer see the song menu
      this.userWhoIsChoosingSong = false;
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

  private removeMostRecentNotification() {
    this.notificationsList.pop();
    this.requestUpdate();
  }

  // TODO : Leaving game should do something to game state with player, not just navigate user to home

  /**
   *
   * Users and messages are rendered in their respective containers.
   * The sendMessage function is called when the user clicks the Send button
   */
  render() {
    // TODO : remove this at some point
    return html`
      <section class="game-columns">
        <section class="left-column">
          <section class="game-info">
            <h3 class="game-sub-header">
              Round ${this.currentRound}/${this.roundsForThisGame}
            </h3>
            <a href="/app/home" class="leave-game">Leave Game</a>
          </section>
          <section class="last-recommended-song">
            <h4 class="sub-sub-header">Last Song Recommended By:</h4>
            <p class="subtext">${this.lastUserToRecommendASong}</p>
          </section>
          <p class="subtext">The vibe: ${this.chosenVibe}</p>
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
          <div class="notification-box">
            <ul class="notification-list">
              ${this.notificationsList.length > 0
                ? html`
                    <div class="notification-item">
                      ${this.notificationsList[
                        this.notificationsList.length - 1
                      ]}
                      <button @click="${this.removeMostRecentNotification}">
                        X
                      </button>
                    </div>
                  `
                : html``}
            </ul>
          </div>

          ${this.userWhoIsChoosingSong
            ? html`<div class="song-picker-holder">
                <h3 class="game-sub-header">Pick a Song.</h3>
                <song-picker .multiPicker=${false}></song-picker>
              </div>`
            : ``}
          ${this.currentSong
            ? html`
                <div class="song-player-component">
                  <h3 class="song-name">${this.currentSong?.name}</h3>
                  <p class="artist-name">${this.currentSong?.artist}</p>
                  <img
                    src="${this.currentSong?.albumCover}"
                    alt="Album cover"
                    class="album-cover"
                  />
                  <p class="recommended-by">
                    Recommended by: ${this.currentSong?.recommendedBy}
                  </p>
                  <button @click="${this.playSong}">
                    ${this.isPlaying ? "Stop Song" : "Play"}
                  </button>
                  <audio></audio>
                </div>
              `
            : ``}
          <voting-form
            .numberYes=${this.numberYes}
            .numberNo=${this.numberNo}
            .numberOfUsers=${this.users.length}
            .hasUserVoted=${this.hasUserVoted}
          ></voting-form>
        </section>
        <section class="right-column">
          <section class="playlist-section">
            <h3 class="game-sub-header">Game Playlist</h3>
            <ul class="playlist">
              ${this.playlist.map((track) =>
                track ? html`<track-card .track=${track}></track-card>` : ""
              )}
            </ul>
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
      ${this.chosenVibe && this.loadingProgress == 100
        ? ""
        : this.renderVibeModal()}
    `;
  }

  private renderVibeModal() {
    return html`
      <div class="modal-overlay">
        <section class="modal">
          <div class="modal-content">
            <img
              src="images/mtv_logo.png"
              alt="Match the Vibe Logo."
              class="logo"
            />
            <h3 class="game-sub-header">Connected Players.</h3>
            <div class="user-list-within-modal">
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
            <p>Select a vibe for the game.</p>
            ${!this.chosenVibe
              ? html`<form @submit="${this.handleVibeSubmit}">
                  <input
                    type="text"
                    name="vibe"
                    placeholder="Enter your vibe"
                    required
                  />
                  <button type="submit">Submit</button>
                </form>`
              : html`<p class="subtext">
                  the vibe has been set as: ${this.chosenVibe}
                </p>`}
            <button
              class="start-game"
              @click="${this.submitIsLoadingToServer}"
              ?disabled="${!this.chosenVibe}"
            >
              Start Game
            </button>
            ${this.isLoading
              ? html`
                  <p class="subtext">the game is starting soon:</p>
                  <div class="loading-bar-container">
                    <div
                      class="loading-bar"
                      style="width: ${this.loadingProgress}%"
                    ></div>
                  </div>
                `
              : ""}
            <a href="/app/home" class="return-home">Return to Home</a>
          </div>
        </section>
      </div>
    `;
  }

  private submitIsLoadingToServer() {
    this.isLoading = true;
    this.socket?.emit("is-loading", this.isLoading);
  }

  // Add the startGame method
  private startGameLoading() {
    this.isLoading = true;
    this.loadingProgress = 0;
    const intervalDuration = 10; // ! was 1000
    const stepIncrement = 20; // Each step increments by 10%

    const interval = setInterval(() => {
      console.log("within interval:");
      this.loadingProgress += stepIncrement;
      if (this.loadingProgress >= 100) {
        clearInterval(interval);
        this.loadingProgress = 100;
        this.isLoading = false;
        this.startGameLogic();
      }
    }, intervalDuration);
  }

  // TODO : this isn't random, it just chooses the first user, if it were random, and both users browsers were calculating the random, there is a chance that two users could be picked, correct? This calculation may be needed to be done on the server side to ensure it only happens once. But for now, it is fine.
  private startGameLogic() {
    console.log("startGameLogic Ran!");
    if (this.users) {
      const randomUser = this.users[0];
      console.log("randomUser", randomUser);
      this.socket?.emit("user-chosen-to-pick", randomUser.name);
      this.socket?.emit(
        "notification",
        `${randomUser.name} is picking a song!`
      );
      this.roundsForThisGame = this.users.length * 2;
    }
  }

  private handleVibeSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form.elements.namedItem("vibe") as HTMLInputElement;
    this.chosenVibe = input.value;
    this.socket?.emit("vibe-submitted", this.chosenVibe); // Emit the vibe-submitted event
    this.closeModal();
    this.requestUpdate();
  }

  private startNextRoundOfGame() {
    console.log("Starting next round logic!");

    // Check if there are more rounds to be played
    if (this.currentRound < this.roundsForThisGame) {
      this.currentRound += 1;
      this.numberNo = 0;
      this.numberYes = 0;
      this.hasUserVoted = false;
      console.log("user voted set to false");

      // Find the next user index
      const currentIndex = this.users.findIndex(
        (user) => user.name === this.idOfUserChoosingSong
      );
      const nextIndex = (currentIndex + 1) % this.users.length;
      const nextUser = this.users[nextIndex];

      const usersName = this.userDetails?.name;
      // update the user voted
      this.socket?.emit("has-user-voted", {
        usersName,
        voteState: false,
      });

      // Set the next user to choose a song
      this.idOfUserChoosingSong = nextUser.name;
      this.socket?.emit("user-chosen-to-pick", nextUser.name);
    } else {
      console.log("The game is over!");
      this.numberNo = 0;
      this.numberYes = 0;

      // Optionally, render a "game over" popup dialog
      this.showGameOverDialog();
    }
  }

  // TODO : Make this a modal similar to the lobby that displays the game playlist.
  private showGameOverDialog() {
    // Implement the logic to show a "game over" popup dialog
    alert("Game Over! Thanks for playing.");
  }

  private closeModal() {
    if (this.chosenVibe) {
      this.requestUpdate();
    }
  }

  // * triggered when user clicks Play button within the current song component
  private playSong() {
    // * if the spotify request returns a song
    if (this.currentSong?.previewURL) {
      // * if audio not yet set
      if (!this.audio) {
        this.audio = this.shadowRoot?.querySelector("audio") || null;
      }
      // * if audio exists, then pause if already playing, or play if not playing yet
      if (this.audio) {
        if (this.isPlaying) {
          this.audio.pause();
        } else {
          this.audio.src = this.currentSong.previewURL;
          this.audio.play();
        }
        // * flip the isPlaying state which is needed to know whether to pause or play
        this.isPlaying = !this.isPlaying;
      }
    }
  }
}
