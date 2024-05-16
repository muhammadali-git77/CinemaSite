import { BsTelephone } from "react-icons/bs";
import { FaInstagram, FaTelegram } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function SectionTwo2(params) {
    return (
      <div>
        <h1
          data-aos="fade-up"
          className="font-[700] text-[25px] mt-[60px] text-center"
        >
          Qo'shimcha ma'lumotlarni olib borishingiz mumkin
        </h1>
        <div className="mt-16 flex flex-wrap gap-5 justify-center items-center">
          <Link
            target="_blank"
            data-aos="fade-up"
            to="https://t.me/ITCenterBeshariq"
            className="hover:bg-gray-950  !duration-[1.2s] w-[350px] rounded-xl h-[130px] gap-3 flex justify-center items-center bg-gray-900"
          >
            <FaTelegram size={70} className="text-gray-400" />
            <div>
              <h1 className="font-[600] text-[18px]  ">
                Telegram kanalga qo'shilish
              </h1>
              <p className="w-[200px] text-[12px]  ">
                Barcha qo'shimcha ma'lumotlarni shu yerdan olib borasiz!
              </p>
            </div>
          </Link>
          <Link
            target="_blank"
            data-aos="fade-up"
            to="https://www.instagram.com/itcenterbeshariq/"
            className="hover:bg-gray-950 transition-all duration-300 w-[350px] rounded-xl h-[130px] gap-3 flex justify-center items-center bg-gray-900"
          >
            <FaInstagram size={70} className="text-gray-400" />
            <div>
              <h1 className="font-[600] text-[18px]  ">Instagram sahifamiz</h1>
              <p className="w-[200px] text-[12px]  ">
                Barcha qo'shimcha ma'lumotlarni shu yerdan olib borasiz!
              </p>
            </div>
          </Link>
          <Link
            target="_blank"
            data-aos="fade-up"
            to="tel:+998998375214"
            className="hover:bg-gray-950 transition-all duration-300 w-[350px] rounded-xl h-[130px] gap-3 flex justify-center items-center bg-gray-900"
          >
            <BsTelephone size={60} className="text-gray-400" />
            <div>
              <h1 className="font-[600] text-[18px]  ">Bizning kontakt</h1>
              <p className="w-[200px] text-[12px]  ">
                Barcha qo'shimcha ma'lumotlarni olish uchun qo'ng'iroq bepul!
              </p>
            </div>
          </Link>
        </div>
      </div>
    );
}