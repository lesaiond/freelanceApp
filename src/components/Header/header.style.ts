import styled from "styled-components";
import "../../style/__colors";
import { colorsDark } from "../../style/__colors";

const { darkBgc } = colorsDark;

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  .leftPart { 
    display: flex;
    gap: 50px;
    .logo {
      font-family: Roboto;
      font-size: 42px;
      font-style: normal;
      font-weight: 600;
    }
  }
  .rightPart {
    display: flex;
    gap: 35px;
    ul {
      display: flex;
      gap: 25px;
      li {
        list-style-type: none;
      }
  }

  }
  &.dark {
    background: ${darkBgc};
  }
`;
