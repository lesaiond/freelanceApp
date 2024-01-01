import styled from "styled-components";
import { colors } from "../../style/__colors";

const { primary } = colors

export const StyledLinkWrapper = styled.a`
  text-decoration: none;
  color: ${primary};
  &:hover {
    text-decoration: underline;
  }
`;
