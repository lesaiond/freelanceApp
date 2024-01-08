import styled from "styled-components";
import { newColors } from "../../style/__colors";

const {borderColor,} = newColors

export const StyledStatistics = styled.div`
  display: flex;
  align-items: end;
  gap: 25px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: ${borderColor};
  font-family: RocknRoll One; 
  .column {
    border-radius: 20px 20px 0px 0px;
    background: #cedbff;
    width: 60px;
    margin-bottom: 10px;
    &.peak {
      background: #2D64FF;
    }
  }
`;
