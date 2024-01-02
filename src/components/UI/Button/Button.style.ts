import styled from "styled-components";
import { colors } from "../../../style/__colors";

const { primary, white } = colors;

export const StyledButton = styled.button`
  width: 100%;
  padding: 10px;
  color: ${white};
  background: ${primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darken(${primary}, 10%);
  }
`;