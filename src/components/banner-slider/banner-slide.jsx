import { Swiper, SwiperSlide } from "swiper/react";
import {  useNavigate } from "react-router-dom";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import BannerTrailerItem from "../common/banner-trailer";

export default function BannerSlider(params) {
  const navigate = useNavigate()
  return (
    <div className="">
      <BannerTrailerItem
        myFunc={() => {
          navigate("/1");
        }}
        img={true}
      />
    </div>
  );
}
