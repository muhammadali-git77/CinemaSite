import ITC_logo from "../../assets/ITC_logo1.png";
import ITC_logoHover from "../../assets/itclogo112.png";

import SectionTwo2 from "./sectionTwo2";


export default function SectionOne(params) {
  return (
    <div className="container">
      <div className="items-center justify-center mt-[90px] flex Itc_logo_hover_div ">
        <img src={ITC_logo} alt="" className="w-[130px] sm:w-[230px]" />
        <img
          src={ITC_logoHover}
          alt=""
          className="shadowed-textWhite w-auto h-[35px] sm:h-[80px] "
        />
      </div>
      <div className="max-w-[900px] mt-14 items-center mx-auto">
        <h1 data-aos="fade-up" className="font-[800] text-[25px] ">
          IT center Beshariq filiali haqida
        </h1>
        <p data-aos="fade-up" className="mt-3 ">
          IT center Beshariq filiali 2021-yil Beshariq shahrida tashkil etilgan.
          Kompaniyaning falsafasi O'zbekistonning IT sohasidagi xalqaro
          standartlarga javob beradigan "Dasturchi yoshlarni" shakllantirish,
          yosh dasturchilarga o'zlari ustida ishlash va shu bilan birga rasmiy
          ravishda ishga joylashish imkoniyatini yaratish, kompaniyani IT jahon
          sahnasida taniqli joyga olib borishdan iborat.
        </p>
        <h1 data-aos="fade-up" className="font-[800] text-[17px] mt-5">
          Kurs haqida
        </h1>
        <p data-aos="fade-up" className="mt-2 ">
          Bizning kurslarimiz haftaning xar kunida mavjud. Siz o'zingizga maqul
          kunni tanlab xattoki ertalab yoki kechi payt ham darslarga
          qatnashishingiz mumkin. Darslar 1soat u 30 daqiqadan bo'ladi. Darslar
          online yoki offline tarzida olib boriladi. Kurslar: <br /> 1.Kampyuter
          Savodxonligi <br /> 2.Web Dasturlash 2 ga bolinadi: FrontEnd va
          BackEnd <br />
          3.Android ilovalar <br /> Kurs narxlari va kusr davomiyligi: Kampyuter
          savodxonligi 2 oy 200 ming so'mdan; Web dasturlash FrontEnd 6 oy 300
          ming so'mdan; BackEnd 6 0y 300 mingso'mdan; Web ilovalar 6 oy 300
          mingsomdan; Sizlarni ITC markazimizda kutib qolamiz!
        </p>
        
      </div>
      
      <SectionTwo2/>
    </div>
  );
}
