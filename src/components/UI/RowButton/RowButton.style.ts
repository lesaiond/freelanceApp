import styled from "styled-components";
import { colors } from "../../../style/__colors";

const {textColor, primeColor} = colors

export const RowButtonStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  padding-top: 1vw;
  gap: 15px;
  button {
    font-size: 28px;
    border: none;
    color: ${textColor};
    background: ${primeColor};
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`