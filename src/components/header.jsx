import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import ITC_logo from "../assets/ITC_logo1.png";
import ITC_logoHover from "../assets/itclogo112.png";
import { FaMapMarkerAlt } from "react-icons/fa";
import clsx from "clsx";

const header_items = [
  {
    title: "Bosh sahifa",
    url: "/",
  },
  {
    title: "Biz haqimizda",
    url: "/about",
  },
  {
    title: "Xodimlar",
    url: "/staff",
  },
  // {
  //   title: "Joylashuv",
  //   url: "https://www.google.com/maps/place/Beshariq+IT+CENTER+(Powered+by+IT+Park)/@40.4365047,70.6079505,75m/data=!3m1!1e3!4m15!1m8!3m7!1s0x38ba837e048c36ff:0x81108604fd710bc!2sBeshariq+tumani,+Farg'ona+Viloyati,+O%60zbekiston!3b1!8m2!3d40.4529596!4d70.5740886!16s%2Fm%2F012mzb4_!3m5!1s0x38ba9b043b856e75:0x95c5af26c798a0c4!8m2!3d40.4363952!4d70.6081471!16s%2Fg%2F11rtpks__z?entry=ttu",
  // },
];
function NavbarMobile(params) {
   const [active, setActive] = useState(header_items[0]);
  return (
    <div className="drawer flex lg:hidden z-30">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-glass h-11 w-12 sm:w-14 glass md:w-16 rounded-md flex items-center justify-center drawer-button"
        >
          <GiHamburgerMenu size={47} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className="flex justify-end py-2 ">
            <label
              htmlFor="my-drawer"
              className="btn rounded-lg transition-all duration-500"
            >
              <IoClose size={28} />
            </label>
          </div>
          <div className="mt-5 gap-4 flex-col flex">
            {header_items.map((items) => (
              <NavLink
                to={items.url}
                onClick={() => setActive(items)}
                className={clsx("transition-all duration-300 !bg-transparent", {
                  "text-white": items !== active,
                  "text-green-500 hover:text-green-700": items === active,
                })}
                key={items.url}
              >
                {items.title}
              </NavLink>
            ))}
            <Link
              target="_blank"
              to={
                "https://www.google.com/maps/place/Beshariq+IT+CENTER+(Powered+by+IT+Park)/@40.4365047,70.6079505,75m/data=!3m1!1e3!4m15!1m8!3m7!1s0x38ba837e048c36ff:0x81108604fd710bc!2sBeshariq+tumani,+Farg'ona+Viloyati,+O%60zbekiston!3b1!8m2!3d40.4529596!4d70.5740886!16s%2Fm%2F012mzb4_!3m5!1s0x38ba9b043b856e75:0x95c5af26c798a0c4!8m2!3d40.4363952!4d70.6081471!16s%2Fg%2F11rtpks__z?entry=ttu"
              }
            >
              Joylashuv
            </Link>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default function Header() {
  const headerRef = useRef();

  useEffect(() => {
    // Define the scroll event handler function
    function handleScroll(event) {
      const { scrollY } = window;
      scrollY > 10
        ? headerRef.current?.classList.add("active")
        : headerRef.current?.classList.remove("active");
    }

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [active, setActive] = useState(header_items[0]);

  return (
    <header id="headerID" ref={headerRef} className="fixed z-20 w-full">
      <div className="container justify-between flex py-1">
        <nav className="flex items-center gap-6 lg:gap-5  transition-all duration-[1.2s]">
          <div className="flex items-center ">
            <NavbarMobile />
            <Link
              to={"/"}
              className="items-center lg:ml-5 ml-[-45px] flex Itc_logo_hover_div "
            >
              <img
                src={ITC_logo}
                alt=""
                className="Itc_logo_active w-[60px] z-20"
              />
              <img
                src={ITC_logoHover}
                alt=""
                className="Itc_logo_hover m-0 w-auto h-[17px] sm:h-[25px] "
              />
            </Link>
          </div>
          <ul className="gap-4 hidden  lg:flex">
            {header_items.map((items) => (
              <NavLink
                to={items.url}
                onClick={() => setActive(items)}
                className={clsx("transition-all duration-300 !bg-transparent", {
                  "text-white": items !== active,
                  "text-green-500 hover:text-green-700": items === active,
                })}
                key={items.url}
              >
                {items.title}
              </NavLink>
            ))}
            <Link
              className="hover:text-green-500 transition-all duration-300 flex items-center gap-1"
              target="_blank"
              to={
                "https://www.google.com/maps/place/Beshariq+IT+CENTER+(Powered+by+IT+Park)/@40.4365047,70.6079505,75m/data=!3m1!1e3!4m15!1m8!3m7!1s0x38ba837e048c36ff:0x81108604fd710bc!2sBeshariq+tumani,+Farg'ona+Viloyati,+O%60zbekiston!3b1!8m2!3d40.4529596!4d70.5740886!16s%2Fm%2F012mzb4_!3m5!1s0x38ba9b043b856e75:0x95c5af26c798a0c4!8m2!3d40.4363952!4d70.6081471!16s%2Fg%2F11rtpks__z?entry=ttu"
              }
            >
              Joylashuv
              <FaMapMarkerAlt />
            </Link>
          </ul>
        </nav>
        <div className="items-center">
          <div className="dropdown dropdown-end">
            <a
              href="tel:+998998375214"
              className="btn glass m-1 rounded-md text-sm sm:text-md md:text-xl w-[60px] md:w-[130px]"
            >
              <h1>Contact us</h1>
            </a>
            <Link
              to={"/about"}
              className="btn BgGreen rounded-md w-[60px] md:w-[130px]"
            >
              <h1 className="btn glass rounded-md text-sm sm:text-md md:text-xl w-[60px] md:w-[130px]">
                About us
              </h1>
            </Link>
          </div>
          {/* <Link
            to={"/search"}
            className="btn glass m-1 rounded-md text-lg w-12 md:w-16"
          >
            <IoSearch size={20} />
          </Link> */}
        </div>
      </div>
    </header>
  );
}
