import styled from "styled-components";
import { newColors } from "../../style/__colors";

const { elemsBgc, textColor, bgc, borderColor, primeColor } = newColors;

export const StyledNotification = styled.div`
  color: ${textColor};
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  z-index: 9999;
  &.visible {
    .prime{ 
      color: ${primeColor};
      cursor: pointer;
    }
    .notificaionsBlocks { 
      .blocks {
        background-color: ${elemsBgc};
        position: absolute;
        border-radius: 10px;
        left: 850px;
        padding-bottom: 30px;
        top: 110px;
        .block {
          margin: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          padding: 15px 0;
          border-bottom: 1px solid ${borderColor};
          .center{
            text-align: center;
          }
          .bell {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: ${bgc};
            padding: 7px;
          }
          .text {
            max-width: 300px;
          }
        }
      }
    }
  }
`;
