// StyledComponentStyles.ts
import styled from "styled-components";
import { colors } from "./style/__colors";

const { primary, light, danger } = colors;

export const AppStyledContainer = styled.div`
  background-color: ${light};
  padding: 0;
  margin: 0;
`;

export const StyledHeading = styled.h1`
  color: ${primary};
`;

export const errorMessage = styled.div`
  color: ${danger};
  margin-bottom: 15px;
`;
