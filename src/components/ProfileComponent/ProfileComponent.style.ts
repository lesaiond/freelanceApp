import styled from "styled-components";
import { newColors } from "../../style/__colors";

const { secondBorderColor, borderColor, textColor } = newColors;

export const StyledProfileComponent = styled.div`
  max-width: 330px;
  font-family: RocknRoll One;
  .mainInfo {
    border: 1px solid ${secondBorderColor};
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
    .avatar {
      height: 120px;
      margin: 7px auto;
    }
    .username {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      padding: 12px 0;
      text-align: center;
      border-bottom: 1px solid ${secondBorderColor};
    }
    .space-between {
      padding: 20px 0;
      margin: 0 20px;
      border-bottom: 1px solid ${secondBorderColor};
      &:last-child {
        margin-bottom: 80px;
      }
    }
  }
  .userInfo {
    border: 1px solid ${secondBorderColor};
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 23px;
    .grayText {
      color: ${borderColor};
      font-size: 12px;
      font-style: normal;
      font-weight: 300;
    }
    .text {
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      color: ${textColor};
    }
  }
`;
