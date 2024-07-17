import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "../../components/UI/Input/Input";
import { ErrorMessage, LoginStyledContainer } from "./LoginPage.style";
import { Button } from "../../components/UI/Button/Button";
import StyledLink from "../../components/StyledLink/StyledLink";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/useSlice";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = localStorage.getItem("theme");

  const [errorLogin, setErrorLogin] = useState(false)

  const storedUserData = JSON.parse(
    localStorage.getItem("registrationData") || "{}"
  );

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    dispatch(setUser(data));
    if (data.username === "admin" && data.userpassword === "00000000") {
      navigate("/admin");
    } else if (
      data.username === storedUserData.username &&
      data.userpassword === storedUserData.userpassword
    ) {
      navigate("/");
      localStorage.setItem("login", "success")
    } else {
      console.log("Loser !!!");
      setErrorLogin(true)
    }
    console.log(
      "admin?",
      data.username === "admin" && data.userpassword == "00000000"
    );
  };

  return (
    <>
      <LoginStyledContainer>
        <img
          className="mainImg"
          src="../../../public/img/authorization/linkedin-sales-solutions-UK1N66KUkMk-unsplash 1.png"
          alt=""
        />
        <div className={`loginContainer ${theme}`}>
          <h1>Sign In</h1>
          <span className="subText">
            Type your username and password to sign in
          </span>
          <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
          { errorLogin && <ErrorMessage>User not found</ErrorMessage>}
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <>
                  <Input
                    imgSrc="svg/person.svg"
                    placeholder="введите пароль"
                    id="username"
                    type="text"
                    errorMessage={errors.username?.message}
                    isError={!!errors.username}
                    ref={field.ref}
                    {...field}
                  />
                </>
              )}
            />

            <div>
              <Controller
                name="userpassword"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <>
                    <Input
                      imgSrc="/svg/lock.svg"
                      placeholder="введите пароль"
                      type="password"
                      errorMessage={errors.userpassword?.message}
                      isError={!!errors.userpassword}
                      ref={field.ref}
                      {...field}
                    />
                  </>
                )}
              />
            </div>

            <Button
              buttonText="Sign in"
              type="submit"
              className={`button ${theme}`}
            />
          </form>

          <div onClick={() => navigate("/signup")} className="signupText">
            Don’t have an account
            <StyledLink className=""> Sign Up </StyledLink>now
          </div>
        </div>
      </LoginStyledContainer>
    </>
  );
};
