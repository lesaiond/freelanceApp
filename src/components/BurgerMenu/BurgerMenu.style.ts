import styled from "styled-components";
import { newColors } from "../../style/__colors";

const { textColor, elemsBgc } = newColors;

export const StyledBurgerMenu = styled.nav`
  display: flex;
  position: fixed;
  flex-direction: column;
  height: 90vh;
  width: 15vw;
  border-right: 1px solid ${textColor};
  padding-top: 20vh;
  gap: 2.5vw;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 600;
  transition: all 1.5s ease;
  .link {
    cursor: pointer;
    display: flex;
    gap: 1vw;
    margin: 0 2vw;
    padding: 10px 10px 8px 26px;
    svg {
      margin-top: -4px;
    }

    &:hover {
      background: ${elemsBgc};
      border-radius: 20px;
    }
    &:active {
      filter: brightness(150%);
    }
    &.remove {
      margin-top: 20vh;
      &:hover {
        color: ${newColors.red};
        svg {
          fill: ${newColors.red}
        }
      }
    }
  }
`;
