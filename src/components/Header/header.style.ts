import styled from "styled-components";
import "../../style/__colors";
import { colorsDark } from "../../style/__colors";

const { darkBgc } = colorsDark

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  &.dark{
    background: ${darkBgc}
  }
  `