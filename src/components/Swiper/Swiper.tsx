import React, { useRef, useEffect } from 'react';
import Swiper from 'swiper';

const SwiperComponent: React.FC = () => {
  const swiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    // Инициализация Swiper при монтировании компонента
    swiperRef.current = new Swiper('.services', {
      slidesPerView: 'auto',
      spaceBetween: 40,
      // другие настройки Swiper по вашему выбору
    });

    // Очистка Swiper при размонтировании компонента
    return () => {
      if (swiperRef.current) {
        swiperRef.current.destroy();
      }
    };
  }, []);

  return (
    <section className="services">
      {/* Ваши существующие слайды */}
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
  );
};

export default SwiperComponent;
