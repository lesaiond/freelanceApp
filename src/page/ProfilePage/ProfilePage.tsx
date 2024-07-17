import React, { useEffect } from "react";
import { StyledProfilePage } from "./ProfilePage.style";
import ProfileComponent from "../../components/ProfileComponent/ProfileComponent";
import { Header } from "../../components/Header/header";
import Favorites from "../FavoritesPage/Favorites";
import { useNavigate } from "react-router-dom";
import Rating from "../../components/UI/Rating/Rating";

const ProfilePage = () => {
  const navigate = useNavigate();
  const registrationData = JSON.parse(
    localStorage.getItem("registrationData") || "{}"
  );
  console.log("registrationData", registrationData);

  useEffect(() => {
    const loginData = localStorage.getItem("login");
    console.log("loginData", loginData);
    if (loginData === "success") {
      console.log("loginData", "success");
    } else {
      navigate("/login");
    }
  }, []);

  const userInfo = JSON.parse(localStorage.getItem("registrationData"));

  return (
    <StyledProfilePage>
      <Header />
      <div className="content">
        <ProfileComponent />

        <div className="mainContent">
          <div className="resume">
            <span className="username prime">
              {userInfo.firstName} 
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
              >
                <path d="m344-60-76-128-144-32 14-148-98-112 98-112-14-148 144-32 76-128 136 58 136-58 76 128 144 32-14 148 98 112-98 112 14 148-144 32-76 128-136-58-136 58Zm34-102 102-44 104 44 56-96 110-26-10-112 74-84-74-86 10-112-110-24-58-96-102 44-104-44-56 96-110 24 10 112-74 86 74 84-10 114 110 24 58 96Zm102-318Zm-42 142 226-226-56-58-170 170-86-84-56 56 142 142Z" />
              </svg>
            </span>
            <br />
            <br />
            <span className="username">{userInfo.subCategory}</span>
            <br />
            <br />
            Привет друзья, Меня зовут Павел, если вы хотите, что бы Ваш сайт
            выделялся среди других и продавал тогда Вам нужен именно Я.
            <br />
            <br />
            При работе со мной вы получаете качественный, уникальный и продающий
            Landing Page, блок или страницу сайта. Я всегда готов предложить вам
            свежий взгляд, а так же выслушать ваши пожелания, что бы реализовать
            их в макете.
            <br />
            <br />
            Все правки которые возникают в процессе работы и после нее
            оперативно устраняются, вам не придется искать меня, так как я
            постоянно на связи И всегда ГОТОВ помочь (количество правок
            неограниченно) У меня есть три вида опций , но если вам этого мало,
            вы всегда можете добавить еще
            <br />
            <br />
            Мною также может быть разработан любой адаптив к сайту, но эта
            услуга оплачивается отдельно, пожалуйста спрашивайте, мы всегда
            сможем договориться
          </div>
          <Favorites />
        </div>
        <Rating />
      </div>
    </StyledProfilePage>
  );
};

export default ProfilePage;
