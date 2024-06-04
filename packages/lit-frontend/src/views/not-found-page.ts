import { customElement } from "lit/decorators.js";
import { PropertyValueMap, html } from "lit";
import * as App from "../app";
import styles from "./not-found-page-styles.ts";
import { Router } from "@vaadin/router";
import { APIUser } from "../rest";
import { Profile } from "../models/profile";

@customElement("not-found-page")
export class NotFoundPage extends App.View {
  static styles = [styles];

  get profile(): Profile | null {
    return this.getFromModel("profile") as Profile | null;
  }

  navigateTo(path: string) {
    Router.go(path);
  }

  protected firstUpdated(
    _changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ): void {
    console.log("******* HOME PAGE FIRST UPDATED ********");
    if (APIUser._theUser.authenticated) {
      console.log("___ dispatching ProfileSelected____");

      this.dispatchMessage({
        type: "ProfileSelected",
        userid: APIUser._theUser.username,
      });
    } else {
      console.log("***** this.userid is undefined *****");
    }
  }

  render() {
    console.log("within not found page this.profile ", this.profile);
    return html`
      <section class="container">
        <h1>Page Not Found</h1>
        <p>
          The page you're looking for doesn't exist. Here are some helpful
          links:
        </p>
        <div class="links">
          <button @click="${() => this.navigateTo("/app/home")}">Home</button>
          ${this.profile?.userid
            ? html`
                <button
                  @click="${() =>
                    this.navigateTo(`app/chatRoom/${this.profile?.userid}`)}"
                >
                  Chat Room
                </button>
                <button
                  @click="${() =>
                    this.navigateTo(`app/profile/${this.profile?.userid}`)}"
                >
                  Profile
                </button>
              `
            : html`<p>Profile not found.</p>`}
        </div>
      </section>
    `;
  }
}
