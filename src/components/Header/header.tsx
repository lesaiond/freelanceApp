import { Button } from "../UI/Button/Button"
import { HeaderStyled } from "./header.style"
import { useNavigate } from "react-router-dom";
import SearchInput from "../UI/SearchInput/SearchInput";

interface HeaderProps {
  className?: string;
}

export const Header = ({className}: HeaderProps) => {
  const navigate = useNavigate()

  return (
    <HeaderStyled className={className}>
      <div className="leftPart">
        <div className="logo">Nevic’s</div>
        <SearchInput />
      </div>
      <div className="rightPart">
        <nav>
          <ul>
            <li>Orders</li>
            <li>Explore Services</li>
            <li>Notifications</li>
            <li>Messages</li>
          </ul>
        </nav>
        <Button onClick={() => navigate("/login")} className={className} buttonText="login" />
      </div>
    </HeaderStyled>
  )
}