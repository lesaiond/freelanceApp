interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	errorMessage: string;
	isError: boolean;
}

export const Input = ({isError, errorMessage}: InputProps) => {
	return (
		<div className={isError? "errorInput" : "defaultInput"}>
			<input />
			{isError && (<span>{errorMessage}</span>)}
		</div>
	)
}