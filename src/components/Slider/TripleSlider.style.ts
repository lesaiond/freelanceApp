import styled from "styled-components";
import { newColors } from "../../style/__colors";

const {textColor, bgc} = newColors

export const StyledTripleSlider = styled.section`
&.triple-slider {
  overflow: hidden;
  position: relative;
  .slider-wrapper {
    gap: 40px;
    display: flex;
    transition: transform 0.5s ease-in-out;
  }

  .service {
    flex: 0 0 calc(33.3333% - 40px); /* Adjust for the gap */
    box-sizing: border-box;
    display: flex;
    flex-direction: column-reverse;
    gap: 9px;
    transition: opacity 0.2s ease-in-out;
    
    .title {
      font-size: 20px;
      font-style: normal;
      font-weight: 500;
    }
    
    img {
      max-width: 100%;
      height: auto;
    }
  }

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    opacity: 0.4;
    cursor: pointer;
    border: none;
    background-color: ${textColor};
    color: ${bgc};
    padding: 10px;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    position: absolute;
    top: 50%;
    z-index: 1;
    transition: opacity 0.3s ease-in-out;
    
    &:hover {
      opacity: 0.8;
    }

    &.prev {
      left: 0;
    }

    &.next {
      right: 0;
    }
  }
}

`;
