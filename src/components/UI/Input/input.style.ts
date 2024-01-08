import styled from "styled-components";
import { newColors } from "../../../style/__colors";

const { borderColor, bgc, red } = newColors;

export const StyledInput = styled.div`
  border: 1px solid ${borderColor};
  border-radius: 10px;
  background: ${bgc};
  margin-bottom: 10px;
  .row {
    display: flex;
    align-items: center;
  }
  &.errorMessage{
    border-radius: 10px;
    border: 1.2px solid ${red};
    input {
      color: ${red};
    }
  }
  
  input {
    width: 100%;
    border-radius: 10px;
    font-size: 15px;
    padding: 12px 0px 12px 5px;
    border: none;
    outline: none;
  }
`;
