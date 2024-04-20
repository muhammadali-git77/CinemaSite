import { useEffect, useState } from "react";
import BannerSlider from "../components/banner-slider/banner-slide";
import CardSlider from "../components/card-slider/card-sliders";
import { getModuls } from "../services/services";

export default function Home(params) {
  let cardsItemLength = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13];
  const [movieSection, setMoviSection] = useState([]);
  
  useEffect(() => {
    getModuls().then(({data}) => {
      setMoviSection(data['data']);
    })
  },[])
  return (
    <div>
      <BannerSlider />
      {/* {movieSection.map((item) => (
        <CardSlider
          key={item["selectionId"]}
          url={
            "v2/cards/movies/selection-cards?itemsPerPage=12&moduleId=27&page=1&selectionId=" +
            item["selectionId"]
          }
          items={cardsItemLength}
          title={"Eng sevimli filmlar"}
        />
      ))} */}
      {movieSection.map((item) => (
        <CardSlider
          key={item["electionId"]}
          url={
            "v2/cards/movies/selection-cards?itemsPerPage=12&moduleId=27&page=1&selectionId=" +
            item["selectionId"]
          }
          title={item["selectionTitle"]}
        />
      ))}
      
    </div>
  );
}
