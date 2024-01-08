import React, { forwardRef, Ref } from 'react';
import { ErrorMessage } from "../../../page/LoginPage/LoginPage.style";
import { StyledInput } from "./input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string | undefined;
  isError?: boolean;
  type?: string;
  imgSrc?: string;
}


export const Input = forwardRef(
  ({ isError, errorMessage, type, imgSrc, ...props }: InputProps, ref: Ref<HTMLInputElement>) => {

    return (
      <>
        <StyledInput className={isError ? 'errorMessage' : ''}>
          <div className="row">
            <img src={`../../../../public/${imgSrc}`} alt="" />
            <input ref={ref} type={type} {...props} />
          </div>
        </StyledInput>
        {isError && <ErrorMessage className="errorMessage">{errorMessage}</ErrorMessage>}
      </>
    );
  }
);
