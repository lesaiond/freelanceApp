import { useNavigate } from "react-router-dom";
import { HeaderStyled } from "./header.style"
import SearchInput from "../UI/SearchInput/SearchInput";
import Notification from "../Notification/Notification";

interface HeaderProps {
  className?: string;
}

export const Header = ({className}: HeaderProps) => {
  const navigate = useNavigate()

  return (
    <HeaderStyled className={className}>
      <div className="leftPart">
        <div className="logo" onClick={() => navigate("/")}>Nevic’s</div>
        <SearchInput />
      </div>
      <div className="rightPart">
        <nav>
          <ul>
            <li onClick={() => navigate("/job")}>Jobs</li>
            <li><Notification /></li>        
            <li onClick={() => navigate("/messages")}>Messages</li>
          </ul>
        </nav>
        <div onClick={() => navigate("/profile")}>
          <img src="/public/img/avatar/Ellipse 92.png" alt="" className="avatar" />
        </div>
      </div>
    </HeaderStyled>
  )
}