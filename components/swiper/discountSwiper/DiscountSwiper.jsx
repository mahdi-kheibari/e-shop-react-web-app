import React from "react";
import { Swiper } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import style from './DiscountSwiper.module.scss'
const DiscountSwiper = (props) => {
  return (
    <Swiper
      modules={[FreeMode]}
      className={`${style['swiper-container-3']}`}
      slidesPerView="auto"
      spaceBetween={10}
      freeMode={{enabled:true,sticky:true}}
    >
      {props.children}
    </Swiper>
  );
};

export default DiscountSwiper;
