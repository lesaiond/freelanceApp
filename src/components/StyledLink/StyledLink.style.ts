import styled from "styled-components";
import { newColors } from "../../style/__colors";

const { primeColor, secondPrimeColor } = newColors;

export const StyledLinkWrapper = styled.a`
  text-decoration: none;
  color: ${primeColor};
  &.secondButton {
    background-color: ${secondPrimeColor};
  }
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &.dark {
  }
`;
