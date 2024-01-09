import styled from "styled-components";
import { newColors } from "../../style/__colors";

const { borderColor, bgc } = newColors;

export const StyledUsersMessage = styled.div`
  border-right: 2px solid ${borderColor};
  padding: 16px 20px;
  padding-bottom: 30px;
  height: 80vh;
  .searchUser {
    display: flex;
    justify-content: space-between;
    border: 1px solid ${borderColor};
    border-radius: 10px;
    background: ${bgc};
    font-style: normal;
    padding: 9px 16px;
    margin-bottom: 65px;
    input {
      border: none;
      font-weight: 500;
      /* font-size: 10px; */
      outline: none;
    }
  }
  .userItem {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px 0;
    border-bottom: 1px solid ${borderColor};
    .center {
      text-align: center;
      font-size: 12px;
    }
    .circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .username {
      font-size: 14px;
      flex-grow: 1;
    }
  }
`;
