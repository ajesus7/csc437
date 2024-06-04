import { html } from "lit";
import { customElement } from "lit/decorators.js";

// MVU app
import * as App from "../app";
import update from "../update";

//components
import "../components/user-profile/user-profile";
import "../components/vaadin-router/vaadin-router";
import "../components/auth-required/auth-required";
import "../components/match-the-vibe-header/match-the-vibe-header";

//views
import "./profile-page";
import "./home-page";
import "./song-page";
import "./not-found-page";
import "./create-profile-page";
import "./chat-room-page";

let routes = [
  {
    path: "/app/profile/:userid/:edit(edit)",
    component: "profile-page",
  },
  {
    path: "/app/profile/:userid",
    component: "profile-page",
  },
  {
    path: "/app/home",
    component: "home-page",
  },
  {
    path: "/createProfile",
    component: "create-profile-page",
  },
  {
    path: "app/chatRoom/:userid",
    component: "chat-room-page",
  },
  {
    path: "(.*)",
    component: "not-found-page", // Serve a "not found" component instead of redirecting to avoid loops
  },
];

@customElement("mtv-app")
export class MTVAppElement extends App.Main {
  constructor() {
    super(update);
  }

  render() {
    return html`
      <auth-required>
        <match-the-vibe-header></match-the-vibe-header>
        <vaadin-router .routes=${routes}> </vaadin-router>
      </auth-required>
    `;
  }

  updated(changes: Map<string, unknown>) {
    console.log("MTVAPPElement updated:", changes.keys());
    if (changes.has("model")) {
      console.log("New model", this.model);
      this.requestUpdate();
    }
  }
}
