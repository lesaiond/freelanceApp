import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../../components/UI/Input/Input";
import { LoginStyledContainer } from "./LoginPage.style";
import { Button } from "../../components/UI/Button/Button";
import StyledLink from "../../components/StyledLink/StyledLink";
import { useNavigate } from "react-router-dom";
// import { BoxShadow } from "../../components/BoxShadow/BoxShadow";

interface LoginFormInputs {
  username: string;
  userpassword: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  userpassword: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
});

export const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log("you submited");
    console.log(!!errors.userpassword);
    navigate("/")
    console.log(data);
  };

  return (
    <>
      <LoginStyledContainer>
        <div className="loginContainer">
          <h1>Login</h1>
          <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Controller
                name="username"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input
                      placeholder="введите пароль"
                      id="username"
                      type="text"
                      className="input"
                      errorMessage={errors.username?.message}
                      isError={!!errors.username}
                      {...field}
                    />
                  </>
                )}
              />
            </div>

            <div>
              <Controller
                name="userpassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input
                      placeholder="введите пароль"
                      type="password"
                      className="input"
                      errorMessage={errors.userpassword?.message}
                      isError={!!errors.userpassword}
                      {...field}
                    />
                  </>
                )}
              />
            </div>

            <Button buttonText="Submit" type="submit" className="button" />
          </form>

          <div  onClick={() => navigate("/signup")} className="signup-text">
            Don't have an account 
            <StyledLink> sign up</StyledLink>
          </div>
        </div>
      </LoginStyledContainer>
    </>
  );
};
