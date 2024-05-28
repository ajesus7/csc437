import { css } from "lit";

export default css`
  :host {
    display: block;
    font-family: "Arial", sans-serif;
    text-align: center;
    padding: 2em;
    color: #333;
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2em;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 2em;
    margin-bottom: 0.5em;
  }

  p {
    margin-bottom: 1.5em;
  }

  .links {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  button {
    padding: 0.75em 1.5em;
    font-size: 1em;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }
`;
