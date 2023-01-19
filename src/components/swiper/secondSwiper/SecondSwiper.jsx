import React from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import './secondSwiper.scss'
const SecondSwiper = (props) => {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      slidesPerView={6}
      spaceBetween={10}
      className={`swiper-container-2 ${props.rootStyle}`}
    >
      {props.children}
    </Swiper>
  );
};

export default SecondSwiper;
