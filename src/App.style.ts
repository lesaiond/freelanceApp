// StyledComponentStyles.ts
import styled from "styled-components";
import { colors } from "./style/__colors";

const { textColor, red } = colors;

export const AppStyledContainer = styled.div`
  background-color: #fff;
  padding: 0;
  margin: 0;
`;

export const StyledHeading = styled.h1`
  color: ${textColor};
`;

export const errorMessage = styled.div`
  color: ${red};
  margin-bottom: 15px;
`;
