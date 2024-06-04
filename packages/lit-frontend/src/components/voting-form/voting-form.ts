import { html, LitElement } from "lit";
import { customElement, state, property } from "lit/decorators.js";

import styles from "./voting-form-styles.ts";

// TODO : has to get the userVotedState somehow
//TODO : has to pass up result to parent to determine if song is added
/**
 *
 */
@customElement("voting-form")
export class VotingFormElement extends LitElement {
  static styles = styles;

  @state()
  numberYes: number = 0;

  @property({ type: Boolean })
  hasUserVoted: boolean = false;

  @property()
  numberOfUsers: number = 0;

  @state()
  numberNo: number = 0;

  private updateYesVotes() {
    console.log("before setting vote, hasUserVoted: ", this.hasUserVoted);

    if (!this.hasUserVoted) {
      this.numberYes += 1;
      this.hasUserVoted = true;
      this.dispatchSingleVote("YES");
      this.dispatchHasUserVoted(true);
      this.checkMajorityDecision();
    } else {
      console.log("user cannot vote twice");
    }
  }

  private updateNoVotes() {
    console.log("before setting vote, hasUserVoted: ", this.hasUserVoted);
    if (!this.hasUserVoted) {
      this.numberNo += 1;
      this.hasUserVoted = true;
      this.dispatchSingleVote("NO");
      this.dispatchHasUserVoted(true);
      this.checkMajorityDecision();
    } else {
      console.log("user cannot vote twice");
    }
  }

  private dispatchHasUserVoted(voteState: boolean) {
    console.log("dispatching has user voted!", voteState);
    const event = new CustomEvent("has-user-voted", {
      detail: { voteState: voteState },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  private checkMajorityDecision() {
    const majority = Math.floor(this.numberOfUsers / 2) + 1;
    if (this.numberYes >= majority) {
      this.dispatchVotingMajorityReached("YES");
    } else if (
      this.numberNo >= majority ||
      this.numberNo + this.numberYes == this.numberOfUsers
    ) {
      console.log("SENDING NO MAJORITY DECISION");

      this.dispatchVotingMajorityReached("NO");
    }
  }

  // * dispatches event to be caught in game feature which will be sent through Websocket server
  private dispatchVotingMajorityReached(decision: string) {
    console.log("decision dispatched!");
    const event = new CustomEvent("voting-decision-made", {
      detail: { decision: decision },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  // * dispatches event to be caught in game feature which will be sent through Websocket server
  private dispatchSingleVote(vote: string) {
    console.log("single vote dispatched!");
    const event = new CustomEvent("single-vote-made", {
      detail: { vote: vote },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    console.log(" __ ON VF RENDER __: this.hasVoted: ", this.hasUserVoted);

    return html`
      <section class="form-container">
        <h2 class="question">Does this song match the vibe?</h2>
        <ul class="choices-list">
          <li class="choice" @click=${this.updateYesVotes}>YES</li>
          <li class="choice" @click=${this.updateNoVotes}>NO</li>
        </ul>
      </section>
      <section class="results-container">
        <h2 class="results-header">Results out of ${this.numberOfUsers}</h2>
        <ul class="results-list">
          <li class="result">${this.numberYes} YES</li>
          <li class="result">${this.numberNo} NO</li>
        </ul>
      </section>
    `;
  }
}
