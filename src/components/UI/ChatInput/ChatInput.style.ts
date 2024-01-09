import styled from "styled-components";
import { newColors } from "../../../style/__colors";

const { borderColor } = newColors;

export const StyledChatInput = styled.div`
  display: flex;
  align-items: end;
  margin: 0 auto;
  padding: 2vw 0;
  gap: 65px;
  .typesMessage {
    display: flex;
    align-items: end;
    gap: 20px;
    padding: 7px 13px;
    border-bottom: 1px solid ${borderColor};
    textarea {
      border: 1px solid #000;
      min-width: 40vw;
      resize: none;
      border: none;
      outline: none;
      font-size: 16px;
    }
    .input {
      display: none;
    }
  }

  button {
    padding: 7px 38px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
  }
`;
