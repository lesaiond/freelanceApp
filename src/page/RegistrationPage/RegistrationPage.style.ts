// LoginStyles.ts
import styled from "styled-components";
import { colors, newColors } from "../../style/__colors";

const { primeColor, red, textColor, elemsBgc } = colors;
const { subTextColor, secondPrimeColor, borderColor } = newColors

export const RegistrationStyledContainer = styled.div`
	margin: 0 auto;
  background-color: ${elemsBgc};
  color: ${textColor};
	border-radius: 20px;
  form {
		display: grid;
    margin: 30px 0 0 0;
  }

	select {
    border: 1px solid ${borderColor};
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: ${elemsBgc}; 
    color: ${textColor};
		padding: 10px;
    &.errorMessage{
    border: 1px solid ${red};
    color: ${red};
  }
	}

  h1 {
      font-size: 32px; 
      font-weight: 400;
    }
    .subText {
      color: ${subTextColor};
    }
  .signup-text {
    padding: 5px 5px 20px 5px;
    text-align: center;
    .secondPrimeColor {
      color: ${secondPrimeColor};
    }
  }

  button {
    min-width: 280px;
    background: ${secondPrimeColor};
  }
  input {
    min-width: 280px;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${primeColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darken(${primeColor}, 10%);
  }
`;