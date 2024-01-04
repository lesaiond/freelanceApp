import styled from "styled-components";
import { colors, colorsDark } from "../../style/__colors"; // Import colors

const { textColor, bgc } = colors;
const { darkTextColor, darkBgc } = colorsDark;

export const MainPageStyled = styled.div`
  padding: 1.5vw 3vw;
  background: ${bgc};
  color: ${textColor};
  &.dark {
    background: ${darkBgc};
    h1 {
      color: ${darkTextColor};
    }
  }
`;
