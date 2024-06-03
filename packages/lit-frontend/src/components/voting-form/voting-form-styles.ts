import { css } from "lit";

export default css`
  .form-container {
    border: 1px solid #ccc;
    width: 20em;
    height: 7em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .question {
    font-size: 1.2em;
    margin: 0;
    text-align: center;
  }

  .choices-list {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .choice {
    flex: 1;
    text-align: center;
    padding: 1.5em 0;
    margin: 0;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
  }

  .choice:hover {
    background-color: #e0e0e0;
  }

  .choice:first-child {
    border-right: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .choice:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .results-container {
    border: 1px solid #ccc;
    width: 20em;
    height: 5em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 1em;
  }

  .results-header {
    font-size: 1.2em;
    margin: 0;
    text-align: center;
  }

  .results-list {
    display: flex;
    width: 100%;
    justify-content: space-around;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .result {
    flex: 1;
    text-align: center;
    padding: 0.5em 0;
    margin: 0;
  }

  .result:first-child {
    border-right: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .result:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;
