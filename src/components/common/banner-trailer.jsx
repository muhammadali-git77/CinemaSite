
import { Link } from "react-router-dom";
import HeaderImage from "../../assets/itclogo111.png";
import FogComponent from "./background";

import ITC_logo from "../../assets/ITC_logo1.png";
import ITC_logoHover from "../../assets/itclogo112.png";

export default function BannerTrailerItem(props) {
  function handleScroll(headerID) {
    const headerId = document.getElementById("headerID");
    const { scrollY } = window;
    scrollY > 10
      ? headerId.current?.classList.add("active")
      : headerId.current?.classList.remove("active");
  }
  return (
    <div className=" w-full bg-white">
      <div className="z-10 repeate-Effect absolute w-full h-[100vh] flex items-center justify-center">
        <div className="justify-center w-full items-center mx-auto max-[300px]:mt-[100px]">
          <div className="items-center justify-center Itc_logo_hover_div ">
            <img src={ITC_logo} alt="" className="w-[230px] mx-auto" />
            <img
              src={ITC_logoHover}
              alt=""
              className="shadowed-textWhite m-0 w-auto h-[47px] sm:h-[80px] mx-auto "
            />
          </div>
          <h1 className="text-[40px] mt-3 font-[700] mx-auto text-center">
            Beshariq tumani filiali
          </h1>
          <p className="max-w-[600px] text-center mx-auto mt-5">
            IT center Beshariq filiali 2021-yil Beshariq shahrida tashkil
            etilgan. Kompaniyaning falsafasi O'zbekistonning IT sohasidagi
            xalqaro standartlarga javob beradigan "Dasturchi yoshlarni"
            shakllantirish ...
          </p>
          <Link
            to={"/about"}
            className="btn rounded-full w-[260px] h-[55px] justify-center flex mt-11 !mx-auto items-center shadowed-text BgGreen hover:bg-transparent hover:border-[2.5px] hover:border-green-600 transition-all  duration-500 text-2xl"
          >
            Batasil
          </Link>
        </div>
      </div>
      <div className="w-full h-[100vh]">
        <FogComponent className="opacity-10" />
      </div>
    </div>
  );
}
