import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useCallback, useEffect, useRef } from "react";

const header_items = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Televideniya",
    url: "/televideniya",
  },
  {
    title: "VideoClub",
    url: "/videoclub",
  },
  {
    title: "Televideniya",
    url: "",
  },
];
function NavbarMobile(params) {
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
              className="btn btn-outline rounded-lg transition-all duration-500"
            >
              <IoClose size={28} />
            </label>
          </div>
          <div className="mt-5 gap-4 flex-col flex">
            {header_items.map((items) => (
              <Link to={items.url} key={items.url}>
                {items.title}
              </Link>
            ))}
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
        : headerRef.current?.classList.remove("active")
    }

    // Add event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header id="headerID" ref={headerRef} className="fixed z-20 w-full">
      <div className="container justify-between flex py-1">
        <nav className="flex items-center gap-6 lg:gap-11">
          <NavbarMobile />
          <h1 className="text-green-600 font-[700] text-[30px] ">FreeTv</h1>
          <ul className="gap-4 hidden lg:flex">
            {header_items.map((item) => (
              <Link to={item.url} key={item.url}>
                {item.title}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-2 ">
          <div className="dropdown dropdown-end">
            <div
              className="btn m-1 rounded-md text-lg glass w-12 md:w-16 "
              role="button"
              tabIndex={0}
            >
              UZ
            </div>
            <ul className="dropdown-content glass z-50 menu p-2 shadow  rounded-lg w-14 flex-col items-center">
              <li className="text-center ">
                <Link>UZ</Link>
              </li>
              <li className="text-center">
                <Link>ENG</Link>
              </li>
            </ul>
          </div>
          <Link
            to={"/search"}
            className="btn glass m-1 rounded-md text-lg w-12 md:w-16"
          >
            <IoSearch size={20} />
          </Link>
        </div>
      </div>
    </header>
  );
}
