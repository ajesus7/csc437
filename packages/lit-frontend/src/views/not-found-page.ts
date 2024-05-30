import { customElement, state } from "lit/decorators.js";
import { html } from "lit";
import * as App from "../app";
import styles from "./not-found-page-styles.ts";
import { Router } from "@vaadin/router";
import { Profile } from "../models/profile.ts";

@customElement("not-found-page")
export class NotFoundPage extends App.View {
  static styles = [styles];

  @state()
  private profile: Profile | null = null;

  @state()
  private loading = true;

  navigateTo(path: string) {
    Router.go(path);
  }

  async firstUpdated() {
    console.log("******** NOT FOUND PAGE FIRST UPDATE ********");
    await this.fetchProfile();
  }

  async fetchProfile() {
    try {
      const profile = await this.getFromModel("profile");
      console.log("Profile fetched:", profile);
      if (profile) {
        this.profile = profile as Profile;
      } else {
        this.profile = null;
      }
    } catch (error) {
      console.error("Failed to fetch profile:", error);
      this.profile = null;
    } finally {
      this.loading = false; // Set loading to false after the profile is fetched
      console.log("Profile fetched and set:", this.profile);
    }
  }

  render() {
    console.log("within not found page this.profile ", this.profile);
    return html`
      <section class="container">
        ${this.loading
          ? html`<p>Loading profile data...</p>`
          : html`
              <h1>Page Not Found</h1>
              <p>
                The page you're looking for doesn't exist. Here are some helpful
                links:
              </p>
              <div class="links">
                <button @click="${() => this.navigateTo("/app/home")}">
                  Home
                </button>
                ${this.profile
                  ? html`
                      <button
                        @click="${() =>
                          this.navigateTo(`/chatRoom/${this.profile?.userid}`)}"
                      >
                        Chat Room
                      </button>
                      <button
                        @click="${() =>
                          this.navigateTo(`/profile/${this.profile?.userid}`)}"
                      >
                        Profile
                      </button>
                    `
                  : html`<p>Profile not found.</p>`}
              </div>
            `}
      </section>
    `;
  }
}
