import { css } from "lit";

export default css`
  .feed-container {
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 60%;
    margin-top: 2.5em;
    border: 1px solid #e0e0e0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    overflow: hidden;
  }

  .nav-section {
    width: 200px;
    background-color: var(--background-color);
    border-right: 1px solid #e0e0e0;
    padding: 1em;
  }

  .nav {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .navlink {
    margin-bottom: 0.5em;
  }

  .navlink a {
    text-decoration: none;
    font-size: 1em;
    color: var(--subtext-color);
    display: block;
    padding: 0.25em;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;
  }

  .navlink a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .main-posts-section {
    flex-grow: 1;
    padding: 1em;
    margin-left: 3em;
  }

  .feed-header {
    font-size: 1.75em;
    font-weight: 400;
    margin-bottom: 1em;
  }

  .nav-header {
    font-size: 1.15em;
    font-weight: 400;
    margin-bottom: 1em;
  }

  create-post {
    margin-bottom: 1em;
  }
`;
