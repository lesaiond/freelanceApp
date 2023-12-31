interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    buttonText: string;
}

export const Button = ({ buttonText, ...props}: ButtonProps) => {
    return (
        <button {...props}>{buttonText}</button>
    )
}