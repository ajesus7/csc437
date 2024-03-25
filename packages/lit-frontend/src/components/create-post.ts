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

// import Post from "../models/post";

//import components

@customElement("create-post")
export class CreatePostElement extends LitElement {
  @state()
  expanded: boolean = false;

  _createPost() {
    console.log("creating post!");
    this.expanded = !this.expanded;
  }

  _submitPost(e: Event) {
    e.preventDefault();
    console.log("submitting post!");

    // * create Post object
    // * submit POST request with ^ object
    // * if successful: reset this.expanded, show success message, reset page?
    // * if not successful: show error message, don't highlight error section.
  }

  render() {
    return html`
      ${this.expanded
        ? html`
        <section class="create-post-ui">
            <section class="post-top-bar">
                <h3>Create a Post!</h3>
                <button class="close-form">Close Form</button>
            </section>
            <form class="create-post-form" @submit=${this._submitPost}>
              <label for="input-message">Message</label>
              <textarea
                id="input-message"
                name="input-message"
                placeholder="What do you want to say?"
                rows="4" // You can adjust the rows as needed
              ></textarea>
              <button class="post-button">Submit your post!</button>
            </form>
          </section>`
        : html`<button class="post-button" @click=${this._createPost}>
            Create New Post &#43;
          </button>`}
    `;
  }

  static styles = css`
    .post-button {
      width: 25em;
    }

    #input-message {
      width: 30em;
      margin-bottom: 1.5em;
    }

    .post-button {
      background: var(--accent-color);
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      padding: 8px 16px;
      font-size: 0.875em;
      white-space: nowrap; /* Prevents wrapping on small screens */
    }

    .post-top-bar {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    .close-form {
      background: red;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      height: 2em;
      padding: 8px 16px;
      font-size: 0.875em;
      white-space: nowrap; /* Prevents wrapping on small screens */
    }

    .close-form:hover {
      background: #8b0000;
    }

    .post-button:hover {
      background: #0056b3;
    }

    .create-post-ui {
      border: 2px solid white;
      padding: 2em;
    }

    .create-post-form {
      display: flex;
      flex-direction: column;
      gap: 8px; /* Adds space between form elements */
    }

    textarea {
      padding: 8px;
      border-radius: 4px;
      border: 1px solid #ccc;
      resize: vertical; /* Allows the user to resize the textarea vertically */
    }
  `;
}
