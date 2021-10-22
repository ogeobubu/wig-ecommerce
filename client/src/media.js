import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 540px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 780px) {
      ${props}
    }
  `;
};

export const largeTab = (props) => {
  return css`
    @media only screen and (max-width: 1025px) {
      ${props}
    }
  `;
};
