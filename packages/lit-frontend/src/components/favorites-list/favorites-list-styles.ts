import { css } from "lit";

export default css`
  .current-favorites-h3 {
    margin-bottom: 15px;
    padding: 10px 0px 0px 10px;
  }

  .current-favorites {
    padding-bottom: 50px;
  }

  .favorite-section {
    padding: 10px 0px 5px 10px;
  }

  .favorite-section p {
    margin: 0;
  }

  .favorite-list {
    border: 1.5px solid var(--section-border-color);
    border-radius: var(--default-border-radius);
    width: 265px;
  }

  .section-title {
    font-weight: var(--bold-weight);
  }

  a.section-title {
    display: flex;
    color: var(--accent-color);
  }
`;
