import { useState } from "react";
import { Input } from "../../components/UI/Input/Input"
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Button } from "../../components/UI/Button/Button";

interface FormData {
	username: string;
	mail: string
}

export const SignUpPage = () => {
	const [showError, setShowError] = useState(false)
	const { handleSubmit, control } = useForm<FormData>()

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
		setShowError(true)
	}
	return (
		<>
			<h1>SignUp</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Controller
					name="username"
					control={control}
					render={({ field }) =>
						<Input
							placeholder="user"
							type="text"
							errorMessage="Error"
							isError={showError} 
							{...field}
							/>
					}/>
				<Controller
					name="mail"
					control={control}
					render={({ field }) =>
						<Input
							placeholder="mail"
							type="email"
							errorMessage="Error"
							isError={showError} 
							{...field}
							/>
					}/>
					<Button type="submit" buttonText="Sign up" />
			</form>
			<span>Already have an account<span className="orange">Sign In </span></span>
		</>
	)
}