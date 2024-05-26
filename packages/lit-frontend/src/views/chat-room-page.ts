import { customElement, property, state } from "lit/decorators.js";
import { html } from "lit";
import * as App from "../app";
import styles from "./chat-room-page-styles.ts";

import "../components/game-feature/game-feature.ts";

type ProfileLocation = Location & {
  params: { userid: string; edit: string };
  searchParams: Map<string, string>;
};

type Profile = {
  name: string;
  profileImage: string;
  profileDescription?: string;
  bio?: string;
};

/**
 * Will retrieve the userDetails from the userId in the URL paramers, then render the game-feature component,
 * which holds the logic for the game.
 */
@customElement("chat-room-page")
export class ChatRoomPage extends App.View {
  static styles = [styles];

  @property({ attribute: false })
  location?: ProfileLocation;

  @property({ reflect: true })
  get userid() {
    return this.location?.params.userid;
  }

  @state()
  private userDetails: { name: string; profilePic: string } | null = null;

  /**
   * Given a userid, will query the database for the userinformation, which will then be used
   * to generate the userDetails.
   *
   * @param userid : a string identifier of the current user, to fetch their data
   * @returns profile object
   */
  async _getUserFromDatabase(userid: string): Promise<Profile> {
    const SERVER_URL = import.meta.env.VITE_SERVER_URL;
    try {
      const response = await fetch(`${SERVER_URL}/profile/${userid}`);

      if (!response.ok) {
        throw new Error(`Error fetching profile: ${response.statusText}`);
      }

      const profile: Profile = await response.json();
      return profile;
    } catch (error) {
      console.error("Error fetching user profile: ", error);
      throw error;
    }
  }

  connectedCallback() {
    super.connectedCallback();
    // * get user from database, set this.userDetails to be passed to game-feature
    if (this.location && this.location.params && this.location.params.userid) {
      this._getUserFromDatabase(this.location.params.userid)
        .then((user) => {
          this.userDetails = {
            name: user.name || "Unknown",
            profilePic: user.profileImage || "defaultProfileImage",
          };
          console.log("User details set:", this.userDetails);
          // this.requestUpdate(); // * re render component with userDetails
        })
        .catch((error) => {
          console.error("Failed to fetch user profile:", error);
        });
    } else {
      console.error("User ID is not available in location parameters");
    }
  }

  render() {
    // * Show a loading message while fetching user details
    if (!this.userDetails) {
      return html`<p>Loading...</p>`;
    }
    return html`
      <section class="gameFeature">
        <game-feature .userDetails=${this.userDetails}></game-feature>
      </section>
    `;
  }
}
