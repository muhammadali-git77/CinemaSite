import ImageITC from "../../assets/SectionTwoImageBG.png";
import { CiMobile3 } from "react-icons/ci";
import { FaComputer } from "react-icons/fa6";
import { IoGlobeOutline } from "react-icons/io5";

export default function SectionTwo(params) {
  return (
    <div className="w-full mt-[-250px] md:mt-0 xl:mt-[80px]">
      <div className=" z-10 my-auto w-full h-full justify-around items-center flex ">
        <div className="xl:flex hidden min-[1650px]:ml-[-260px] min-[1310px]:ml-[-180px] min-[1024px]:ml-[-80px] w-[500px] h-[500px] rounded-[100px] border-[18px] border-gray-800 rotate-45 itccccc justify-center items-center ">
          <div className=" rotate-[-45deg] ml-[50px]  ">
            <h1
              data-aos="fade-right"
              className="max-[1450px]:text-[45px] text-[50px]  font-bold shadowed-text"
            >
              IT CENTER <br />
              BESHARIQ
            </h1>
          </div>
        </div>
        <div className="ml-4 mr-4 pt-[300px]  md:pt-0 md:pl-[80px]">
          <div
            data-aos="fade-left"
            className="flex items-center gap-3 mt-[40px]"
          >
            <div className="IconsCourse border-[8px] border-gray-800 text-gray-900 rounded-3xl p-2 h-[80px] w-[80px] justify-center items-center flex rotate-[45deg]">
              <FaComputer className="rotate-[-45deg]" size={50} />
            </div>
            <div>
              <h1 className="font-bold;">Kompyuter savodxonligi</h1>
              <p className="max-w-[640px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nam
                perspiciatis mollitia doloremque? Accusamus iste a reiciendis
                consectetur, sequi ullam.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex items-center gap-3 mt-[40px] "
          >
            <div className="md:ml-[50px] ml-0 IconsCourse border-[8px] border-gray-800 text-gray-900 rounded-3xl p-2 h-[80px] w-[80px] justify-center items-center flex rotate-[45deg]">
              <IoGlobeOutline className="rotate-[-45deg]" size={50} />
            </div>
            <div>
              <h1 className="font-bold ">Web dasturlash</h1>
              <p className="max-w-[640px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nam
                perspiciatis mollitia doloremque? Accusamus iste a reiciendis
                consectetur, sequi ullam.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex items-center gap-3 mt-[40px]"
          >
            <div className="IconsCourse border-[8px] border-gray-800 text-gray-900 rounded-3xl p-2 h-[80px] w-[80px] justify-center items-center flex rotate-[45deg]">
              <CiMobile3 className="rotate-[-45deg]" size={50} />
            </div>
            <div>
              <h1 className="font-bold;">Android ilovalar</h1>
              <p className="max-w-[640px]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A nam
                perspiciatis mollitia doloremque? Accusamus iste a reiciendis
                consectetur, sequi ullam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
