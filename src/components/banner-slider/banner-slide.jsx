import { Swiper, SwiperSlide } from "swiper/react";
import {  useNavigate } from "react-router-dom";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerTrailerItem from "../common/banner-trailer";

export default function BannerSlider(params) {
  const navigate = useNavigate()
  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerTrailerItem myFunc={() => {navigate("/1")}} img={true} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerTrailerItem myFunc={() => {navigate("/1")}} img={true} />
        </SwiperSlide>
        <SwiperSlide>
          <BannerTrailerItem myFunc={() => {navigate("/1")}} img={true} />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
