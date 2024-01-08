import styled from "styled-components";
import { colors } from "../../style/__colors";

const { textColor, gray } = colors;

export const JobDetailsStyled = styled.div`
  display: flex;
  color: ${textColor};
  padding: 1.5vw 3vw;
  h1,
  h2 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0;
    font-weight: 400;
  }
  b {
    font-size: 22px;
    font-weight: 600;
  }
  .bar {
    padding: 0vw 5vw;
  }
  .leftBar {
  }
  .RightBar {
  }
  .gray {
    color: ${gray};
  }
`;
