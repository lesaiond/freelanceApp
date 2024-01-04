import styled from "styled-components";
import { darken } from "polished";
import { colors, colorsDark } from "../../style/__colors"; // Import colors

const { elemsBgc, primeColor, textColor, red } = colors;
const { darkElemsBgc, darkTextColor, darkLightGray, } = colorsDark;

export const LoginStyledContainer = styled.div`
  margin: 5vw auto;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 350px;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  background-color: ${elemsBgc}; // Set background color to elemsBgc

  .loginForm {
    padding: 20px;
  }

  h1 {
    margin: 0 auto;
    padding-top: 15px;
    text-align: center;
    color: ${textColor}; // Set text color to textColor
  }

  .signup-text {
    padding: 5px 5px 20px 5px;
    text-align: center;
    color: ${textColor}; // Set text color to textColor
  }
  input {
    min-width: 280px;

  }
  &.dark {
    background-color: ${darkElemsBgc}; 
    h1 {
      color: ${darkTextColor}
    }
    .signup-text {
      color: ${darkTextColor}
    }
    input {
    border: 1px solid ${darkLightGray};
    background-color: ${darkElemsBgc}; 
    color: ${darkTextColor};
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: ${textColor}; // Set text color to textColor
  background-color: ${primeColor}; // Set background color to primeColor
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${darken(
      10,
      primeColor
    )}; // Use darken function to darken the color
  }
`;

export const ErrorMessage = styled.div`
  color: ${red}; // Set text color to red
  margin-bottom: 15px;
  margin-top: -5px;
`;
