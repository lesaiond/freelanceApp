// LoginStyles.ts
import styled from "styled-components";
import { colors } from "../../style/__colors";

const { primary, danger, white } = colors;

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

  .loginForm {
    padding: 20px;
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
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  color: ${white};
  background-color: ${primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darken(${primary}, 10%);
  }
`;

export const ErrorMessage = styled.div`
  color: ${danger};
  margin-bottom: 15px;
  margin-top: -5px;
`;
