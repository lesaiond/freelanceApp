import styled from "styled-components";
import { colors, colorsDark } from "../../../style/__colors";

const { textColor, lightGray, elemsBgc, red } = colors;
const { darkTextColor, darkLightGray, darkElemsBgc, } = colorsDark;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${lightGray};
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: ${elemsBgc}; 
  color: ${textColor};
  outline: none;
  &.dark {
    border: 1px solid ${darkLightGray};
    background-color: ${darkElemsBgc}; 
    color: ${darkTextColor};
  }
  &.errorMessage{
    border: 1px solid ${red};
    color: ${red}
  }
  &:focus {
    color: ${textColor};
    border: 1px solid ${lightGray};
  }
`;