import styled from "styled-components";
import { colorsLight, newColors } from "../../style/__colors"; 

const { red } = colorsLight;
const { textColor, subTextColor } = newColors

export const LoginStyledContainer = styled.div`
  margin: 5vw auto;
  display: flex;
  box-shadow: 0px 8px 30px 0px rgba(0, 0, 0, 0.25); 
  border-radius: 20px;
  height: 40vw;
  width: 70vw;
  color: ${textColor};
  .mainImg {
    height: 40vw;
  }
  .loginContainer {
    margin: auto;
    h1 {
      font-size: 32px; 
      font-weight: 400;
    }
    .subText {
      color: ${subTextColor};
    }
    
      .loginForm {
        margin: 40px auto 0 auto;
      }
      .signupText {
        text-align: center;
      }
  }
`;


export const ErrorMessage = styled.div`
  color: ${red};
  margin-bottom: 15px;
  margin-top: -5px;
`;
