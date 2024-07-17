import { StyledMessagesPage } from "./MessagesPage.style";
import { Header } from "../../components/Header/header";
import UserMessageList from "../../components/UsersMessage/UsersMessage";
import ChatInput from "../../components/UI/ChatInput/ChatInput";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const users = [
  {
    username: 'Andy_Ranger',
    src: '/public/img/avatar/Ellipse 95.png',
    time: '1 hour',
  },
  {
    username: 'Hamza Munir',
    src: '/public/img/avatar/Ellipse 94.png',
    time: '2 Weeks',
  },
  {
    username: 'Ab_Sami',
    src: '/public/img/avatar/Ellipse 93.png',
    time: '1 Month',
  },
  {
    username: 'Wahab7755',
    src: '/public/img/avatar/Ellipse 95.png',
    time: '4 Months',
  },
];

const MessagesPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const loginData = localStorage.getItem("login")
    console.log("loginData", loginData);
    if(loginData === "success") {
      console.log("loginData", "success");
    } else {
      navigate("/login")
    }
    
  }, [])
  return (
    <StyledMessagesPage>
      <Header />
      <div className="mainContent">
        <div className="leftBar">
          <UserMessageList users={users} />
        </div>
        <ChatInput />
      </div>
    </StyledMessagesPage>
  );
};

export default MessagesPage;
