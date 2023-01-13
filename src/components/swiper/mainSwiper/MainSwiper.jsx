import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import './mainSwiper.scss'
const MainSwiper = (props) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      navigation
      pagination={props.pagination?{clickable:true}:false}
      effect={"fade"}
      autoplay={{delay:3500,disableOnInteraction:false}}
      loop
      className={`swiper-container ${props.rootStyle}`}
    >
      {props.children}
    </Swiper>
  );
};

export default MainSwiper;
