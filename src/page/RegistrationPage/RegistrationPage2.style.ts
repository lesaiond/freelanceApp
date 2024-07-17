import styled from "styled-components";
import { newColors } from "../../style/__colors";

const { secondBorderColor, textColor, elemsBgc, red } = newColors;

export const StyledRegistrationPage2 = styled.div`
  form {
    height: 100vh;
    width: 100vw;
    padding: 160px 0px;
    display: flex;
    justify-content: space-around;
    .leftPart {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 40vw;
      label {
        display: flex;
        flex-direction: column;
        p {
          color: ${red};
        }
        .grayText {
          color: ${secondBorderColor};
          font-family: Roboto Slab;
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          margin-bottom: 10px;
        }
        select {
          padding: 11px 20px;
          background: ${elemsBgc};
          color: ${textColor};
          &.red {
            border: 1px solid ${red};
          }
          &.green {
            border: 1px solid #01c34f;
          }
        }
        input {
          outline: none;
          background: ${elemsBgc};
          color: ${textColor};
          font-family: Roboto Slab;
          font-size: 16px;
          font-style: normal;
          font-weight: 300;
          padding: 11px 20px;
          &.red {
            border: 1px solid ${red};
          }
          &.green {
            border: 1px solid #01c34f;
          }
        }
      }
    }
    .rightPart {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      .files {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 66px;
        color: ${textColor};
        font-family: Roboto Slab;
        font-size: 12px;
        font-style: normal;
        font-weight: 300;
        input {
          display: none;
        }
        .circle {
          background: ${elemsBgc};
          padding: 65px 30px;
          border-radius: 50%;
        }
        .row {
          display: flex;
          justify-content: space-around;
          gap: 35px;
          label {
            background: ${elemsBgc};
            padding: 50px 13px;
            text-align: center;
            max-width: 100px;
          }
        }
      }
      Button {
        background: ${red};
      }
    }
  }
`;
