import { useEffect, useState } from "react";
import { useSearchParams,useParams } from "react-router-dom";
import BannerTrailerItem from "../components/common/banner-trailer";
import Info from "../components/info/info";
import Movie from "../components/movie/movie";
import { getMovie } from "../services/services";
// import { Route, useNavigate } from "react-router-dom";

export default function Retrive(params) {
  const [moviePlay, setMoviePlay] = useState(false);
  const [searchParam] = useSearchParams();
  
  let {id} = useParams()
  const slug = searchParam.get("slug")
  useEffect(() => {
    getMovie(id,slug).then(({data}) => {

      console.log(slug, id);
    })
  },[])
  return (
    <main>
      {moviePlay ? (
        <Movie />
      ) : (
        <BannerTrailerItem myFunc={() => setMoviePlay(true)} video={true} />
      )}
      <Info />
    </main>
  );
}
