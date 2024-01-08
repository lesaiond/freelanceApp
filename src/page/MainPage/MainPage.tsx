import { Header } from "../../components/Header/header";
import { MainPageStyled } from "./MainPage.style";

export const MainPage: React.FC = () => {
  return (
    <MainPageStyled>
      <Header />
      <div className="mainContent">
        <section className="mainImg">
          <h2 className="title">
            Find local professionals for pretty much anything.
          </h2>
          <img
            src="/public/img/mainPage/bgcMainPage.png"
            alt="Find local professionals"
          />
        </section>
        <h3>Explore more services</h3>
        <section className="services">
          <div className="service">
            <div className="title">Web Development</div>
            <img src="/public/img/mainPage/Rectangle 1448.png" alt="coding" />
          </div>
          <div className="service">
            <div className="title">Mobile App Development</div>
            <img
              src="/public/img/mainPage/Rectangle 1449.png"
              alt="Mobile App Development"
            />
          </div>
          <div className="service">
            <div className="title">Graphic Designing</div>
            <img
              src="/public/img/mainPage/Rectangle 1450.png"
              alt="Graphic Designing"
            />
          </div>
        </section>
        <h3>Services you might also like</h3>
        <section className="likeSevices services">
          <div className="service">
            <div className="title">Web Development</div>
            <img
              src="/public/img/mainPage/Rectangle 1451.png"
              alt="Graphic Designing"
            />
          </div>
          <div className="service">
            <div className="title">Web Development</div>
            <img
              src="/public/img/mainPage/Rectangle 1452.png"
              alt="Graphic Designing"
            />
          </div>
          <div className="service">
            <div className="title">Graphic Designing</div>
            <img
              src="/public/img/mainPage/Rectangle 1453.png"
              alt="Graphic Designing"
            />
          </div>
        </section>
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
        <section className="likeSevices services">
          <div className="service">
            <img
              src="/public/img/mainPage/Rectangle 1455(1).png"
              alt="Graphic Designing"
            />
            <div className="title">Do you need an UI design for your Mobile App?</div>
          </div>
          <div className="service">
            <img
              src="/public/img/mainPage/Rectangle 1456(1).png"
              alt="Graphic Designing"
            />
            <div className="title">Need a professional Business Card?</div>
          </div>
          <div className="service">
            <img
              src="/public/img/mainPage/Rectangle 1455(1).png"
              alt="Graphic Designing"
            />
            <div className="title">Do you need an UI design for your Mobile App?</div>
          </div>
        </section>
      </div>
    </MainPageStyled>
  );
};
