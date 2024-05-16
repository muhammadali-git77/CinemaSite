import { div } from "three/examples/jsm/nodes/Nodes.js";
import DevImage1 from "../../assets/webdev1.png";
import DevImage2 from "../../assets/webdev2.png";

export default function SectionFife(params) {
  return (
    <div className="w-full mt-[150px] container justify-center items-center flex">
      <div className="justify-center mx-auto items-center">
        <div className="lg:flex block">
          <div className="flex">
            <div>
              <img
                data-aos="fade-down"
                className="sm:w-[270px] w-[200px]  sm:h-[400px] h-[300px] rounded-xl shadow-lg shadow-gray-700 overflow-x-hidden"
                src={DevImage1}
                alt=""
              />
              <h1
                data-aos="fade-up"
                className="flex font-[700] text-[16px] sm:text-[20px] items-center gap-2 ColorGreen shadowed-textWhite"
              >
                <span className="text-[70px] font-[800] text-white">5</span>
                yillik tajribaga ega
                <br />
                ustozlar
              </h1>
            </div>
            <img
              data-aos="fade-up"
              className="sm:ml-[40px] ml-[20px] mt-[75px] sm:w-[270px] w-[200px]  sm:h-[400px] h-[300px]  rounded-xl shadow-lg shadow-gray-700 overflow-x-hidden"
              src={DevImage2}
              alt=""
            />
          </div>
          <div className="min-[1200px]:ml-[200px] max-w-[600px] lg:ml-[100px] ml-0 mt-[60px] lg:justify-start mx-auto justify-center items-center">
            <h1
              data-aos="fade-left"
              className="font-[800] text-[50px] text-center lg:text-start"
            >
              Biz haqimizda
            </h1>
            <p
              data-aos="fade-left"
              className="min-[1080px]:max-w-[600px] max-w-[400px] justify-center items-center mx-auto mt-11 text-center lg:text-start"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              iste optio rem, veniam maxime voluptatibus asperiores dolore
              exercitationem mollitia earum magnam quae molestias rerum possimus
              voluptate reprehenderit nihil blanditiis modi aliquid fugit sequi
              dignissimos, omnis ipsa ab? Id, dolores reprehenderit.
            </p>
            <p
              data-aos="fade-left"
              className="min-[1080px]:max-w-[600px] max-w-[400px] mt-5 justify-center items-center mx-auto text-center lg:text-start"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
              iste optio rem, veniam maxime voluptatibus asperiores dolore
              exercitationem mollitia earum magnam quae molestias rerum possimus
              voluptate reprehenderit nihil blanditiis.
            </p>
            <div className="flex justify-center lg:justify-start mx-auto items-center gap-4 mt-7">
              <h1
                data-aos="fade-up"
                className="btn rounded-md border-white border-2 text-sm sm:text-md md:text-xl w-[100px] md:w-[130px]"
              >
                View chat
              </h1>
              <h1
                data-aos="fade-left"
                className="btn BgGreen shadowed-text rounded-md text-sm sm:text-md md:text-xl w-[100px] md:w-[130px]"
              >
                Contact
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
