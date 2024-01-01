import styled from "styled-components";
import { colors } from "../../../style/__colors";

const { light } = colors;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid ${light};
  border-radius: 4px;
  margin-bottom: 10px;
`;