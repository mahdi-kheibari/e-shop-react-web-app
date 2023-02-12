import React from "react";
import { Swiper } from "swiper/react";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/scrollbar";
import style from "./SecondSwiperSm.module.scss";
const SecondSwiperSm = (props) => {
  return (
    <Swiper
      modules={[Scrollbar]}
      scrollbar={{ draggable: true, hide: true }}
      slidesPerView={"auto"}
      spaceBetween={10}
      className={`${style['swiper-container-4']} ${props.rootStyle}`}
    >
      {props.children}
    </Swiper>
  );
};

export default SecondSwiperSm;
