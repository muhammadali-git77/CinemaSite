import React from "react";
import { FaRegCirclePlay } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Card({ item }) {
  
  return (
    <div className="cursor-pointer relative">
      <div className="relative w-full md:h-[260px] lg:h-[280px] xl:h-[340px] overflow-hidden rounded-xl card-itemss">
        <img
          src={item["files"]["posterUrl"]}
          className="h-full w-full object-cover"
          alt=""
        />
        <Link to={`/${item['movieId']}?slug=${item['slug']}`} className="info-box flex justify-center bg-black/65 items-center flex-wrap absolute w-full h-full top-0 right-0">
          <FaRegCirclePlay size={55} />
          <span className=" p-3 absolute bottom-0 left-0 ">
            <span>{item["year"]}, </span>
            {item["genres"].map(({ genreName, genreId }) => (
              <React.Fragment key={genreId}>
                <span>{genreName}</span>
                <span className="last:hidden">, </span>
              </React.Fragment>
            ))}
          </span>
        </Link>
        <span className=" py-3 px-3 font-bold absolute backdrop-blur-md top-2 right-2 rounded-md">
          {item["params"]["ageLimit"]}+
        </span>
      </div>
      <b className="">{item["movieTitle"]}</b>
    </div>
  );
}
