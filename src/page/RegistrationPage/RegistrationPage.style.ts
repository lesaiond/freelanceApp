// LoginStyles.ts
import styled from "styled-components";
import { colors } from "../../style/__colors";

const { primeColor, red, textColor, elemsBgc, lightGray } = colors;

export const RegistrationStyledContainer = styled.div`
	margin-top: 5vw;
  max-width: 600px;
  min-width: 350px;
  -webkit-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  background-color: ${elemsBgc};
  box-shadow: 0px 4px 8px 0px rgba(34, 60, 80, 0.2);
  color: ${textColor};
	
  form {
		display: grid;
    padding: 20px;
  }

	select {
    border: 1px solid ${lightGray};
    border-radius: 4px;
    margin-bottom: 10px;
    background-color: ${elemsBgc}; 
    color: ${textColor};
		padding: 10px;
    &.errorMessage{
    border: 1px solid ${red};
    color: ${red};
  }
  /* &:enabled {
  color: ${textColor};
  border: 1px solid ${lightGray};
} */
	}

  h1 {
    margin: 0 auto;
    padding-top: 15px;
    text-align: center;
  }
  
  .signup-text {
    padding: 5px 5px 20px 5px;
    text-align: center;
  }

  button {
    min-width: 280px;
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

export const ErrorMessage = styled.div`
  color: ${red};
  margin-bottom: 15px;
  margin-top: -5px;
`;
