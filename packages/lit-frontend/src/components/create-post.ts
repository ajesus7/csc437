import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";

// import { Profile } from "../models/profile";
// import { authContext } from "./auth-required";
// import { consume } from "@lit/context";
// import { APIUser, APIRequest } from "../rest";
// import { Buffer } from "buffer";

// * Functionality: default view is of a button that says "Create Post +",
// * onclick, expand to the full view with the option to insert a message and a button
// * to submit. On submit, make a POST request with Post information, show a success or fail message
// * on success: revert post component to initial state, refresh page to load new post.
// ! on fail: show error message, highlight why error occurred (for example blank message)
// ! and do not re render the page.

import { IPost } from "../../../ts-models";

//import components

@customElement("create-post")
export class CreatePostElement extends LitElement {
  @state()
  expanded: boolean = false;

  @state()
  submissionSuccess: boolean = false;

  @state()
  errorMessage: boolean = false;

  _togglePost() {
    this.expanded = !this.expanded;
    this.submissionSuccess = false;
    this.errorMessage = false; //always reset errorMessage on toggle
  }

  // submitted by the button within the create post form, grab message from form
  // if message not empty, call sendPostRequest, otherwise, prompt user to enter a message
  async _submitPost(ev: Event) {
    ev.preventDefault();
    this.submissionSuccess = false; //reset submission success message state

    // grab message from form input and save it as string
    const target = ev.target as HTMLFormElement;
    const formData = new FormData(target);
    let message = formData.get("input-message") as string;

    //if message is not empty, submit the post. if empty, prompt user to input a message
    if (message) {
      console.log("submitting post!");
      this._sendPostRequest(message, target);
    } else {
      console.log("error with message!");
      this.errorMessage = true;
    }
  }

  //handles the submission of the post
  async _sendPostRequest(message: string, target: HTMLFormElement) {
    // TODO at some point change this userid to be dynamic based on the user profile, same with userName
    const newPost: IPost = {
      userid: "65caf83fcdc541534288d60b" as any,
      userName: "aidan",
      postTime: new Date(),
      postMessage: message,
      comments: [],
    };

    console.log("new post: ", newPost);

    //attempt to create a POST request with the post data
    try {
      const url = `http://localhost:3000/posts`;

      //make the post request
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (response.ok) {
        console.log("Post added successfully!");
        this.submissionSuccess = true; //renders submission message
        this.expanded = !this.expanded; //close create post component
        target.reset(); // reset form input
      } else {
        throw new Error("Failed to create post.");
      }
    } catch (error) {
      console.error("Error: ", error);
      this.submissionSuccess = false; // dont render submission message
    }
  }

  render() {
    return html`
      ${this.expanded
        ? html`
        <section class="create-post-ui">
            <section class="post-top-bar">
                <h3>Create a Post!</h3>
                <button class="close-form" @click=${
                  this._togglePost
                }>Close Form</button>
            </section>
            <form class="create-post-form" @submit=${this._submitPost}>
              <label for="input-message">Message</label>
              <textarea
                id="input-message"
                name="input-message"
                placeholder="What do you want to say?"
                rows="4" // You can adjust the rows as needed
              ></textarea>
              ${
                this.errorMessage
                  ? html`<p class="error-message">
                      Message input cannot be blank.
                    </p>`
                  : ``
              }
              <button class="post-button">Submit your post!</button>
            </form>
          </section>`
        : html` ${this.submissionSuccess
              ? html`<p class="submit-success-message">
                  post successfully submitted
                </p>`
              : ``}
            <button class="post-button" @click=${this._togglePost}>
              Create New Post &#43;
            </button>`}
    `;
  }

  static styles = css`
    :host {
      display: block;
      --background-color: #121212;
      --text-color: #e0e0e0;
      --accent-color: #bb86fc;
      --error-color: #cf6679;
    }

    .post-button,
    .close-form {
      background: var(--accent-color);
      color: white;
      border: none;
      margin-top: 1.5em;
      border-radius: 4px;
      cursor: pointer;
      padding: 8px 16px;
      font-size: 0.875em;
      transition: background-color 0.3s ease;
    }

    .post-button {
      margin-bottom: 1em;
    }

    .post-button:hover,
    .close-form:hover {
      background: #9277ff;
    }

    .create-post-ui {
      background-color: #2c2c2e; /* Lighter dark mode background color, matching the Feed Post component */
      color: var(--text-color);
      border: 1px solid #333;
      padding: 2em;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
      margin-bottom: 1em;
    }

    .create-post-form {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    textarea {
      background-color: #333;
      color: var(--text-color);
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #555;
      resize: vertical;
    }

    .error-message {
      color: #ff6b6b; /* Brighter red for the text */
      font-size: 0.75em;
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .error-message:before {
      content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23ff6b6b" viewBox="0 0 24 24" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>'); /* Example error icon in SVG format */
      font-weight: bold;
    }

    .submit-success-message {
      color: #00e676;
      background-color: #1e442c;
      padding: 8px;
      border-radius: 4px;
      font-size: 0.875em;
      border: 1px solid #00e676;
      margin: 0;
    }

    .post-top-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  `;
}
