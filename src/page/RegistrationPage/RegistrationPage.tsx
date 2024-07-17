import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

import { Input } from "../../components/UI/Input/Input";
import { Button } from "../../components/UI/Button/Button";
import StyledLink from "../../components/StyledLink/StyledLink";
import { ErrorMessage } from "../LoginPage/LoginPage.style";
import { BoxShadow } from "../../components/BoxShadow/BoxShadow";

import { RegistrationStyledContainer } from "./RegistrationPage.style";

// Определение схемы для валидации
const schema = yup.object().shape({
  useremail: yup.string().email().required(),
  username: yup.string().required(),
  userpassword: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  userType: yup.string().oneOf(["freelance", "client", ""]).required(),
});

interface FormInput {
  useremail: string;
  username: string;
  userpassword: string;
  userType: NonNullable<"freelance" | "client" | "" | undefined>;
}

const RegistrationPage: React.FC = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormInput) => {
    localStorage.setItem('registrationData', JSON.stringify(data));
    navigate("/signUp/2");
  };

  return (
    <BoxShadow>
      <img
        src="/public/img/authorization/linkedin-sales-solutions-UK1N66KUkMk-unsplash 1.png"
        className="mainImg"
        alt=""
      />
      <RegistrationStyledContainer>
        <h1>Sign Up</h1>
        <span className="subText">
          Type Email, Username and password to sign up
        </span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                imgSrc="svg/person.svg"
                placeholder="Username"
                isError={!!errors.username}
                errorMessage={errors.username?.message}
                type="text"
                ref={field.ref}
                {...field}
              />
            )}
          />
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                imgSrc="svg/mail.svg"
                type="email"
                placeholder="Email"
                isError={!!errors.useremail}
                errorMessage={errors.useremail?.message}
                ref={field.ref}
                {...field}
              />
            )}
          />

          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                ref={field.ref}
                imgSrc="svg/lock.svg"
                placeholder="Password"
                isError={!!errors.userpassword}
                errorMessage={errors.userpassword?.message}
                type="password"
                {...field}
              />
            )}
          />

          <Controller
            name="userType"
            control={control}
            render={({ field }) => (
              <select {...field} className={errors.userType && "errorMessage"}>
                <option value="">choose any one</option>
                <option value="freelance">Freelance</option>
                <option value="client" disabled>
                  Client
                </option>
              </select>
            )}
          />
          <ErrorMessage>{errors.userType?.message}</ErrorMessage>

          <Button type="submit" buttonText="Sign Up" />
        </form>
        <div onClick={() => navigate("/login")} className="signup-text">
          Don’t have an account
          <StyledLink className="secondPrimeColor"> Sign in</StyledLink> now
        </div>
      </RegistrationStyledContainer>
    </BoxShadow>
  );
};

export default RegistrationPage;
