import { useEffect } from "react";
import { Header } from "../../components/Header/header";
import TripleSlider from "../../components/Slider/TripleSlider";
// import Swiper from "../../components/Swiper/Swiper";
import { MainPageStyled } from "./MainPage.style";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Web Development",
    image: "/public/img/mainPage/Rectangle 1448.png",
  },
  {
    title: "Mobile App Development",
    image: "/public/img/mainPage/Rectangle 1449.png",
  },
  {
    title: "Graphic Designing",
    image: "/public/img/mainPage/Rectangle 1450.png",
  },
  {
    title: "Web Development",
    image: "/public/img/mainPage/Rectangle 1448.png",
  },
  {
    title: "Mobile App Development",
    image: "/public/img/mainPage/Rectangle 1449.png",
  },
];

const likedServices = [
  {
    title: "Web Development",
    image: "/public/img/mainPage/Rectangle 1451.png",
  },
  {
    title: "Mobile App Development",
    image: "/public/img/mainPage/Rectangle 1452.png",
  },
  {
    title: "Graphic Designing",
    image: "/public/img/mainPage/Rectangle 1453.png",
  },
  {
    title: "Web Development",
    image: "/public/img/mainPage/Rectangle 1451.png",
  },
  {
    title: "Mobile App Development",
    image: "/public/img/mainPage/Rectangle 1452.png",
  },
  {
    title: "Graphic Designing",
    image: "/public/img/mainPage/Rectangle 1453.png",
  },
];

export const MainPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const loginData = localStorage.getItem("login");
    console.log("loginData", loginData);
    if (loginData === "success") {
      console.log("loginData", "success");
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <MainPageStyled>
      <Header />
      <div className="mainContent">
        <section className="mainImg">
          <h2 className="title" onClick={() => navigate("/job")}>
            Find local professionals for pretty much anything.
          </h2>
          <img
            src="/public/img/mainPage/bgcMainPage.png"
            alt="Find local professionals"
          />
        </section>
        <h3>Explore more services</h3>
        <TripleSlider services={services} />
        <h3>Services you might also like</h3>
        <TripleSlider services={likedServices} />
        <section className="globe">
          <img
            src="/public/img/mainPage/mobile-phone-as-platform-planet-lines-satellites-orbits-around-globe-spaceships-cellular-communication-174431570-removebg-preview 1.png"
            alt=""
            className="globeImg"
          />
          <div>
            <h2>Providing services round the globe</h2>
            <p>
              Doesn’t matter at which part of world you are at let us know what
              you need and get best professionals for you work.
            </p>
          </div>
        </section>
        <section className="services">
          <div className="service">
            <img
              src="/public/img/mainPage/Rectangle 1455(1).png"
              alt="Graphic Designing"
            />
            <div className="title" onClick={() => navigate("/job")}>
              Do you need an UI design for your Mobile App?
            </div>
          </div>
          <div className="service">
            <img
              src="/public/img/mainPage/Rectangle 1456(1).png"
              alt="Graphic Designing"
            />
            <div className="title" onClick={() => navigate("/job")}>
              Need a professional Business Card?
            </div>
          </div>
          <div className="service">
            <img
              src="/public/img/mainPage/Rectangle 1455(1).png"
              alt="Graphic Designing"
            />
            <div className="title" onClick={() => navigate("/job")}>
              Do you need an UI design for your Mobile App?
            </div>
          </div>
        </section>
      </div>
    </MainPageStyled>
  );
};

// const services = [
//   {
//     image: "/public/img/mainPage/Rectangle 1455(1).png",
//     title: "Do you need an UI design for your Mobile App?",
//   },
//   {
//     image: "/public/img/mainPage/Rectangle 1456(1).png",
//     title: "Need a professional Business Card?",
//   },
//   {
//     image: "/public/img/mainPage/Rectangle 1455(1).png",
//     title: "Do you need an UI design for your Mobile App?",
//   },
// ];
