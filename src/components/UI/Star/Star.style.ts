import styled from "styled-components";
import { newColors } from "../../../style/__colors";

const {borderColor} = newColors

export const StyledStar = styled.div`
  .heart-checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    input {
      display: none;
    }
    svg {
      fill: ${borderColor};
      transition: fill 0.3s;
    }
    &.checked {
      svg {
        fill: red; // Цвет при заполнении (вы можете изменить на свой выбор)
      }
    }
    
  }
  /* .heart-checkbox {



  } */
`;
