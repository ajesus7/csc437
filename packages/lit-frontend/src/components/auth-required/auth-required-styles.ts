import { css } from "lit";

export default css`
  :host {
    display: block;
    margin: auto;
  }

  section {
    display: block;
  }

  .formsContainer {
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    border: 2px solid black;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h2 {
    color: #333;
    text-align: center;
    font-size: 24px;
    margin: 0;
    padding: 0;
    width: auto;
    text-align: left;
  }

  label {
    color: black;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 3px;
  }

  .formInformation {
    color: #665;
    font-size: 16px;
    margin-bottom: 10px;
    position: relative;
    top: -6px;
  }

  .formLabelAndInput {
    display: flex;
    flex-direction: column;
  }
  input {
    padding: 12px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    height: 1em;
  }

  .submitButton {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
  }

  .submitButton:hover {
    background-color: #45a049;
  }

  .signInLink {
    color: #4caf50;
  }

  .signInLink:hover {
    color: #4caf50;
    cursor: pointer;
    text-decoration: underline;
  }

  .loginSignupLink {
    font-size: 12px;
    color: #888;
    text-align: center;
    margin-top: 25px;
  }

  a {
    color: #4caf50;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .registrationForm {
    display: flex;
    flex-direction: column;
  }

  .errorMessage {
    color: red;
    font-size: 12px;
    margin: 0;
    padding: 0;
    margin-top: 12px;
  }
  .successMessage {
    color: black;
    font-size: 12px;
    margin: 0;
    padding: 0;
    margin-top: 12px;
  }
`;
