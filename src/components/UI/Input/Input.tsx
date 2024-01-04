import { ErrorMessage } from "../../../page/LoginPage/LoginPage.style";
import { StyledInput } from "./input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage: string | undefined;
  isError: boolean;
  type?: string;
}

export const Input = ({
  isError,
  errorMessage,
  type,
  ...props
}: InputProps) => {
  console.log(isError);
  
  return (
    <>
      <StyledInput className={isError ? "errorMessage ":" "} type={type} {...props} />
      {isError && (
        <ErrorMessage className="errorMessage">{errorMessage}</ErrorMessage>
      )}
    </>
  );
};
