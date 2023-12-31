import { useState } from "react";
import { Input } from "../../components/UI/Input/Input";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/UI/Button/Button";

interface FormData {
  username: string;
  mail: string;
}

export const LoginPage = () => {
  const [showError, setShowError] = useState(false);
  const { handleSubmit, control } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    setShowError(true);
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="user"
              type="text"
              errorMessage="Error"
              isError={showError}
              {...field}
            />
          )}
        />
        <Controller
          name="mail"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="mail"
              type="email"
              errorMessage="Error"
              isError={showError}
              {...field}
            />
          )}
        />
        <Button type="submit" buttonText="Login" />
      </form>
      <span>
        Don`t have a account
        <span className="orange" onClick={() => navigate("/signUp")}>
          {" "}
          Sign{" "}
        </span>
      </span>
    </>
  );
};
