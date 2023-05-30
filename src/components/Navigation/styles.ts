import { css } from "@emotion/css";

export const wrapper = css`
  display: flex;
  justify-content: center;
  & > * {
    margin: 15px;
    text-decoration: none;
    color: black;
    font-weight: bold;
    transition: .2s;
    &:hover {
      transform: scale(1.1) translateY(3px);
    }
  }
`