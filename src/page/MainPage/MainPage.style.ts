import styled from "styled-components";
import { colors, colorsDark } from "../../style/__colors"; // Import colors

const {textColor, bgc} = colors
const {darkTextColor, darkBgc} = colorsDark

export const MainPageStyled = styled.div`
  background: ${bgc};
  color: ${textColor};
  &.dark {
    background: ${darkBgc};
    h1 {
        color: ${darkTextColor};

      }
  }
`