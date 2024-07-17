import styled from "styled-components";
import "../../style/__colors";
import { colorsDark, newColors } from "../../style/__colors";

const { darkBgc } = colorsDark;

export const HeaderStyled = styled.header`
  padding: 3vw;
  display: flex;
  justify-content: space-between;
  .leftPart { 
    display: flex;
    align-items: center;
    gap: 50px;
    .logo {
      font-family: Roboto;
      font-size: 42px;
      font-style: normal;
      font-weight: 600;
      cursor: pointer;
    }
  }
  .rightPart {
    display: flex;
    align-items: center;
    gap: 35px;
    ul {
      display: flex;
      gap: 25px;
      li {
        cursor: pointer;
        list-style-type: none;
        transition: all .3s ease;
        &:hover {
          color: ${newColors.primeColor};
        }
      }
    }
    .avatar {
    transition: all .3s ease;
    width: 60px;
    &:hover {
      transform: scale(1.17);
    }
  }
  }
  &.dark {
    background: ${darkBgc};
  }
`;
