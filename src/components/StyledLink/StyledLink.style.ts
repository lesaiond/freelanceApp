import styled from "styled-components";
import { colors, colorsDark } from "../../style/__colors";

const { primeColor } = colors;
const { darkPrimeColor } = colorsDark;

export const StyledLinkWrapper = styled.a`
  text-decoration: none;
  color: ${primeColor};
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &.dark {
    color: ${darkPrimeColor};
  }
`;
