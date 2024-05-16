import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import Home from "./pages/home";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionFife from "./components/common/sectionFife";
import AboutUs from "./pages/about";
import Staff from "./pages/staff";


function App() {
  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 220,
      delay: 0,
      duration: 800,
      easing: "ease",
      once: true, // Animatsiyalarni faqat bir marta ishlatish
      mirror: true, // Animatsiyalarni elementlar scroll o'tganda ham ishlatish
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/staff" element={<Staff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
