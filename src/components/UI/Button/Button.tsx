import { StyledButton } from "./Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
}

export const Button = ({ buttonText, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{buttonText}</StyledButton>;
};
