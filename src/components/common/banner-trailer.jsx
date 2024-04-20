import { LuShare2 } from "react-icons/lu";
import BannerContentImage from "../../assets/bannerContentImage.png";
import BannerImage from "../../assets/bannerSliderss.png";

export default function BannerTrailerItem(props) {
  function handleScroll(headerID) {
    const headerId = document.getElementById("headerID");
    const { scrollY } = window;
    scrollY > 10
      ? headerId.current?.classList.add("active")
      : headerId.current?.classList.remove("active");
  }
  return (
    <div className="h-[60vh] md:h-[80vh] w-full bg-white relative ">
      <div className="top-0 right-0 z-10 repeate-Effect absolute w-full h-full"></div>
      {props.img && (
        <img
          className="top-0 right-0 absolute w-full h-full object-cover"
          src={BannerImage}
          alt=""
        />
      )}
      {props.video && (
        <video
          autoPlay
          muted
          className="top-0 right-0 absolute w-full h-full object-cover"
        >
          <source
            src={
              "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
            }
          />
        </video>
      )}

      <div className="container relative z-10 flex justify-center flex-col h-full">
        <img
          className="w-[200px] sm:w-[250px] md:w-[400px] h-auto object-contain"
          src={BannerContentImage}
          alt=""
        />
        <p className="text-[22px] mt-5 font-[500]">
          Detskiy, 2024, 3+ ,O'zbekiston{" "}
        </p>
        <div className="flex mt-5 gap-4">
          <button
            onClick={() => {
              props.myFunc();
            }}
            className="btn bg-green-600 px-11 rounded-lg btn-lg text-2xl font-bold"
          >
            Ko'rish
          </button>
          <button className="btn glass rounded-lg btn-lg transition-all duration-500 ">
            <LuShare2 size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
