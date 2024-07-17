import React, { useState } from "react";

import { StyledTripleSlider } from "./TripleSlider.style";
import { useNavigate } from "react-router-dom";

interface Service {
  title: string;
  image: string;
}

interface TripleSliderProps {
  services: Service[];
}

const TripleSlider: React.FC<TripleSliderProps> = ({ services }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate()

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (services.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? services.length - 3 : prevIndex - 1
    );
  };

  return (
      <StyledTripleSlider className="triple-slider">
        <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * (11.1111 + 22)}%)` }}>
          {services.map((service, index) => (
            <div
              key={index}
              className={`service`}
            >
              <div className="title" onClick={() => navigate("/job")}>{service.title}</div>
              <img src={service.image} alt={service.title} />
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevSlide}>
          {`<`}
        </button>
        <button className="next" onClick={nextSlide}>
          {`>`}
        </button>
      </StyledTripleSlider>
  );
};

export default TripleSlider;
