import styled from "styled-components";
import { newColors } from "../../../style/__colors";

export const StyledSearchInput = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${newColors.bgc};
  border-radius: 5px;
  .row {
    padding-left: 15px;
    border: 1px solid ${newColors.borderColor};
    border-right: none;
    border-radius: 5px 0px 0px 5px;    
    display: flex;
    align-items: center;
    input {
      padding-left: 15px;
      border: none;
      outline: none;
      color: ${newColors.textColor};
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
    }
  }
  button {
    padding: 14px 26px;
    border-radius: 0px 5px 5px 0px;
  }
`;
