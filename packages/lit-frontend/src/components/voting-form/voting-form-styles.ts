import { css } from "lit";

export default css`
  .form-container {
    border: 1px solid #ddd;
    width: 20em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .question {
    font-size: 1.2em;
    margin: 0 0 1em;
    text-align: center;
    font-weight: bold;
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
    padding: 1em 0.5em;
    margin: 0;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 8px;
    font-weight: bold;
    color: #333;
    background-color: #f9f9f9;
  }

  .choice:hover {
    background-color: #e0e0e0;
  }

  .results-container {
    border: 1px solid #ddd;
    width: 20em;
    padding: 0.5em 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 12px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    margin-top: 1em;
  }

  .results-header {
    font-size: 1.2em;
    margin: 0 0 1em;
    text-align: center;
    font-weight: bold;
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
    font-weight: bold;
  }

  .big-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1em;
  }
`;
