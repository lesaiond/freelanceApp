import React from "react"
import { Button } from "../UI/Button/Button"
import { HeaderStyled } from "./header.style"
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  className: string;
}

export const Header = ({className}: HeaderProps) => {
  const navigate = useNavigate()

  return (
    <HeaderStyled className={className}>
      <div className="logo">FreelanceApp</div>
      <div>
        <nav></nav>
        <Button onClick={() => navigate("/login")} className={className} buttonText="login" />
      </div>
    </HeaderStyled>
  )
}