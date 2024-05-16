import { useEffect, useState } from "react";
import BannerSlider from "../components/banner-slider/banner-slide";
import { getModuls } from "../services/services";
import SectionTwo from "../components/common/sectionTwo";
import SectionThree from "../components/common/sectionThree";
import SectionFour from "../components/common/sectionFour";
import SectionFife from "../components/common/sectionFife";
import SectionTwo2 from "../components/about/sectionTwo2";

export default function Home(params) {
  // let cardsItemLength = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13];
  const [movieSection, setMoviSection] = useState([]);
  
  useEffect(() => {
    getModuls().then(({data}) => {
      setMoviSection(data['data']);
    })
  },[])
  return (
    <div>
      <BannerSlider />
      <SectionTwo/>
      <SectionFife/>
      <SectionThree/>
      <SectionFour/>
      <SectionTwo2/>
    </div>
  );
}
