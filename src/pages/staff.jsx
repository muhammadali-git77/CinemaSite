import { Link } from "react-router-dom";
import NodirbekAka from "../assets/nodirbekaka.png";
import NurbekAka from "../assets/nurbekAka.png";
import IbratjonAka from "../assets/ibratjonAka.png";
import MuhiddinAka from "../assets/muhiddinAka.png";
import ShoxbozAka from "../assets/shoxbozAka.png";
import IbrohimjonAka from "../assets/IbrohimjonAka.png";
import DurbekAka from "../assets/durbekAka.png";

import { FaTelegram } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

export default function Staff(params) {
  return (
    <div className="container mt-[70px] h-[]  BgGradient1 ">
      <div className="w-full h-full justify-center flex items-center">
        <div className="w-full block md:flex justify-around items-center my-auto mt-[100px]  ">
          <div className="md:hidden mx-auto block w-[250px] min-[400px]:w-[300px] lg:w-[350px] min-[400px]:h-[300px] h-[250px] lg:h-[350px] rotate-45  overflow-hidden rounded-[70px] bg-white">
            <img
              className="!w-full scale-[1.4] ml-[-10px] mt-[30px] rotate-[-45deg] object-contain"
              src={NodirbekAka}
              alt=""
            />
          </div>
          <div className="md:mt-0 mt-[50px] w-auto">
            <h2
              data-aos="fade-up"
              className="font-[800] text-[20px] lg:text-[30px] md:text-start text-center ColorGreen"
            >
              Bosh menejr
            </h2>
            <h1
              data-aos="fade-up"
              className="font-[800] text-[30px] lg:text-[40px] xl:text-[50px]  md:text-start text-center "
            >
              Nodirbek Tursunaliyev
            </h1>
            <p
              data-aos="fade-up"
              className=" md:text-start text-center mx-auto md:mx-0 lg:text-[18px] max-w-[400px] lg:max-w-[470px]"
            >
              Nodirbek Tursunaliyev IT center Beshariq filali bosh menejri.
              3-yil davomida shu lavozimda ishlab kelmoqda. Qo'shimcha
              ma'lumotlarni ushbu xodimimizdan olishingiz mumkin
            </p>
            <div
              data-aos="fade-aos"
              className="flex gap-3 justify-center md:justify-start items-center mt-3"
            >
              <Link to={"tel:+998998375214"} className="">
                <BsTelephone size={25} />
              </Link>
              <Link
                to={"https://t.me/Nodirbek_0114"}
                target="_blank"
                className=""
              >
                <FaTelegram size={25} />
              </Link>
              <Link className="">
                <FaInstagram size={25} />
              </Link>
            </div>
          </div>
          <div className="md:block md:ml-8 lg:ml-0 hidden w-[300px] lg:w-[350px] h-[300px]  lg:h-[350px] rotate-45  overflow-hidden rounded-[70px] bg-white">
            <img
              className="!w-full  scale-[1.4] ml-[-10px] mt-[30px] rotate-[-45deg] object-contain"
              src={NodirbekAka}
              alt=""
            />
          </div>
        </div>
      </div>
      <h1
        data-aos="fade-up"
        className="font-[800] text-[40px] sm:text-[50px] md:text-[60px] mt-[160px] text-center shadowed-textWhite1"
      >
        Bizning ustozlar
      </h1>

      <div>
        <div className="flex flex-wrap gap-8 justify-center items-center mt-16 ">
          <div
            data-aos="fade-up"
            className="w-[600px] min-h-[300px] rounded-2xl bg-gray-900 max-[768px]:container justify-center items-center !block sm:!flex  "
          >
            <img
              className="sm:w-[220px] w-[160px] sm:mx-0 mx-auto sm:mt-0 mt-5  rounded-[100%]"
              src={NurbekAka}
              alt=""
            />
            <div className="ml-5">
              <h2 className="font-[700] sm:text-[15px] text-[12px] sm:text-start text-center sm:mx-0 mx-auto ColorGreen       ">
                Full stack dev.
              </h2>
              <h1 className="font-[800] sm:text-[25px] text-[20px] sm:text-start text-center sm:mx-0 mx-auto ">
                Nurbek Maxmudov
              </h1>
              <p className="max-w-[300px] sm:text-[13px] text-[10px] sm:text-start text-center sm:mx-0 mx-auto">
                Nurbek Maxmudov 7 yillik tajribaga ega "full stack" dasturchi.
                Hozirgi kungacha Frontend va Backend(PHP) dan dars berib
                kelmoqda...
              </p>
              <p className="max-w-[300px] text-[13px] sm:mx-0 mx-auto sm:text-start text-center">
                Dasturchi haqida to'liqroq ma'lumot olish uchun
              </p>
              <div className="flex gap-2 justify-end mr-6 mt-6 sm:pb-0 pb-3">
                <Link
                  to={"https://t.me/NurbekMakhmudov"}
                  target="_blank"
                  className=""
                >
                  <FaTelegram size={25} />
                </Link>
                <Link className="">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="w-[600px] min-h-[300px] rounded-2xl bg-gray-900 max-[768px]:container justify-center items-center !block sm:!flex  "
          >
            <img
              className="sm:w-[220px] w-[160px] sm:mx-0 mx-auto sm:mt-0 mt-5  rounded-[100%]"
              src={IbratjonAka}
              alt=""
            />
            <div className="ml-5">
              <h2 className="font-[700] sm:text-[15px] text-[12px] sm:text-start text-center sm:mx-0 mx-auto ColorGreen       ">
                Frontend dev.
              </h2>
              <h1 className="font-[800] sm:text-[25px] text-[20px] sm:text-start text-center sm:mx-0 mx-auto ">
                Ibratjon Mehmonaliyev
              </h1>
              <p className="max-w-[300px] sm:text-[13px] text-[10px] sm:text-start text-center sm:mx-0 mx-auto">
                Ibratjon Mehmonaliyev 6 yillik tajribaga ega "Frontend"
                dasturchi. Hozirgi kungacha Frontend dan dars berib kelmoqda...
              </p>
              <p className="max-w-[300px] text-[13px] sm:mx-0 mx-auto sm:text-start text-center">
                Dasturchi haqida to'liqroq ma'lumot olish uchun
              </p>
              <div className="flex gap-2 justify-end mr-6 mt-6 sm:pb-0 pb-3">
                <Link
                  to={"https://t.me/IBRATJON4469"}
                  target="_blank"
                  className=""
                >
                  <FaTelegram size={25} />
                </Link>
                <Link className="">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="w-[600px] min-h-[300px] rounded-2xl bg-gray-900 max-[768px]:container justify-center items-center !block sm:!flex  "
          >
            <img
              className="sm:w-[220px] w-[160px] sm:mx-0 mx-auto sm:mt-0 mt-5  rounded-[100%]"
              src={MuhiddinAka}
              alt=""
            />
            <div className="ml-5">
              <h2 className="font-[700] sm:text-[15px] text-[12px] sm:text-start text-center sm:mx-0 mx-auto ColorGreen       ">
                Full stack dev.
              </h2>
              <h1 className="font-[800] sm:text-[25px] text-[20px] sm:text-start text-center sm:mx-0 mx-auto ">
                Muhiddin Kabiraliyev
              </h1>
              <p className="max-w-[300px] sm:text-[13px] text-[10px] sm:text-start text-center sm:mx-0 mx-auto">
                Muhiddin Kabiraliyev 5 yillik tajribaga ega "full stack"
                dasturchi. Hozirgi kungacha Frontend va Backend(Python) dan dars
                berib kelmoqda...
              </p>
              <p className="max-w-[300px] text-[13px] sm:mx-0 mx-auto sm:text-start text-center">
                Dasturchi haqida to'liqroq ma'lumot olish uchun
              </p>
              <div className="flex gap-2 justify-end mr-6 mt-6 sm:pb-0 pb-3">
                <Link
                  to={"https://t.me/black_hole_225"}
                  target="_blank"
                  className=""
                >
                  <FaTelegram size={25} />
                </Link>
                <Link className="">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="w-[600px] min-h-[300px] rounded-2xl bg-gray-900 max-[768px]:container justify-center items-center !block sm:!flex  "
          >
            <img
              className="sm:w-[220px] w-[160px] sm:mx-0 mx-auto sm:mt-0 mt-5  rounded-[100%]"
              src={ShoxbozAka}
              alt=""
            />
            <div className="ml-5">
              <h2 className="font-[700] sm:text-[15px] text-[12px] sm:text-start text-center sm:mx-0 mx-auto ColorGreen       ">
                Android dev.
              </h2>
              <h1 className="font-[800] sm:text-[25px] text-[20px] sm:text-start text-center sm:mx-0 mx-auto ">
                Shaxbozbek Turg'unov
              </h1>
              <p className="max-w-[300px] sm:text-[13px] text-[10px] sm:text-start text-center sm:mx-0 mx-auto">
                Shaxbozbek Turg'unov 4 yillik tajribaga ega "Android" dasturchi.
                Hozirgi kungacha Flutter va Kompyuter savodxonligidan dars berib
                kelmoqda...
              </p>
              <p className="max-w-[300px] text-[13px] sm:mx-0 mx-auto sm:text-start text-center">
                Dasturchi haqida to'liqroq ma'lumot olish uchun
              </p>
              <div className="flex gap-2 justify-end mr-6 mt-6 sm:pb-0 pb-3">
                <Link
                  to={"https://t.me/shohbozbek_dev"}
                  target="_blank"
                  className=""
                >
                  <FaTelegram size={25} />
                </Link>
                <Link className="">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="w-[600px] min-h-[300px] rounded-2xl bg-gray-900 max-[768px]:container justify-center items-center !block sm:!flex  "
          >
            <img
              className="sm:w-[220px] w-[160px] sm:mx-0 mx-auto sm:mt-0 mt-5  rounded-[100%]"
              src={IbrohimjonAka}
              alt=""
            />
            <div className="ml-5">
              <h2 className="font-[700] sm:text-[15px] text-[12px] sm:text-start text-center sm:mx-0 mx-auto ColorGreen       ">
                Frontend dev.
              </h2>
              <h1 className="font-[800] sm:text-[25px] text-[20px] sm:text-start text-center sm:mx-0 mx-auto ">
                Ibrohimjon Rafiqjonov
              </h1>
              <p className="max-w-[300px] sm:text-[13px] text-[10px] sm:text-start text-center sm:mx-0 mx-auto">
                Ibrohimjon Rafiqjonov 3 yillik tajribaga ega "Frontend"
                dasturchi. Hozirgi kungacha Frontend dan dars berib kelmoqda...
              </p>
              <p className="max-w-[300px] text-[13px] sm:mx-0 mx-auto sm:text-start text-center">
                Dasturchi haqida to'liqroq ma'lumot olish uchun
              </p>
              <div className="flex gap-2 justify-end mr-6 mt-6 sm:pb-0 pb-3">
                <Link
                  to={"https://t.me/Rafikjanov7"}
                  target="_blank"
                  className=""
                >
                  <FaTelegram size={25} />
                </Link>
                <Link className="">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            className="w-[600px] min-h-[300px] rounded-2xl bg-gray-900 max-[768px]:container justify-center items-center !block sm:!flex  "
          >
            <img
              className="sm:w-[220px] w-[160px] sm:mx-0 mx-auto sm:mt-0 mt-5  rounded-[100%]"
              src={DurbekAka}
              alt=""
            />
            <div className="ml-5">
              <h2 className="font-[700] sm:text-[15px] text-[12px] sm:text-start text-center sm:mx-0 mx-auto ColorGreen       ">
                Frontend dev.
              </h2>
              <h1 className="font-[800] sm:text-[25px] text-[20px] sm:text-start text-center sm:mx-0 mx-auto ">
                Durbek Abdurahmonov
              </h1>
              <p className="max-w-[300px] sm:text-[13px] text-[10px] sm:text-start text-center sm:mx-0 mx-auto">
                Durbek Abdurahmonov 3 yillik tajribaga ega "Frontend" dasturchi.
                Hozirgi kungacha Frontend dan dars berib kelmoqda...
              </p>
              <p className="max-w-[300px] text-[13px] sm:mx-0 mx-auto sm:text-start text-center">
                Dasturchi haqida to'liqroq ma'lumot olish uchun
              </p>
              <div className="flex gap-2 justify-end mr-6 mt-6 sm:pb-0 pb-3">
                <Link
                  to={"https://t.me/durbek_dev"}
                  target="_blank"
                  className=""
                >
                  <FaTelegram size={25} />
                </Link>
                <Link className="">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
          </div>

          {/* <div
            data-aos="fade-up"
            className="w-[600px] h-[300px] max-[768px]:container rounded-2xl bg-gray-900 justify-center items-center flex  "
          >
            <img
              className="sm:w-[220px] w-[160px] rounded-[100%]"
              src={IbratjonAka}
              alt=""
            />
            <div className="ml-5">
              <h2 className="font-[700] sm:text-[15px] text-[12px] ColorGreen       ">
                Frontend dev.
              </h2>
              <h1 className="font-[800] sm:text-[25px] text-[20px]    ">
                Ibratjon Mehmonaliyev
              </h1>
              <p className="max-w-[300px] sm:text-[13px] text-[10px]">
                Ibratjon Mehmonaliyev 6 yillik tajribaga ega "Frontend"
                dasturchi. Hozirgi kungacha Frontend dan dars berib kelmoqda...
              </p>
              <p className="max-w-[300px] text-[13px]">
                Dasturchi haqida to'liqroq ma'lumot olish uchun
              </p>
              <div className="flex gap-2 justify-end mr-6 mt-6">
                <Link
                  to={"https://t.me/IBRATJON4469"}
                  target="_blank"
                  className=""
                >
                  <FaTelegram size={25} />
                </Link>
                <Link className="">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-[600px] h-[300px] max-[768px]:container rounded-2xl bg-gray-900 justify-center items-center flex  "
          >
            <img
              className="sm:w-[220px] w-[160px] rounded-[100%]"
              src={MuhiddinAka}
              alt=""
            />
            <div className="ml-5">
              <h2 className="font-[700] sm:text-[15px] text-[12px] ColorGreen       ">
                Full stack dev.
              </h2>
              <h1 className="font-[800] sm:text-[25px] text-[20px]    ">
                Muhiddin Kabiraliyev
              </h1>
              <p className="max-w-[300px] sm:text-[13px] text-[10px]">
                Muhiddin Kabiraliyev 5 yillik tajribaga ega "full stack"
                dasturchi. Hozirgi kungacha Frontend va Backend(Python) dan dars
                berib kelmoqda...
              </p>
              <p className="max-w-[300px] text-[13px]">
                Dasturchi haqida to'liqroq ma'lumot olish uchun
              </p>
              <div className="flex gap-2 justify-end mr-6 mt-6">
                <Link
                  to={"https://t.me/black_hole_225"}
                  target="_blank"
                  className=""
                >
                  <FaTelegram size={25} />
                </Link>
                <Link className="">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-[600px] h-[300px] max-[768px]:container rounded-2xl bg-gray-900 justify-center items-center flex  "
          >
            <img
              className="sm:w-[220px] w-[160px] rounded-[100%]"
              src={ShoxbozAka}
              alt=""
            />
            <div className="ml-5">
              <h2 className="font-[700] sm:text-[15px] text-[12px] ColorGreen       ">
                Android dev.
              </h2>
              <h1 className="font-[800] sm:text-[25px] text-[20px]    ">
                Shaxbozbek Turg'unov
              </h1>
              <p className="max-w-[300px] sm:text-[13px] text-[10px]">
                Nurbek Maxmudov 4 yillik tajribaga ega "Android" dasturchi.
                Hozirgi kungacha Flutter va Kompyuter savodxonligidan dars berib
                kelmoqda...
              </p>
              <p className="max-w-[300px] text-[13px]">
                Dasturchi haqida to'liqroq ma'lumot olish uchun
              </p>
              <div className="flex gap-2 justify-end mr-6 mt-6">
                <Link
                  to={"https://t.me/shohbozbek_dev"}
                  target="_blank"
                  className=""
                >
                  <FaTelegram size={25} />
                </Link>
                <Link className="">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-[600px] h-[300px] max-[768px]:container rounded-2xl bg-gray-900 justify-center items-center flex  "
          >
            <img
              className="sm:w-[220px] w-[160px]  rounded-[100%]"
              src={IbrohimjonAka}
              alt=""
            />
            <div className="ml-5">
              <h2 className="font-[700] sm:text-[15px] text-[12px] ColorGreen       ">
                Frontend dev.
              </h2>
              <h1 className="font-[800] sm:text-[25px] text-[20px]   ">
                Ibrohimjon Rafiqjonov
              </h1>
              <p className="max-w-[300px] sm:text-[13px] text-[10px]">
                Ibrohimjon Rafiqjonov 3 yillik tajribaga ega "Frontend"
                dasturchi. Hozirgi kungacha Frontend dan dars berib kelmoqda...
              </p>
              <p className="max-w-[300px] text-[13px]">
                Dasturchi haqida to'liqroq ma'lumot olish uchun
              </p>
              <div className="flex gap-2 justify-end mr-6 mt-6">
                <Link
                  to={"https://t.me/Rafikjanov7"}
                  target="_blank"
                  className=""
                >
                  <FaTelegram size={25} />
                </Link>
                <Link className="">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-[600px] h-[300px] max-[768px]:container rounded-2xl bg-gray-900 justify-center items-center flex  "
          >
            <img
              className="sm:w-[220px] w-[160px] rounded-[100%]"
              src={DurbekAka}
              alt=""
            />
            <div className="ml-5">
              <h2 className="font-[700] sm:text-[15px] text-[12px] ColorGreen       ">
                Frontend dev.
              </h2>
              <h1 className="font-[800] sm:text-[25px] text-[20px]    ">
                Durbek Abdurahmonov
              </h1>
              <p className="max-w-[300px] sm:text-[13px] text-[10px]">
                Durbek Abdurahmonov 3 yillik tajribaga ega "Frontend" dasturchi.
                Hozirgi kungacha Frontend dan dars berib kelmoqda...
              </p>
              <p className="max-w-[300px] text-[13px]">
                Dasturchi haqida to'liqroq ma'lumot olish uchun
              </p>
              <div className="flex gap-2 justify-end mr-6 mt-6">
                <Link
                  to={"https://t.me/durbek_dev"}
                  target="_blank"
                  className=""
                >
                  <FaTelegram size={25} />
                </Link>
                <Link className="">
                  <FaInstagram size={25} />
                </Link>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
