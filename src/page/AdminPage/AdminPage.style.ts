import styled from "styled-components";
import { newColors } from "../../style/__colors";

const { textColor, borderColor, red } = newColors;

export const StyledAdminPage = styled.div`
  display: flex;
  gap: 8vw;
  color: ${textColor};
  .mainContent {
    padding-top: 20vh;
    padding-bottom: 80px;
    padding-left: 23vw;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 60px;
    h1 {
      font-family: RocknRoll One;
      font-size: 42px;
      font-weight: 400;
    }
    .text {
      font-family: Roboto;
      color: ${textColor};
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
    }
    .subText {
      color: ${borderColor};
    }
    .grayBox {
      box-shadow: 3px 3px 20px 0px rgba(0, 0, 0, 0.25);
      padding: 32px 32px 32px 32px;
      min-width: 340px;
      &.mainGrayBox {
        display: flex;
        justify-content: space-between;
      }
      .skillBox {
        display: flex;
        align-items: center;
        gap: 15px;
        &.gap {
          gap: 100px;
        }
        &.column {
          flex-direction: column;
        }
        .skillTitle {
          font-family: Roboto;
          font-size: 15px;
          font-style: normal;
          font-weight: 300;
        }
        .skillStatic {
          font-family: Roboto;
          font-size: 35px;
          font-style: normal;
          font-weight: 300;
        }
        .greenCircle {
          font-family: Roboto;
          font-size: 22px;
          font-style: normal;
          font-weight: 700;
          width: 80px;
          height: 80px;
          text-align: center;
          line-height: 370%;
          border-radius: 50%;
          border: 4px solid #42ff00;
        }
        .redCircle {
          font-family: Roboto;
          font-size: 22px;
          font-style: normal;
          font-weight: 700;
          width: 80px;
          height: 80px;
          text-align: center;
          line-height: 370%;
          border-radius: 50%;
          border: 4px solid ${red};
        }
      }
    }
  }
`;
