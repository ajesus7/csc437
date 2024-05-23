import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import styles from "./create-post-styles";

//import interfaces
import { IPost } from "../../../../ts-models/src";

// * Functionality: default view is of a button that says "Create Post +",
// * onclick, expand to the full view with the option to insert a message and a button
// * to submit. On submit, make a POST request with Post information, show a success or fail message
// * on success: revert post component to initial state, refresh page to load new post.
// ! on fail: show error message, highlight why error occurred (for example blank message)
// ! and do not re render the page.

@customElement("create-post")
export class CreatePostElement extends LitElement {
  static styles = [styles];

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

    const SERVER_URL = import.meta.env.VITE_SERVER_URL;

    console.log("new post: ", newPost);

    //attempt to create a POST request with the post data
    try {
      const url = `${SERVER_URL}/posts`;

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
        this._sendUpdateToRefreshMainFeed();
      } else {
        throw new Error("Failed to create post.");
      }
    } catch (error) {
      console.error("Error: ", error);
      this.submissionSuccess = false; // dont render submission message
    }
  }

  // * Send an update to the parent (main-feed component) that will re render the feed when a new post is created
  _sendUpdateToRefreshMainFeed() {
    const updateEvent = new CustomEvent("post-created", {
      bubbles: true, // Allows the event to bubble up through the DOM
      composed: true, // Allows the event to cross the shadow DOM boundary
    });
    console.log("dispatching event: ", updateEvent);
    this.dispatchEvent(updateEvent);
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
}
