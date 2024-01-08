import styled from "styled-components";
import { newColors, } from "../../../style/__colors";

const { primeColor, bgc } = newColors

export const StyledButton = styled.button`
  padding: 17px 130px;
  font-size: 15;
  background: ${primeColor};
  color: ${bgc};
  box-shadow: 0px 5px 15px 0px rgba(255, 229, 178, 0.25); 
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    background-color: darken(${primeColor}, 10%);
  }
`;