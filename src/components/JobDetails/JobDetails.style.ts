import styled from "styled-components";
import { colors, newColors } from "../../style/__colors";

const { secondBorderColor, borderColor } = newColors;
const { textColor, gray } = colors;

export const JobDetailsStyled = styled.div`
  /* height: 100vh; */
  .mainContent {
    display: flex;
    color: ${textColor};
    padding: 1.5vw 3vw;
    font-family: RocknRoll One;
    h1,
    h2 {
      margin: 0;
      padding: 0;
    }
    p {
      margin: 0;
      padding: 0;
      font-weight: 400;
    }
    b {
      font-size: 22px;
      font-weight: 600;
    }
    .bar {
      padding: 0vw 5vw;
    }
    .companyInfo {
      height: 70vh;
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
    .RightBar {
    }
    .gray {
      color: ${gray};
    }
    button {
      display: block;
      margin: 0 auto;
      padding: 15px 80px;
    }
  }
`;
