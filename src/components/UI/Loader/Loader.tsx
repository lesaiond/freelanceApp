import React from "react";
import styled from "styled-components";

const Loader = () => {
  return <StyledLoader className="loader"></StyledLoader>;
};

export default Loader;

const StyledLoader = styled.span`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  position: relative;
  animation: rotate 1s linear infinite;
  display: block;
  margin: 0 auto;
  &::before,
  &::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: prixClipFix 2s linear infinite;
  }
  &::after {
    border-color: #ff3d00;
    animation: prixClipFix 2s linear infinite,
      rotate 0.5s linear infinite reverse;
    inset: 6px;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
`;
