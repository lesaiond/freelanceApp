import styled from "styled-components";
import { newColors } from "../../style/__colors";

const { primeColor } = newColors;

export const StyledProfilePage = styled.div`
  overflow: hidden;
  .content {
    display: flex;
    padding: 1.5vw 3vw;

    .mainContent {
      padding: 0 0 0 30px;
      width: 70vw;
      .columns {
        margin-top: 60px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 50px;
        .column {
          margin: 0;

        }
      }
      .resume {
        max-width: 700px;
        font-size: 16px;
        font-weight: 400;
        line-height: 23px;
        .username {
          font-size: 32px;
          font-weight: 600;
          &.prime {
            color: ${primeColor};
            svg {
              fill: #457edb;
              margin-left: 5px;
            }
          }
        }
      }
    }
    .link {
      cursor: pointer;
    }
  }
`;
