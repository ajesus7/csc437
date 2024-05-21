import { css } from "lit";

export default css`
  .user-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 2px solid black;
    justify-content: center;
    gap: 1em;
  }
  .user {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
    border: 2px solid black;
    width: 8em;
    height: 11em;
    background: lightblue;
  }
  .user img {
    width: 4em;
    height: 4em;
    border: 1px solid black;
    border-radius: 50%;
    margin-top: 1.5em;
  }

  .username {
    margin-top: 0.75em;
  }
`;
