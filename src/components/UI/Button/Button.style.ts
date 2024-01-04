import styled from "styled-components";
import { colors, colorsDark, } from "../../../style/__colors";

const { primeColor, hoverText } = colors;
const { darkPrimeColor, darkHoverText } = colorsDark

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  color: ${hoverText};
  background: ${primeColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: darken(${primeColor}, 10%);
  }
  &.dark{
    background: ${darkPrimeColor};
    color: ${darkHoverText};
  }
`;