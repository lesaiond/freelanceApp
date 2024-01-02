import { Button } from "../UI/Button/Button"
import { HeaderStyled } from "./header.style"

export const Header = () => {
  const toggleTheme = () => {
    const isTheme = localStorage.getItem("theme")
    if(isTheme === "dark") {
      localStorage.setItem("theme", "")
    }else if (isTheme === "") {
      localStorage.setItem("theme", "dark")
    }
  }

  return (
    <HeaderStyled>
      <div className="logo">FreelanceApp</div>
      <div>
        <nav></nav>
        <Button onClick={() => toggleTheme()} buttonText="change theme" />
      </div>
    </HeaderStyled>
  )
}