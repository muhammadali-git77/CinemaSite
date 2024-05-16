import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaPython } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoAngular } from "react-icons/io5";
import { SiDjango } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { FaRobot } from "react-icons/fa";

export default function SectionThree(params) {
    return (
      <div className="container mt-16 justify-center max-[300px]:mt-[300px] max-[400px]:mt-[200px] max-[650px]:mt-[100px]">
        <h1
          data-aos="zoom-in-up"
          className="!mx-auto justify-center items-center flex text-[20px] sm:text-[30px] lg:text-[40px] font-[800]"
        >
          Kursda <span className="ColorGreen ml-2 flex">o'rgatilmoqda:</span>
        </h1>
        <div className="mt-11 max-w-[800px] mx-auto">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              450: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
              120: {
                slidesPerView: 3,
                spaceBetween: 2,
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 7,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination]}
            className="!pb-11 "
          >
            <SwiperSlide className="">
              <div
                data-aos="fade-down"
                className=" !w-[100px] !h-[100px] flex justify-center items-center"
              >
                <div className="justify-center">
                  <FaHtml5 size={80} className="text-center" />
                  <h1 className="text-center">HTML</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-up"
                className=" !w-[100px] !h-[100px] flex justify-center items-center"
              >
                <div className="justify-center">
                  <IoLogoCss3 size={80} className="text-center" />
                  <h1 className="text-center">CSS</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-down"
                className=" !w-[100px] !h-[100px] flex justify-center items-center"
              >
                <div className="justify-center">
                  <RiJavascriptFill size={80} className="text-center" />
                  <h1 className="text-center">JAVASCRIPT</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-up"
                className=" !w-[100px] !h-[100px] flex justify-center items-center"
              >
                <div className="justify-center">
                  <IoLogoReact size={80} className="text-center" />
                  <h1 className="text-center">REACT</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-down"
                className=" !w-[100px] !h-[100px] flex justify-center items-center"
              >
                <div className="justify-center">
                  <IoLogoAngular size={80} className="text-center" />
                  <h1 className="text-center">ANGULAR</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-up"
                className=" !w-[100px] !h-[100px] flex justify-center items-center"
              >
                <div className="justify-center">
                  <SiNextdotjs size={75} className="text-center" />
                  <h1 className="text-center">NEXT JS</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-down"
                className=" !w-[100px] !h-[100px] flex justify-center items-center"
              >
                <div className="justify-center">
                  <FaPython size={80} className="text-center" />
                  <h1 className="text-center">PYTHON</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-up"
                className=" !w-[100px] !h-[100px] flex justify-center items-center"
              >
                <div className="justify-center">
                  <SiDjango size={80} className="text-center" />
                  <h1 className="text-center">DJANGO</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-down"
                className=" !w-[100px] !h-[100px] flex justify-center items-center"
              >
                <div className="justify-center">
                  <FaRobot size={80} className="text-center" />
                  <h1 className="text-center">TELE.. BOT</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div
                data-aos="fade-up"
                className=" !w-[100px] !h-[100px] flex justify-center items-center"
              >
                <div className="justify-center">
                  <FaPython size={80} className="text-center" />
                  <h1 className="text-center">Python</h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
}