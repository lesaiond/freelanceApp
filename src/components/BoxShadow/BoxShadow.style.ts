import styled from "styled-components";
import { newColors } from "../../style/__colors";

const {textColor} = newColors

export const BoxShadowStyled = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 40vw;
  width: 70vw;
  color: ${textColor};
  .mainImg {
    height: 40vw;
  }
  box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.25); 
`;
