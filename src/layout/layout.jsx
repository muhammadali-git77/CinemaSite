import { Outlet } from "react-router-dom";
import Header from "../components/header";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import Footer from "../components/footer";

export default function Layout(params) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}
